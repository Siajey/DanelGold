import Image from 'next/image'

//assets for this component
import BlackArrowDownIcon from '../../public/assets/icons/black-arrow-down-icon.svg'

//data for this component list
import { StatsTableListsData } from '../../data/StatsTablesListsData.js'

function StatsPageListComponent() {
  return (
    <div className=''>
      <div id='StatsPageTablesListsComponent-fully-container' className='mt-5'>
        <div className='flex justify-center items-center'>
          <table className='w-[97vw] table-content'>
            <thead className=''>
              <tr>
                <th className=''>
                  <p className='font-medium text-[15px] text-[#FFFFFF] opacity-50 leading-[15px]'>
                    #
                  </p>
                </th>
                <th className=''>
                  <p className='font-medium text-[15px] text-[#FFFFFF] opacity-50 leading-[15px]'>
                    Collection
                  </p>
                </th>

                <th className=''>
                  <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                    Floor price
                  </p>
                </th>
                <th className=''>
                  <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                    Floor change
                  </p>
                </th>
                <th className=''>
                  <div className='flex justify-center items-center w-[75px] h-[25px] bg-[#B4B3B3] rounded-[5px] gap-1'>
                    <p className='font-semibold text-[15px] text-[#000000] leading-[15px]'>
                      Volume
                    </p>
                    <Image src={BlackArrowDownIcon} alt='Volume change' />
                  </div>
                </th>
                <th className=''>
                  <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                    Volume change
                  </p>
                </th>
                <th className=''>
                  <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                    Items
                  </p>
                </th>
                <th className=''>
                  <p className='font-semibold text-[15px] text-[#FFFFFF] opacity-70 leading-[15px]'>
                    Owners
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              {StatsTableListsData.map((data) => (
                <tr key={data.Id}>
                  <td>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      {data.Hashtag}
                    </p>
                  </td>
                  <td>
                    <Image
                      width={65}
                      height={65}
                      src={data.CollectionImage}
                      className='mt-3'
                    />
                  </td>
                  <td>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      {data.CollectionName}
                    </p>
                  </td>
                  <td>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      {data.FloorPrice}
                    </p>
                  </td>
                  <td>
                    <p className='font-semibold text-[15px] text-[#008014] leading-[20px]'>
                      {data.FloorChange}
                    </p>
                  </td>
                  <td>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      {data.Volume}
                    </p>
                  </td>
                  <td>
                    <p className='font-semibold text-[15px] text-[#AA0000] leading-[20px]'>
                      {data.VolumeChange}
                    </p>
                  </td>
                  <td>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      {data.Items}
                    </p>
                  </td>
                  <td>
                    <p className='font-semibold text-[15px] text-[#FFFFFF] leading-[20px]'>
                      {data.Owners}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StatsPageListComponent




