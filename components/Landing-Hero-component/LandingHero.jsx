//child components
import HeadingPagination from '@/components/Heading-Pagination-component/HeadingPagination'
import LandingHeroCarousel from '../Landing-Hero-Carousel-component/LandingHeroCarousel'

function LandingHero() {
  return (
    <div id='landing-hero-fully-container'>
      <HeadingPagination />
      <LandingHeroCarousel />
    </div>
  )
}

export default LandingHero
  