import React from "react";
import Image from "next/image";
import Link from "next/link";

//assets for this page
import LandingPageMagazinesSectionImage1 from "../../public/assets/images/landing-page-magazines-section-image-1.svg";
import LandingPageMagazinesSectionImage2 from "../../public/assets/images/landing-page-magazines-section-image-2.svg";
import LandingPageMagazinesSectionImage3 from "../../public/assets/images/landing-page-magazines-section-image-3.svg";

//this component need to get data from backend API endpoint
function LandingMagazinesSection() {
  return (
    <div
      id="landing-magazines-section-fully-container"
      className="flex flex-col justify-center items-center mt-10"
    >
      {/* top-heading-text */}
      <p className="font-semibold lg:text-[40px] text-[#FFFFFF] leading-[50px] text-2xl">
        Magazines
      </p>

      {/* magazines-section */}
      {/* magazine-1 */}
      <div className="p-5 lg:flex lg:justify-between lg:items-center">
        <div className="flex-1">
          <Image src={LandingPageMagazinesSectionImage1} />
        </div>
        <div className="lg:flex-1 lg:justify-end items-center m-5">
          <p className="font-light text-[20px] text-gray-700 dark:text-white leading-[40px] text-justify">
            NFT stands for Non-Fungible Token.It is a type of digital asset that
            represents ownership or proof of authenticity of a unique item or
            piece of content, often using blockchain technology.
          </p>
        </div>
      </div>

      {/* magazine-2 */}
      <div className=" lg:flex lg:justify-between lg:flex-row-reverse mt-10 p-5 text-pretty">
        <div className="flex justify-center items-center lg:w-[40%]">
          <Image
            className="w-[500px]"
            src={LandingPageMagazinesSectionImage2}
          />
        </div>
        {/* texts-container */}
        <div className="lg:flex lg:flex-col lg:justify-between lg:w-[60%]">
          {/* top-heading-text */}
          <div className="flex justify-end items-center lg:text-end mt-5">
            <p className="font-light lg:text-[20px] text-gray-700 dark:text-white leading-[40px] lg:text-start text-justify">
              NFT stands for Non-Fungible Token.It is a type of digital asset
              that represents ownership or proof of authenticity of a unique
              item or piece of content, often using blockchain technology.
            </p>
          </div>

          {/* bottom-text */}
          <div className="lg:flex lg:justify-end mt-32">
            <p className="font-light lg:text-[20px] text-white leading-[40px] lg:text-start text-justify">
              NFT stands for Non-Fungible Token.It is a type of digital asset
              that represents ownership or proof of authenticity of a unique
              item or piece of content, often using blockchain technology.
            </p>
          </div>
        </div>
        {/* image-section */}
      </div>

      {/* magazine-3 */}
      <div className="lg:flex lg:justify-center lg:items-center w-full lg:mt-10 p-5">
        <Image className="w-full" src={LandingPageMagazinesSectionImage3} />
      </div>
    </div>
  );
}

export default LandingMagazinesSection;
