"use client";

import React from "react";
import { useCallback } from "react";
import Image from "next/image";

//carousel dependencies
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

//assets for this page
import LandingHeroLargeCarouselImage from "../../public/assets/images/landing-hero-section-large-carousel-image.svg";
import LargeCarouselArrowRightIcon from "../../public/assets/icons/Drops-large-carousel-white-arrow-right-icon.svg";
import LargeCarouselArrowLeftIcon from "../../public/assets/icons/Drops-large-carousel-white-arrow-left-icon.svg";
import StoriesSection from "../../components/storis-section/StoriesSection";

function LandingHeroCarousel() {
  //handling the carousel different properties
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: "false" }, [
    Autoplay({ delay: 20000 }),
  ]);

  //functionality to handle previous and next slides of the carousel
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <div id="this-page-fully-container">
      <div className=" embla__slide s-carousel-slide justify-center items-center py-4">
        <StoriesSection />
      </div>
      {/* carousel-section */}
      <div>
        {/* hero-large-carousel-container */}
        <div className="embla flex flex-row-reverse justify-between items-center lg:p-10">
          {/* next-slide-button container */}
          <div>
            <button class="embla__next" onClick={scrollNext}>
              <Image src={LargeCarouselArrowRightIcon} className="w-[50px]" />
            </button>
          </div>

          {/* main-carousel-container */}
          <div
            className="embla__viewport flex justify-center items-center mt-5 cursor-pointer"
            ref={emblaRef}
          >
            <div className="embla__container">
              <div className="embla__slide flex justify-center items-center">
                <Image src={LandingHeroLargeCarouselImage} />
              </div>
              <div className="embla__slide flex justify-center items-center">
                <Image src={LandingHeroLargeCarouselImage} />
              </div>
              <div className="embla__slide flex justify-center items-center ">
                <Image src={LandingHeroLargeCarouselImage} />
              </div>
            </div>
          </div>

          {/* prev-slide-button container */}
          <div>
            <button class="embla__prev" onClick={scrollPrev}>
              <Image src={LargeCarouselArrowLeftIcon} className="w-[50px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroCarousel;
