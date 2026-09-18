import styles from "./Services.module.css";

const COMMON = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: styles.icon,
  "aria-hidden": true,
};

/** drafting compass */
function Dizayn() {
  return (
    <svg {...COMMON}>
      <circle cx="32" cy="13" r="3.5" />
      <path d="M30 16.5 17 51" />
      <path d="M34 16.5 47 51" />
      <path d="M20.5 38a15 15 0 0 0 23 0" />
    </svg>
  );
}

/** drawing sheet with a plan block */
function Layihe() {
  return (
    <svg {...COMMON}>
      <rect x="11" y="13" width="42" height="38" rx="2" />
      <path d="M11 23h42" />
      <path d="M19 31h11v12H19z" />
      <path d="M36 31h9M36 37h9M36 43h6" />
    </svg>
  );
}

/** tower crane */
function Tikinti() {
  return (
    <svg {...COMMON}>
      <path d="M24 53V18" />
      <path d="M8 18h44" />
      <path d="M24 8 12 18M24 8 44 18" />
      <path d="M24 8v10" />
      <path d="M8 18v5h5" />
      <path d="M44 18v9" />
      <path d="M40 27h8v7h-8z" />
      <path d="M17 53h14" />
    </svg>
  );
}

/** paint roller */
function Temir() {
  return (
    <svg {...COMMON}>
      <rect x="12" y="13" width="26" height="12" rx="2" />
      <path d="M38 19h9v10H33v6" />
      <rect x="28" y="35" width="10" height="16" rx="2" />
    </svg>
  );
}

/** magnifier over a bar chart */
function Audit() {
  return (
    <svg {...COMMON}>
      <circle cx="27" cy="27" r="14" />
      <path d="M37 37 52 52" />
      <path d="M21 31v-5M27 31v-10M33 31v-7" />
    </svg>
  );
}

/** clipboard with a tick */
function Nezaret() {
  return (
    <svg {...COMMON}>
      <path d="M25 12h-8a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V15a3 3 0 0 0-3-3h-8" />
      <rect x="25" y="8" width="14" height="8" rx="2" />
      <path d="M23 33l6 6 13-14" />
    </svg>
  );
}

/** scales */
function Mudafie() {
  return (
    <svg {...COMMON}>
      <path d="M32 17v34" />
      <path d="M22 51h20" />
      <path d="M12 21h40" />
      <circle cx="32" cy="17" r="2.5" />
      <path d="M12 21 5 35h14z" />
      <path d="M52 21 45 35h14z" />
    </svg>
  );
}

const ICONS: Record<string, () => React.ReactElement> = {
  dizayn: Dizayn,
  layihe: Layihe,
  tikinti: Tikinti,
  temir: Temir,
  audit: Audit,
  nezaret: Nezaret,
  mudafie: Mudafie,
};

export default function ServiceIcon({ name }: { name: string }) {
  const Icon = ICONS[name];
  return Icon ? <Icon /> : null;
}
