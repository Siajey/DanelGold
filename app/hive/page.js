'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//data for this page
import { DynamicWhiteMenuImages } from '@/constants/hive-page-dynamic-right-side-menu/hive-page-dynamic-right-side-menu'

//assets for this page
import HamburgerMenuIcon from '@/public/assets/icons/hive-page-white-small-hamburger-menu-icon.svg'
import HiveIcon from '@/public/assets/icons/hive-page-large-yellow-hive-icon.svg'
import HiveText from '@/public/assets/icons/Hive-page-large-yellow-hive-text.svg'
import HexagonFrame from '@/public/assets/icons/hive-page-left-menu-hexagon-icon.svg'
import MoreButtonIcon from '@/public/assets/icons/hive-page-more-items-button-icon.svg'
import GoldenCHannelImage from '@/public/assets/images/hive-pagegolden-channel-image.svg'
import ChannelOwnerImage from '@/public/assets/images/hive-page-channel-owner-image.svg'
import MemberListImage1 from '@/public/assets/images/hive-page-members-list-image-1.svg'
import MemberListImage2 from '@/public/assets/images/hive-page-members-list-image-2.svg'

function page() {
  return (
    <div id='hive-page-fully-container' className='container mx-auto'>
      {/* container-grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '27% auto',
          marginTop: '4rem',
          gap: '1%',
        }}
      >
        {/* left-side-menu(GoldenChannels-GoldenGroups-Messages-MyChannels-MyGroups) */}
        <div className='flex flex-col  bg-[#474747] rounded-[10px]'>
          {/* hamburger-menu-section for this menu container */}
          <div className='flex justify-start items-center w-full mt-5 ml-5'>
            <button>
              <Image src={HamburgerMenuIcon} />
            </button>
          </div>

          {/* Hive-icon-name-section */}
          <div className='flex justify-center items-center gap-3 mt-10'>
            <Image src={HiveIcon} />
            <Image src={HiveText} />
          </div>

          {/* main-menu-section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '44% 56%',
              marginTop: '20px',
            }}
          >
            {/* left-section-of-this-menu */}
            <div className='flex flex-col justify-start items-start gap-5 ml-2'>
              <p className='font-semibold text-[15px] text-[#c8c8c8] leading-[20px] whitespace-nowrap'>
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

            {/* right-section-of-this-menu */}
            <div className='flex flex-col justify-start items-start gap-5 p-1 ml-2 border-l-2'>
              {/* right-menu-item-1(golden-channels) */}
              <div className='flex-col flex justify-center items-center ml-3 gap-5'>
                {/* item-1 */}
                <div className='flex justify-start items-start gap-2'>
                  {/* image-section */}
                  <div className='flex justify-center items-center'>
                    <Image src={HexagonFrame} />
                  </div>

                  {/* text-date-section */}
                  <div className='flex flex-col justify-start items-start'>
                    <p className='font-semibold text-[10px] text-[#FFFFFF] leading-[15px] whitespace-nowrap'>
                      Golden Groups Name
                    </p>

                    <p className='font-normal text-[8px] text-[#FFFFFF] leading-[10px] mt-1'>
                      Members : 2,356
                    </p>
                  </div>
                </div>
                {/* item-2 */}
                <div className='flex justify-start items-start gap-2'>
                  {/* image-section */}
                  <div className='flex justify-center items-center'>
                    <Image src={HexagonFrame} />
                  </div>

                  {/* text-date-section */}
                  <div className='flex flex-col justify-start items-start'>
                    <p className='font-semibold text-[10px] text-[#FFFFFF] leading-[15px] whitespace-nowrap'>
                      Golden Groups Name
                    </p>

                    <p className='font-normal text-[8px] text-[#FFFFFF] leading-[10px] mt-1'>
                      Members : 2,356
                    </p>
                  </div>
                </div>

                {/* item-3 */}
                <div className='flex justify-start items-start gap-2'>
                  {/* image-section */}
                  <div className='flex justify-center items-center'>
                    <Image src={HexagonFrame} />
                  </div>

                  {/* text-date-section */}
                  <div className='flex flex-col justify-start items-start'>
                    <p className='font-semibold text-[10px] text-[#FFFFFF] leading-[15px] whitespace-nowrap'>
                      Golden Groups Name
                    </p>

                    <p className='font-normal text-[8px] text-[#FFFFFF] leading-[10px] mt-1'>
                      Members : 2,356
                    </p>
                  </div>
                </div>

                {/* item-4 */}
                <div className='flex justify-start items-start gap-2'>
                  {/* image-section */}
                  <div className='flex justify-center items-center'>
                    <Image src={HexagonFrame} />
                  </div>

                  {/* text-date-section */}
                  <div className='flex flex-col justify-start items-start'>
                    <p className='font-semibold text-[10px] text-[#FFFFFF] leading-[15px] whitespace-nowrap'>
                      Golden Groups Name
                    </p>

                    <p className='font-normal text-[8px] text-[#FFFFFF] leading-[10px] mt-1'>
                      Members : 2,356
                    </p>
                  </div>
                </div>

                {/* item-4 */}
                <div className='flex justify-start items-start gap-2'>
                  {/* image-section */}
                  <div className='flex justify-center items-center'>
                    <Image src={HexagonFrame} />
                  </div>

                  {/* text-date-section */}
                  <div className='flex flex-col justify-start items-start'>
                    <p className='font-semibold text-[10px] text-[#FFFFFF] leading-[15px] whitespace-nowrap'>
                      Golden Groups Name
                    </p>

                    <p className='font-normal text-[8px] text-[#FFFFFF] leading-[10px] mt-1'>
                      Members : 2,356
                    </p>
                  </div>
                </div>

                {/* item-5 */}
                <div className='flex justify-start items-start gap-2'>
                  {/* image-section */}
                  <div className='flex justify-center items-center'>
                    <Image src={HexagonFrame} />
                  </div>

                  {/* text-date-section */}
                  <div className='flex flex-col justify-start items-start'>
                    <p className='font-semibold text-[10px] text-[#FFFFFF] leading-[15px] whitespace-nowrap'>
                      Golden Groups Name
                    </p>

                    <p className='font-normal text-[8px] text-[#FFFFFF] leading-[10px] mt-1'>
                      Members : 2,356
                    </p>
                  </div>
                </div>
              </div>

              {/* right-menu-item-2(golden-groups) */}
              <div className='flex justify-center items-center'></div>

              {/* right-menu-item-3(messages) */}
              <div className='flex justify-center items-center'></div>

              {/* right-menu-item-4(my channels) */}
              <div className='flex justify-center items-center'></div>

              {/* right-menu-item-5(my groups) */}
              <div className='flex justify-center items-center'></div>
            </div>
          </div>
        </div>

        {/* right-side-dynamic-box(chat-box and beyond) */}
        <div className='flex flex-col justify-center items-center bg-[#474747] rounded-[10px]'>
          {/* top-heading-text */}
          <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px] mt-3'>
            Golden Channel Name
          </p>
          {/* hr-line */}
          <div className='w-[95%] h-[1px] bg-[#f2f2f2] mt-5' />

          {/* flex-section for this section */}
          <div className='flex justify-between w-full'>
            {/* dynamic-menu-box-left-side*/}
            <div className='flex flex-col justify-center w-[80%]'>s</div>

            {/* static-menu-box-right-side (post-link-file)*/}
            <div className='flex flex-col justify-center items-center w-[30%] bg-[#FFFFFF] rounded-[4px] my-5 mx-5 p-5'>
              {/* more... section of this box */}
              <div className='flex justify-end items-end w-full mr-5'>
                <button>
                  <Image src={MoreButtonIcon} />
                </button>
              </div>

              {/* image-title-members-container */}
              <div className='flex flex-col justify-center items-center'>
                <Image src={GoldenCHannelImage} />
                <p className='font-semibold text-[15px] text-[#000000] leading-[20px]'>
                  Golden Channel Name
                </p>
                <p className='font-semibold text-[10px] text-[#4d4d4d] leading-[10px]'>
                  Members : 2,653
                </p>
              </div>

              {/* post-link-file section */}
              <div className='flex justify-center items-center w-full border-t border-b border-black gap-7 mt-2'>
                <button>
                  <p className='font-semibold text-[15px] text-[#]'>Post</p>
                </button>
                <button>
                  <p className='font-semibold text-[15px] text-[#]'>Link</p>
                </button>
                <button>
                  <p className='font-semibold text-[15px] text-[#]'>File</p>
                </button>
              </div>

              {/* cards-section */}
              <div className='grid grid-cols-4 mt-3 gap-2'>
                {DynamicWhiteMenuImages.map((image) => (
                  <Image src={image.imageUrl} width={35} height={35} />
                ))}
              </div>

              {/* share information-add to favorite - leave channel */}
              <div className='flex flex-col justify-start items-start w-full mt-5  gap-2 border-black border-t border-b p-3'>
                <button>
                  <p className='font-semibold text-[13px] text-[#000000] leading-[15px]'>
                    Share information
                  </p>
                </button>

                <button>
                  <p className='font-semibold text-[13px] text-[#000000] leading-[15px]'>
                    Add to favorite
                  </p>
                </button>

                <button>
                  <p className='font-semibold text-[13px] text-[#AA0000] leading-[15px]'>
                    Leave Channel
                  </p>
                </button>
              </div>

              {/* owner-admin-section */}
              <div className='flex justify-between items-center w-full mt-2 p-1 gap-10'>
                {/* owner */}
                <div className='flex justify-center items-center ml-1 gap-1'>
                  <p className='font-extrabold text-[10px] text-[#000000] leading-[10px]'>
                    Owner
                  </p>
                  <Image src={ChannelOwnerImage} />
                  <p className='font-extrabold text-[10px] text-[#000000] leading-[10px]'>
                    Username
                  </p>
                </div>

                {/* admin */}
                <div className='flex justify-center items-center ml-1 gap-1'>
                  <p className='font-extrabold text-[10px] text-[#000000] leading-[10px]'>
                    Admin
                  </p>
                  <Image src={ChannelOwnerImage} />
                  <p className='font-extrabold text-[10px] text-[#000000] leading-[10px]'>
                    Username
                  </p>
                </div>
              </div>

              {/* members-list-section*/}
              <div className='flex flex-col justify-start items-start w-[90%]'>
                <p className='font-semibold text-[15px] text-[#000000] leading-[15px] mt-3'>
                  Members List
                </p>

                {/* members-list-more-button */}
                <div className='flex justify-center items-center gap-7 mt-2'>
                  {/* images-section */}
                  <div className='inline-flex'>
                    <Image src={MemberListImage1} className='-mr-5' />
                    <Image src={MemberListImage2} className='-mr-5' />
                    <Image src={MemberListImage1} className='-mr-5' />
                    <Image src={MemberListImage2} className='-mr-5' />
                    <Image src={MemberListImage1} className='-mr-5' />
                    <Image src={MemberListImage2} className='-mr-5' />
                    <Image src={MemberListImage1} className='-mr-5' />
                    <Image src={MemberListImage2} className='-mr-5' />
                  </div>
                  {/* more-button-section */}
                  <button>
                    <Image src={MoreButtonIcon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page