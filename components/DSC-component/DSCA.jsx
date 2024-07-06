import Link from 'next/link'

function DSCA() {
  return (
    <div
      id='DSC-fully-container'
      className='flex justify-end items-end mt-5 mr-10'
    >
      {/* texts-below */}
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center gap-10'>
          <button>
            <Link href='/Drops'>
              <p className='font-semibold text-[15px] text-[#000000] dark:text-[#FFFFFF]'>
                Drops
              </p>
            </Link>
          </button>
          <button>
            <Link href='/Stats'>
              <p className='font-semibold text-[15px] text-[#000000] dark:text-[#FFFFFF]'>
                Stats
              </p>
            </Link>
          </button>
          <button>
            <Link href='/Create'>
              <p className='font-semibold text-[15px] text-[#000000] dark:text-[#FFFFFF]'>
                Create
              </p>
            </Link>
          </button>
          <button>
            <Link href='Auction'>
              <p className='font-semibold text-[15px] text-[#000000] dark:text-[#FFFFFF]'>
                Auction
              </p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DSCA



