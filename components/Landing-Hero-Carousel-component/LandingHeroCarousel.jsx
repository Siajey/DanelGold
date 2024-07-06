import { useEffect, useState } from 'react'
import Image from 'next/image'

//carousel slide data
import { LandingHeroCarouselImages } from '../../constants/landing-hero-carousel-images'

function LandingHeroCarousel() {
  return (
    <div id='Landing-Hero-Carousel-fully-container'>
      {/* carousel-container */}
      <div className='flex justify-center items-center mt-10 '>
        {/* carousel-slides */}
        <div className='flex justify-center items-center max-w-[430px] max-h-[430px] rounded-[10px] gap-5'>
          {LandingHeroCarouselImages.map((slide) => (
            <Image
              key={slide.id}
              src={slide.localUrl}
              width={slide.width}
              height={slide.height}
              alt={slide.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingHeroCarousel
