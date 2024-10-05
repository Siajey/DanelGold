import React from "react";

//components for this page
import EmblaCarouselTopGalleries from "../TopGalleriesSliderCardsCarouselComponent/TopGalleriesSliderCardsCarouselComponent";

export default function TopPhotographiesSliderCards() {
  return (
    <div className="mt-10">
      <p className="font-bold text-[20px] text-gray-700 dark:text-white leading-[25px]">
        Top Photographies
      </p>
      <EmblaCarouselTopGalleries />
    </div>
  );
}
