import React from "react";

import Image from "next/image";
import Link from "next/link";

//components for this page
import DSCA from "@/components/DSCA-component/DSCA";

//pagination link data for this page
import { MagazinesMainPageLinksData } from "../../constants/magazines-main-page-links-data/magazines-main-page-links-data.js";

//assets for this page
import FancyDanelGoldTextImage from "../../public/assets/images/magazines-page-danel-gold-fancy-text.svg";
import LargeMonkeyImage from "../../public/assets/images/magazines-main-page-large-image-1.svg";
import LargePersonNftImage from "../../public/assets/images/magazines-main-page-large-image-2.svg";
import LargeNftImage from "../../public/assets/images/magazines-main-page-large-image-3.svg";
import nft1 from "../../public/assets/images/nft1.svg";
import nft2 from "../../public/assets/images/nft2.svg";
import nft3 from "../../public/assets/images/nft3.svg";
import nft4 from "../../public/assets/images/nft4.svg";
import nft5 from "../../public/assets/images/nft5.svg";
import nft6 from "../../public/assets/images/nft6.svg";
import nft7 from "../../public/assets/images/nft7.svg";
import nft8 from "../../public/assets/images/nft8.svg";
import nft9 from "../../public/assets/images/nft9.svg";
import LandingPageMagazinesSectionImage1 from "../../public/assets/images/landing-page-magazines-section-image-1.svg";

