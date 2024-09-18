import React from 'react'
import Image from 'next/image'

//assets for this page
import AboutUsPageHeroSectionRightSideYellowImage from '../../public/assets/images/about-us-page-hero-section-right-side-yellow-image.svg'
import YellowVolumeIcon from '../../public/assets/icons/about-us-page-large-yellow-volume-icon.svg'
import YellowPictureIcon from '../../public/assets/icons/about-us-page-large-yellow-picture-icon.svg'
import YellowCollectionIcon from '../../public/assets/icons/about-us-page-large-yellow-collection-icon.svg'
import YellowPersonIcon from '../../public/assets/icons/about-us-page-large-yellow-person-icon.svg'

function page() {
  return (
    <div id='about-us-page-fully-container'>
      {/* grid-section */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          marginTop: '150px',
          marginLeft: '50px',
          marginRight: '50px',
          gap: '100px',
        }}
      >
        {/* left-side of this container (text) */}
        <div className='flex flex-col justify-start items-start w-full'>
          <p className='font-bold text-[25px] text-[#FFFFFF] leading-[30px]'>
            Building an open digital economy
          </p>

          <p className='font-normal text-[15px] text-[#FFFFFF] leading-[35px] mt-5'>
            At Danel Gold , we're excited about a brand new type of digital good
            called a non-fungible token, or NFT. NFTs have exciting new
            properties: they’re unique, provably scarce, tradeable, and usable
            across multiple applications. Just like physical goods, you can do
            whatever you want with them! You could throw them in the trash, gift
            them to a friend across the world, or go sell them on an open
            marketplace. But unlike physical goods, they're armed with all the
            programmability of digital goods.
          </p>

          <p className='font-normal text-[15px] text-[#FFFFFF] leading-[35px] mt-10'>
            A core part of our vision is that open protocols like Ethereum and
            interoperable standards like ERC-721 and ERC-1115 will enable
            vibrant new economies. We're building tools that allow consumers to
            trade their items freely, creators to launch new digital works, and
            developers to build rich, integrated marketplaces for their digital
            items.
          </p>
        </div>

        {/* right-side of this container (image) */}
        <div className='flex justify-end items-center '>
          <Image src={AboutUsPageHeroSectionRightSideYellowImage} />
        </div>
      </div>

      {/* flex-section-large-yellow-icons */}
      <div className='flex flex-row-reverse justify-center items-center mt-40 gap-[200px]'>
        {/* Volume-icon */}
        <div className='flex flex-col justify-center items-center'>
          <Image src={YellowVolumeIcon} />
          <p className='font-bold text-[25px] text-[#FFFFFF] leading-[30px] mt-2'>
            $1B+
          </p>
          <p className='font-normal text-[15px] text-[#FFFFFF] leading-[20px] mt-2'>
            Volume
          </p>
        </div>

        {/* NFT -icon */}
        <div className='flex flex-col justify-center items-center'>
          <Image src={YellowPictureIcon} />
          <p className='font-bold text-[25px] text-[#FFFFFF] leading-[30px] mt-2'>
            40M+
          </p>
          <p className='font-normal text-[15px] text-[#FFFFFF] leading-[20px] mt-2'>
            NFTs
          </p>
        </div>

        {/* Collections-icon */}
        <div className='flex flex-col justify-center items-center'>
          <Image src={YellowCollectionIcon} />
          <p className='font-bold text-[25px] text-[#FFFFFF] leading-[30px] mt-2'>
            2M+
          </p>
          <p className='font-normal text-[15px] text-[#FFFFFF] leading-[20px] mt-2'>
            Collections
          </p>
        </div>

        {/* Founded-icon */}
        <div className='flex flex-col justify-center items-center'>
          <Image src={YellowPersonIcon} />
          <p className='font-bold text-[25px] text-[#FFFFFF] leading-[30px] mt-2'>
            2017
          </p>
          <p className='font-normal text-[15px] text-[#FFFFFF] leading-[20px] mt-2'>
            Founded
          </p>
        </div>
      </div>
    </div>
  )
}

export default page

