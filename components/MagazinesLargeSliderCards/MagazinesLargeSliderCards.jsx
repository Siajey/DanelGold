import React from "react";

//components for this page
import EmblaCarouselMagazineLargeSliderCardsCarouselComponent from "../MagazineLargeSliderCardsCarouselComponent/MagazineLargeSliderCardsCarouselComponent";

export default function MagazinesLargeSliderCards() {
  return (
    <div className="mt-10 hidden md:flex md:flex-col">
      <p className="font-bold text-[20px] text-gray-700 dark:text-white leading-[25px]">
        Magazines
      </p>
      <EmblaCarouselMagazineLargeSliderCardsCarouselComponent />
    </div>
  );
}
