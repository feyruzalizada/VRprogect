"use client";

import Link from "next/link";

import { handleNavClick } from "./navScroll";

export default function SmoothLink({
  href,
  className,
  children,
  ...rest
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={className}
      onClick={(e) => handleNavClick(e, String(href))}
      {...rest}
    >
      {children}
    </Link>
  );
}
