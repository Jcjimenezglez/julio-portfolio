import type { Project } from "@/lib/site-content";

export function ProjectLogo({
  project,
  size = 24,
  className = "",
}: {
  project: Project;
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={project.logo}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      aria-hidden
    />
  );
}

export function ProjectCover({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const hasCover = Boolean(project.coverImage);

  return (
    <div
      className={`relative overflow-hidden bg-[#F7F6F2] ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img
          src={hasCover ? project.coverImage! : project.logo}
          alt=""
          width={hasCover ? 640 : 128}
          height={hasCover ? 400 : 128}
          className={
            hasCover
              ? "max-h-full w-auto max-w-full rounded-lg object-contain shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
              : "max-h-20 w-auto max-w-[65%] object-contain"
          }
          aria-hidden
        />
      </div>
    </div>
  );
}
