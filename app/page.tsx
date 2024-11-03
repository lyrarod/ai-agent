import { Brands } from "@/components/brands";
import { FeaturesBanner } from "@/components/feature-banner";
import { Contact, Features, Hero } from "@/components/ui/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Features />
      <FeaturesBanner />
      <Contact />
    </main>
  );
}
