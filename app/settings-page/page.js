'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
    <div id='setting-page-fully-container' className=''>
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
        <div className='flex flex-col justify-center items-center w-full bg-[#474747] rounded-[10px] pt-5 pb-5'>
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
            <div className='flex justify-start items-center w-full border'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />s
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Profile
                </p>
              </div>
            </div>

            {/* menu-item-2 */}
            <div className='flex justify-start items-center w-full border'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />s
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Featured items
                </p>
              </div>
            </div>

            {/* menu-item-3 */}
            <div className='flex justify-start items-center w-full border'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />s
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Notifications
                </p>
              </div>
            </div>

            {/* menu-item-4 */}
            <div className='flex justify-start items-center w-full border'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />s
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Offers
                </p>
              </div>
            </div>

            {/* menu-item-5 */}
            <div className='flex justify-start items-center w-full border'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />s
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Account support
                </p>
              </div>
            </div>

            {/* menu-item-6 */}
            <div className='flex justify-start items-center w-full border'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />s
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Developer
                </p>
              </div>
            </div>

            {/* menu-item-7 */}
            <div className='flex justify-start items-center w-full border'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />s
              </div>

              <div className='ml-3'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Wallet
                </p>
              </div>
            </div>

            {/* menu-item-8 */}
            <div className='flex justify-start items-center w-full border'>
              <div className='flex justify-center items-center w-8 h-8 bg-[#c8c8c8] rounded-full'>
                <Image />s
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
          <div className='flex flex-col justify-center items-center border'>ss</div>

          {/* right-side-menu */}
          <div className='flex flex-col justify-center items-center border'>sss</div>
        </div>
      </div>
    </div>
  )
}

export default page

