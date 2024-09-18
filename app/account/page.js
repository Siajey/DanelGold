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
import AccordionArrowUpIcon from '../../public/assets/icons/account-page-accordions-arrow-up-icon.svg'
import AccordionArrowDownIcon from '../../public/assets/icons/account-page-accordions-arrow-down-icon.svg'
import AccordionSearchIcon from '../../public/assets/icons/account-accordions-gray-small-search-icon.svg'

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
    <div id='user-account-page-fully-container'>
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
          <div className='flex justify-center items-center'>
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
              <Image src={MoreButtonIcon} />
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
          {/* left section of the grid container (accordions)  */}
          <div>
            {/* accordion-1 container */}
            <div className='accordion w-[90%]'>
              {/* accordion-heading-title-container */}
              <div className='flex justify-between items-center w-full pl-16 pr-10 mt-2'>
                <div className=''>
                  <button onClick={toggleAccordion} className='accordion-title'>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      Collections
                    </p>
                  </button>
                </div>

                <div className=''>
                  <Image src={AccordionArrowUpIcon} />
                </div>
              </div>
              {isOpen && (
                <div className='accordion-content'>
                  {/* accordion-content-container */}
                  <div className='flex flex-col justify-center items-center'>
                    {/* search-input-container */}
                    <div className='relative flex justify-center items-center w-[75%] ml-10'>
                      <input
                        typeof='search'
                        className='flex justify-center items-center pl-7 w-full h-[30px] text-white bg-transparent border border-[#FFFFFF] rounded-[10px] placeholder:font-semibold placeholder:text-[12px] placeholder:leading-[15px]'
                        style={{
                          boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.25)',
                        }}
                        placeholder='Search'
                      />

                      <div className='absolute inset-y-0 left-2 flex items-center'>
                        <Image src={AccordionSearchIcon} />
                      </div>
                    </div>

                    {/* texts */}
                    <div className='flex justify-between items-center w-[75%] ml-10 mt-5'>
                      <p className='font-semibold text-[12px] text-[#bcb9b9] leading-[15px]'>
                        COLLECTION
                      </p>
                      <p className='font-semibold text-[12px] text-[#bcb9b9] leading-[15px]'>
                        VALUE
                      </p>
                    </div>

                    {/* HR-bottom-line */}
                    <div className='w-[75%] border opacity-20 ml-10 mt-5 ' />
                  </div>
                </div>
              )}
              <style jsx>{`
                .accordion-title {
                  cursor: pointer;
                  padding: 10px;
                  width: 100%;
                  text-align: left;
                  border: none;
                  outline: none;
                  transition: background 0.3s;
                }
                .accordion-content {
                  padding: 10px;
                }
              `}</style>
            </div>

            {/* accordion-2 container */}
            <div className='accordion w-[90%]'>
              {/* accordion-heading-title-container */}
              <div className='flex justify-between items-center w-full pl-16 pr-10 mt-2'>
                <div className=''>
                  <button onClick={toggleAccordion} className='accordion-title'>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      Price
                    </p>
                  </button>
                </div>

                <div className=''>
                  <Image src={AccordionArrowUpIcon} />
                </div>
              </div>
              {isOpen && (
                <div className='accordion-content'>
                  {/* accordion-content-container */}
                  <div className='flex flex-col justify-center items-center'>
                    {/* search-input-container */}
                    <div className='flex justify-between items-center w-[75%] h-[30px] border rounded-[10px] ml-10 p-2'>
                      <div>
                        <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                          USD
                        </p>
                      </div>

                      <div>
                        <Image src={AccordionArrowDownIcon} />
                      </div>
                    </div>

                    {/* min to max  */}
                    <div className='flex justify-between items-center w-[75%] ml-10 mt-5'>
                      <div className='flex justify-center items-center w-[37%] h-[30px] border rounded-[10px] p-2'>
                        <p className='font-semibold text-[12px] text-[#bcb9b9] leading-[15px]'>
                          Min
                        </p>
                      </div>

                      <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                        TO
                      </p>

                      <div className='flex justify-center items-center w-[37%] h-[30px] border rounded-[10px] p-2'>
                        <p className='font-semibold text-[12px] text-[#bcb9b9] leading-[15px]'>
                          Max
                        </p>
                      </div>
                    </div>

                    {/* Apply-button-section */}
                    <div className='w-[75%] mt-3 ml-10'>
                      <button className='flex justify-center items-center w-full h-[30px] bg-[#BEBBBB] rounded-[10px] '>
                        <p className='font-semibold text-[15px] text-[#5f5d5d] leading-[20px]'>
                          Apply
                        </p>
                      </button>
                    </div>

                    {/* HR-bottom-line */}
                    <div className='w-[75%] border opacity-20 ml-10 mt-5 ' />
                  </div>
                </div>
              )}
              <style jsx>{`
                .accordion-title {
                  cursor: pointer;
                  padding: 10px;
                  width: 100%;
                  text-align: left;
                  border: none;
                  outline: none;
                  transition: background 0.3s;
                }
                .accordion-content {
                  padding: 10px;
                }
              `}</style>
            </div>

            {/* accordion-3 container */}
            <div className='accordion w-[90%]'>
              {/* accordion-heading-title-container */}
              <div className='flex justify-between items-center w-full pl-16 pr-10 mt-2'>
                <div className=''>
                  <button onClick={toggleAccordion} className='accordion-title'>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      Currency
                    </p>
                  </button>
                </div>

                <div className=''>
                  <Image src={AccordionArrowUpIcon} />
                </div>
              </div>
              {isOpen && (
                <div className='accordion-content'>
                  {/* accordion-content-container */}
                  <div className='flex flex-col justify-center items-center'>
                    {/* search-input-container */}
                    <div className='relative flex justify-center items-center w-[75%] ml-10'>
                      <input
                        typeof='search'
                        className='flex justify-center items-center pl-7 w-full h-[30px] text-white bg-transparent border border-[#FFFFFF] rounded-[10px] placeholder:font-semibold placeholder:text-[12px] placeholder:leading-[15px]'
                        style={{
                          boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.25)',
                        }}
                        placeholder='Search'
                      />

                      <div className='absolute inset-y-0 left-2 flex items-center'>
                        <Image src={AccordionSearchIcon} />
                      </div>
                    </div>

                    {/* ETH-WETH-section-container */}
                    <div className='flex flex-col justify-start items-start w-[75%] ml-10 mt-5'>
                      <label className='flex items-center'>
                        <input
                          type='checkbox'
                          checked={ETHBoxchecked}
                          onChange={handleETHBoxChange}
                          style={{ display: 'none' }}
                        />
                        <span style={checkboxStyle1}>
                          <span style={checkmarkStyle1}></span>
                        </span>
                        <span style={{ marginLeft: '8px' }}>
                          <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                            ETH
                          </p>
                        </span>
                      </label>

                      <label className='flex items-center mt-5'>
                        <input
                          type='checkbox'
                          checked={WETHBoxchecked}
                          onChange={handleWETHBoxChange}
                          style={{ display: 'none' }}
                        />
                        <span style={checkboxStyle2}>
                          <span style={checkmarkStyle2}></span>
                        </span>
                        <span style={{ marginLeft: '8px' }}>
                          <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                            WETH
                          </p>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}
              <style jsx>{`
                .accordion-title {
                  cursor: pointer;
                  padding: 10px;
                  width: 100%;
                  text-align: left;
                  border: none;
                  outline: none;
                  transition: background 1.3s;
                }
                .accordion-content {
                  padding: 10px;
                }
              `}</style>
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


