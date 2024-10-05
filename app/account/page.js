'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link.js'

//user-account-heading-pagination link data
import { UserAccountPagePaginationLinksData } from '../../constants/user-account-page-pagination-links-data/user-account-page-pagination-links-data.js'

//assets for this page
import HeroSectionSeaBgImage from '../../public/assets/images/user-account-page-hero-section-bg-image.svg'
import UserProfilePicture from '../../public/assets/images/account-page-user-profile-picture.svg'
//import HGFrame from '@/components/HG-Frame/HGFrame.jsx'
import ShareButtonIcon from '../../public/assets/icons/account-page-share-button-icon.svg'
import MoreButtonIcon from '../../public/assets/icons/account-page-more-button-icon.svg'

import CollectionsIcon from '@/public/assets/icons/account-page-collections-icon.svg'
import EventTypeIcon from '@/public/assets/icons/account-page-event-type-icon.svg'
import ChainsIcon from '@/public/assets/icons/account-page-chains-icon.svg'
import SmallWhiteCheckIcon from '@/public/assets/icons/account-page-small-white-select-check-icon.svg'

function page() {
  //active links controller for this page
  const pathname = usePathname()

  //accordions controller state and functionality
  const [isOpen, setIsOpen] = useState(false)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  //handle the ETH and WETH checkboxes functionality and styles
  const [ETHBoxchecked, setETHBoxchecked] = useState(false)
  const handleETHBoxChange = () => {
    setETHBoxchecked(!ETHBoxchecked)
  }

  const [WETHBoxchecked, setWETHBoxchecked] = useState(false)
  const handleWETHBoxChange = () => {
    setWETHBoxchecked(!WETHBoxchecked)
  }

  const checkboxStyle1 = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    border: '2px solid #FFFFFF',
    borderRadius: '4px',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: ETHBoxchecked ? '#ffcc05' : 'transparent',
    borderColor: ETHBoxchecked ? '#ffcc05' : '#FFFFFF',
    transition: 'background-color 0.2s, border-color 0.2s',
  }

  const checkboxStyle2 = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    border: '2px solid #FFFFFF',
    borderRadius: '4px',
    position: 'relative',
    cursor: 'pointer',
    backgroundColor: WETHBoxchecked ? '#ffcc05' : 'transparent',
    borderColor: WETHBoxchecked ? '#ffcc05' : '#FFFFFF',
    transition: 'background-color 0.2s, border-color 0.2s',
  }

  const checkmarkStyle1 = {
    content: '""',
    position: 'absolute',
    top: '2px',
    left: '6px',
    width: '6px',
    height: '12px',
    border: 'solid white',
    borderWidth: '0 2px 2px 0',
    transform: 'rotate(45deg)',
    opacity: ETHBoxchecked ? 1 : 0,
    transition: 'opacity 0.2s',
  }

  const checkmarkStyle2 = {
    content: '""',
    position: 'absolute',
    top: '2px',
    left: '6px',
    width: '6px',
    height: '12px',
    border: 'solid white',
    borderWidth: '0 2px 2px 0',
    transform: 'rotate(45deg)',
    opacity: WETHBoxchecked ? 1 : 0,
    transition: 'opacity 0.2s',
  }

  //controller for the hexagon frame
  /*   const [images, setImages] = useState([])

  useEffect(() => {
    // Replace with your API endpoint
    fetch('https://random.imagecdn.app/500/150')
      .then((response) => response.json())
      .then((data) => setImages(data.images))
  }, [])
 */

  return (
    <div id='user-account-page-fully-container' className=''>
      {/* hero-section for this page */}
      <div className='w-full mt-10 relative'>
        <Image className='w-full' src={HeroSectionSeaBgImage} />
      </div>

      {/* account-details section */}
      <div className='flex flex-col justify-center items-center'>
        {/* user-profile-picture-container */}
        <div className='flex justify-start items-start w-full absolute top-[23vw]'>
          <Image src={UserProfilePicture} />
        </div>

        {/* hexagon-frame-should-placed-here*/}
        {/* 
          <div>
            <h1>Hexagon Images</h1>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                border: '1px solid tomato',
              }}
            >
              {images.map((image, index) => (
                <HexagonImage key={index} imageUrl={image.url} />
              ))}
            </div>
          </div>
          */}

        {/* name-shareButton-moreButton container */}
        <div className='flex justify-between items-center w-[95vw] mt-10'>
          {/* user-name container */}
          <div className='flex justify-center items-center mt-5'>
            <p className='font-semibold text-[20px] text-[#b9b7b7] leading-[25px]'>
              Name
            </p>
          </div>
          {/* share and more button container */}
          <div className='flex justify-center items-center gap-2'>
            <button className='flex justify-center items-center w-[35px] h-[35px] bg-[#8c8888] rounded-[10px]'>
              <Image src={ShareButtonIcon} />
            </button>

            <button className='flex justify-center items-center w-[35px] h-[35px] bg-[#8c8888] rounded-[10px] gap-1'>
              <Image src={MoreButtonIcon} />
            </button>
          </div>
        </div>

        {/* pagination section for this page container(MyCollection-History-Created-Favorited) */}
        <div className='flex justify-start items-center w-[95vw]'>
          <nav id='' className='flex justify-start items-center mt-5'>
            <ul className='flex justify-center items-center gap-10'>
              {UserAccountPagePaginationLinksData.map((paginationLink) => (
                <li key={paginationLink.id}>
                  <Link href={paginationLink.paginationLinkHref}>
                    <div
                      className={
                        pathname === paginationLink.paginationLinkHref
                          ? 'flex justify-center items-center p-2 h-[40px] bg-[#b5b4b4] rounded-[10px]'
                          : ''
                      }
                    >
                      <button>
                        <p className='font-semibold text-[15px] text-[#000000] leading-[18px] dark:text-[#FFFFFF]'>
                          {paginationLink.paginationLinkName}
                        </p>
                      </button>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className='w-[95vw] h-[1px] bg-[#8e8a8a] mt-7' />
      </div>

      {/* user-account-page-grid-section (baste on user choice this section data should change just like a pagination functionality) */}
      <div className='flex justify-center items-center'>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '20vw 80vw',
            width: '100vw',
          }}
        >
          {/* left section of the grid container (item-selection-menu)  */}
          <div className='flex flex-col items-center bg-[#474747] rounded-[10px] px-5 py-5 gap-5'>
            {/* item-1 */}
            <div className='flex justify-start items-start w-full'>
              <button className='flex justify-center items-center gap-3'>
                <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                  <Image src={CollectionsIcon} />
                </div>

                <div className='flex justify-center items-center'>
                  <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                    Collections
                  </p>
                </div>
              </button>
            </div>

            {/* item-2 */}
            <div className='flex justify-start items-start w-full'>
              <button className='flex justify-center items-center gap-3'>
                <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                  <Image src={EventTypeIcon} />
                </div>

                <div className='flex justify-center items-center'>
                  <p className='font-semibold text-[15px] text-[#c6c6c6] leading-[20px]'>
                    Event Type
                  </p>
                </div>
              </button>
            </div>

            {/* item-3 */}
            <div className='flex justify-start items-start w-full'>
              <button className='flex justify-center items-center gap-3'>
                <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                  <Image src={ChainsIcon} />
                </div>

                <div className='flex justify-center items-center'>
                  <p className='font-semibold text-[15px] text-[#c6c6c6] leading-[20px]'>
                    Chains
                  </p>
                </div>
              </button>
            </div>

            {/* second-section of this select item menu */}
            <div className='flex flex-col justify-start items-start w-full border-t rounded-[10px] mt-5'>
              {/* top-heading-text */}
              <p className='font-semibold text-[20px] text-[#FFFFFF] leading-[25px] mt-5'>
                Collections
              </p>

              {/* collections-items */}
              <div className='flex flex-col justify-between items-center w-full mt-5 gap-7'>
                {/* item-1 */}
                <div className='flex justify-between items-center w-full'>
                  <button className='flex justify-center items-center'>
                    <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                      All
                    </p>
                  </button>

                  <div className='flex justify-center items-center'>
                    <Image src={SmallWhiteCheckIcon} />
                  </div>
                </div>

                {/* item-2 */}
                <div className='flex justify-between items-center w-full'>
                  <button className='flex justify-center items-center'>
                    <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                      PFPs
                    </p>
                  </button>

                  <div className='flex justify-center items-center'>
                    <Image src={SmallWhiteCheckIcon} />
                  </div>
                </div>

                {/* item-3 */}
                <div className='flex justify-between items-center w-full'>
                  <button className='flex justify-center items-center'>
                    <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                      Painting
                    </p>
                  </button>

                  <div className='flex justify-center items-center'>
                    <Image src={SmallWhiteCheckIcon} />
                  </div>
                </div>

                {/* item-4 */}
                <div className='flex justify-between items-center w-full'>
                  <button className='flex justify-center items-center'>
                    <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                      Sculpture
                    </p>
                  </button>

                  <div className='flex justify-center items-center'>
                    <Image src={SmallWhiteCheckIcon} />
                  </div>
                </div>

                {/* item-5 */}
                <div className='flex justify-between items-center w-full'>
                  <button className='flex justify-center items-center'>
                    <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                      Photography
                    </p>
                  </button>

                  <div className='flex justify-center items-center'>
                    <Image src={SmallWhiteCheckIcon} />
                  </div>
                </div>

                {/* item-6 */}
                <div className='flex justify-between items-center w-full'>
                  <button className='flex justify-center items-center'>
                    <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                      Memberships
                    </p>
                  </button>

                  <div className='flex justify-center items-center'>
                    <Image src={SmallWhiteCheckIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right section of the grid container */}
          <div className='flex flex-col justify-start items-start'>
            {/* items-counter */}
            <div className='mt-5'>
              <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                0 Items
              </p>
            </div>
            {/* search-result container */}
            <div className='flex flex-col justify-center items-center w-[78vw] p-[80px] border rounded-[5px] mt-5'>
              <p className='font-medium text-[25px] text-[#FFFFFF] leading-[30px]'>
                No items found for this search
              </p>

              <button className='w-[195px] h-[38px] bg-[#bebaba] rounded-[10px] mt-10'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Back to all items
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page



