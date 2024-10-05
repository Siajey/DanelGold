'use client'

import React from 'react'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

//assets for this page
import ProfileIcon from '@/public/assets/icons/settings-page-profile-icon.svg'
import FeaturedItemsIcon from '@/public/assets/icons/settings-page-featured-items-icon.svg'
import NotificationsIcon from '@/public/assets/icons/settings-page-notifications-icon.svg'
import OffersIcon from '@/public/assets/icons/settings-page-offers.svg'
import AccountSupportIcon from '@/public/assets/icons/settings-page-account-support-icon.svg'
import WalletIcon from '@/public/assets/icons/settings-page-wallet-icon.svg'
import KYCIcon from '@/public/assets/icons/settings-page-kyc-icon.svg'

function page() {
  return (
    <div id='setting-page-fully-container' className='container mx-auto'>
      {/* grid-container */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '15vw 85vw',
          gap: '2rem',
          marginTop: '3rem',
        }}
      >
        {/* left-side-menu-section */}
        <div className='flex flex-col justify-center items-center w-full bg-[#474747] rounded-[10px] py-5'>
          {/* top-heading-text */}
          <div className='flex justify-center items-center'>
            <p className='font-semibold text-[20px] text-[#FFFFFF] leading-[25px]'>
              Settings
            </p>
          </div>
          {/* hr-line */}
          <div className='w-[80%] h-[1px] bg-[#FFFFFF] opacity-70 mt-3' />

          {/* menulist(pfnoadwk)-container-section */}
          <div className='flex flex-col justify-center items-center mt-5 w-[80%] gap-5'>
            {/* menu-item-1 */}
            <div className='flex justify-start items-center w-full'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image src={ProfileIcon} />
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Profile
                </p>
              </div>
            </div>

            {/* menu-item-2 */}
            <div className='flex justify-start items-center w-full'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image src={FeaturedItemsIcon} />
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Featured items
                </p>
              </div>
            </div>

            {/* menu-item-3 */}
            <div className='flex justify-start items-center w-full'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image src={NotificationsIcon} />
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Notifications
                </p>
              </div>
            </div>

            {/* menu-item-4 */}
            <div className='flex justify-start items-center w-full'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image src={OffersIcon} />
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Offers
                </p>
              </div>
            </div>

            {/* menu-item-5 */}
            <div className='flex justify-start items-center w-full'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image src={AccountSupportIcon} />
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Account support
                </p>
              </div>
            </div>

            {/* menu-item-6 */}
            <div className='flex justify-start items-center w-full'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Developer
                </p>
              </div>
            </div>

            {/* menu-item-7 */}
            <div className='flex justify-start items-center w-full'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image src={WalletIcon} />
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Wallet
                </p>
              </div>
            </div>

            {/* menu-item-8 */}
            <div className='flex justify-start items-center w-full'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image src={KYCIcon} />
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  KYC
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right-side-result-box */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '10vw 90vw',
            backgroundColor: '#474747',
            borderRadius: '10px',
          }}
        >
          {/* left-side-menu*/}
          <div className='flex flex-col items-center py-5'>
            {/* top-heading-dynamic-text */}
            <div className='flex justify-center items-center w-[90%]'>
              <p className='font-semibold text-[20px] text-[#FFFFFF] leading-[25px]'>
                Profile
              </p>
            </div>
            {/* hr-line */}
            <div className='w-[80%] h-[1px] bg-[#FFFFFF] opacity-70 mt-3' />
            {/* pagination-links-section */}
            <div className='flex-col flex justify-center items-start mt-5 gap-7'>
              {/* menu-item-1 */}
              <button>
                <p className='font-normal text-[12px] text-[#7e7e7e] leading-[15px]'>
                  Social Connections
                </p>
              </button>

              {/* menu-item-2 */}
              <button>
                <p className='font-normal text-[12px] text-[#7e7e7e] leading-[15px]'>
                  Profile & Banner
                </p>
              </button>

              {/* menu-item-3 */}
              <button>
                <p className='font-normal text-[12px] text-[#7e7e7e] leading-[15px]'>
                  Username
                </p>
              </button>

              {/* menu-item-4 */}
              <button>
                <p className='font-normal text-[12px] text-[#7e7e7e] leading-[15px]'>
                  Biography
                </p>
              </button>

              {/* menu-item-5 */}
              <button>
                <p className='font-normal text-[12px] text-[#7e7e7e] leading-[15px]'>
                  Email
                </p>
              </button>
            </div>
          </div>

          {/* right-side-menu */}
          <div className='flex flex-col items-start border-[#7e7e7e] border-l-2 py-5'>
            <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>Email Address</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page


