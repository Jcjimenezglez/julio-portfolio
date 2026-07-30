"use client";

import { useState, type ReactNode } from "react";

import { profile } from "@/lib/site-content";
import { getPortfolioUrl } from "@/lib/site-content";

function ShareIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.75 6.75 9 3 5.25 6.75" />
      <path d="M9 3v8.25" />
      <path d="M4.5 10.5v3.75A1.5 1.5 0 0 0 6 15.75h6a1.5 1.5 0 0 0 1.5-1.5V10.5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2.25v9" />
      <path d="m5.25 8.25 3.75 3.75L12.75 8.25" />
      <path d="M3.75 13.5h10.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.25" y="4.5" width="13.5" height="9" rx="1.5" />
      <path d="M2.25 5.625 9 10.125l6.75-4.5" />
    </svg>
  );
}

function HeaderIconButton({
  label,
  children,
  onClick,
  href,
  download,
}: {
  label: string;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  download?: boolean;
}) {
  const className =
    "inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

  const tooltip = (
    <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#2a2a2a] px-2.5 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
      {label}
    </span>
  );

  if (href) {
    return (
      <span className="group relative">
        <a
          href={href}
          download={download}
          aria-label={label}
          className={className}
        >
          {children}
        </a>
        {tooltip}
      </span>
    );
  }

  return (
    <span className="group relative">
      <button type="button" onClick={onClick} aria-label={label} className={className}>
        {children}
      </button>
      {tooltip}
    </span>
  );
}

export function HeaderActions() {
  const [shareLabel, setShareLabel] = useState("Share website");

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : getPortfolioUrl();

    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      setShareLabel("Link copied");
      window.setTimeout(() => setShareLabel("Share website"), 2000);
    } catch {
      // User cancelled native share or clipboard failed silently.
    }
  }

  return (
    <div className="flex items-center gap-1">
      <HeaderIconButton label={shareLabel} onClick={handleShare}>
        <ShareIcon />
      </HeaderIconButton>
      <HeaderIconButton
        label="Download resume"
        href={profile.resumePath}
        download
      >
        <DownloadIcon />
      </HeaderIconButton>
      <HeaderIconButton label="Send email" href={`mailto:${profile.email}`}>
        <MailIcon />
      </HeaderIconButton>
    </div>
  );
}
