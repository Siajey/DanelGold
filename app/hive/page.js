'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets for this page
import LargeYellowHiveIcon from '../../public/assets/icons/hive-page-large-yellow-hive-icon.svg'
import LargeYellowHiveTextImage from '../../public/assets/images/hive-page-large-yellow-hive-text-image.svg'
import APersonInAHurryIcon from '../../public/assets/icons/hive-page-a-person-in-a-hurry-white-icon.svg'

function page() {
  return (
    <div id='hive-page-fully-container'>
      {/* heading-text-and-icon-container */}
      <div className='flex justify-between items-center mt-20 mx-10'>
        {/* left-side icon & text container */}
        <div className='flex justify-center items-center gap-3'>
          <Image src={LargeYellowHiveIcon} />
          <Image src={LargeYellowHiveTextImage} />
        </div>

        {/* right-side text & icon container*/}
        <button onClick={() => alert('back to web')}>
          <div className='flex flex-row-reverse justify-center items-center gap-3'>
            <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20pxx]'>
              back to web
            </p>
            <Image src={APersonInAHurryIcon} />
          </div>
        </button>
      </div>
    </div>
  )
}

export default page


