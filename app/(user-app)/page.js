'use client'

//lading page assets and components (lists and slider cards)
import LandingHero from '@/components/Landing-Hero-component/LandingHero'
import LandingPageListComponent from '@/components/LandingPageListComponent/LandingPageListComponent'
import LandingCollectionCardsSliders from '@/components/LandingCollectionCardsSliders/LandingCollectionCardsSliders'


export default function Home() {

    return (
        <>
            <LandingHero/>
            <LandingPageListComponent/>
            <LandingCollectionCardsSliders/>
        </>
    )
}



