//child components
import DSCA from '../DSC-component/DSCA'
import HeadingPagination from '@/components/Heading-Pagination-component/HeadingPagination'
import Navbar from '@/components/Navbar-component/Navbar'
import LanfingHeroCarousel from '../Landing-Hero-Carousel-component/LandingHeroCarousel'

function LandingHero() {
  return (
    <div id='landing-hero-fully-container'>
      <Navbar />
      <DSCA />
      <HeadingPagination />
      <LanfingHeroCarousel />
    </div>
  )
}

export default LandingHero

