import { AboutStrip } from "@/components/about-strip";
import { Header } from "@/components/header";
import { WorkGallery } from "@/components/work-gallery";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WorkGallery />
        <AboutStrip />
      </main>
    </>
  );
}
