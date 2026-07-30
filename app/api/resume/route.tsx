import { renderToBuffer } from "@react-pdf/renderer";

import { profile } from "@/lib/site-content";
import { ResumeDocument } from "@/lib/resume-document";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const buffer = await renderToBuffer(<ResumeDocument />);
  const filename = `${profile.fullName.replace(/\s+/g, "-")}-Resume.pdf`;

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
