import React from 'react'

//components for this page
import EmblaCarouselTopGalleries from '../TopGalleriesSliderCardsCarouselComponent/TopGalleriesSliderCardsCarouselComponent'

export default function TopPaintingsSliderCards() {
  return (
    <div className='mt-10'>
      <p className='font-bold text-[20px] text-[#FFFFFF] leading-[25px] ml-12'>
        Top Paintings
      </p>
      <EmblaCarouselTopGalleries />
    </div>
  )
}