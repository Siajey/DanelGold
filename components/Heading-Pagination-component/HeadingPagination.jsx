//handle the active links
import { usePathname } from "next/navigation";
import Link from "next/link";

//navigation links data
import { HeadingNavigationLinks } from "../../constants/heading-navigation-links/heading-navigation-links";
import DSCA from "../DSCA-component/DSCA";

function HeadingPagination() {
  //active links controller
  const pathname = usePathname();

  return (
    <div
      id="HeadingPagination-fully-container"
      className="flex justify-between items-center md:mt-10"
    >
      {/* left-sections */}
      <div className="hidden md:flex ">
        <nav id="HeadingPagination-nav-section" className="flex justify-start">
          <ul className="flex justify-center items-center md:gap-3 lg:gap-10">
            {HeadingNavigationLinks.map((navigationLink) => (
              <li key={navigationLink.id}>
                <Link href={navigationLink.href}>
                  <div
                    className={
                      pathname === navigationLink.href
                        ? "flex justify-center items-center w-[50px] h-[40px] bg-[#4d4d4d] rounded-[10px]"
                        : ""
                    }
                  >
                    <button>
                      <p className="font-semibold text-[15px] text-[#000000] leading-[18px] dark:text-gray-700 dark:text-white">
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
      {/* right-section */}
      <div className="hidden md:flex">
        <DSCA />
      </div>
    </div>
  );
}

export default HeadingPagination;
