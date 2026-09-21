import Image from "next/image";
import styles from "./PartnerStrip.module.css";
import { partners, partnersHeading } from "@/content/partners";

export default function PartnerStrip() {
  // the list is rendered twice so the track can loop without a jump
  const loop = [...partners, ...partners];

  return (
    <section id="partnyorlar" className={styles.section} aria-label="Partners">
      <h2 className={styles.heading}>{partnersHeading}</h2>

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
                width={240}
                height={120}
                className={styles.logo}
                style={{ "--logo-scale": partner.scale } as React.CSSProperties}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
