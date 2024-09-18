import React from 'react'
import Image from 'next/image'

//components for this page
import DSCA from '@/components/DSCA-component/DSCA'

//assets for this page
import FancyDanelGoldTextImage from '../../public/assets/images/magazines-page-danel-gold-fancy-text.svg'
import LargeMonkeyImage from '../../public/assets/images/magazines-main-page-large-image-1.svg'

function page() {
  return (
    <div id='What-Is-An-NFT-fully-container'>
      {/* heading-text-container and DSCA component */}
      <div className='flex justify-between items-center mt-10'>
        <div className='flex justify-center items-center ml-5'>
          <Image src={FancyDanelGoldTextImage} />
          <p className='font-semibold text-[30px] text-[#FFFFFF] leading-[36px] ml-7'>
            Magazines
          </p>
        </div>

        <div>
          <DSCA />
        </div>
      </div>

      {/* from-the-magazine-text container */}
      <div className='w-[80vw] flex justify-end items-end mt-20'>
        <p className='font-light text-[20px] text-[#FFFFFF] opacity-80'>
          From the magazine
        </p>
      </div>

      {/* main-magazine-section */}
      <div className='flex justify-center items-center'>
        {/* NFTs-Large-image and magazine details */}
        <div className='flex  justify-items-start items-start mt-[40px] gap-[150px]'>
          <Image
            src={LargeMonkeyImage}
            className=''
            style={{
              filter: 'drop-shadow(5px 5px 140px rgba(249, 220, 92, 0.5))',
            }}
          />

          {/* description-part for this magazine */}
          <div className=' mr-12 mb-10 mt-[100px]'>
            <div className='flex justify-center items-center'>
              <p className='font-bold text-[30px] text-[#FFFFFF] leading-[35px]'>
                What is an NFT?
              </p>
            </div>

            <div className='w-[530px]'>
              <p className='font-light text-[30px] text-[#FFFFFF] leading-[55px] opacity-70 mt-3'>
                NFT stands for Non-Fungible Token. It is a type of digital asset
                that represents ownership or proof of authenticity of a unique
                item or piece of content, often using blockchain technology.
              </p>
            </div>

            <div className='flex flex-col justify-end items-end mt-5 mr-5'>
              <p className='font-bold text-[25px] text-[#FFFFFF] leading-[50px]'>
                Best moment with creator
              </p>

              <div className='w-[250px] flex flex-col justify-start items-start mr-[62px]'>
                <div className='flex justify-center items-center mt-2 mr-5'>
                  <p className='font-normal text-[20px] text-[#FFFFFF] leading-[50px] opacity-80 mr-3'>
                    Written by
                  </p>
                  <p className='font-bold text-[20px] text-[#FFFFFF] leading-[50px]'>
                    Daniel grey
                  </p>
                </div>

                <div className='flex justify-center items-center mt-2 mr-5'>
                  <p className='font-normal text-[20px] text-[#FFFFFF] leading-[50px] opacity-80 mr-3'>
                    Created by
                  </p>
                  <p className='font-bold text-[20px] text-[#FFFFFF] leading-[50px]'>
                    Muchacha
                  </p>
                </div>

                <div className='flex justify-center items-center mt-2'>
                  <p className='font-normal text-[20px] text-[#FFFFFF] leading-[50px] opacity-80 '>
                    June 4, 2023
                  </p>
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



