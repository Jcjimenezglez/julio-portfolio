"use client";

import { useEffect, useState } from "react";

import type { Project } from "@/lib/site-content";
import { allCaseStudies, workSections } from "@/lib/site-content";
import { ProjectCover, ProjectLogo } from "@/components/project-media";
import { ProjectPanel } from "@/components/project-panel";

function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-[#2a2a2a] text-left shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <ProjectCover project={project} className="aspect-[4/3]" />
      <div className="flex items-center gap-2.5 border-t border-white/[0.08] bg-[#292929] px-4 py-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-white/[0.08]">
          <ProjectLogo project={project} size={18} />
        </span>
        <span className="font-medium text-foreground">{project.title}</span>
      </div>
    </button>
  );
}

export function WorkGallery() {
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <section id="work" className="px-6 pb-24 pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-14">
          {workSections.map((section) => (
            <div key={section.id}>
              <div className="mb-6 max-w-2xl">
                <h2 className="text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-1 text-muted">{section.description}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {section.projects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    onSelect={setSelected}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected ? (
        <ProjectPanel
          project={selected}
          onClose={() => setSelected(null)}
          onNavigate={(slug) => {
            const next = allCaseStudies.find((project) => project.slug === slug);
            if (next) setSelected(next);
          }}
        />
      ) : null}
    </section>
  );
}
