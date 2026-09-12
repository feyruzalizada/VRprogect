import Image from "next/image";
import styles from "./QuoteBanner.module.css";
import { quoteBanner } from "@/content/quote";

export default function QuoteBanner() {
  const { motto, quote, author, background } = quoteBanner;

  return (
    <section className={styles.section}>
      <Image
        src={background}
        alt=""
        fill
        sizes="100vw"
        loading="lazy"
        className={styles.background}
      />

      <div className={styles.container}>
        <figure className={styles.figure}>
          <blockquote className={styles.quote}>
            <p className={styles.motto}>{motto}</p>
            <p className={styles.quoteName}>{quote}</p>
          </blockquote>

          <figcaption className={styles.caption}>
            <Image
              src={author.avatar}
              alt={author.name}
              width={140}
              height={140}
              loading="lazy"
              className={styles.avatar}
            />
            <div>
              <p className={styles.name}>{author.name}</p>
              <p className={styles.role}>{author.role}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
