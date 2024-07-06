import Image from 'next/image'

import '../../styles/LandingPageListComponentCssCodes/LandingPageListComponent.css'

//assets for this component
import BlackArrowDownIcon from '../../public/assets/icons/black-arrow-down-icon.svg'

//table collection list icons
import CollectionIcon1 from '../../public/assets/icons/landing-table-list-collection-icon-1.svg'
import CollectionIcon2 from '../../public/assets/icons/landing-table-list-collection-icon-2.svg'
import CollectionIcon3 from '../../public/assets/icons/landing-table-list-collection-icon-3.svg'

function LandingPageListComponent() {
  return (
    <div id='LandingPageListComponent-fully-container' className='mt-5'>
      <div className='flex justify-center items-center'>
        <table className='w-[90vw] table-content'>
          <thead className='border-b-2'>
            <tr>
              <th className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] opacity-50 leading-[15px]'>
                  Rank
                </p>
              </th>
              <th className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] opacity-50 leading-[15px]'>
                  Collection
                </p>
              </th>

              <th className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                  Floor price
                </p>
              </th>
              <th className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                  Floor change
                </p>
              </th>
              <th className='p-2'>
                <div className='flex justify-center items-center w-[75px] h-[25px] bg-[#B4B3B3] rounded-[5px] gap-1'>
                  <p className='font-semibold text-[15px] text-[#000000] leading-[15px]'>
                    Volume
                  </p>
                  <Image src={BlackArrowDownIcon} alt='Volume change' />
                </div>
              </th>
              <th className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                  Volume change
                </p>
              </th>
              <th className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                  Items
                </p>
              </th>
              <th className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                  Owners
                </p>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                  1
                </p>
              </td>
              <td className='p-2'>
                <div className='flex justify-start items-center w-[220px]'>
                  <Image src={CollectionIcon1} alt='Gaming human' />
                  <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px] ml-5'>
                    Gaming human
                  </p>
                </div>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  16.85 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +31 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  50 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +31 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  1 of 6,879
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  3,600
                </p>
              </td>
            </tr>

            <tr>
              <td className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                  2
                </p>
              </td>
              <td className='p-2'>
                <div className='flex justify-start items-center w-[220px]'>
                  <Image src={CollectionIcon2} alt='Elemental' />
                  <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px] ml-5'>
                    Elemental
                  </p>
                </div>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  16.85 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +24.87 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  50 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +24.87 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  1 of 6,879
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  3,600
                </p>
              </td>
            </tr>

            <tr>
              <td className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                  3
                </p>
              </td>
              <td className='p-2'>
                <div className='flex justify-start items-center w-[220px]'>
                  <Image src={CollectionIcon3} alt='Supernatrual' />
                  <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px] ml-5'>
                    Supernatrual
                  </p>
                </div>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  16.85 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#AA0000] leading-[20px]'>
                  -14.56 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  50 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  -14.56 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  1 of 6,879
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  3,600
                </p>
              </td>
            </tr>

            <tr>
              <td className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                  4
                </p>
              </td>
              <td className='p-2'>
                <div className='flex justify-start items-center w-[220px]'>
                  <Image src={CollectionIcon1} alt='Gaming human' />
                  <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px] ml-5'>
                    Gaming human
                  </p>
                </div>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  -
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +31 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  50 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +31 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  1 of 6,879
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  3,600
                </p>
              </td>
            </tr>

            <tr>
              <td className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                  5
                </p>
              </td>
              <td className='p-2'>
                <div className='flex justify-start items-center w-[220px]'>
                  <Image src={CollectionIcon1} alt='Elemental' />
                  <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px] ml-5'>
                    Elemental
                  </p>
                </div>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  16.85 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +31 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  50 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +31 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  1 of 6,879
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  3,600
                </p>
              </td>
            </tr>

            <tr>
              <td className='p-2'>
                <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                  6
                </p>
              </td>
              <td className='p-2'>
                <div className='flex justify-start items-center w-[220px]'>
                  <Image src={CollectionIcon1} alt='Gaming human' />
                  <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px] ml-5'>
                    Gaming human
                  </p>
                </div>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  16.85 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +31 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  50 ETH
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#008014] leading-[20px]'>
                  +31 %
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  1 of 6,879
                </p>
              </td>
              <td className='p-2'>
                <p className='font-medium text-[15px] text-[#FFFFFF] leading-[20px]'>
                  3,600
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LandingPageListComponent