"use client";

import { Children, useEffect, useRef, useState } from "react";

import styles from "./News.module.css";

// a grid on wide screens; below 992px the same list becomes a swipe row with dots under it
export default function NewsTrack({ children, label }: { children: React.ReactNode; label: string }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    function onScroll() {
      const items = list!.children;
      const middle = list!.scrollLeft + list!.clientWidth / 2;
      let nearest = 0;
      for (let i = 0; i < items.length; i++) {
        const item = items[i] as HTMLElement;
        const distance = Math.abs(item.offsetLeft + item.offsetWidth / 2 - middle);
        const best = items[nearest] as HTMLElement;
        if (distance < Math.abs(best.offsetLeft + best.offsetWidth / 2 - middle)) nearest = i;
      }
      setActive(nearest);
    }

    list.addEventListener("scroll", onScroll, { passive: true });
    return () => list.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(index: number) {
    const list = listRef.current;
    const item = list?.children[index] as HTMLElement | undefined;
    if (!list || !item) return;
    list.scrollTo({ left: item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2, behavior: "smooth" });
  }

  return (
    <>
      <ul ref={listRef} className={styles.grid}>
        {children}
      </ul>

      <div className={styles.dots} role="group" aria-label={label}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.dot} ${i === active ? styles.dotOn : ""}`}
            aria-label={`${i + 1} / ${count}`}
            aria-current={i === active}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  );
}