function page() {
  return (
    <div id="Magazines-fully-container" className="mx-3 xl:mx-20">
      {/* heading-text-container and DSCA component */}
      <div className="flex justify-between items-center mt-10 lg:mt-20">
        <div className="flex justify-between items-center ">
          <div className="w-44">
            <Image src={FancyDanelGoldTextImage} />
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl md:text-[30px] text-gray-700 dark:text-white leading-[36px]">
            Magazines
          </p>
        </div>
        <div className="hidden md:flex">
          <DSCA />
        </div>
      </div>
      {/* main-section of this page */}
      {/* top-grid-container & pagination-links */}
      <div
        style={{
          display: "grid",
          // gridTemplateColumns: "20vw 80vw",
          marginTop: "10px",
        }}
      >
        {/* left-side-pagination-links */}
        <div className="mt-6 relative">
          <nav>
            <ul>
              {MagazinesMainPageLinksData.map((link) => (
                <li key={link.id} className="">
                  <Link href={link.MagazineHref}>
                    <p className="font-medium pt-1 lg:pt-3 text-sm lg:text-[25px] text-gray-700 dark:text-white leading-[35px] opacity-70">
                      {link.MagazineLinkName}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* right-side-large-image */}
        <div className="flex justify-items-end items-end md:ml-20">
          <Image
            src={LargeMonkeyImage}
            className="absolute right-4 w-44 md:top[470px] md:w-64 lg:w-96 lg:top-[500px] xl:w-[500px] xl:mr-20"
            style={{
              filter: "drop-shadow(5px 5px 140px rgba(249, 220, 92, 0.5))",
            }}
          />
          <div className=" mr-12 mb-10 w-44 md:w-80 lg:w-96 xl:w-[600px] xl:ml-32">
            <p className="font-light text-gray-700 dark:text-white leading-[20px] opacity-70 text-xs md:text-base text-balance mt-10 lg:pt-20 lg:text-xl xl:text-3xl">
              NFT stands for Non-Fungible Token. It is a type of digital asset
              that represents ownership or proof of authenticity of a unique
              item or piece of content, often using blockchain technology.
            </p>
          </div>
        </div>
      </div>
      {/* second-section-container of magazines */}
      <div className="flex justify-between lg:mt-44 xl:justify-around ">
        <div>
          ``
          <Image
            src={LargePersonNftImage}
            className="w-44 md:w-96 lg:w-[500px] xl:w-[700px]"
            style={{
              filter: "drop-shadow(5px 5px 140px rgba(137, 196, 244,1)",
            }}
          />
        </div>
        <div className="w-44 md:w-80 lg:w-96 text-start">
          <p className="font-light text-gray-700 dark:text-white leading-[20px] mt-7 opacity-70 text-xs md:text-base md:mt-10 lg:text-xl text-justify xl:text-2xl xl:mt-44">
            Digital art : <br />
            <br />
            Artists can create and sell digital art pieces as NFTs. Buyers gain
            ownership rights, and artists can receive royalties from future
            sales.
          </p>
        </div>
      </div>
      {/* third-section-container of magazines */}
      <div className="flex flex-col justify-center items-center mt-10">
        <div>
          <Image src={LargeNftImage} className="xl:w-[1500px]" />
        </div>
        <div className=" mt-5">
          <p className="font-light text-gray-700 dark:text-white leading-[20px] opacity-70 text-xs md:text-base md:mx-20 text-justify lg:text-xl xl:mx-56">
            NFTs represent a significant innovation in how digital content is
            owned, shared, and monetized, and their impact on various industries
            is still unfolding. NFTs represent a significant innovation in how
            digital content is owned, shared, and monetized, and their impact on
            various industries is still unfolding.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <p className="text-gray-700 dark:text-white">Memberships</p>
        <div className="flex justify-between mt-2">
          <div>
            <Image src={nft1} />
          </div>
          <div className="ml-1">
            <Image src={nft2} />
          </div>
        </div>
        <p className="font-light text-gray-700 dark:text-white leading-[20px] opacity-70 text-xs md:text-base md:mx-20 text-justify mt-5 lg:text-xl xl:text-2xl">
          NFTs represent a significant innovation in how digital content is
          owned, shared, and monetized, and their impact on various industries
          is still unfolding.and monetized, and their impact on various
          industries is still unfolding.and monetized, and their impact on
          various industries is still unfolding.
        </p>
      </div>
      <div className="mt-10">
        <p className="text-white">Sculptures</p>
        <div className="mt-3 flex justify-center">
          <Image
            src={LandingPageMagazinesSectionImage1}
            className="xl:w-[1000px]"
          />
        </div>
      </div>
      <div className="mt-16 flex justify-between items-center">
        <div>
          <p className="font-light text-gray-700 dark:text-white leading-[20px] mr-2 opacity-70 text-xs md:text-base md:w-96 md:p-20 text-justify lg:w-[550px] lg:text-xl xl:text-2xl">
            Digital art : <br />
            <br />
            Artists can create and sell digital art pieces as NFTs. Buyers gain
            ownership rights, and artists can receive royalties from future
            sales.
          </p>
        </div>
        <div>
          <Image src={nft3} />
        </div>
      </div>
      <div className="mt-20 flex justify-between items-center">
        <div>
          <Image src={nft3} />
        </div>
        <div>
          <p className=" font-light text-gray-700 dark:text-white leading-[20px] ml-2 opacity-70 text-xs md:text-base md:w-96 md:p-20 text-justify lg:w-[550px] lg:text-xl xl:text-2xl">
            Artists can create and sell digital art pieces as NFTs. Buyers gain
            ownership rights, and artists can receive royalties from future
            sales.
          </p>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-end xl:mt-20">
        <div className="xl:ml-16">
          <Image src={nft4} />
        </div>
        <div>
          <p className=" font-light text-gray-700 dark:text-white leading-[20px] ml-2 pb-10 opacity-70 text-xs md:text-base md:p-20 md:w-96 text-justify lg:text-xl xl:text-2xl">
            Artists can create and sell digital art pieces as NFTs. Buyers gain
            ownership rights, and artists can receive royalties from future
            sales.and artists can receive royalties from future sales.
          </p>
        </div>
      </div>
      <div className="mt-5 xl:mt-20">
        <p className="text-gray-700 dark:text-white">Paintings</p>
        <div className="flex justify-center mt-3">
          <div className="flex flex-col">
            <Image
              src={nft5}
              className="size-[181px] md:size-[360px] mx-auto lg:size-[500px] xl:size-[700px]"
            />
            <p className="text-gray-700 dark:text-white text-xs p-5 opacity-70 text-justify md:p-6 md:text-base lg:text-xl xl:text-2xl xl:mx-20">
              Artists can create and sell digital art pieces as NFTs. Buyers
              gain ownership rights, and artists can receive royalties from
              future sales.
            </p>
          </div>
          <div className="flex ml-4 flex-col">
            <Image
              src={nft9}
              className="size-[181px] md:size-[360px] mx-auto lg:size-[500px] xl:size-[700px]"
            />
            <p className="text-gray-700 dark:text-white text-xs p-5 opacity-70 text-justify md:p-6 md:text-base lg:text-xl xl:text-2xl xl:mx-20">
              Artists can create and sell digital art pieces as NFTs. Buyers
              gain ownership rights, and artists can receive royalties from
              future sales.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center xl:justify-evenly">
        <div className=" lg:w-1/2">
          <Image src={nft6} />
        </div>
        <div>
          <p className="font-light text-gray-700 dark:text-white leading-[20px] ml-2 opacity-70 text-xs  md:text-base md:w-96 md:p-14 text-justify lg:text-xl xl:text-2xl">
            Artists can create and sell digital art pieces as NFTs. Buyers gain
            ownership rights, and artists can receive royalties from future
            sales.
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-col items-center">
        <div className="ml-16">
          <Image src={nft7} />
        </div>
        <div>
          <p className=" font-light text-gray-700 dark:text-white leading-[20px] opacity-70 text-xs md:text-base text-justify m-5 md:px-20 lg:text-xl xl:text-2xl">
            Artists can create and sell digital art pieces as NFTs. Buyers gain
            ownership rights, and artists can receive royalties from future
            sales.and artists can receive royalties from future sales.Artists
            can create and sell digital art pieces as NFTs. Buyers gain
            ownership rights, and artists can receive royalties from future
            sales.and artists can receive royalties from future sales.
          </p>
        </div>
      </div>
      <div className="xl:mt-20">
        <p className="text-gray-700 dark:text-white">Artists</p>
        <Image src={nft8} className="mx-auto" />
        <div className="">
          <div className="flex mt-3 justify-center mx-auto">
            <p className=" font-light text-gray-700 dark:text-white leading-[20px] opacity-70 text-xs text-justify m-5 md:text-base md:p-5 lg:text-xl xl:text-2xl">
              Artists can create and sell digital art pieces as NFTs. Buyers
              gain ownership rights, and artists can receive royalties from
              future sales.ownership rights, and artists can receive royalties
              from future sales.
            </p>
            <p className=" font-light text-gray-700 dark:text-white leading-[20px] opacity-70 text-xs text-justify m-5 md:text-base md:p-5 lg:text-xl xl:text-2xl">
              Artists can create and sell digital art pieces as NFTs. Buyers
              gain ownership rights, and artists can receive royalties from
              future sales.ownership rights, and artists can receive royalties
              from future sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
