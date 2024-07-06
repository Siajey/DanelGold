//handle the active links
import { usePathname } from 'next/navigation'
import Link from 'next/link'

//navigation links data
import { HeadingNavigationLinks } from '../../constants/heading-navigation-links'

function HeadingPagination() {
  //active links controller
  const pathname = usePathname()

  return (
    <div id='HeadingPagination-fully-container'>
      <nav
        id='HeadingPagination-nav-section'
        className='flex justify-start items-center mt-10 ml-10'
      >
        <ul className='flex justify-center items-center gap-10'>
          {HeadingNavigationLinks.map((navigationLink) => (
            <li key={navigationLink.id}>
              <Link href={navigationLink.href}>
                <div
                  className={
                    pathname === navigationLink.href
                      ? 'flex justify-center items-center w-[50px] h-[40px] bg-[#4d4d4d] rounded-[10px]'
                      : ''
                  }
                >
                  <button>
                    <p className='font-semibold text-[15px] text-[#000000] leading-[18px] dark:text-[#FFFFFF]'>
                      {navigationLink.navName}
                    </p>
                  </button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default HeadingPagination
