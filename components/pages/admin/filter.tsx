import Image from 'next/image';

import React, { useState } from 'react';
import filterLine from "@/assets/icons/filter-lines.svg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from 'lucide-react';

const Filters: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleCategoryClick = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const handleItemClick = (value: string) => {
    setSelectedValue(value);
    setOpenCategory(null);
    
    console.log(`Selected value: ${value}`);
  };

  return (
    <div className="flex items-center">
      {/* <Image src={filterLine} alt="Filter" width={24} height={24} className="mr-2" /> */}
      <Select value={selectedValue} onValueChange={handleItemClick}>
        <SelectTrigger className="w-[180px] bg-primary-white border-slate-300 rounded-[8px]">
          <SelectValue placeholder='Filter'>
            {selectedValue || 'Filter'}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-primary-white rounded-[8px] shadow-md border-slate-300">
          <SelectGroup>
            <div 
              className="flex justify-between items-center px-2 py-1 cursor-pointer hover:bg-gray-100"
              onClick={() => handleCategoryClick('date')}
            >
              <span className='text-sm text-gray-600'>By Date</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openCategory === 'date' ? 'transform rotate-180' : ''}`} />
            </div>
            {openCategory === 'date' && (
              <div className="pl-4 hover:border-y-gray-100">
                <SelectItem value="month" onClick={() => handleItemClick('month')} className='hover:bg-gray-100 cursor-pointer'>By Month</SelectItem>
                <SelectItem value="year" onClick={() => handleItemClick('year')} className='hover:bg-gray-100 cursor-pointer'>By Year</SelectItem>
              </div>
            )}
          </SelectGroup>
          <SelectGroup>
            <div 
              className="flex justify-between items-center px-2 py-1 cursor-pointer hover:bg-gray-100"
              onClick={() => handleCategoryClick('category')}
            >
              <span className='text-sm text-gray-600'>By Category</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${openCategory === 'category' ? 'transform rotate-180' : ''}`} />
            </div>
            {openCategory === 'category' && (
              <div className="pl-4">
                <SelectItem value="music" onClick={() => handleItemClick('music')}>Music</SelectItem>
                <SelectItem value="movie" onClick={() => handleItemClick('movie')}>Movie</SelectItem>
              </div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;

