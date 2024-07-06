import React from 'react'

//cards sliders components in the landing page
import TopGalleriesSliderCards from '../TopGalleriesSliderCards/TopGalleriesSliderCards'
import PopularCollectionsSliderCards from '../PopularCollectionsSliderCards/PopularCollectionsSliderCards'
import TopArtistsSliderCards from '../TopArtistsSliderCards/TopArtistsSliderCards'
import TopPaintingsSliderCards from '../TopPaintingsSliderCards/TopPaintingsSliderCards'
import TopSculpturesSliderCards from '../TopSculpturesSliderCards/TopSculpturesSliderCards'
import TopPhotographiesSliderCards from '../TopPhotographiesSliderCards/TopPhotographiesSliderCards'
import TopMembershipsSliderCards from '../TopMembershipsSliderCards/TopMembershipsSliderCards'
import TopPFPsSliderCards from '../TopPFPsSliderCards/TopPFPsSliderCards'
import MagazinesLargeSliderCards from '../MagazinesLargeSliderCards/MagazinesLargeSliderCards'

function LandingCollectionCardsSliders() {
  return (
    <div id='LandingCollectionCardsSliders-fully-container'>
      <TopGalleriesSliderCards />
      <PopularCollectionsSliderCards />
      <TopArtistsSliderCards />
      <TopPaintingsSliderCards />
      <TopSculpturesSliderCards />
      <TopPhotographiesSliderCards />
      <TopMembershipsSliderCards />
      <TopPFPsSliderCards />
      <MagazinesLargeSliderCards />
    </div>
  )
}

export default LandingCollectionCardsSliders