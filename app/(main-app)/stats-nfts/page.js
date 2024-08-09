'use client'

import { useState } from 'react'

//handle the active links
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import '../../../styles/StatsNFTSPageCssCodes/StatsNFTSPageCssCodes.css'

//components for this page
import DSCA from '@/components/DSCA-component/DSCA'

//pagination links data for this page (collections-marketplaces-nfts-users)
import { StatsHeadingPaginationLinks } from '../../../constants/stats-heading-pagination-links/stats-heading-pagination-links'

//assets for this page
import BlackLargeSearchIcon from '../../../public/assets/icons/black-large-search-bar-icon.svg'
import BlackBurgerMenuIcon from '../../../public/assets/icons/black-burger-menu-icon.svg'
import BlackFlukeIcon from '../../../public/assets/icons/black-fluke-icon.svg'

//NFT cards data
import { StatsNFTCardsData } from '../../../constants/stats-nft-cards-data/stats-nft-cards-data.js'

function page() {
  //active links controller using pathname hook
  const pathname = usePathname()
  //handle the live data toggle button
  const [toggled, setToggled] = useState()

  return (
    <div id='Stats-NFTS-fully-container'>
      {/* heading-text-container and DSCA component */}
      <div className='flex justify-between items-center mt-10'>
        <div className='ml-5'>
          <p className='font-semibold text-[30px] text-[#FFFFFF] leading-[36px]'>
            Stats
          </p>
        </div>

        <div>
          <DSCA />
        </div>
      </div>

      {/* pagination-list & search-bar  for this component */}
      <div id='' className='flex flex-col'>
        {/* heading-pagination-links */}
        <div className='flex justify-start items-center'>
          <nav id='' className='flex justify-start items-center mt-10 ml-5'>
            <ul className='flex justify-center items-center gap-10'>
              {StatsHeadingPaginationLinks.map((paginationLink) => (
                <li key={paginationLink.id}>
                  <Link href={paginationLink.href}>
                    <div
                      className={
                        pathname === paginationLink.href
                          ? 'flex justify-center items-center p-2 h-[40px] bg-[#b5b4b4] rounded-[10px]'
                          : ''
                      }
                    >
                      <button>
                        <p className='font-semibold text-[15px] text-[#000000] leading-[18px] dark:text-[#FFFFFF]'>
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

        {/* large-search-bar & second-pagination-selector & list-table fully container  */}
        <div className='flex flex-row-reverse justify-between items-center mt-10 ml-5 mr-5'>
          {/* Recently-Listed-button container */}
          <div className='flex justify-center items-center gap-2'>
            <div
              className='flex justify-between items-center w-[205px] h-[40px] bg-[#868484] rounded-[10px]'
              style={{
                boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.25)',
                padding: '10px',
              }}
            >
              <div>
                <p className='font-semibold text-[12px] text-[#000000] leading-[15px]'>
                  Recently listed
                </p>
              </div>

              <div>
                <Image src={BlackFlukeIcon} />
              </div>
            </div>
          </div>

          {/* large-search-bar & pagination-selector */}
          <div className='flex justify-center items-center'>
            {/* large-search-bar */}
            <div>
              <input
                className='relative flex justify-center items-center w-[76vw] h-[40px] bg-[#878585] rounded-[10px] pl-8 placeholder:font-semibold placeholder:text-[12px] placeholder:text-[#000000]'
                style={{}}
                placeholder='Search by NFTS'
              />

              <div className='absolute top-[267px] ml-3'>
                <Image src={BlackLargeSearchIcon} />
              </div>
            </div>
          </div>

          {/* pagination-selector-fully-container */}
          <div className='flex justify-center items-center gap-3'>
            <div className='flex justify-center items-center w-[40px] h-[40px] bg-[#878585] rounded-[10px]'>
              <button>
                <Image src={BlackBurgerMenuIcon} />
              </button>
            </div>

            {/* live-data-switch(on or off) container this section needs to change the data when the user clicked on it (logic not applied yet!!! -> TODO) */}
            <div className='flex justify-center items-center gap-5'>
              <div className='flex justify-center items-center'>
                <button
                  className={`toggle-btn ${toggled ? 'toggled' : ''}`}
                  onClick={() => setToggled(!toggled)}
                >
                  <div className='thumb'></div>
                </button>
              </div>

              <div className='flex justify-center items-center gap-3'>
                <p className='font-semibold text-[12px] text-[#b6b5b5] leading-[15px]'>
                  Live data
                </p>
                <div className='w-[5px] h-[5px] bg-[#474747] rounded-[100%]' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NFT-cards-section & BPT (blockChain-Price-Type) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '10vw 90vw',
        }}
      >
        {/* BPT-section-container */}
        <div className='flex flex-col justify-center items-center w-[245px] h-[400px] bg-white mt-12 ml-5'>
          {/* test- */}
          accordions section
        </div>

        {/* cards-section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-24 mt-7'>
          {StatsNFTCardsData.map((card) => (
            <div className=''>
              <div
                key={card.id}
                className='flex flex-col justify-center items-center w-[350px] h-[423px] bg-[#474747] cursor-pointer mt-7'
              >
                {/* card-image */}
                <div>
                  <Image src={card.NFTCardImage} width={350} height={300} />
                </div>
                {/* Name of the art section */}
                <div className='mt-1'>
                  <p className='font-semibold text-[20px] text-[#FFFFFF] leading-[25px]'>
                    {card.NFTCardName}
                  </p>
                </div>

                <div className='flex flex-col justify-start items-start w-[340px] mt-1 ml-1'>
                  {/* artist-name */}
                  <div className='flex justify-center items-center'>
                    <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                      {card.NFTArtistName}
                    </p>
                    <div className='ml-2'>
                      <Image src={card.NFTIcon} width={15} height={15} />
                    </div>
                  </div>
                  {/* collection-name */}
                  <div>
                    <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                      {card.NFTCollectionName}
                    </p>
                  </div>
                </div>

                {/* price */}
                <div className='flex justify-end items-end w-[340px] mb-3'>
                  <div className='flex justify-center items-center w-[60px] h-[15px] bg-[#D9D9D9]'>
                    <p className='font-semibold text-[10px] text-[#000000] leading-[12px]'>
                      {card.NFTCardPrice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page


