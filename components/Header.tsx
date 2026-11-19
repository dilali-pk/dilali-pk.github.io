"use client";
// Sticky header with the main navigation, theme switch and mobile menu. Author: Dilshad Ali.
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const NAV = [
  { href: "/services/", label: "Services" },
  { href: "/capabilities/", label: "Capabilities" },
  { href: "/work/", label: "Work" },
  { href: "/agencies/", label: "Agencies" },
  { href: "/working-with-me/", label: "Working with me" },
  { href: "/insights/", label: "Insights" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;

function isCurrent(pathname: string, href: string) {
  const path = pathname.endsWith("/") ? pathname : pathname + "/";
  return path === href || (href === "/work/" && path.startsWith("/work/"));
}

function toggleTheme() {
  const root = document.documentElement;
  const cur = root.getAttribute("data-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = cur === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try {
    localStorage.setItem("da-theme", next);
  } catch {
    // Storage can be blocked; the theme still switches for this visit.
  }
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="hdr">
      <div className="wrap">
        <Link className="brand" href="/">
          <Image src="/dilshad-logo.png" alt="" width={40} height={29} priority />
          Dilshad Ali
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isCurrent(pathname, n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button type="button" className="icon-btn" aria-label="Switch colour theme" onClick={toggleTheme}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
        </button>
        <button
          type="button"
          className="icon-btn menu-btn"
          aria-expanded={open}
          aria-controls="mnav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
        <Link className="btn sm" href="/contact/">Book a call</Link>
      </div>
      <div className="wrap mnav" id="mnav" hidden={!open}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)} aria-current={isCurrent(pathname, n.href) ? "page" : undefined}>
            {n.label}
          </Link>
        ))}
        <Link href="/skills/" onClick={() => setOpen(false)}>Skills</Link>
      </div>
    </header>
  );
}
