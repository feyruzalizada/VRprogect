"use client";

import { useEffect, useState } from "react";
import styles from "./CalculatorWizard.module.css";
import { calculatorSteps, calculatorModel } from "@/content/calculator";

type Answers = Record<string, string[]>;

function buildResult(answers: Answers) {
  const people = answers.people?.[0] ?? "3-4";
  const height = answers.height?.[0] ?? "mid";
  const lifestyle = answers.lifestyle ?? [];
  const profile = answers.profile ?? [];

  let rooms = calculatorModel.baseRooms[people] ?? 3;
  if (lifestyle.includes("remote")) rooms += calculatorModel.extraRoom.remote;
  if (lifestyle.includes("play")) rooms += calculatorModel.extraRoom.play;
  if (lifestyle.includes("minimal")) rooms -= 1;
  rooms = Math.max(1, rooms);

  const { min, max } = calculatorModel.areaPerRoom;

  return {
    rooms,
    area: `${rooms * min} – ${rooms * max} m²`,
    rows: [
      { label: "Mətbəx iş səthinin hündürlüyü", value: calculatorModel.counterHeight[height as keyof typeof calculatorModel.counterHeight] },
      { label: "Rahat çatma hündürlüyü", value: calculatorModel.shelfReach[height as keyof typeof calculatorModel.shelfReach] },
      {
        label: "Keçid genişliyi",
        value: profile.includes("access")
          ? calculatorModel.corridor.access
          : calculatorModel.corridor.base,
      },
    ],
  };
}

export default function CalculatorWizard({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const total = calculatorSteps.length;
  const done = step >= total;
  const current = calculatorSteps[Math.min(step, total - 1)];
  const picked = answers[current.id] ?? [];

  const choose = (optionId: string) => {
    setAnswers((prev) => {
      const now = prev[current.id] ?? [];
      if (!current.multiple) return { ...prev, [current.id]: [optionId] };
      return {
        ...prev,
        [current.id]: now.includes(optionId)
          ? now.filter((id) => id !== optionId)
          : [...now, optionId],
      };
    });
    if (!current.multiple) setTimeout(() => setStep((s) => s + 1), 220);
  };

  const result = done ? buildResult(answers) : null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Bağla">
        <svg viewBox="0 0 24 24" aria-hidden>
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      </button>

      <div className={styles.bar} aria-hidden>
        <span
          className={styles.barFill}
          style={{ width: `${(Math.min(step, total) / total) * 100}%` }}
        />
      </div>

      <div className={styles.inner}>
        <p className={styles.kicker}>{title}</p>

        {!done && current && (
          <div key={current.id} className={styles.step}>
            <p className={styles.count}>
              {step + 1} / {total}
            </p>
            <h3 className={styles.question}>{current.question}</h3>
            {current.note && <p className={styles.note}>{current.note}</p>}

            <div className={styles.options}>
              {current.options.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`${styles.option} ${picked.includes(option.id) ? styles.optionOn : ""}`}
                  onClick={() => choose(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>

            <div className={styles.nav}>
              {step > 0 && (
                <button
                  type="button"
                  className={styles.back}
                  onClick={() => setStep((s) => s - 1)}
                >
                  ← Geri
                </button>
              )}
              {current.multiple && (
                <button
                  type="button"
                  className={styles.next}
                  disabled={picked.length === 0}
                  onClick={() => setStep((s) => s + 1)}
                >
                  Növbəti →
                </button>
              )}
            </div>
          </div>
        )}

        {done && result && (
          <div className={styles.step}>
            <p className={styles.count}>İlkin nəticə</p>
            <h3 className={styles.question}>Sizə uyğun ilkin ölçülər</h3>

            <div className={styles.headline}>
              <div>
                <span className={styles.big}>{result.rooms}</span>
                <span className={styles.bigLabel}>otaq</span>
              </div>
              <div>
                <span className={styles.big}>{result.area}</span>
                <span className={styles.bigLabel}>ümumi sahə</span>
              </div>
            </div>

            <ul className={styles.rows}>
              {result.rows.map((row) => (
                <li key={row.label}>
                  <span>{row.label}</span>
                  <strong>{row.value}</strong>
                </li>
              ))}
            </ul>

            <p className={styles.note}>
              Bu, VR Adaptiv Erqonomik Ölçü Sistemi üzrə ilkin göstəricidir.
              Dəqiq nəticə layihə və ölçmə mərhələsində müəyyənləşir.
            </p>

            <div className={styles.nav}>
              <button
                type="button"
                className={styles.back}
                onClick={() => {
                  setAnswers({});
                  setStep(0);
                }}
              >
                ← Yenidən hesabla
              </button>
              <button type="button" className={styles.next} onClick={onClose}>
                Bağla
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
