"use client";

import Image from "next/image";
import { useState } from "react";
import CalculatorWizard from "./CalculatorWizard";
import styles from "./Services.module.css";
import { services } from "@/content/services";

export default function Services({ id = "kalkulyator" }: { id?: string }) {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section id={id} className={styles.section}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden />
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden />

      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{services.eyebrow}</span>
          <h2 className={styles.title}>{services.heading}</h2>
          <span className={styles.dots} aria-hidden />

          <p className={styles.tagline}>{services.taglineTop}</p>
          <p className={styles.intro}>{services.intro}</p>
        </div>

        <div className={styles.grid}>
          {services.items.map((item) => (
            <button
              key={item.title}
              type="button"
              className={styles.card}
              onClick={() => setOpenCard(item.title)}
            >
              <Image
                src={item.icon}
                alt=""
                width={item.width}
                height={item.height}
                loading="lazy"
                className={styles.icon}
              />

              <h5 className={styles.cardTitle}>{item.title}</h5>

              <p className={styles.cardText}>{item.description}</p>
            </button>
          ))}
        </div>
      </div>

      {openCard && (
        <CalculatorWizard title={openCard} onClose={() => setOpenCard(null)} />
      )}
    </section>
  );
}
