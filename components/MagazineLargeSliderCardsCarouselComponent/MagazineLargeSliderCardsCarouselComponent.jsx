"use client";

import React from "react";
import Image from "next/image.js";
import useEmblaCarousel from "embla-carousel-react";

import "../../styles/TopGalleriesSliderCardsCssCodes/TopGalleriesSliderCardsCssCodes.css";

//slides data for this page
import { MagazineSlidesData } from "../../constants/magazine-slides-data/magazine-slides-data.js";
import Link from "next/link";

export default function EmblaCarouselMagazineLargeSliderCardsCarouselComponent() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container mt-3 gap-5">
        {MagazineSlidesData.map((slide) => {
          return (
            <div className="embla_slide cursor-pointer">
              <Link href="/magazines">
                <div className="flex flex-col justify-center items-center w-[650px] h-[350px] bg-[#474747] overflow-hidden">
                  {/* card-image */}
                  <div className="w-full h-[300px] overflow-hidden">
                    <Image src={slide.CardImage} width={650} height={300} />
                  </div>
                  {/* description-text */}
                  <div className="mt-10 mb-2">
                    <p className="font-bold text-[20px] text-gray-700 dark:text-white leading-[25px]">
                      {slide.CardDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
