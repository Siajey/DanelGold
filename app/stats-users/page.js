"use client";

//handle the active links
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import BlackBurgerMenuIcon from "../../public/assets/icons/black-burger-menu-icon.svg";
import BlackFlukeIcon from "../../public/assets/icons/black-fluke-icon.svg";

//css codes needed for this page
import "../../styles/StatsUsersPageCssCodes/StatsUsersPageCssCodes.css";

//components for this page
import DSCA from "@/components/DSCA-component/DSCA";

//pagination links data for this page (collections-marketplaces-nfts-users)
import { StatsHeadingPaginationLinks } from "../../constants/stats-heading-pagination-links/stats-heading-pagination-links";

//assets for this page
import BlackPlusFollowIcon from "../../public/assets/icons/black-plus-follow-icon.svg";
import BlackLargeSearchIcon from "../../public/assets/icons/black-large-search-bar-icon.svg";

//users cards data
import { StatsUsersCardsData } from "../../constants/stat-users-cards-data/stat-users-cards-data.js";

function page() {
  //active links controller using pathname hook
  const pathname = usePathname();

  return (
    <div id="Stats-NFTS-fully-container">
      {/* heading-text-container and DSCA component */}
      <div className="flex justify-between items-center mt-10">
        <div className="ml-3">
          <p className="font-semibold text-[30px] text-gray-700 dark:text-white leading-[36px]">
            Stats
          </p>
        </div>

        <div>
          <DSCA />
        </div>
      </div>

      {/* pagination-list & search-bar  for this component */}
      <div id="" className="flex flex-col">
        {/* heading-pagination-links */}
        <div className="flex justify-start items-center">
          <nav id="" className="flex justify-start items-center mt-8 ml-3">
            <ul className="flex justify-center items-center gap-3 lg:gap-10">
              {StatsHeadingPaginationLinks.map((paginationLink) => (
                <li key={paginationLink.id}>
                  <Link href={paginationLink.href}>
                    <div
                      className={
                        pathname === paginationLink.href
                          ? "flex justify-center items-center p-2 h-[40px] bg-[#b5b4b4] rounded-[10px]"
                          : ""
                      }
                    >
                      <button>
                        <p className="font-semibold text-[15px] text-[#000000] leading-[18px] dark:text-gray-700 dark:text-white">
                          {paginationLink.navName}
                        </p>
                      </button>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-row justify-evenly mt-8">
          <div className="flex justify-center items-center w-[40px] h-[40px] bg-[#878585] rounded-[10px]">
            <button>
              <Image src={BlackBurgerMenuIcon} />
            </button>
          </div>
          {/* large-search-bar-section*/}
          <div className="flex justify-center items-center">
            {/* large-search-bar */}
            <div className="w-40 lg:px-2 md:w-[77vw]">
              <input
                className="relative flex justify-center items-center w-full h-[40px] bg-[#878585] rounded-[10px] pl-8 placeholder:font-semibold placeholder:text-[12px] placeholder:text-[#000000]"
                placeholder="Search by users"
              />

              <div className="absolute top-[242px] lg:top-[250px] ml-3">
                <Image src={BlackLargeSearchIcon} />
              </div>
            </div>
          </div>
          {/* Recently-Listed-button container */}
          <div className="flex justify-center items-center gap-2">
            <div
              className="flex justify-between items-center w-32 lg:w-[205px] h-[40px] bg-[#868484] rounded-[10px]"
              style={{
                boxShadow: "0px 2px 4px 2px rgba(0, 0, 0, 0.25)",
                padding: "10px",
              }}
            >
              <div>
                <p className="font-semibold text-[12px] text-[#000000] leading-[15px]">
                  Recently listed
                </p>
              </div>

              <div>
                <Image src={BlackFlukeIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* users-cards-section */}
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-3">
        {StatsUsersCardsData.map((user) => (
          <div
            key={user.id}
            className="flex flex-col justify-center items-center w-[300px] h-[270px] bg-[#474747] mt-7 relative"
            style={{
              boxShadow: "0px 5px 3px 0px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* NFT-picture */}
            <div className="relative block">
              <Image src={user.NFTImage} width={300} height={150} />
            </div>
            {/* Artist-picture */}
            <div className="flex justify-start items-start w-[300px]">
              <div className="absolute top-[150px]">
                <Image
                  src={user.PersonImage}
                  width={80}
                  height={65}
                  className=""
                />
              </div>
            </div>
            {/* Account-Name-section & followers-section & follow-button-section  */}
            <div className="flex justify-between items-center w-[300px] p-5 mt-3">
              <div className="flex flex-col justify-start items-start">
                <p className="font-semibold text-[12px] text-gray-700 dark:text-white leading-[15px]">
                  {user.AccountName}
                </p>
                <p className="font-semibold text-[10px] text-gray-700 dark:text-white leading-[12px] text-opacity-70">
                  {user.Followers}
                </p>
              </div>

              <div>
                <button className="flex justify-center items-center w-[80px] h-[30px] bg-[#a3a3a3]">
                  <p className="font-semibold text-[12px] text-[#000000] leading-[15px]">
                    Follow
                  </p>
                  <Image src={BlackPlusFollowIcon} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
