import { AboutStrip } from "@/components/about-strip";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WorkGallery } from "@/components/work-gallery";

export function HomeContent({ initialSlug }: { initialSlug?: string }) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkGallery initialSlug={initialSlug} />
        <AboutStrip />
      </main>
    </>
  );
}

export default function Home() {
  return <HomeContent />;
}
