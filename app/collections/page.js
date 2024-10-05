import React from "react";

//components for this page (collections page slider cards)
import DSCA from "@/components/DSCA-component/DSCA";

import PaintingsSliderCards from "@/components/PaintingsSliderCards/PaintingsSliderCards";
import SculpturesSliderCards from "@/components/SculpturesSliderCards/SculpturesSliderCards";
import PhotographiesSliderCards from "@/components/PhotographiesSliderCards/PhotographiesSliderCards";
import MembershipsSliderCards from "@/components/MembershipsSliderCards/MembershipsSliderCards";
import PFPsSliderCards from "@/components/PFPsSliderCards/PFPsSliderCards";

//(TODO: ) All the cards Slider need to be customized and fetched data from their own API

function page() {
  return (
    <div id="Collections-page-fully-container">
      {/* heading-text-container and DSCA component */}
      <div className="flex items-center justify-between mt-10">
        <div className="ml-3 md:ml-12">
          <p className="font-semibold text-[30px] text-gray-700 dark:text-white leading-[36px]">
            Collection
          </p>
        </div>
        <div>
          <DSCA />
        </div>
      </div>
      {/* slider-collections-cards for this page */}
      <div>
        <PaintingsSliderCards />
        <SculpturesSliderCards />
        <PhotographiesSliderCards />
        <MembershipsSliderCards />
        <PFPsSliderCards />
      </div>
    </div>
  );
}
export default page;
