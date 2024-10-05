"use client";

import React from "react";
import Image from "next/image.js";
import useEmblaCarousel from "embla-carousel-react";

import "../../styles/TopGalleriesSliderCardsCssCodes/TopGalleriesSliderCardsCssCodes.css";

//slides data for this page
import { TopGalleriesSlidesData } from "../../constants/top-galleries-slides-data/top-galleries-data.js";
import Link from "next/link";

/*
TODO: remove the link tag on the cards when dynamic routing is ready !!!
iam testing each user details (name-nfts-socials...) page on this component  
*/

export default function EmblaCarouselTopGalleries() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container mt-3 gap-5">
        {TopGalleriesSlidesData.map((slide) => {
          return (
            <div className="embla_slide cursor-pointer">
              <div
                className=" flex flex-col justify-center items-center w-[300px] h-[390px] bg-[#474747] overflow-hidden"
                key={slide.Id}
              >
                {/* card-image (dynamic-routing-test-here) */}
                <Link href="/nft-card-owner-account-page">
                  <div className="w-[300px] h-[300px] overflow-hidden">
                    <Image src={slide.CardImage} width={300} height={250} />
                  </div>
                </Link>
                {/* card-heading-text (the name of the art) */}
                <div className="mt-3">
                  <p className="font-bold text-[20px] text-gray-700 dark:text-white leading-[25px]">
                    {slide.NameOfTheArt}
                  </p>
                </div>
                {/* artist-name and card icon */}
                <div className="w-[300px] flex justify-start items-start mt-2 ml-5">
                  <p className="font-bold text-[12px] text-gray-700 dark:text-white leading-[15px]">
                    {slide.ArtistName}
                  </p>
                  <Image
                    src={slide.CardIcon}
                    width={15}
                    height={15}
                    className="ml-2"
                  />
                </div>
                {/* collection-name */}
                <div className=" w-[300px] flex justify-start items-start mt-2 ml-5">
                  <p className="font-bold text-[12px] text-gray-700 dark:text-white leading-[15px]">
                    {slide.CollectionName}
                  </p>
                </div>
                {/* price container */}
                <div className="w-[300px] flex justify-end items-end mb-5 mr-3">
                  <div className="flex justify-center items-center w-[60px] h-[15px] bg-[#D9D9D9]">
                    <p className="font-bold text-[10px] text-[#000000] leading-[12px]">
                      {slide.Price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
