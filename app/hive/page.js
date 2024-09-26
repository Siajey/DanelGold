'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets for this page
import HamburgerMenuIcon from '@/public/assets/icons/hive-page-white-small-hamburger-menu-icon.svg'
import HiveIcon from '@/public/assets/icons/hive-page-large-yellow-hive-icon.svg'
import HiveText from '@/public/assets/icons/Hive-page-large-yellow-hive-text.svg'

function page() {
  return (
    <div id='hive-page-fully-container' className='container mx-auto'>
      {/* container-grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '20vw 80vw',
          marginTop: '4rem',
        }}
      >
        {/* left-side-menu(GoldenChannels-GoldenGroups-Messages-MyChannels-MyGroups) */}
        <div className='flex flex-col justify-center items-center bg-[#474747] rounded-[10px] pt-5 pb-5'>
          {/* hamburger-menu-section for this menu container */}
          <div className='flex justify-start items-center w-full ml-3'>
            <Image src={HamburgerMenuIcon} />
          </div>

          {/* Hive-icon-name-section */}
          <div className='flex justify-items-center items-center gap-3 mt-10'>
            <Image src={HiveIcon} />
            <Image src={HiveText} />
          </div>

          {/* main-menu-section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              marginTop: '20px',
            }}
          >
            {/* left-side-of-this-menu */}
            <div className='flex flex-col justify-start items-start border-r-2 gap-5 p-1'>
              <p className='font-semibold text-[15px] text-[#c8c8c8] leading-[20px]'>
                Golden Channels
              </p>

              <p className='font-semibold text-[15px] text-[#c8c8c8] leading-[20px]'>
                Golden Groups
              </p>

              <p className='font-semibold text-[15px] text-[#c8c8c8] leading-[20px]'>
                Messages
              </p>

              <p className='font-semibold text-[15px] text-[#c8c8c8] leading-[20px]'>
                My Channels
              </p>

              <p className='font-semibold text-[15px] text-[#c8c8c8] leading-[20px]'>
                My Groups
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

