import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import Image from "next/image";
import Link from "next/link";

//assets for this page
import { UsersStoriesData } from "../../constants/users-stories-data/user-stories-data.js";

function StoriesSection() {
  //state to control the stories carousel
  const [emblaRef] = useEmblaCarousel();

  const stories = UsersStoriesData.map((story) => (
    <div className="embla__slide s-carousel-slide flex justify-center mt-7">
      <Link href="#">
        <div
          key={story.id}
          className="flex flex-col justify-center items-center"
        >
          <Image
            width={85}
            height={85}
            src={story.localImageAddress}
            alt="stories"
          />
          <p className="font-semibold text-xs text-gray-700 dark:text-white leading-[15px] mt-3 w-[60px] flex justify-center text-wrap text-center">
            {story.userName}
          </p>
        </div>
      </Link>
    </div>
  ));
  return (
    <div id="users-stories-section-fully-container">
      <div className="embla s-carousel" ref={emblaRef}>
        <div className="embla__container s-carousel-container space-x-4">
          {stories}
        </div>
      </div>
    </div>
  );
}

export default StoriesSection;
