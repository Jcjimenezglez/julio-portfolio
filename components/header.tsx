import { HeaderActions } from "@/components/header-actions";
import { profile } from "@/lib/site-content";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#work"
          className="font-brand text-[1.35rem] tracking-tight text-foreground"
        >
          {profile.firstName}
        </a>
        <HeaderActions />
      </div>
    </header>
  );
}
