import { Fragment, type ReactNode } from "react";

import type { CalcDemo, Rich, Topic } from "@/content/calcDemo/types";
import type { CalcUi } from "@/content/i18n/types";
import { type Lang, langHome } from "@/i18n/config";
import { fmt } from "@/i18n/fmt";
import { siteEmail, sitePhone } from "@/lib/site";
import { vrValue } from "@/lib/vrCalc";

import calc from "./AdaptiveCalc.module.css";
import s from "./CalcDemo.module.css";
import CalcWidget from "./CalcWidget";

// **bold** runs and \n line breaks; each break keeps a space, as narrow layouts hide the <br>
function rich(text: Rich): ReactNode {
  return text.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && (
        <>
          {" "}
          <br />
        </>
      )}
      {line
        .split(/\*\*(.+?)\*\*/)
        .map((part, j) => (j % 2 ? <strong key={j}>{part}</strong> : part))}
    </Fragment>
  ));
}

const Arrow = () => <span aria-hidden="true">↗</span>;

// the VR Mini Demo R3 page, with the working calculator in its middle
export default function AdaptiveCalc({
  label,
  t,
  d,
  lang,
}: {
  label: string;
  t: CalcUi;
  d: CalcDemo;
  lang: Lang;
}) {
  const whatsapp = (topic: Topic) =>
    `https://wa.me/${sitePhone.replace("+", "")}?text=${encodeURIComponent(d.topics[topic].text)}`;
  const email = (topic: Topic) =>
    `mailto:${siteEmail}?subject=${encodeURIComponent(d.topics[topic].subject)}&body=${encodeURIComponent(d.topics[topic].text)}`;
  const plural = new Intl.PluralRules(lang);
  const count = (n: number) =>
    fmt(
      d.standards.count[plural.select(n) as keyof typeof d.standards.count] ??
        d.standards.count.other,
      { n },
    );
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

  const choice = (
    topic: Topic,
    aria: { group: string; whatsapp: string; email: string },
    buttonClass: string,
    dark = false,
  ) => (
    <div
      className={`${s.choice} ${dark ? s.choiceDark : ""}`}
      role="group"
      aria-label={aria.group}
    >
      <a
        className={buttonClass}
        href={whatsapp(topic)}
        aria-label={aria.whatsapp}
        {...ext}
      >
        {d.actions.whatsapp} <Arrow />
      </a>
      <a className={s.email} href={email(topic)} aria-label={aria.email}>
        {d.actions.email} <Arrow />
      </a>
    </div>
  );

  const registryGroup = (
    title: string,
    rows: CalcDemo["standards"]["groups"][number]["rows"],
    start: number | null,
    extra = "",
  ) => (
    <details className={`${s.refGroup} ${extra}`} key={title}>
      <summary>
        <span>{title}</span>
        <span className={s.groupCount}>
          {count(rows.length)} <span aria-hidden="true">+</span>
        </span>
      </summary>
      <div className={s.refRows}>
        {rows.map((r, i) => (
          <div className={s.refRow} key={r.title}>
            <span className={s.refNumber}>
              {start === null ? "+" : String(start + i).padStart(2, "0")}
            </span>
            <div>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
              <span className={s.refKind}>{r.kind}</span>
            </div>
          </div>
        ))}
      </div>
    </details>
  );

  // the registry numbers run on across the groups, 01–70
  const starts = d.standards.groups.map(
    (_, i) =>
      1 + d.standards.groups.slice(0, i).reduce((n, g) => n + g.rows.length, 0),
  );

  return (
    <section
      id="kalkulyator"
      className={`${calc.section} ${s.page}`}
      aria-label={label}
    >
      <div className={s.hero}>
        <div className={`${s.container} ${s.navRow}`}>
          <a
            className={s.wordmark}
            href={langHome[lang]}
            aria-label={d.nav.brandAria}
          >
            <span className={s.brandName}>
              {d.nav.brand}
              <span className={s.brandDot}>.</span>
            </span>
            <span className={s.brandSub}>{d.nav.brandSub}</span>
          </a>
          <nav aria-label={d.nav.aria}>
            {d.nav.links.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a className={s.navContact} href="#kalk-elaqe">
              {d.nav.contact} <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
        <div className={`${s.container} ${s.heroGrid}`}>
          <div>
            <p className={s.eyebrow}>
              <span aria-hidden="true" className={s.square} /> {d.hero.eyebrow}{" "}
              <span className={s.eyebrowDivider}>/</span> {d.hero.eyebrowSub}
            </p>
            <h2 className={s.heroTitle}>
              {d.hero.title}
              <br />
              <span>{d.hero.titleAccent}</span>
            </h2>
            <p className={s.heroCopy}>{d.hero.copy}</p>
            <p className={s.byline}>{d.hero.byline}</p>
            <p className={s.proLine}>{d.hero.proLine}</p>
            <a className={s.access} href="#kalk-sertifikat">
              <span className={s.accessLabel}>{d.hero.accessLabel}</span>
              <strong>{d.hero.access}</strong>
              <span className={s.accessMore}>
                {d.hero.accessMore} <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
          <aside className={s.heroAside} aria-label={d.hero.asideAria}>
            <div className={s.scopeTitle}>
              {d.hero.scopeTitle} <span>{d.hero.scopeSub}</span>
            </div>
            <div className={s.scopeNumber}>
              03<span>{d.hero.scopeCountLabel}</span>
            </div>
            <div className={s.scopeRule} />
            <p>{rich(d.hero.scopeLines)}</p>
            <div className={s.scopeBottom}>
              <span aria-hidden="true" className={s.statusDot} />{" "}
              {d.hero.scopeBottom}
            </div>
          </aside>
        </div>
      </div>

      <CalcWidget t={t} lang={lang} />

      <div className={`${s.container} ${s.capabilities}`} id="kalk-imkanlar">
        <div className={s.wideIntro}>
          <div>
            <p className={`${s.eyebrow} ${s.dark}`}>{d.capabilities.eyebrow}</p>
            <h2>{rich(d.capabilities.heading)}</h2>
          </div>
          <p>{d.capabilities.intro}</p>
        </div>
        <div className={s.capabilityGrid}>
          {d.capabilities.items.map((c, i) => (
            <article className={s.capabilityCard} key={c.title}>
              <span className={s.capabilityIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className={s.capabilityTag}>{c.tag}</span>
            </article>
          ))}
        </div>
        <p className={s.callout}>{rich(d.capabilities.callout)}</p>
      </div>

      <div className={`${s.container} ${s.method}`}>
        <div className={s.sectionIntro}>
          <p className={`${s.eyebrow} ${s.dark}`}>{d.method.eyebrow}</p>
          <h2>{rich(d.method.heading)}</h2>
          <p>{d.method.intro}</p>
        </div>
        <div>
          {d.method.steps.map((m, i) => (
            <div className={s.methodStep} key={m.title}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${s.container} ${s.family}`}>
        <div className={s.familyHead}>
          <p className={`${s.eyebrow} ${s.dark}`}>{d.family.eyebrow}</p>
          <h2>{d.family.heading}</h2>
          <p>{d.family.intro}</p>
        </div>
        <p className={s.familyStatus} role="status">
          {d.family.status}
        </p>
        <div className={s.familyGrid}>
          {d.family.profiles.map((p) => (
            <article className={s.familyProfile} key={p.name}>
              <div>
                <h3>{fmt(d.family.profile, { name: p.name })}</h3>
                <p>{fmt(d.family.height, { n: p.height })}</p>
              </div>
              <div className={s.familyNumber}>
                {vrValue(900, p.height * 10)} <span>{d.family.unitMm}</span>
              </div>
            </article>
          ))}
        </div>
        <p className={s.familyNote}>{rich(d.family.note)}</p>
      </div>

      <div className={`${s.container} ${s.certification}`} id="kalk-sertifikat">
        <div className={s.certHead}>
          <div>
            <p className={s.eyebrow}>{d.certification.eyebrow}</p>
            <h2>
              {rich(d.certification.heading)}
              <br />
              <span>{d.certification.headingAccent}</span>
            </h2>
          </div>
          <div className={s.certCopy}>
            <p className={s.certKey}>
              <strong>{d.certification.key}</strong>
            </p>
            <p>{rich(d.certification.copy)}</p>
            {choice(
              "training",
              {
                group: d.certification.channelAria,
                whatsapp: d.certification.whatsappAria,
                email: d.certification.emailAria,
              },
              `${s.button} ${s.gold}`,
              true,
            )}
          </div>
        </div>
        <div className={s.certSteps} aria-label={d.certification.stepsAria}>
          {d.certification.steps.map((step, i) => (
            <div key={i}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{rich(step)}</p>
            </div>
          ))}
        </div>
        <p className={s.certSmall}>{d.certification.small}</p>
      </div>

      <div className={`${s.container} ${s.pathways}`} id="kalk-yollar">
        <div className={s.sectionIntro}>
          <p className={`${s.eyebrow} ${s.dark}`}>{d.pathways.eyebrow}</p>
          <h2>{d.pathways.heading}</h2>
          <p>{d.pathways.intro}</p>
        </div>
        <div className={s.pathwayGrid}>
          {d.pathways.items.map((p) => (
            <article
              className={`${s.pathwayCard} ${p.topic === "training" ? s.student : ""}`}
              key={p.topic}
            >
              <p className={s.pathwayKicker}>{p.kicker}</p>
              <h3>{rich(p.title)}</h3>
              <p>{p.text}</p>
              <p className={s.pathwayNote}>{p.note}</p>
              {choice(
                p.topic,
                {
                  group: p.channelAria,
                  whatsapp: p.whatsappAria,
                  email: p.emailAria,
                },
                `${s.button} ${s.pathwayAction}`,
              )}
            </article>
          ))}
        </div>
        <p className={s.accessNote}>{d.pathways.access}</p>
      </div>

      <div className={`${s.container} ${s.standards}`} id="kalk-istinadlar">
        <div className={s.wideIntro}>
          <div>
            <p className={`${s.eyebrow} ${s.dark}`}>{d.standards.eyebrow}</p>
            <h2>{rich(d.standards.heading)}</h2>
          </div>
          <p>{d.standards.intro}</p>
        </div>
        <div className={s.badges} aria-label={d.standards.badgesAria}>
          {d.standards.badges.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
        <p className={s.disclaimer}>{rich(d.standards.disclaimer)}</p>
        <div className={s.registryHeading}>
          <h3>{d.standards.registryTitle}</h3>
          <span>{d.standards.registryMeta}</span>
        </div>
        <p className={s.registryCaption}>{d.standards.registryCaption}</p>
        <div className={s.refGroups}>
          {d.standards.groups.map((g, i) =>
            registryGroup(g.title, g.rows, starts[i]),
          )}
        </div>
        {registryGroup(
          d.standards.supplemental.title,
          d.standards.supplemental.rows,
          null,
          s.supplemental,
        )}
        <details className={`${s.refGroup} ${s.official}`}>
          <summary>
            <span>{d.standards.official.title}</span>
            <span className={s.groupCount}>
              {d.standards.official.count} <span aria-hidden="true">+</span>
            </span>
          </summary>
          <div className={s.officialList}>
            <p>{d.standards.official.checked}</p>
            {d.standards.official.links.map((l) => (
              <p key={l.href}>
                <a href={l.href} {...ext}>
                  {l.label} ↗
                </a>
                <span>{l.text}</span>
              </p>
            ))}
          </div>
        </details>
      </div>

      <div className={`${s.container} ${s.contact}`} id="kalk-elaqe">
        <div className={s.contactCopy}>
          <p className={s.eyebrow}>{d.contact.eyebrow}</p>
          <h2>{rich(d.contact.heading)}</h2>
          <p>{d.contact.copy}</p>
          <p className={s.contactSmall}>{d.contact.small}</p>
        </div>
        <div className={s.contactActions}>
          {d.contact.routes.map((r) => (
            <div className={s.contactRoute} key={r.topic}>
              <h3>{r.title}</h3>
              <div
                className={s.channelActions}
                role="group"
                aria-label={fmt(d.contact.channelAriaSuffix, {
                  title: r.title,
                })}
              >
                <a
                  className={`${s.button} ${s.gold}`}
                  href={whatsapp(r.topic)}
                  aria-label={r.whatsappAria}
                  {...ext}
                >
                  {d.actions.whatsappShort} <Arrow />
                </a>
                <a
                  className={`${s.button} ${s.outlined}`}
                  href={email(r.topic)}
                  aria-label={r.emailAria}
                >
                  {d.actions.emailShort} <Arrow />
                </a>
              </div>
            </div>
          ))}
          <p className={s.addresses}>
            <a
              href={whatsapp("general")}
              aria-label={d.contact.generalWhatsappAria}
              {...ext}
            >
              {d.contact.phoneLabel} <Arrow />
            </a>
            <br />
            <a href={email("general")} aria-label={d.contact.generalEmailAria}>
              {siteEmail} <Arrow />
            </a>
          </p>
          <p className={s.sendNote}>{d.contact.sendNote}</p>
          <p className={s.certNote}>
            {d.contact.certNote}{" "}
            <a href="#kalk-sertifikat">{d.contact.certLink}</a>
          </p>
          <a className={s.websiteLink} href="#kitab">
            {d.contact.website} <Arrow />
          </a>
        </div>
      </div>

      <div className={`${s.container} ${s.rights}`}>
        <div className={s.rightsEmblem} aria-hidden="true">
          ©
        </div>
        <div>
          <p className={`${s.eyebrow} ${s.dark}`}>{d.rights.eyebrow}</p>
          <h2>{d.rights.heading}</h2>
          <p>
            <strong>{d.rights.lead}</strong>
          </p>
          <p>{rich(d.rights.author)}</p>
          <p className={s.rightsSmall}>{d.rights.small}</p>
        </div>
      </div>

      <div
        className={`${s.container} ${s.faq}`}
        role="region"
        aria-label={d.faq.aria}
      >
        {d.faq.items.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            {f.a.map((a, i) => (
              <p key={i}>{rich(a)}</p>
            ))}
          </details>
        ))}
      </div>

      <div className={`${s.container} ${s.footer}`}>
        <div>
          <strong>{d.footer.company}</strong>
          <span>
            {d.footer.copyright}
            <br />
            {d.footer.author}
          </span>
        </div>
        <p>
          {d.footer.product} <span>{d.footer.version}</span>
          <br />
          {d.footer.note}
        </p>
      </div>
    </section>
  );
}
