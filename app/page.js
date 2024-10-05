"use client";

//lading page assets and components (lists and slider cards)
import LandingHero from "@/components/Landing-Hero-component/LandingHero";
import LandingPageListComponent from "@/components/LandingPageListComponent/LandingPageListComponent";
import LandingCollectionCardsSliders from "@/components/LandingCollectionCardsSliders/LandingCollectionCardsSliders";
import LandingMagazinesSection from "@/components/landing-magazines-section/LandingMagazinesSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <LandingHero />
      <LandingPageListComponent />
      <LandingCollectionCardsSliders />
      <LandingMagazinesSection />
    </div>
  );
}
