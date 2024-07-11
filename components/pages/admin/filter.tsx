import Image from 'next/image';
import React, { useState } from 'react'
import filterLine from "@/assets/icons/filter-lines.svg";



const filterMenu = ['Category', 'A - Z'];


const Filters: React.FC = () => {

    const [isNavOpen, setOpenNav] = useState(false);
    const [openDropdown, setOpenDropDown] = useState(false);

    const toggleNav = () => {
        setOpenNav(!isNavOpen);
        setOpenDropDown(false);
    };

    const toggleDropDown = () => {
        setOpenDropDown(!openDropdown)
    };


  return (
    <div>
         <button className="flex flex-row justify-between border border-slate-300 bg-primary-white rounded-[8px] px-4 py-2 text-gray-700 gap-2">
            <Image
              src={filterLine}
              width={24}
              height={24}
              alt="filter-line-icon"
              onClick={toggleNav}
            />
            Filter
          </button>
          { isNavOpen && (
            <div className='w-full bg-primary-white shadow-md rounded-[8px] '>
                <div className='flex flex-col px-2 py-1 text-gray-700 hover:bg-gray-50'>
                    {filterMenu}
                </div>

            </div>
          )}
      
    </div>
  )
}

export default Filters
