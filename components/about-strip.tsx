import { profile, socialLinks, summary, testimonials } from "@/lib/site-content";

export function AboutStrip() {
  return (
    <section id="about" className="border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="uppercase tracking-[0.2em] text-muted">About</p>
          <h2 className="mt-3">{profile.fullName}</h2>
          <p className="mt-1.5">{profile.title}</p>
          <p className="mt-1 text-muted">{profile.headline}</p>
        </div>
        <div className="space-y-4 leading-relaxed text-muted">
          <p>{summary.short}</p>
          <p>{summary.long[1]}</p>
          {testimonials[0] ? (
            <blockquote className="border-l-2 border-foreground/30 pl-4 text-foreground">
              <p className="italic">&ldquo;{testimonials[0].quote}&rdquo;</p>
              <footer className="mt-2 not-italic text-muted">
                — {testimonials[0].name}, {testimonials[0].role}
              </footer>
            </blockquote>
          ) : null}
          <div className="flex flex-wrap gap-4 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
