import { profile } from "@/lib/site-content";

export function Hero() {
  return (
    <section id="top" className="px-6 pb-4 pt-28 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <p className="text-muted">{profile.fullName} · {profile.location}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {profile.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{profile.headline}</p>
        <p className="mt-3 max-w-2xl leading-relaxed text-muted">{profile.pitch}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-foreground px-5 py-2.5 font-medium text-background transition-opacity hover:opacity-90">
            View case studies
          </a>
          <a href={profile.resumePath} className="rounded-full border border-border px-5 py-2.5 font-medium text-foreground transition-colors hover:bg-white/[0.06]">
            Download resume
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-full border border-border px-5 py-2.5 font-medium text-foreground transition-colors hover:bg-white/[0.06]">
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
