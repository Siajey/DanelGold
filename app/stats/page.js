'use client'

//handle the active links
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

//components for this page
import DSCA from '@/components/DSCA-component/DSCA'

//pagination links data for this page (collections-marketplaces-nfts-users)
import { StatsHeadingPaginationLinks } from '../../constants/stats-heading-pagination-links/stats-heading-pagination-links'

//assets for this page
import BlackLargeSearchIcon from '../../public/assets/icons/black-large-search-bar-icon.svg'
import WhiteLargeSearchIcon from '../../public/assets/icons/white-large-search-bar-icon.svg'
import BlackBurgerMenuIcon from '../../public/assets/icons/black-burger-menu-icon.svg'

import StatsCollectionsPageListComponent from '@/components/StatsCollectionsPageListComponent/StatsCollectionsPageListComponent'

function page() {
  //active links controller using pathname hook
  const pathname = usePathname()

  return (
    <div id='Stats-fully-container'>
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
                          ? 'flex justify-center items-center w-[102px] h-[40px] bg-[#4d4d4d] rounded-[10px]'
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
        <div className='flex flex-row-reverse justify-between items-center mt-10 mr-20 ml-5'>
          {/* large-search-bar & pagination-selector */}
          <div className='flex justify-center items-center'>
            {/* large-search-bar */}
            <div>
              <input
                className='relative flex justify-center items-center w-[81vw] h-[40px] bg-[#878585] rounded-[10px] pl-8 placeholder:font-semibold placeholder:text-[12px] placeholder:text-[#000000]'
                style={{}}
                placeholder='Search by collection'
              />

              <div className='absolute top-[253px] ml-3'>
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

            <div className='flex justify-center items-center w-[185px] h-[40px] bg-[#878585] rounded-[10px] gap-5'>
              <button>
                <div className='flex justify-center items-center w-[40px] h-[30px] bg-[#FFFFFF] rounded-[10px]'>
                  <p className='font-semibold text-[12px] text-[#000000] leading-[15px]'>
                    1h
                  </p>
                </div>
              </button>

              <button>
                <p className='font-semibold text-[12px] text-[#000000] leading-[15px]'>
                  1d
                </p>
              </button>

              <button>
                <p className='font-semibold text-[12px] text-[#000000] leading-[15px]'>
                  7d
                </p>
              </button>

              <button>
                <p className='font-semibold text-[12px] text-[#000000] leading-[15px]'>
                  30d
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* list-component for this page */}
      <div>
        <StatsCollectionsPageListComponent/>
      </div>
    </div>
  )
}

export default page
