import NewsCard from "./NewsCard";
import NewsTrack from "./NewsTrack";
import styles from "./News.module.css";
import { news as azNews } from "@/content/news";
import { dateLocale, type Lang } from "@/i18n/config";
import type { NewsItem } from "@/lib/news";

type NewsText = { eyebrow: string; heading: string; read: string; back: string; source: string; all: string };

export default function News({ items, lang = "az", t = azNews }: { items: NewsItem[]; lang?: Lang; t?: NewsText }) {
  if (items.length === 0) return null;
  const dateFormat = new Intl.DateTimeFormat(dateLocale[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Baku",
  });

  return (
    <section id="xeberler" className={styles.section}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden />
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden />

      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>{t.eyebrow}</span>
          <h2 className={styles.title}>{t.heading}</h2>
          <span className={styles.rule} aria-hidden />
        </div>

        <NewsTrack label={t.heading}>
          {items.map((item) => (
            <li key={item.id} id={`xeber-${item.id}`} className={styles.item}>
              <NewsCard item={item} date={dateFormat.format(new Date(item.date))} t={t} />
            </li>
          ))}
        </NewsTrack>

        <a className={styles.all} href={azNews.page} target="_blank" rel="noopener noreferrer">
          {t.all}
        </a>
      </div>
    </section>
  );
}
