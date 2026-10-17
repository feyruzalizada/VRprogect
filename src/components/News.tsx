import NewsCard from "./NewsCard";
import styles from "./News.module.css";
import { news } from "@/content/news";
import type { NewsItem } from "@/lib/news";

const dateFormat = new Intl.DateTimeFormat("az-AZ", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Baku",
});

export default function News({ items }: { items: NewsItem[] }) {
  if (items.length === 0) return null;

  return (
    <section id="xeberler" className={styles.section}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden />
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden />

      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{news.eyebrow}</span>
          <h2 className={styles.title}>{news.heading}</h2>
          <span className={styles.rule} aria-hidden />
        </div>

        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.id}>
              <NewsCard item={item} date={dateFormat.format(new Date(item.date))} />
            </li>
          ))}
        </ul>

        <a className={styles.all} href={news.page} target="_blank" rel="noopener noreferrer">
          {news.all}
        </a>
      </div>
    </section>
  );
}
