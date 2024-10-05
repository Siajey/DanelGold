import React from "react";
import Image from "next/image";
import Link from "next/link";

//assets for this component
import DanelGoldTextLogo from "../../public/assets/images/DanelGold-yellow-logo-text-image.svg";
import DanelGoldYellowLogo from "../../public/assets/images/DanelGold-yellow-logo-image.svg";

//footer links data
import { FooterSocialLinks } from "../../constants/footer-links-data/footer-links-data.js";
import { FooterCompanyLinks } from "../../constants/footer-links-data/footer-links-data.js";
import { FooterMagazineLinks } from "../../constants/footer-links-data/footer-links-data.js";
import { FooterCategoriesLinks } from "../../constants/footer-links-data/footer-links-data.js";
import { FooterMarketplaceLinks } from "../../constants/footer-links-data/footer-links-data.js";

function Footer() {
  return (
    <div id="Footer-component-fully-container" className="">
      <div
        className="w-full h-[490px] bg-[#474747] mt-20"
        style={{
          borderTopRightRadius: "40px",
          borderTopLeftRadius: "40px",
          borderBottomRightRadius: "0px",
          borderBottomLeftRadius: "0px",
        }}
      >
        {/* top-section of the footer container */}
        <div className="flex justify-between items-center w-full p-[30px]">
          {/* left-side logo-container */}
          <Link href="/">
            <div className="flex justify-center items-center">
              <Image src={DanelGoldYellowLogo} />
              <Image src={DanelGoldTextLogo} className="ml-2" />
            </div>
          </Link>

          {/* right-side of the top container */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-start items-start w-[760px]">
              <p className="font-bold text-[20px] text-gray-700 dark:text-white  leading-[25px]">
                Stay on top of things
              </p>
            </div>
            {/* email address input and sign up button */}
            <div className="flex justify-center items-center mt-5">
              <input
                className="w-[655px] h-[40px] rounded-[10px] placeholder:font-normal placeholder:text-[20px] placeholder:text-[#000000] placeholder:opacity-60 placeholder:leading-[25px] p-3"
                placeholder="Your email address"
              />

              <button className="w-[105px] h-[40px] bg-[#C7C7C7C7] rounded-[10px] ml-2">
                <p className="font-medium text-[20px] text-[#000000] leading-[25px]">
                  Sign up
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* hr line */}
        <div className="flex justify-center items-center mt-[100px]">
          <hr
            style={{
              width: "95vw",
              backgroundColor: "#000000",
              height: "1px",
              border: "none",
              opacity: "40%",
            }}
          />
        </div>

        {/* bottom-section of the footer container (grid-container) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            paddingTop: "15px",
            paddingRight: "50px",
            paddingLeft: "50px",
          }}
        >
          {/* Marketplace links section */}
          <div className="flex flex-col justify-center items-start">
            <p className="font-bold text-[20px] text-gray-700 dark:text-white leading-[25px]">
              Marketplace
            </p>
            <ul>
              {FooterMarketplaceLinks.map((link) => {
                return (
                  <li key={link.id} className="mt-2">
                    <Link href={link.LinkHref}>
                      <p className="font-medium text-[15px] text-gray-700 dark:text-white leading-[20px]">
                        {link.LinkName}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Categories links section */}
          <div className="flex flex-col justify-start items-start">
            <p className="font-bold text-[20px] text-gray-700 dark:text-white leading-[25px]">
              Categories
            </p>
            <ul>
              {FooterCategoriesLinks.map((link) => {
                return (
                  <li key={link.id} className="mt-2">
                    <Link href={link.LinkHref}>
                      <p className="font-medium text-[15px] text-gray-700 dark:text-white leading-[20px]">
                        {link.LinkName}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Magazine links section */}
          <div className="flex flex-col justify-center items-start">
            <p className="font-bold text-[20px] text-gray-700 dark:text-white leading-[25px]">
              Magazine
            </p>
            <ul>
              {FooterMagazineLinks.map((link) => {
                return (
                  <li key={link.id} className="mt-2">
                    <Link href={link.LinkHref}>
                      <p className="font-medium text-[15px] text-gray-700 dark:text-white leading-[20px]">
                        {link.LinkName}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company links section */}
          <div className="flex flex-col justify-start items-start text-start">
            <p className="font-bold text-[20px] text-gray-700 dark:text-white leading-[25px]">
              Company
            </p>
            <ul>
              {FooterCompanyLinks.map((link) => {
                return (
                  <li key={link.id} className="mt-2">
                    <Link href={link.LinkHref}>
                      <p className="font-medium text-[15px] text-gray-700 dark:text-white leading-[20px]">
                        {link.LinkName}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Join the community section */}
          <div className="flex flex-col justify-start items-start">
            <p className="font-bold text-[20px] text-gray-700 dark:text-white  leading-[25px]">
              Join the community
            </p>
            <ul className="flex flex-row-reverse justify-center items-center gap-5 mt-3">
              {FooterSocialLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.LinkHref}>
                      <Image
                        src={link.LinkLocalIconAddress}
                        width={37}
                        height={27}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
