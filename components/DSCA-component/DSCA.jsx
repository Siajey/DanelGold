import Link from "next/link";

function DSCA() {
  return (
    <div id="DSC-fully-container" className="">
      {/* texts-below */}
      <div className="flex justify-center items-center mx-2">
        <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-10">
          <button>
            <Link href="/drops">
              <p className="font-semibold text-[15px] text-[#000000] dark:text-gray-700 dark:text-white text-sm lg:text-base">
                Drops
              </p>
            </Link>
          </button>
          <button>
            <Link href="/stats-collections">
              <p className="font-semibold text-[15px] text-[#000000] dark:text-gray-700 dark:text-white text-sm lg:text-base">
                Stats
              </p>
            </Link>
          </button>
          <button>
            <Link href="/create">
              <p className="font-semibold text-[15px] text-[#000000] dark:text-gray-700 dark:text-white text-sm lg:text-base">
                Create
              </p>
            </Link>
          </button>
          <button>
            <Link href="auction">
              <p className="font-semibold text-[15px] text-[#000000] dark:text-gray-700 dark:text-white text-sm lg:text-base">
                Auction
              </p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DSCA;
