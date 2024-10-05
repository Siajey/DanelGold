"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//assets for this page
import HeadingImage from "../../public/assets/images/careers-page-heading-image.svg";
import MalePersonImage1 from "../../public/assets/images/careers-page-male-person-image-1.svg";
import MalePersonImage2 from "../../public/assets/images/careers-page-male-person-image-2.svg";
import MalePersonImage3 from "../../public/assets/images/careers-page-male-person-image-3.svg";
import MalePersonImage4 from "../../public/assets/images/careers-page-male-person-image-4.svg";
import FeMalePersonImage1 from "../../public/assets/images/careers-page-female-person-image-1.svg";
import FeMalePersonImage2 from "../../public/assets/images/careers-page-female-person-image-2.svg";
import FeMalePersonImage3 from "../../public/assets/images/careers-page-female-person-image-3.svg";
import FeMalePersonImage4 from "../../public/assets/images/careers-page-female-person-image-4.svg";
import VacationIcon from "../../public/assets/icons/large-yellow-vacation-icon.svg";
import HealthIcon from "../../public/assets/icons/large-yellow-health-heart-icon.svg";
import StarIcon from "../../public/assets/icons/large-yellow-star-heart-icon.svg";
import AirplaneIcon from "../../public/assets/icons/large-yellow-airplane-heart-icon.svg";
import CommunityIcon from "../../public/assets/icons/large-yellow-community-heart-icon.svg";
import HandWatchIcon from "../../public/assets/icons/large-yellow-hand-watch-heart-icon.svg";

//components for this page
import CareersPageFAQ from "@/components/CareersPageFAQ/CareersPageFAQ";

function page() {
  return (
    <div id="careers-page-fully-container" className=" container mx-auto">
      {/* heading-description container (pic & text) */}
      <div className="flex flex-col md:flex-row items-center mt-16">
        {/* right-side-image-container */}
        {/* left-side-description-container */}
        <div className="flex flex-col justify-center items-center flex-1">
          <p className="font-bold text-lg md:text-[25px] text-gray-700 dark:text-white leading-[20px] text-center">
            Let’s build the future of digital economies together
          </p>
          <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] text-center opacity-80 mt-3">
            Not only are we passionate about our work, we enjoy the people we
            surround ourselves with. At OpenSea, we build trust, embrace
            feedback, grow rapidly, and love our work.
          </p>
        </div>
        <div className="flex-1 mt-5 md:mt-0">
          <Image src={HeadingImage} className="flex mx-auto" />
        </div>
      </div>
      {/* main-section for this page (persons and accordions) */}
      <div className="flex flex-col justify-center items-center">
        {/* first-4-images-container */}
        <div className="flex justify-center items-center mt-20 flex-col md:flex-row gap-10 md:flex-wrap ">
          <Image src={MalePersonImage1} />
          <Image src={MalePersonImage2} />
          <Image src={MalePersonImage3} />
          <Image src={MalePersonImage4} />
        </div>
        {/* accordion-container */}
        <div className="flex flex-col justify-center items-center mt-10">
          {/* heading-texts */}
          <p className="font-bold text-[25px] text-gray-700 dark:text-white leading-[30px]">
            Our Values
          </p>
          <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] opacity-80 mt-2">
            Our values are at the core of our efforts to build the best platform
            for our users
          </p>
          {/* accordions */}
          <div className="mt-10 w-64 md:w-80 lg:w-96 xl:w-2/4">
            <CareersPageFAQ />
          </div>
        </div>
        {/* second-4-images-container*/}
        <div className="flex justify-center items-center mt-20 flex-col md:flex-row gap-10 md:flex-wrap">
          <Image src={FeMalePersonImage1} />
          <Image src={FeMalePersonImage2} />
          <Image src={FeMalePersonImage3} />
          <Image src={FeMalePersonImage4} />
        </div>
        {/* Perks-container */}
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="text-center">
            <p className="font-bold text-[25px] text-gray-700 dark:text-white leading-[30px]">
              Our Perks
            </p>
            <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] opacity-80 mt-2">
              Employees are our number-one priority, so we like to take care of
              them!
            </p>
          </div>

          {/* Perks-section-icons-container */}
          <div className="flex flex-col justify-center items-center my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-20">
              {/* icon-3 */}
              <div className="flex flex-col justify-center items-center mt-7">
                <Image src={StarIcon} />
                <div className="flex flex-col justify-center items-center w-[300px] mt-3">
                  <p className="font-bold text-[25px] text-gray-700 dark:text-white leading-[30px] mt-2">
                    Paid family leave
                  </p>
                  <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] opacity-80 mt-7">
                    Whether you’re bonding with a new child or taking care of a
                    family member, we understand you need this time off.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-7">
                <Image src={HealthIcon} />
                <div className="flex flex-col justify-center items-center w-[300px] mt-3">
                  <p className="font-bold text-[25px] text-gray-700 dark:text-white leading-[30px] mt-2">
                    Health insurance
                  </p>
                  <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] opacity-80 mt-7">
                    Your wellness is important. We've got you covered. Take care
                    of yourself to come to work happy and healthy.
                  </p>
                </div>
              </div>
              {/* icon-1 */}
              <div className="flex flex-col justify-center items-center mt-7">
                <Image src={VacationIcon} />
                <div className="flex flex-col justify-center items-center w-[300px] mt-3">
                  <p className="font-bold text-[25px] text-gray-700 dark:text-white leading-[30px] mt-2">
                    Flexible vacation policy
                  </p>
                  <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] opacity-80 mt-7">
                    Sometimes we all need a break. Take one, take many. Just
                    come back recharged and inspired.
                  </p>
                </div>
              </div>
              {/* icon-4 */}
              <div className="flex flex-col justify-center items-center mt-7">
                <Image src={AirplaneIcon} />

                <div className="flex flex-col justify-center items-center w-[320px] mt-3">
                  <p className="font-bold text-[25px] text-gray-700 dark:text-white leading-[30px] mt-2">
                    Travel & company retreats
                  </p>
                  <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] opacity-80 mt-7">
                    As a distributed team, we take the time to meet up for
                    company retreats.
                  </p>
                </div>
              </div>
              {/* icon-5 */}
              <div className="flex flex-col justify-center items-center mt-7">
                <Image src={CommunityIcon} />
                <div className="flex flex-col justify-center items-center w-[350px] mt-3">
                  <p className="font-bold text-[25px] text-gray-700 dark:text-white leading-[30px] mt-2">
                    Workshops & conferences
                  </p>
                  <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] opacity-80 mt-7">
                    Attend relevant workshops and conferences to grow and
                    develop. It’s our priority.
                  </p>
                </div>
              </div>
              {/* icon-6 */}
              <div className="flex flex-col justify-center items-center mt-7">
                <Image src={HandWatchIcon} />
                <div className="flex flex-col justify-center items-center w-[300px] mt-3">
                  <p className="font-bold text-[25px] text-gray-700 dark:text-white leading-[30px] mt-2">
                    Flexible hours
                  </p>
                  <p className="font-normal text-[15px] text-gray-700 dark:text-white leading-[20px] opacity-80 mt-7">
                    We know you have personal priorities to take care of. Take
                    care of them and work on your own hours; we’re flexible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
