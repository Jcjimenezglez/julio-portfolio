import { profile } from "@/lib/site-content";

type DownloadResumeProps = {
  variant?: "primary" | "secondary" | "text";
  className?: string;
};

export function DownloadResume({
  variant = "secondary",
  className = "",
}: DownloadResumeProps) {
  const baseClasses =
    variant === "text"
      ? "text-muted transition-colors hover:text-foreground"
      : variant === "primary"
        ? "inline-flex items-center rounded-full bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
        : "inline-flex items-center rounded-full border border-border px-4 py-1.5 text-foreground transition-colors hover:border-foreground/40 hover:bg-surface";

  return (
    <a
      href={profile.resumePath}
      download
      className={`${baseClasses} ${className}`.trim()}
      aria-label="Download ATS-optimized resume PDF"
    >
      Download resume
    </a>
  );
}
