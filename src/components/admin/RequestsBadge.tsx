"use client";

import { useAuth } from "@payloadcms/ui";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINK = 'a[href$="/admin/collections/requests"]';

// red "+N" next to every link to the requests list while some request hasn't been opened yet
export function RequestsBadge({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user } = useAuth();
  const [unseen, setUnseen] = useState(0);

  useEffect(() => {
    if (!user) return;
    let alive = true;

    async function load() {
      const res = await fetch("/api/requests?where[seen][equals]=false&limit=1&depth=0", {
        credentials: "include",
      }).catch(() => null);
      if (!res?.ok) return;
      const { totalDocs } = await res.json();
      if (alive) setUnseen(totalDocs);
    }

    load();
    const timer = setInterval(load, 30_000);
    return () => {
      alive = false;
      clearInterval(timer);
    };
  }, [pathname, user]);

  const shown = user ? unseen : 0;

  useEffect(() => {
    // the admin re-renders its nav on its own, so the mark is re-applied whenever the page changes
    function apply() {
      document.querySelectorAll(LINK).forEach((link) => {
        if (shown > 0) link.setAttribute("data-unseen", String(shown));
        else link.removeAttribute("data-unseen");
      });
    }

    apply();
    const observer = new MutationObserver(apply);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [shown]);

  return (
    <>
      {children}
      <style>{`
        ${LINK}[data-unseen]::after {
          content: "+" attr(data-unseen);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 20px;
          height: 20px;
          margin-left: 8px;
          padding: 0 6px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
          line-height: 1;
          color: #fff;
          background: #e5484d;
          vertical-align: middle;
        }
        a.card__click[href$="/admin/collections/requests"][data-unseen]::after {
          position: absolute;
          top: 16px;
          right: 16px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
