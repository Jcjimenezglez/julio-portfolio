"use client";

import type { Project } from "@/lib/site-content";
import { ProjectLogo } from "@/components/project-media";
import { caseStudies } from "@/lib/case-studies";

function MetaField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted">{label}</p>
      <p className="mt-1 text-foreground">{value}</p>
    </div>
  );
}

function TextBlock({ text }: { text: string }) {
  const paragraphs = text.split("\n\n").filter(Boolean);

  return (
    <div className="mt-3 space-y-4 leading-relaxed text-foreground">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[32px] font-extrabold leading-tight text-foreground">
      {children}
    </h3>
  );
}

function HighlightCard({
  project,
  text,
}: {
  project: Project;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-border/80 bg-white/[0.03] p-4">
      <ProjectLogo project={project} size={48} className="rounded-lg" />
      <p className="leading-relaxed text-foreground">{text}</p>
    </div>
  );
}

function ProjectGallery({ images }: { images: NonNullable<Project["gallery"]> }) {
  return (
    <div className="mt-4 space-y-6">
      {images.map((image) => (
        <figure key={image.src} className="overflow-hidden rounded-xl border border-border/80">
          <img
            src={image.src}
            alt={image.caption}
            className="w-full bg-[#F7F6F2] object-contain"
          />
          <figcaption className="border-t border-border/80 px-4 py-3 text-sm leading-relaxed text-muted">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function ProjectFinancials({
  rows,
}: {
  rows: NonNullable<Project["financials"]>;
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border/80">
      <table className="w-full min-w-[28rem] table-fixed text-left text-sm">
        <thead>
          <tr className="border-b border-border/80 bg-white/[0.04]">
            <th className="w-[7.5rem] px-3 py-3 font-medium text-muted">
              Year
            </th>
            <th className="px-3 py-3 font-medium text-muted">Expenses</th>
            <th className="px-3 py-3 font-medium text-muted">Revenue</th>
            <th className="px-3 py-3 font-medium text-muted">Profit</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.year}
              className="border-b border-border/50 last:border-b-0"
            >
              <td className="w-[7.5rem] align-top px-3 py-3 text-foreground">
                {row.year}
                {row.note ? (
                  <span className="mt-0.5 block text-xs leading-snug text-muted">
                    {row.note}
                  </span>
                ) : null}
              </td>
              <td className="whitespace-nowrap px-3 py-3 tabular-nums text-foreground">
                {row.expenses}
              </td>
              <td className="whitespace-nowrap px-3 py-3 tabular-nums text-foreground">
                {row.revenue}
              </td>
              <td className="whitespace-nowrap px-3 py-3 tabular-nums text-foreground">
                {row.profit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProjectEmbeds({ embeds }: { embeds: NonNullable<Project["embeds"]> }) {
  return (
    <div className="mt-4 space-y-6">
      {embeds.map((embed) => (
        <figure
          key={embed.embedUrl}
          className="overflow-hidden rounded-xl border border-border/80"
        >
          <div
            className={
              embed.type === "youtube"
                ? "aspect-video w-full bg-black"
                : "w-full bg-[#F7F6F2]"
            }
          >
            <iframe
              src={embed.embedUrl}
              title={embed.label}
              className="h-full w-full"
              style={
                embed.type === "linkedin"
                  ? { minHeight: "560px", height: "560px" }
                  : undefined
              }
              allow={
                embed.type === "youtube"
                  ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  : undefined
              }
              allowFullScreen={embed.type === "youtube"}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <figcaption className="border-t border-border/80 px-4 py-3 text-sm text-muted">
            {embed.label}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ProjectPanel({
  project,
  onClose,
  onNavigate,
}: {
  project: Project;
  onClose: () => void;
  onNavigate: (slug: string) => void;
}) {
  const caseStudy = caseStudies[project.slug];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-[6vh] sm:p-6 sm:pt-[8vh]">
      <button
        type="button"
        aria-label="Close project details"
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <article
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
        className="modal-in relative w-full max-w-xl rounded-2xl bg-[#1c1c1c] shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M4 4l8 8M12 4l-8 8" />
          </svg>
        </button>

        <header className="px-8 pb-6 pt-10 text-center">
          <ProjectLogo project={project} size={72} className="mx-auto rounded-xl" />
          <h2 className="mt-5">{project.title}</h2>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-muted underline-offset-4 hover:text-foreground hover:underline"
            >
              View live
            </a>
          ) : null}
          {project.links && project.links.length > 0 ? (
            <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </header>

        <div className="space-y-6 px-8 pb-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {project.location ? (
              <MetaField label="Location" value={project.location} />
            ) : null}
            <MetaField label="Date" value={project.year} />
            <MetaField label="Category" value={project.category} />
            <MetaField label="Role" value={project.role} />
            <MetaField label="Project" value={project.client} />
          </div>

          <hr className="border-border" />

          <blockquote className="border-l-2 border-foreground pl-4 leading-relaxed text-foreground">
            {project.summary}
          </blockquote>

          {project.relatedLinks && project.relatedLinks.length > 0 ? (
            <nav className="space-y-2">
              {project.relatedLinks.map((link) => (
                <button
                  key={link.slug}
                  type="button"
                  onClick={() => onNavigate(link.slug)}
                  className="block text-left text-muted underline-offset-4 hover:text-foreground hover:underline"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          ) : null}

          <hr className="border-border" />

          {caseStudy ? (
            <>
              <section>
                <SectionTitle>Overview</SectionTitle>
                <dl className="mt-4 space-y-3">
                  <div>
                    <dt className="text-muted">Role</dt>
                    <dd className="mt-1 text-foreground">{project.role}</dd>
                  </div>
                  {caseStudy.team ? (
                    <div>
                      <dt className="text-muted">Team</dt>
                      <dd className="mt-1 text-foreground">{caseStudy.team}</dd>
                    </div>
                  ) : null}
                  <div>
                    <dt className="text-muted">Timeline</dt>
                    <dd className="mt-1 text-foreground">{caseStudy.timeline}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Tools</dt>
                    <dd className="mt-1 text-foreground">{project.tools.join(", ")}</dd>
                  </div>
                </dl>
              </section>

              <section>
                <SectionTitle>Problem</SectionTitle>
                <TextBlock text={caseStudy.problem} />
              </section>

              <section>
                <SectionTitle>Process</SectionTitle>
                <ol className="mt-4 space-y-4">
                  {caseStudy.process.map((step, index) => (
                    <li key={step.label} className="rounded-xl border border-border/80 bg-white/[0.03] p-4">
                      <p className="font-semibold text-foreground">
                        {index + 1}. {step.label}
                      </p>
                      <p className="mt-1.5 leading-relaxed text-muted">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <SectionTitle>Solution</SectionTitle>
                <TextBlock text={caseStudy.solution} />
              </section>

              <section>
                <SectionTitle>Outcome</SectionTitle>
                <div className="mt-4 space-y-3">
                  {caseStudy.outcome.map((result) => (
                    <HighlightCard key={result} project={project} text={result} />
                  ))}
                </div>
              </section>

              {caseStudy.learnings ? (
                <section>
                  <SectionTitle>Learnings</SectionTitle>
                  <TextBlock text={caseStudy.learnings} />
                </section>
              ) : null}
            </>
          ) : (
            <>
              <section>
                <SectionTitle>Highlights</SectionTitle>
                <div className="mt-4 space-y-3">
                  {project.results.map((result) => (
                    <HighlightCard key={result} project={project} text={result} />
                  ))}
                </div>
              </section>
              <section>
                <SectionTitle>Problem</SectionTitle>
                <TextBlock text={project.problem} />
              </section>
              <section>
                <SectionTitle>Process</SectionTitle>
                <TextBlock text={project.process} />
              </section>
            </>
          )}

          {project.gallery && project.gallery.length > 0 ? (
            <section>
              <SectionTitle>Screens</SectionTitle>
              <ProjectGallery images={project.gallery} />
            </section>
          ) : null}

          {project.financials && project.financials.length > 0 ? (
            <section>
              <p className="text-[32px] font-extrabold leading-tight text-foreground">
                Financials
              </p>
              <ProjectFinancials rows={project.financials} />
            </section>
          ) : null}

          {project.embeds && project.embeds.length > 0 ? (
            <section>
              <p className="text-[32px] font-extrabold leading-tight text-foreground">
                Video
              </p>
              <ProjectEmbeds embeds={project.embeds} />
            </section>
          ) : null}

          {!caseStudy ? (
            <>
          <section>
            <p className="text-[32px] font-extrabold leading-tight text-foreground">
              Tools
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border px-3 py-1 text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

            </>
          ) : null}

          {project.keywords.length > 0 ? (
            <section>
              <p className="text-[32px] font-extrabold leading-tight text-foreground">
                Keywords
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-white/[0.04] px-3 py-1 text-muted"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>
    </div>
  );
}
