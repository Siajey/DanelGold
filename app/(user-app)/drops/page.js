'use client'

import {useCallback} from 'react'
import Image from 'next/image'

//carousel dependencies
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

//css codes for the Large carousel
import '../../../styles/DropsPageCssCodes/DropsPageCssCodes.css'

//components for this page
import DSCA from '@/components/DSCA-component/DSCA'
import {DropsCardsData} from '../../../constants/drops-page-cards-data/drops-page-cards-data.js'

//assets for this page
import LargeCarouselImage from '../../../public/assets/images/Drops-page-large-carousel-image.svg'
import LargeCarouselArrowRightIcon from '../../../public/assets/icons/Drops-large-carousel-white-arrow-right-icon.svg'
import LargeCarouselArrowLeftIcon from '../../../public/assets/icons/Drops-large-carousel-white-arrow-left-icon.svg'

//this page carousel need to be dynamically loaded from api (carousel-data-api)

function page() {
    //handling the carousel different properties
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: 'false'}, [
        Autoplay({delay: 4000}),
    ])

    //functionality to handle previous and next slides of the carousel
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    return (
        <div id='Drops-page-fully-container' className=''>
            {/* heading-text-container and DSCA component */}
            <div className='flex justify-between items-center mt-10'>
                <div className='ml-5'>
                    <p className='font-semibold text-[30px] text-[#FFFFFF] leading-[36px]'>
                        Drops
                    </p>
                </div>

                <div>
                    <DSCA/>
                </div>
            </div>

            {/* hero-large-carousel-container */}
            <div className='embla flex flex-row-reverse justify-between items-center p-10'>
                {/* next-slide-button container */}
                <div>
                    <button class='embla__next' onClick={scrollNext}>
                        <Image src={LargeCarouselArrowRightIcon} className='w-[50px]'/>
                    </button>
                </div>

                {/* main-carousel-container */}
                <div
                    className='embla__viewport flex justify-center items-center mt-5 cursor-pointer'
                    ref={emblaRef}
                >
                    <div className='embla__container'>
                        <div className='embla__slide flex justify-center items-center'>
                            <Image src={LargeCarouselImage}/>
                        </div>
                        <div className='embla__slide flex justify-center items-center'>
                            <Image src={LargeCarouselImage}/>
                        </div>
                        <div className='embla__slide flex justify-center items-center '>
                            <Image src={LargeCarouselImage}/>
                        </div>
                    </div>
                </div>

                {/* prev-slide-button container */}
                <div>
                    <button class='embla__prev' onClick={scrollPrev}>
                        <Image src={LargeCarouselArrowLeftIcon} className='w-[50px]'/>
                    </button>
                </div>
            </div>

            {/* this page cards section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-24 mt-7'>
                    {DropsCardsData.map((card) => (
                        <div className=''>
                            <div
                                key={card.id}
                                className='flex flex-col justify-center items-center w-[350px] h-[423px] bg-[#474747] cursor-pointer mt-7'
                            >
                                {/* card-image */}
                                <div>
                                    <Image src={card.NFTCardImage} width={350} height={300}/>
                                </div>
                                {/* Name of the art section */}
                                <div className='mt-1'>
                                    <p className='font-semibold text-[20px] text-[#FFFFFF] leading-[25px]'>
                                        {card.NFTCardName}
                                    </p>
                                </div>

                                <div className='flex flex-col justify-start items-start w-[340px] mt-1 ml-1'>
                                    {/* artist-name */}
                                    <div className='flex justify-center items-center'>
                                        <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                                            {card.NFTArtistName}
                                        </p>
                                        <div className='ml-2'>
                                            <Image src={card.NFTIcon} width={15} height={15}/>
                                        </div>
                                    </div>
                                    {/* collection-name */}
                                    <div>
                                        <p className='font-semibold text-[12px] text-[#FFFFFF] leading-[15px]'>
                                            {card.NFTCollectionName}
                                        </p>
                                    </div>
                                </div>

                                {/* price */}
                                <div className='flex justify-end items-end w-[340px] mb-3'>
                                    <div className='flex justify-center items-center w-[60px] h-[15px] bg-[#D9D9D9]'>
                                        <p className='font-semibold text-[10px] text-[#000000] leading-[12px]'>
                                            {card.NFTCardPrice}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
