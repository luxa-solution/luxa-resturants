"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navItems } from "@/lib/site";
import ContactLink from "./contact-link";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 900) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("intro")?.getBoundingClientRect();
      const contact = document.getElementById("audit")?.getBoundingClientRect();
      setShowContact(
        Boolean(
          hero &&
          hero.bottom < 0 &&
          contact &&
          contact.top > window.innerHeight,
        ),
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="site-header dark-surface">
        <div className="container header-inner">
          <Link href="/" className="wordmark" aria-label="Luxa Web Studio home">
            luxa<span>.</span>
          </Link>
          <nav aria-label="Main navigation" className="desktop-nav">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <ContactLink className="header-contact" placement="header">
            Let’s talk <ArrowUpRight size={16} />
          </ContactLink>
          <button
            ref={toggle}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="mobile-nav container"
            onBlur={(event) => {
              if (
                !event.currentTarget.parentElement?.contains(
                  event.relatedTarget as Node,
                )
              )
                setOpen(false);
            }}
          >
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
                <ArrowUpRight size={16} />
              </a>
            ))}
            <ContactLink placement="mobile-menu" onClick={() => setOpen(false)}>
              Discuss my restaurant <ArrowUpRight size={16} />
            </ContactLink>
          </nav>
        )}
      </header>
      {showContact && !open && (
        <div className="mobile-contact">
          <ContactLink
            placement="mobile-sticky"
            className="button button-orange"
          >
            Discuss my restaurant <ArrowUpRight size={17} />
          </ContactLink>
        </div>
      )}
    </>
  );
}
