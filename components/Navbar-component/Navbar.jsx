'use client'

import {useContext, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

//context data for this page
import {MyContext} from '@/context/MyContext'

//profile dropdown menu data
import {
    UserProfileDropdownMenuLinksData
} from '../../constants/user-profile-dropdown-menu-links-data/user-profile-dropdown-menu-links-data.js'

//Register methods modal data
import {RegisterModalData} from '../../constants/register-modal-data/register-modal-data.js'

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
import RegisterModalDanelGoldLogo from '../../public/assets/icons/register-modal-danel-gold-logo.svg'
import RegisterModalCloseIcon from '../../public/assets/icons/close-modal-icon.svg'
import SignUpWithEmailInputRightArrowIcon
    from '../../public/assets/icons/sign-up-with-email-small-black-right-arrow-icon.svg'
import {LoginByMetaMask} from "@/lib/web3auth";

function Navbar() {
    //handle the dark and light mode for the application through this context
    const {darkMode} = useContext(MyContext)
    // handle thi display mode for the profile dropdown menu
    const [toggleDropdownMenu, setToggleDropdownMenu] = useState(false)
    //handle register modal
    const [toggleRegisterModal, setToggleRegisterModal] = useState(false)

    //handle the login & logout in the dropdown functionality to show the modal and register the user
    const handleShowTheRegisterModal = (id) => {
        if (id === 7) {
            setToggleRegisterModal(true)
        } else return null
    }

    return (
        <div id='Navbar-component-fully-container'>
            <nav
                id='Navbar-component-inside-section-container'
                className='flex flex-row-reverse justify-between items-center mt-3 mr-5 ml-5'
            >
                {/* right-side of the navbar */}
                <div className='flex flex-row-reverse justify-center items-center gap-3'>
                    {/* dark and light mode component  */}
                    <ThemeToggle/>

                    {/* user-profile-drop-down-section fully container */}
                    <div className='relative'>
                        <button
                            className='flex justify-center items-center w-[35px] h-[30px] border-[1px] border-[#FFFFFF] rounded-[10px]'
                            style={{
                                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                            }}
                            onClick={() => setToggleDropdownMenu((prev) => !prev)}
                        >
                            {darkMode && <Image src={WhiteUserIcon} alt='WhiteUserIcon'/>}
                            {!darkMode && <Image src={BlackUserIcon} alt='BlackUserIcon'/>}
                        </button>

                        {/* drop down menu container */}
                        <div
                            className={
                                toggleDropdownMenu
                                    ? 'flex flex-col justify-center items-center w-[220px] pb-6 bg-[#474747] rounded-[10px] mt-2 absolute right-5'
                                    : 'hidden'
                            }
                            style={{
                                boxShadow: '0px 2px 4px 4px rgba(0, 0, 0, 0.25)',
                                zIndex: '1',
                            }}
                        >
                            <ul>
                                {UserProfileDropdownMenuLinksData.map((link) => (
                                    <li key={link.id} className='mt-7'>
                                        <button onClick={() => handleShowTheRegisterModal(link.id)}>
                                            <Link href={link.href} className=''>
                                                <div className='w-[195px] flex justify-between items-center '>
                                                    <div className='flex justify-center items-center gap-3'>
                                                        <Image src={link.icon} width={17} height={17}/>
                                                        <p className='font-bold text-[15px] text-[#FFFFFF] leading-[18px]'>
                                                            {link.linkName}
                                                        </p>
                                                    </div>
                                                    {/* !!! this section is for the language select li  */}
                                                    <div className='flex justify-center items-center'>
                                                        <p className='font-bold text-[12px] text-[#a3a3a3] leading-[15px]'>
                                                            {link.languageSelect}
                                                        </p>
                                                        <Image
                                                            src={link.languageSelectIcon}
                                                            width={5}
                                                            height={10}
                                                            className='ml-1'
                                                        />
                                                    </div>
                                                </div>
                                            </Link>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Hive-section */}
                    <div
                        className='flex justify-center items-center w-[71px] h-[30px] border-[1px] border-[#FFFFFF] rounded-[10px]'
                        style={{
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        {darkMode && <Image src={WhiteHiveIcon} alt='WhiteHiveIcon'/>}
                        {!darkMode && <Image src={BlackHiveIcon} alt='BlackHiveIcon'/>}
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
                        {darkMode && <Image src={WhiteQRIcon} alt='WhiteQRIcon'/>}
                        {!darkMode && <Image src={BlackQRIcon} alt='BlackQRIcon'/>}
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
                        {darkMode && <Image src={WhiteSearchIcon} alt='WhiteSearchIcon'/>}
                        {!darkMode && <Image src={BlackSearchIcon} alt='WhiteSearchIcon'/>}
                    </div>
                    {/* microphone-button */}
                    <div className='flex justify-center items-center w-[10px] h-[10px] absolute top-[30px] ml-[438px]'>
                        {darkMode && (
                            <button>
                                <Image src={WhiteMicrophoneIcon}/>
                            </button>
                        )}
                        {!darkMode && (
                            <button>
                                <Image src={BlackMicrophoneIcon}/>
                            </button>
                        )}
                    </div>
                </div>

                {/* left-side of the navbar (danel gold logo)*/}
                <Link href='/'>
                    <div className='flex justify-center items-center'>
                        <Image src={DanelGoldImageLogo} alt='DanelGoldImageLogo'/>
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

            {/* register-modal-section fully container */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-gray-400 bg-opacity-80 z-50 ${
                    toggleRegisterModal ? 'flex justify-center items-center' : 'hidden'
                }`}
            >
                <div
                    className='flex flex-col justify-center items-center w-[500px] bg-[#474747] rounded-[20px]'
                    style={{
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    {/* modal-close-btn container */}
                    <div className='flex justify-end items-end w-[470px] mt-5'>
                        <button onClick={() => setToggleRegisterModal(false)}>
                            <Image src={RegisterModalCloseIcon}/>
                        </button>
                    </div>
                    {/* DanelGold-logo container */}
                    <div className='flex flex-col justify-center items-center'>
                        <Image src={RegisterModalDanelGoldLogo}/>
                        <p className='font-semibold text-[30px] text-[#FFFFFF] leading-[35px] mt-3'>
                            Sign in
                        </p>
                    </div>
                    {/* register-methods container */}
                    <div className='flex justify-start items-start w-[440px] pb-3 rounded-[10px] bg-[#a3a3a3] mt-5'>
                        <ul>
                            {RegisterModalData.map((registerMethod) => (
                                <li key={registerMethod.id} className='mt-5' onClick={async () => {
                                    if (registerMethod.id === 1) {
                                        const token = await LoginByMetaMask('localhost:8080')
                                        alert(JSON.stringify(token))
                                    }
                                }}>
                                    <Link href={registerMethod.registerMethodHref}>
                                        <div className='flex justify-start items-start ml-5'>
                                            <Image
                                                src={registerMethod.registerMethodIcon}
                                                width={20}
                                                height={20}
                                            />
                                            <p className='font-medium text-[20px] text-[#000000] leading-[25px] ml-2'>
                                                {registerMethod.registerMethodName}
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* second-section of this modal (sign up) */}
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <p className='font-semibold text-[12px] text-[#c7c7c7] leading-[15px]'>
                            More Wallet Option
                        </p>
                        <div className='flex justify-center items-center mt-5'>
                            <div className='w-[200px] h-[1px] bg-[#a3a3a3]'/>
                            <p className='font-semibold text-[12px] text-[#c7c7c7] leading-[15px] mr-2 ml-2'>
                                OR
                            </p>
                            <div className='w-[200px] h-[1px] bg-[#a3a3a3]'/>
                        </div>

                        <p className='font-semibold text-[20px] text-[#FFFFFF] leading-[25px] mt-5'>
                            Sign up
                        </p>

                        {/* sign up with email-section */}
                        <div className='flex justify-center items-center mt-10 pb-10'>
                            <div className='relative'>
                                <input
                                    type='email'
                                    className='w-[435px] h-[50px] bg-[#a3a3a3] rounded-[10px] placeholder:font-medium placeholder:text-[15px] placeholder:leading-[20px] placeholder:text-[#000000] p-5'
                                    placeholder='Continue with email'
                                />
                                {/* signup-button */}
                                <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                    <button
                                        className='flex justify-center items-center w-[30px] h-[30px] bg-[#FFFFFF] rounded-[10px]'
                                        style={{
                                            boxShadow: '0px 0px 4px 1px rgba(255, 255, 255, 0.25)',
                                        }}
                                    >
                                        <Image src={SignUpWithEmailInputRightArrowIcon}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
