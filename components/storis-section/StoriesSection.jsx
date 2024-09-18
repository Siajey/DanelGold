import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'


import Image from 'next/image'
import Link from 'next/link'

//assets for this page
import { UsersStoriesData } from '../../constants/users-stories-data/user-stories-data.js'

function StoriesSection() {
  //state to control the stories carousel
  const [emblaRef] = useEmblaCarousel()

  const stories = UsersStoriesData.map((story) => (
    <Link href='#'>
      <div key={story.id} className='flex flex-col justify-center items-center'>
        <Image
          width={80}
          height={80}
          src={story.localImageAddress}
          alt='stories'
        />
        <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px] mt-3'>
          {story.userName}
        </p>
      </div>
    </Link>
  ))
  return (
    <div id='users-stories-section-fully-container'>
      <div className='embla s-carousel' ref={emblaRef}>
        <div className='embla__container s-carousel-container'>
          <div className='embla__slide s-carousel-slide flex justify-center items-center gap-7 mt-7'>{stories}</div>
          <div className='embla__slide s-carousel-slide flex justify-center items-center gap-7 mt-7'>{stories}</div>
          <div className='embla__slide s-carousel-slide flex justify-center items-center gap-7 mt-7'>{stories}</div>
        </div>
      </div>
    </div>
  )
}

export default StoriesSection

