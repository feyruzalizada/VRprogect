import { langHome } from "@/i18n/config";

// the bar turns fixed once the page moves, so a tall block stops that much
// short of it; a short one is parked in the middle of the screen
export function scrollToElement(target: Element) {
  const box = target.getBoundingClientRect();
  const docTop = box.top + window.scrollY;
  const bar = document.querySelector("header");
  const barHeight = bar?.offsetHeight ?? 0;
  const short = box.height < window.innerHeight * 0.6;
  const top = short ? docTop - (window.innerHeight - box.height) / 2 : docTop - barHeight;

  window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
}

// the navbar only moves inside one page, so every item scrolls by hand and
// leaves the address bar on "/" — a leftover #hash pulled the page back down
const homes = new Set(Object.values(langHome));

export function handleNavClick(event: React.MouseEvent, href: string) {
  if (!homes.has(href) && !href.startsWith("#")) return;
  event.preventDefault();

  if (homes.has(href)) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (href.length > 1) {
    const target = document.querySelector(href);
    if (!target) return;
    scrollToElement(target);
  } else {
    return;
  }

  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname);
  }
}
