'use client'
import { useEffect, useState, useContext } from 'react'
//context data
import { MyContext } from '@/context/MyContext'
import Image from 'next/image'

//assets for this component
import SunLightIcon from '../../public/assets/icons/white-sun-icon-dark-and-light-mood.svg'
import BlackMoonIcon from '../../public/assets/icons/black-moon-icon-dark-and-light-mood.svg'

function ThemeToggle() {
  //handle te toggle between light and dark mode
  const { darkMode, setDarkMode, toggleTheme } = useContext(MyContext)

  //handle the theme status when the component is mounted to check what is the user system theme by default
  useEffect(() => {
    //we are getting the theme settings from the localStorage whenever the component is mounted
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') setDarkMode(true)
  }, [])

  //handle the theme status when the setDarkmode is changed
  useEffect(() => {
    //add classNames to the html root element
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  return (
    <div
      className='flex justify-between items-center w-[65px] h-[30px] border-[1px] border-[#000000] dark:border-[#FFFFFF] rounded-[10px] p-2 cursor-pointer'
      style={{
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      }}
    >
      <button onClick={toggleTheme}>
        <div
          className={
            darkMode
              ? 'flex justify-center items-center w-[28px] h-[24px] rounded-[10px] bg-[#FFFFFF] transform transition-transform duration-600 '
              : ''
          }
        >
          <Image src={BlackMoonIcon} />
        </div>
      </button>

      <button onClick={toggleTheme}>
        <div
          className={
            darkMode
              ? ''
              : 'flex justify-center items-center w-[28px] h-[24px] rounded-[10px] bg-[#000000] transform transition-transform duration-600'
          }
        >
          {darkMode && <Image src={SunLightIcon} />}
          {!darkMode && <Image src={SunLightIcon} />}
        </div>
      </button>
    </div>
  )
}

export default ThemeToggle

