import React from "react";

import EmblaCarouselPaintingsCollection from "../PaintingsSliderCardsCarouselComponent/PaintingsSliderCardsCarouselComponent";

//components for this page

function PaintingsSliderCards() {
  return (
    <div className="mt-10">
      <p className="font-normal text-[20px] text-gray-700 dark:text-white leading-[25px] ml-3 md:ml-12">
        Paintings
      </p>
      <EmblaCarouselPaintingsCollection />
    </div>
  );
}

export default PaintingsSliderCards;
