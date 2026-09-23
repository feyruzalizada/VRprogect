import Link from "next/link";

import styles from "./Footer.module.css";
import { footer } from "@/content/footer";
import { heroSocial } from "@/content/hero";

function SocialGlyph({ id }: { id: string }) {
  const common = { viewBox: "0 0 24 24", className: styles.socialIcon, "aria-hidden": true };

  if (id === "youtube")
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 0 0 .5 6.2C0 8.09 0 12 0 12s0 3.91.5 5.8a3 3 0 0 0 2.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 0 0 2.12-2.13c.5-1.89.5-5.8.5-5.8s0-3.91-.5-5.8zM9.55 15.57V8.43L15.82 12z"
        />
      </svg>
    );

  if (id === "tiktok")
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M12.53.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        />
      </svg>
    );

  if (id === "facebook")
    return (
      <svg {...common}>
        <path
          fill="currentColor"
          d="M14.3 22v-8.2h2.8l.42-3.2H14.3V8.55c0-.93.26-1.56 1.6-1.56h1.7V4.13A23 23 0 0 0 15.11 4c-2.46 0-4.15 1.5-4.15 4.25v2.35H8.15v3.2h2.81V22z"
        />
      </svg>
    );

  return (
    <svg {...common}>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span className={`${styles.line} ${styles.lineLeft}`} aria-hidden />
      <span className={`${styles.line} ${styles.lineRight}`} aria-hidden />

      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="VR Global Group">
              <span>VR</span>
              <span>Global</span>
              <span>Group</span>
            </Link>

            <p className={styles.about}>{footer.about}</p>

            <div className={styles.social}>
              <span className={styles.socialHeading}>{footer.socialHeading}</span>
              <ul className={styles.socialList}>
                {heroSocial.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={item.label}
                    >
                      <SocialGlyph id={item.id} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <nav className={styles.col} aria-label={footer.navHeading}>
            <h2 className={styles.colTitle}>{footer.navHeading}</h2>
            <ul className={styles.list}>
              {footer.nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.col} aria-label={footer.servicesHeading}>
            <h2 className={styles.colTitle}>{footer.servicesHeading}</h2>
            <ul className={styles.list}>
              {footer.services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>{footer.contactHeading}</h2>
            <ul className={styles.contactList}>
              {footer.contacts.map((item) => (
                <li key={item.label} className={styles.contactItem}>
                  <span className={styles.contactLabel}>{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className={styles.contactValue}>
                      {item.value}
                    </a>
                  ) : (
                    <span className={styles.contactValue}>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} {footer.copyright}
          </p>

          <ul className={styles.legal}>
            {footer.legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className={styles.legalLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
