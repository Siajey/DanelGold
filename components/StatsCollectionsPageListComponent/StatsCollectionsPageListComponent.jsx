import Image from "next/image";

//assets for this component
import BlackArrowDownIcon from "../../public/assets/icons/black-arrow-down-icon.svg";

//data for this component list
import { StatsTableListsData } from "../../data/StatsTablesListsData.js";

function StatsPageListComponent() {
  return (
    <table
      className="w-full mx-3"
      id="StatsPageTablesListsComponent-fully-container"
    >
      <thead>
        <tr>
          <th>
            <p className="font-medium text-[15px] text-gray-700 dark:text-white opacity-50 leading-[15px] text-start w-10">
              #
            </p>
          </th>
          <th className="">
            <p className="font-medium text-[15px] text-gray-700 dark:text-white opacity-50 leading-[15px] text-start w-24">
              Collection
            </p>
          </th>

          <th className="">
            <p className="font-semibold text-[15px] text-gray-700 dark:text-white opacity-70 leading-[15px] text-start w-40">
              Floor price
            </p>
          </th>
          <th className="">
            <p className="font-semibold text-[15px] text-gray-700 dark:text-white opacity-70 leading-[15px] text-start w-28">
              Floor change
            </p>
          </th>
          <th className="">
            <div className="flex justify-center items-center w-[85px] h-[25px] bg-[#B4B3B3] rounded-[5px] gap-1">
              <p className="font-semibold text-[15px] text-[#000000] leading-[15px] text-start ">
                Volume
              </p>
              <Image src={BlackArrowDownIcon} alt="Volume change" />
            </div>
          </th>
          <th className="">
            <p className="font-semibold text-[15px] text-gray-700 dark:text-white opacity-70 leading-[15px] text-start w-24">
              Volume change
            </p>
          </th>
          <th className="">
            <p className="font-semibold text-[15px] text-gray-700 dark:text-white opacity-70 leading-[15px] text-start w-24">
              Items
            </p>
          </th>
          <th className="">
            <p className="font-semibold text-[15px] text-gray-700 dark:text-white opacity-70 leading-[15px] text-start w-24">
              Owners
            </p>
          </th>
        </tr>
      </thead>

      <tbody>
        {StatsTableListsData.map((data) => (
          <tr key={data.Id}>
            <td>
              <p className="font-semibold text-[15px] text-gray-700 dark:text-white leading-[20px]">
                {data.Hashtag}
              </p>
            </td>
            <td>
              <Image
                width={65}
                height={65}
                src={data.CollectionImage}
                className="mt-3"
              />
            </td>
            <td>
              <p className="font-semibold text-[15px] text-gray-700 dark:text-white leading-[20px]">
                {data.CollectionName}
              </p>
            </td>
            <td>
              <p className="font-semibold text-[15px] text-gray-700 dark:text-white leading-[20px]">
                {data.FloorPrice}
              </p>
            </td>
            <td>
              <p className="font-semibold text-[15px] text-[#008014] leading-[20px]">
                {data.FloorChange}
              </p>
            </td>
            <td>
              <p className="font-semibold text-[15px] text-gray-700 dark:text-white leading-[20px]">
                {data.Volume}
              </p>
            </td>
            <td>
              <p className="font-semibold text-[15px] text-[#AA0000] leading-[20px]">
                {data.VolumeChange}
              </p>
            </td>
            <td>
              <p className="font-semibold text-[15px] text-gray-700 dark:text-white leading-[20px]">
                {data.Items}
              </p>
            </td>
            <td>
              <p className="font-semibold text-[15px] text-gray-700 dark:text-white leading-[20px]">
                {data.Owners}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StatsPageListComponent;
