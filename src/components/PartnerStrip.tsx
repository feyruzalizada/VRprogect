import Image from "next/image";
import styles from "./PartnerStrip.module.css";
import { partners } from "@/content/partners";

export default function PartnerStrip() {
  // the list is rendered twice so the track can loop without a jump
  const loop = [...partners, ...partners];

  return (
    <section className={styles.section} aria-label="Partners">
      <div className={styles.viewport}>
        <div className={styles.track}>
          {loop.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className={styles.item}
              aria-hidden={index >= partners.length}
            >
              <Image
                src={partner.logo}
                alt={index < partners.length ? partner.name : ""}
                width={104}
                height={60}
                className={styles.logo}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
