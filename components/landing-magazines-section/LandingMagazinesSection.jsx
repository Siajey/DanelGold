import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets for this page
import LandingPageMagazinesSectionImage1 from '../../public/assets/images/landing-page-magazines-section-image-1.svg'
import LandingPageMagazinesSectionImage2 from '../../public/assets/images/landing-page-magazines-section-image-2.svg'
import LandingPageMagazinesSectionImage3 from '../../public/assets/images/landing-page-magazines-section-image-3.svg'

//this component need to get data from backend API endpoint
function LandingMagazinesSection() {
  return (
    <div
      id='landing-magazines-section-fully-container'
      className='flex flex-col justify-center items-center mt-10'
    >
      {/* top-heading-text */}
      <p className='font-semibold text-[40px] text-[#FFFFFF] leading-[50px]'>
        Magazines
      </p>

      {/* magazines-section */}
      {/* magazine-1 */}
      <div
        className='p-14'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '50px',
        }}
      >
        <Image src={LandingPageMagazinesSectionImage1} />
        <div className='flex justify-end items-center'>
          <p className='font-light text-[20px] text-white leading-[40px]'>
            NFT stands for Non-Fungible Token.It is a type of digital asset that
            represents ownership or proof of authenticity of a unique item or
            piece of content, often using blockchain technology.
          </p>
        </div>
      </div>

      {/* magazine-2 */}
      <div className='pl-20 flex justify-between'>
        {/* texts-container */}
        <div className='flex flex-col justify-between w-[60%]'>
          {/* top-heading-text */}
          <div className='flex justify-end items-center text-end'>
            <p className='font-light text-[20px] text-white leading-[40px]'>
              NFT stands for Non-Fungible Token.It is a type of digital asset
              that represents ownership or proof of authenticity of a unique
              item or piece of content, often using blockchain technology.
            </p>
          </div>

          {/* bottom-text */}
          <div className='flex justify-end w-[75%]'>
            <p className='font-light text-[20px] text-white leading-[40px]'>
              NFT stands for Non-Fungible Token.It is a type of digital asset
              that represents ownership or proof of authenticity of a unique
              item or piece of content, often using blockchain technology.
            </p>
          </div>
        </div>
        {/* image-section */}
        <div className='flex justify-center items-center w-[40%]'>
          <Image src={LandingPageMagazinesSectionImage2} />
        </div>
      </div>

      {/* magazine-3 */}
      <div className='flex justify-center items-center w-full p-20'>
        <Image src={LandingPageMagazinesSectionImage3} />
      </div>
    </div>
  )
}

export default LandingMagazinesSection






