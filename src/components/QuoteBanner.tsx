import Image from "next/image";
import styles from "./QuoteBanner.module.css";
import { quoteBanner } from "@/content/quote";

type QuoteText = { motto: string; quote: string; name: string; role: string };

export default function QuoteBanner({ t }: { t?: QuoteText }) {
  const motto = t?.motto ?? quoteBanner.motto;
  const quote = t?.quote ?? quoteBanner.quote;
  const author = { ...quoteBanner.author, ...(t ? { name: t.name, role: t.role } : {}) };

  return (
    <section id="sitat" className={styles.section}>
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
