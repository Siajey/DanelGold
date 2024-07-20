'use client'

import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//context data for this page
import { MyContext } from '@/context/MyContext'

//assets and components for this component
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import BlackUserIcon from '../../public/assets/icons/black-user-icon.svg'
import WhiteUserIcon from '../../public/assets/icons/white-user-icon.svg'
import WhiteHiveIcon from '../../public/assets/icons/hive-white-icon.svg'
import BlackHiveIcon from '../../public/assets/icons/hive-black-icon.svg'
import WhiteQRIcon from '../../public/assets/icons/QR-white-icon.svg'
import BlackQRIcon from '../../public/assets/icons/QR-black-icon.svg'
import WhiteSearchIcon from '../../public/assets/icons/white-search-icon.svg'
import BlackSearchIcon from '../../public/assets/icons/black-search-icon.svg'
import WhiteMicrophoneIcon from '../../public/assets/icons/white-microphone-icon.svg'
import BlackMicrophoneIcon from '../../public/assets/icons/black-microphone-icon.svg'
import DanelGoldImageLogo from '../../public/assets/images/DanelGold-logo-image.svg'
import DanelGoldBlackTextImageLogo from '../../public/assets/images/DanelGold-logo-black-text-image.svg'
import DanelGoldWhiteTextImageLogo from '../../public/assets/images/DanelGold-logo-white-text-image.svg'

function Navbar() {
  const { darkMode } = useContext(MyContext)
  return (
    <div id='Navbar-component-fully-container'>
      <nav
        id='Navbar-component-inside-section-container'
        className='flex flex-row-reverse justify-between items-center mt-3 mr-5 ml-5'
      >
        {/* right-side of the navbar */}
        <div className='flex flex-row-reverse justify-center items-center gap-3'>
          {/* dark and light mode component  */}
          <ThemeToggle />

          {/* user-ico-section */}
          <div>
            <button
              className='flex justify-center items-center w-[35px] h-[30px] border-[1px] border-[#FFFFFF] rounded-[10px]'
              style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              {darkMode && <Image src={WhiteUserIcon} alt='WhiteUserIcon' />}
              {!darkMode && <Image src={BlackUserIcon} alt='BlackUserIcon' />}
            </button>
          </div>

          {/* Hive-section */}
          <div
            className='flex justify-center items-center w-[71px] h-[30px] border-[1px] border-[#FFFFFF] rounded-[10px]'
            style={{
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {darkMode && <Image src={WhiteHiveIcon} alt='WhiteHiveIcon' />}
            {!darkMode && <Image src={BlackHiveIcon} alt='BlackHiveIcon' />}
            {darkMode && (
              <p className='font-medium text-[15px] text-[#FFFFFF] ml-1'>
                Hive
              </p>
            )}
            {!darkMode && (
              <p className='font-medium text-[15px] text-[#000000] ml-1'>
                Hive
              </p>
            )}
          </div>

          {/* QR-section */}
          <div
            className='flex justify-center items-center w-[55px] h-[30px] border-[1px] border-[#FFFFFF] rounded-[10px]'
            style={{
              boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            {darkMode && <Image src={WhiteQRIcon} alt='WhiteQRIcon' />}
            {!darkMode && <Image src={BlackQRIcon} alt='BlackQRIcon' />}
            {darkMode && (
              <p className='font-medium text-[15px] text-[#FFFFFF] ml-1'>QR</p>
            )}
            {!darkMode && (
              <p className='font-medium text-[15px] text-[#000000] ml-1'>QR</p>
            )}
          </div>
        </div>

        {/* center-section (search-bar) */}
        <div className=''>
          <input
            className='relative flex justify-center items-center w-[460px] h-[35px] bg-inherit rounded-[20px] dark:text-[#FFFFFF] pl-5 placeholder:font-medium placeholder:text-[13px]
              placeholder:dark:text-[#FFFFFF] placeholder:text-[#000000] placeholder:pl-2 border'
            style={{
              boxShadow: '0px 0px 7px 4px rgba(0, 0, 0, 1)',
            }}
            placeholder='Search'
          />

          {/* search-icon-container */}
          <div className='flex justify-center items-center w-[10px] h-[10px] absolute top-[30px] ml-[8px]'>
            {darkMode && <Image src={WhiteSearchIcon} alt='WhiteSearchIcon' />}
            {!darkMode && <Image src={BlackSearchIcon} alt='WhiteSearchIcon' />}
          </div>
          {/* microphone-button */}
          <div className='flex justify-center items-center w-[10px] h-[10px] absolute top-[30px] ml-[438px]'>
            {darkMode && (
              <button>
                <Image src={WhiteMicrophoneIcon} />
              </button>
            )}
            {!darkMode && (
              <button>
                <Image src={BlackMicrophoneIcon} />
              </button>
            )}
          </div>
        </div>

        {/* left-side of the navbar (danel gold logo)*/}
        <Link href='/'>
          <div className='flex justify-center items-center'>
            <Image src={DanelGoldImageLogo} alt='DanelGoldImageLogo' />
            {darkMode && (
              <Image
                src={DanelGoldWhiteTextImageLogo}
                className='ml-2'
                alt='DanelGoldWhiteTextImageLogo'
              />
            )}

            {!darkMode && (
              <Image
                src={DanelGoldBlackTextImageLogo}
                className='ml-2'
                alt='DanelGoldBlackTextImageLogo'
              />
            )}
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar

