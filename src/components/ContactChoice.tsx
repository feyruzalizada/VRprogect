"use client";

import { useEffect, useId, useRef, useState } from "react";

import styles from "./Services.module.css";
import { contact } from "@/content/contact";

export default function ContactChoice({ label, service }: { label: string; service: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
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

  const text = contact.message(service);
  const whatsapp = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
  const gmail = contact.email
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent(service)}&body=${encodeURIComponent(text)}`
    : null;

  return (
    <div ref={rootRef} className={styles.contact}>
      <button
        type="button"
        className={styles.cta}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
      </button>

      <div id={menuId} className={styles.choice} hidden={!open} role="group" aria-label={contact.chooseLabel}>
        <a className={styles.choiceLink} href={whatsapp} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden className={styles.choiceIcon}>
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.2Z" />
          </svg>
          WhatsApp
        </a>

        {gmail ? (
          <a className={styles.choiceLink} href={gmail} target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden className={styles.choiceIcon}>
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.5l-8 5-8-5V6h16ZM4 18V8.9l8 5 8-5V18H4Z" />
            </svg>
            Gmail
          </a>
        ) : null}
      </div>
    </div>
  );
}
