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
    if (!open) return;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${parseFloat(getComputedStyle(body).paddingRight) + scrollbarWidth}px`;
    }
    body.style.overflow = "hidden";
    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [open]);
  useEffect(() => {
    let focusFrame = 0;
    const update = () => {
      const benefits = document.getElementById("why")?.getBoundingClientRect();
      const contact = document.getElementById("audit")?.getBoundingClientRect();
      const focused = document.activeElement;
      const inlineContactVisible = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(
          'main a[href^="https://wa.me/"]',
        ),
      ).some((link) => {
        const rect = link.getBoundingClientRect();
        return (
          rect.width > 0 && rect.top < window.innerHeight && rect.bottom > 0
        );
      });
      const usingControl =
        focused instanceof HTMLElement &&
        focused.matches("a, button, input, select, textarea, summary") &&
        !focused.closest(".mobile-contact");
      setShowContact(
        Boolean(
          focused instanceof HTMLElement && focused.closest(".mobile-contact"),
        ) ||
          Boolean(
            benefits &&
            benefits.bottom < 0 &&
            !usingControl &&
            !inlineContactVisible &&
            contact &&
            contact.top > window.innerHeight,
          ),
      );
    };
    const updateAfterFocus = () => {
      cancelAnimationFrame(focusFrame);
      focusFrame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("focusin", update);
    window.addEventListener("focusout", updateAfterFocus);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("focusin", update);
      window.removeEventListener("focusout", updateAfterFocus);
      cancelAnimationFrame(focusFrame);
    };
  }, []);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header
        className="site-header home-header dark-surface"
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setOpen(false);
          }
        }}
      >
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
          <>
            <button
              type="button"
              className="mobile-menu-backdrop"
              aria-hidden="true"
              tabIndex={-1}
              onClick={() => {
                setOpen(false);
                toggle.current?.focus();
              }}
            />
            <div className="mobile-menu-panel">
              <nav
                id="mobile-menu"
                aria-label="Mobile navigation"
                className="mobile-nav container"
              >
                {navItems.map(([label, href]) => (
                  <a key={href} href={href} onClick={() => setOpen(false)}>
                    {label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
                <ContactLink
                  placement="mobile-menu"
                  className="mobile-nav-contact"
                  onClick={() => setOpen(false)}
                >
                  Discuss my restaurant <ArrowUpRight size={16} />
                </ContactLink>
              </nav>
            </div>
          </>
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
