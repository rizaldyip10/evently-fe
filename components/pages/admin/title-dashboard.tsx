import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from '@radix-ui/react-select';
import React, { useState } from 'react';

interface TitleDashboardProps {
  name: string;
}

const TitleDashboard: React.FC<TitleDashboardProps> = ({ name }) => {
  const [selectedValue, setSelectedValue] = useState<string>('Month');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className='w-full flex flex-row justify-between items-center'>
      <h1 className='text-lg font-semibold'>{name}</h1>
      <div className='w-max '>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className='px-8 bg-primary-white border border-slate-300 rounded-[8px] h-[40px] text-xs font-semibold text-gray-700'>
            <SelectValue placeholder="This month" className='h-[180px] text-gray-900 font-semibold text-xs'/>
          </SelectTrigger>
          <SelectContent className='bg-primary-white shadow-md w-[180px] mt-2 rounded-[8px]'>
            <SelectGroup>
              <SelectItem value="Week" className='px-4 py-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-200'>Week</SelectItem>
              <SelectItem value="Month" className='px-4 py-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-200'>Month</SelectItem>
              <SelectItem value="Year" className='px-4 py-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-200'>Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>

  );
}

export default TitleDashboard;
