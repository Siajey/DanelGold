import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

//components for this page
import DSCA from '@/components/DSCA-component/DSCA'

//pagination link data for this page
import {
    MagazinesMainPageLinksData
} from '../../../constants/magazines-main-page-links-data/magazines-main-page-links-data.js'

//assets for this page
import FancyDanelGoldTextImage from '../../../public/assets/images/magazines-page-danel-gold-fancy-text.svg'
import LargeMonkeyImage from '../../../public/assets/images/magazines-main-page-large-image-1.svg'
import LargePersonNftImage from '../../../public/assets/images/magazines-main-page-large-image-2.svg'
import LargeNftImage from '../../../public/assets/images/magazines-main-page-large-image-3.svg'

function page() {
    return (
        <div id='Magazines-fully-container'>
            {/* heading-text-container and DSCA component */}
            <div className='flex justify-between items-center mt-10'>
                <div className='flex justify-center items-center ml-5'>
                    <Image src={FancyDanelGoldTextImage}/>
                    <p className='font-semibold text-[30px] text-[#FFFFFF] leading-[36px] ml-7'>
                        Magazines
                    </p>
                </div>

                <div>
                    <DSCA/>
                </div>
            </div>

            {/* main-section of this page */}
            {/* top-grid-container & pagination-links */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '20vw 80vw',
                    marginTop: '10px',
                }}
            >
                {/* left-side-pagination-links */}
                <div className='mt-[100px] ml-[100px]'>
                    <nav className=''>
                        <ul className=''>
                            {MagazinesMainPageLinksData.map((link) => (
                                <li key={link.id} className='mt-10'>
                                    <Link href={link.MagazineHref}>
                                        <p className='font-medium text-[25px] text-[#FFFFFF] leading-[35px] opacity-70'>
                                            {link.MagazineLinkName}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* right-side-large-image */}
                <div className='flex flex-row-reverse justify-items-end items-end mt-[400px] mr-[100px]'>
                    <Image
                        src={LargeMonkeyImage}
                        className='w-[500px]'
                        style={{
                            filter: 'drop-shadow(5px 5px 140px rgba(249, 220, 92, 0.5))',
                        }}
                    />
                    <div className='w-[530px] mr-12 mb-10'>
                        <p className='font-light text-[30px] text-[#FFFFFF] leading-[55px] opacity-70'>
                            NFT stands for Non-Fungible Token. It is a type of digital asset
                            that represents ownership or proof of authenticity of a unique
                            item or piece of content, often using blockchain technology.
                        </p>
                    </div>
                </div>
            </div>

            {/* second-section-container of magazines */}
            <div
                className='flex flex-row-reverse justify-items-end items-end mt-[100px] mr-[100px] ml-[100px] gap-[200px]'>
                <div className='w-[530px] mr-12 mb-10'>
                    <p className='font-light text-[30px] text-[#FFFFFF] leading-[55px] opacity-70'>
                        Digital art :
                    </p>
                    <p className='font-light text-[30px] text-[#FFFFFF] leading-[55px] opacity-70'>
                        Artists can create and sell digital art pieces as NFTs. Buyers gain
                        ownership rights, and artists can receive royalties from future
                        sales.
                    </p>
                </div>

                <div>
                    <Image
                        src={LargePersonNftImage}
                        style={{
                            filter: 'drop-shadow(5px 5px 140px rgba(137, 196, 244,1)',
                        }}
                    />
                </div>
            </div>

            {/* third-section-container of magazines */}
            <div className='flex flex-col justify-center items-center mt-[150px]'>
                <div>
                    <Image src={LargeNftImage}/>
                </div>

                <div className='w-[1050px] mt-10'>
                    <p className='font-light text-[30px] text-[#FFFFFF] leading-[55px] opacity-70'>
                        NFTs represent a significant innovation in how digital content is
                        owned, shared, and monetized, and their impact on various industries
                        is still unfolding.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page



