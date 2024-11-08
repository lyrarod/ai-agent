import {
  Brands,
  Contact,
  Features,
  FeaturesBanner,
  Hero,
  Plans,
  PlansBanner,
  Product,
  ProductBanner,
} from "@/components/ui/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Features />
      <FeaturesBanner />
      <Product />
      <ProductBanner />
      <Plans />
      <PlansBanner />
      <Contact />
    </main>
  );
}
