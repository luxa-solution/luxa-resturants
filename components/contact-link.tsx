"use client";

import type { AnchorHTMLAttributes } from "react";
import { track } from "@vercel/analytics";
import { waLink } from "@/lib/site";

export function trackEvent(
  name: string,
  properties: Record<string, string> = {},
) {
  if (process.env.NODE_ENV !== "production") return;
  const source =
    new URLSearchParams(window.location.search)
      .get("utm_source")
      ?.slice(0, 64) || "direct";
  try {
    track(name, { ...properties, source });
  } catch {
    /* Tracking must not prevent contact. */
  }
}

export default function ContactLink({
  placement,
  restaurant,
  children,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  placement: string;
  restaurant?: string;
}) {
  return (
    <a
      {...props}
      href={waLink(restaurant)}
      onClick={(event) => {
        trackEvent("whatsapp_click", { placement });
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
