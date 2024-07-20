//import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

//carousel slide data
import { LandingHeroCarouselImages } from '../../constants/landing-hero-carousel-images/landing-hero-carousel-images'

function LandingHeroCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container flex justify-center items-center'>
        <div className=' flex justify-center items-center max-w-[430px] max-h-[430px] rounded-[10px] gap-5 mt-5 cursor-pointer'>
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