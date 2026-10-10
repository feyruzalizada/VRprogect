"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./RequestForm.module.css";
import { request } from "@/content/request";
import { services } from "@/content/services";

type Status = "idle" | "sending" | "sent" | "failed";
type Field = "name" | "phone" | "services";

// fired by the service cards' buttons with the card's slug
export const REQUEST_EVENT = "vr:request";

export default function RequestForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const [picked, setPicked] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  useEffect(() => {
    function onRequest(event: Event) {
      const slug = (event as CustomEvent<string>).detail;
      setPicked((current) => (current.includes(slug) ? current : [...current, slug]));
      setErrors((current) => ({ ...current, services: undefined }));
      setStatus("idle");

      const form = formRef.current;
      if (!form) return;
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      form.querySelector<HTMLInputElement>("input[name=name]")?.focus({ preventScroll: true });
    }

    window.addEventListener(REQUEST_EVENT, onRequest);
    return () => window.removeEventListener(REQUEST_EVENT, onRequest);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onDown(event: PointerEvent) {
      if (!pickerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function toggle(slug: string) {
    setPicked((current) => (current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug]));
    setErrors((current) => ({ ...current, services: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const digits = phone.replace(/\D/g, "").length;

    const found: Partial<Record<Field, string>> = {};
    if (!name) found.name = request.invalid.name;
    if (digits < 9 || digits > 15) found.phone = request.invalid.phone;
    if (picked.length === 0) found.services = request.invalid.services;
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    const res = await fetch("/api/muraciet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        area: String(data.get("area") ?? "").trim(),
        place: String(data.get("place") ?? "").trim(),
        services: picked,
        website: data.get("website"),
      }),
    }).catch(() => null);

    if (res?.ok) {
      setStatus("sent");
      setPicked([]);
      formRef.current?.reset();
    } else {
      setStatus("failed");
    }
  }

  const summary = services.items
    .filter((item) => picked.includes(item.slug))
    .map((item) => item.title)
    .join(", ");

  return (
    <form ref={formRef} id="muraciet" className={styles.form} onSubmit={onSubmit} noValidate>
      <h2 className={styles.title}>{request.heading}</h2>

      <label className={styles.field}>
        <span className={styles.label}>{request.name}</span>
        <input
          className={styles.input}
          name="name"
          autoComplete="name"
          maxLength={100}
          aria-invalid={Boolean(errors.name)}
          onChange={() => errors.name && setErrors((c) => ({ ...c, name: undefined }))}
        />
        {errors.name ? <span className={styles.error}>{errors.name}</span> : null}
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{request.phone}</span>
        <input
          className={styles.input}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          defaultValue="+994 "
          maxLength={30}
          aria-invalid={Boolean(errors.phone)}
          onChange={() => errors.phone && setErrors((c) => ({ ...c, phone: undefined }))}
        />
        {errors.phone ? <span className={styles.error}>{errors.phone}</span> : null}
      </label>

      <div className={styles.pair}>
        <label className={styles.field}>
          <span className={styles.label}>{request.area}</span>
          <input
            className={styles.input}
            name="area"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>{request.place}</span>
          <input
            className={styles.input}
            name="place"
            autoComplete="address-level2"
            placeholder={request.placePlaceholder}
            maxLength={150}
          />
        </label>
      </div>

      <div className={styles.field} ref={pickerRef}>
        <span className={styles.label} id="muraciet-xidmet">
          {request.services}
        </span>
        <button
          type="button"
          className={`${styles.input} ${styles.picker}`}
          aria-haspopup="true"
          aria-expanded={open}
          aria-labelledby="muraciet-xidmet"
          aria-describedby={errors.services ? "muraciet-xidmet-error" : undefined}
          data-invalid={errors.services ? "" : undefined}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={summary ? styles.pickerValue : styles.pickerEmpty}>
            {summary || request.servicesPlaceholder}
          </span>
          {picked.length > 1 ? <span className={styles.count}>{picked.length}</span> : null}
          <span className={styles.chevron} aria-hidden />
        </button>

        {open ? (
          <ul className={styles.options} role="group" aria-labelledby="muraciet-xidmet">
            {services.items.map((item) => (
              <li key={item.slug}>
                <label className={styles.option}>
                  <input
                    type="checkbox"
                    className={styles.check}
                    checked={picked.includes(item.slug)}
                    onChange={() => toggle(item.slug)}
                  />
                  <span>{item.title}</span>
                </label>
              </li>
            ))}
          </ul>
        ) : null}

        {errors.services ? <span className={styles.error} id="muraciet-xidmet-error">{errors.services}</span> : null}
      </div>

      <input className={styles.trap} name="website" tabIndex={-1} autoComplete="off" aria-hidden />

      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? request.sending : request.submit}
      </button>

      <p className={styles.status} role="status" aria-live="polite">
        {status === "sent" ? request.sent : status === "failed" ? request.failed : ""}
      </p>
    </form>
  );
}
