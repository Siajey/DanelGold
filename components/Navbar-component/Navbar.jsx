'use client'
import { useContext } from 'react'
import Image from 'next/image'

//context data for this page
import { MyContext } from '@/context/MyContext'

//assets and components for this component
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import BlackUserIcon from '../../public/assets/icons/black-user-icon.svg'
import WhiteUserIcon from '../../public/assets/icons/white-user-icon.svg'
import WhiteHiveIcon from '../../public/assets/icons/hive-white-icon.svg'
import WhiteQRIcon from '../../public/assets/icons/QR-white-icon.svg'
import WhiteSearchIcon from '../../public/assets/icons/white-search-icon.svg'
import WhiteMicrophoneIcon from '../../public/assets/icons/white-microphone-icon.svg'
import BlackClubIcon from '../../public/assets/icons/black-club-icon.svg'
import DanelGoldImageLogo from '../../public/assets/images/DanelGold-logo-image.svg'
import DanelGoldBlackTextImageLogo from '../../public/assets/images/DanelGold-logo-black-text-image.svg'
import DanelGoldWhiteTextImageLogo from '../../public/assets/images/DanelGold-logo-white-text-image.svg'
import DSCA from '../DSC-component/DSCA'

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
            {!darkMode && <Image src={BlackClubIcon} alt='BlackHiveIcon' />}
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
            {!darkMode && <Image src={BlackClubIcon} alt='BlackQRIcon' />}
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
            className='relative flex justify-center items-center w-[460px] h-[25px] bg-inherit rounded-[20px] dark:text-[#FFFFFF] p-5 placeholder:font-medium placeholder:text-[12px]
              placeholder:dark:text-[#FFFFFF] placeholder:text-[#000000] placeholder:pl-3 border'
            style={{
              boxShadow: '0px 0px 7px 4px rgba(0, 0, 0, 1)',
            }}
            placeholder='Search'
          />

          {/* search-icon-container */}
          <div className='flex justify-center items-center w-[10px] h-[10px] absolute top-[30px] ml-[10px]'>
            <Image src={WhiteSearchIcon} alt='WhiteSearchIcon' />
          </div>
          {/* microphone-button */}
          <div className='flex justify-center items-center w-[10px] h-[10px] absolute top-[30px] ml-[440px]'>
            <button>
              <Image src={WhiteMicrophoneIcon} />
            </button>
          </div>
        </div>

        {/* left-side of the navbar (danel gold logo)*/}
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
      </nav>
    </div>
  )
}

export default Navbar
