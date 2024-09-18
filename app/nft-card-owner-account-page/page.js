'use client'

import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets for this page
import NFTOwnerProfileHexagonFrame from '../../public/assets/images/nft-owner-account-page-user-hexagon-image.svg'
import SmallWhiteHiveIcon from '../../public/assets/icons/small-white-hive-icon.svg'
import SmallWhiteXIcon from '../../public/assets/icons/small-white-x-icon.svg'
import SmallWhiteInstagramIcon from '../../public/assets/icons/small-white-instagram-icon.svg'
import SmallWhiteWebIcon from '../../public/assets/icons/small-white-web-icon.svg'
import SmallWhiteTikokIcon from '../../public/assets/icons/small-white-tiktok-icon.svg'
import SmallWhitePinterestIcon from '../../public/assets/icons/small-white-pinterest-icon.svg'
import SmallWhiteEmailIcon from '../../public/assets/icons/small-white-email-icon.svg'
import OpenAccordionsButtonBlackIcon from '../../public/assets/icons/nft-owner-page-open-accordions-button-black-icon.svg'

//pages that we have to display
const itemsPerPage = 3

function page() {
  //states to handle the pagination links (items-activity-about)
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  // state and functionality to handle the on or off button
  const [isOn, setIsOn] = useState(false)
  const toggleSwitch = () => {
    setIsOn(!isOn)
  }

  // Fetch fake data using axios
  useEffect(() => {
    // Fetch data using axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://picsum.photos/v2/list', {
          params: { limit: 15 }, // Adjust the number of items to fetch
        })
        setItems(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const startIndex = (currentPage - 1) * itemsPerPage
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div id='nft-card-owner-account-page-fully-container' className=''>
      {/* hero-section(fully-container) for this page */}
      <div
        id='nft-card-owner-account-page-profile--section-container'
        className='relative'
        style={{
          width: '100%',
          height: '400px', // Ensure height is set to make the image visible
          backgroundImage:
            "url('/assets/images/nft-owner-account-page-hero-bg-image.svg')",
          backgroundSize: 'cover', // Optional: ensure the image covers the entire div
          backgroundPosition: 'center', // Optional: center the image
        }}
      >
        {/* user-profile-image and (account-name-account-username) & socials fully container */}
        <div className='absolute top-[10vw] ml-5'>
          {/* user-profile-image */}
          <div>
            <Image src={NFTOwnerProfileHexagonFrame} />
          </div>
          {/* user-name and socials */}
          <div className='flex justify-center items-center mt-3'>
            <p className='font-semibold text-[20px] text-[#FFFFFF] leading-[25px]'>
              Account Name
            </p>
            {/* small-hr-line */}
            <div className='w-[20px] h-[1px] bg-[#FFFFFF] rotate-90' />
            <div className='flex justify-center items-center gap-5'>
              <Link href='/'>
                <Image src={SmallWhiteHiveIcon} />
              </Link>
              <Link href='/'>
                <Image src={SmallWhiteXIcon} />
              </Link>
              <Link href='/'>
                <Image src={SmallWhiteInstagramIcon} />
              </Link>
              <Link href='/'>
                <Image src={SmallWhiteWebIcon} />
              </Link>
              <Link href='/'>
                <Image src={SmallWhiteTikokIcon} />
              </Link>
              <Link href='/'>
                <Image src={SmallWhitePinterestIcon} />
              </Link>
              <Link href='/'>
                <Image src={SmallWhiteEmailIcon} />
              </Link>
            </div>
          </div>
          {/* account-username-container */}
          <div className='flex justify-start items-start w-full mt-3'>
            <p className='font-normal text-[12px] text-[#c4c7cd] leading-[15px]'>
              Account Username
            </p>
          </div>
        </div>
      </div>

      {/* about-this-account-fully-container */}
      <div className='flex flex-col justify-start items-start w-full ml-10 mt-10'>
        <p className='font-medium text-[12px] text-[#FFFFFF] leading-[15px]'>
          About this account
        </p>

        {/* details-for-this-account-section */}
        <div className='flex justify-center items-center mt-10'>
          <p className='font-normal text-[12px] text-[#b9b7b7] leading-[13px]'>
            Items
          </p>
          <p className='font-bold text-[15px] text-[#b9b7b7] leading-[13px] ml-2'>
            5,145
          </p>
          <div className='w-[5px] h-[5px] bg-[#b9b7b7] rounded-[100%] ml-2' />

          <p className='font-normal text-[12px] text-[#b9b7b7] leading-[13px] ml-5'>
            Created
          </p>
          <p className='font-bold text-[15px] text-[#b9b7b7] leading-[13px] ml-2'>
            Mar 2023
          </p>
          <div className='w-[5px] h-[5px] bg-[#b9b7b7] rounded-[100%] ml-2' />

          <p className='font-normal text-[12px] text-[#b9b7b7] leading-[13px] ml-5'>
            Creator earnings
          </p>
          <p className='font-bold text-[15px] text-[#b9b7b7] leading-[13px] ml-2'>
            10%
          </p>
          <div className='w-[5px] h-[5px] bg-[#b9b7b7] rounded-[100%] ml-2' />

          <p className='font-normal text-[12px] text-[#b9b7b7] leading-[13px] ml-5'>
            Chain
          </p>
          <p className='font-bold text-[15px] text-[#b9b7b7] leading-[13px] ml-2'>
            Ethereum
          </p>
        </div>

        {/* pagination for this page (Items-Activity-About) */}
        <div className='fle justify-center items-center mt-10'>
          {/* pagination-buttons-container */}
          <div className=''>
            <button
              className={`w-[55px] h-[40px] ${
                currentPage === 1 ? 'bg-[#b9b7b7] rounded-[10px]' : ''
              }`}
              onClick={() => handlePageChange(1)}
            >
              <p
                className={`${
                  currentPage === 1
                    ? 'font-medium text-[12px] text-[#000000] leading-[15px]'
                    : 'font-medium text-[12px] text-[#FFFFFF] leading-[15px]'
                }`}
              >
                Items
              </p>
            </button>

            <button
              className={`w-[55px] h-[40px] ml-10 ${
                currentPage === 2 ? 'bg-[#b9b7b7] rounded-[10px]' : ''
              }`}
              onClick={() => handlePageChange(2)}
            >
              <p
                className={`${
                  currentPage === 2
                    ? 'font-medium text-[12px] text-[#000000] leading-[15px]'
                    : 'font-medium text-[12px] text-[#FFFFFF] leading-[15px]'
                }`}
              >
                Activity
              </p>
            </button>

            <button
              className={`w-[55px] h-[40px] ml-10 ${
                currentPage === 3 ? 'bg-[#b9b7b7] rounded-[10px]' : ''
              }`}
              onClick={() => handlePageChange(3)}
            >
              <p
                className={`${
                  currentPage === 3
                    ? 'font-medium text-[12px] text-[#000000] leading-[15px]'
                    : 'font-medium text-[12px] text-[#FFFFFF] leading-[15px]'
                }`}
              >
                About
              </p>
            </button>
          </div>

          {/* hr-line */}
          <div className='w-[94vw] h-[1px] bg-[#b9b7b7] mt-3' />

          {/*accordionMoodButton-onOrOffSwitchButton-searchbar-filterPriceDropDown fully-container */}
          <div className='flex justify-between items-center w-[94vw] h-[7vh] border mt-3'>
            {/* left-side of this container (accordionModeButton-onOrOffSwitchButton-ResultText) */}
            <div className='flex justify-center items-center'>
              {/* open-accordions-button */}
              <button className='flex justify-center items-center w-[45px] h-[40px] bg-[#8e8a8a] rounded-[10px]'>
                <Image src={OpenAccordionsButtonBlackIcon} />
              </button>

              {/* on-or-off-switch-button */}
              <div
                style={{
                  display: 'inline-block',
                  cursor: 'pointer',
                  width: '2.8vw',
                  height: '3vh',
                  borderRadius: '20px',
                  backgroundColor: isOn ? '#ffcc05' : '#ccc',
                  position: 'relative',
                  transition: 'background-color 0.3s ease',
                  marginLeft: '10px',
                }}
                onClick={toggleSwitch}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: isOn ? '25px' : '0',
                    marginLeft: '5px',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                    transition: 'left 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  <p
                    className={`${
                      isOn
                        ? 'text-black text-[9px] text-center'
                        : 'text-black text-[9px] text-center'
                    }`}
                  >
                    {isOn ? 'ON' : 'OFF'}
                  </p>
                </div>
              </div>

              {/* results-section-container */}
              <div className='flex justify-center items-center ml-5'>
                <p className='font-semibold text-[12px] text-[#aeacac] leading-[15px]'>
                  9,145 results
                </p>
              </div>

              {/* large-center-search-box-container */}
              <div className='flex justify-center items-center w-[70vw] ml-5 border'>
                    <input
                      type='search'
                      className='w-full h-[]border'
                      style={{}}
                      placeholder='Search by name or trait '
                    />
                    
              </div>
            </div>
          </div>

          {/* result of each pagination button fully container */}
          <div className=''>
            {selectedItems.map((item) => (
              <div key={item.id}>
                <img
                  src={item.download_url}
                  alt={item.author}
                  style={{ width: '40%' }}
                />
                <h3>{item.author}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page



