"use client"

import React from 'react';
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Filter } from 'lucide-react';
import { Separator } from '@radix-ui/react-separator';
import RadioOption from '../global/radio-option';
import useSearchFilter from '@/hooks/useSearchFilter';
import FilterOptionLoading from '@/components/loading/filter-option-loading';
import useCityList from '@/hooks/useCityList';
import useCategoryList from '@/hooks/useCategoryList';

const MobileSearchFilter = () => {
  const { filters, handleFilterChange } = useSearchFilter();
  const { cities, isLoading, error } = useCityList();
  const { categories, loading, error: catError } = useCategoryList();

  return (
    <Drawer>
      <DrawerTrigger className='w-full md:hidden bg-[#fff] border border-primary-default rounded-[4px] p-2'>
        <div className='flex items-center gap-x-2'>
          <Filter className='text-primary-default w-4 h-4' />
          <h1 className='text-primary-default text-sm'>Filter</h1>
        </div>
      </DrawerTrigger>
      <DrawerContent className='bg-primary-white px-5 pb-5'>
        <DrawerTitle className='mt-5'>Filter</DrawerTitle>
        <Separator className='my-3 bg-second-lightest' />
        <FilterSection
          title="Categories"
          items={categories}
          loading={loading}
          selectedValue={filters.category}
          onValueChange={(value) => handleFilterChange({ category: value })}
        />
        <Separator className='my-3 bg-second-lightest' />
        <FilterSection
          title="Location"
          items={cities}
          loading={isLoading}
          selectedValue={filters.city}
          onValueChange={(value) => handleFilterChange({ city: value })}
        />
        <DrawerClose className='w-full bg-primary-default text-[#fff] mt-5 rounded-[2px] hover:bg-primary-lightest hover:text-primary-default py-2.5'>
          Close
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

interface FilterSectionProps {
  title: string;
  items: any[] | undefined;
  loading: boolean;
  selectedValue: string | null;
  onValueChange: (value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  items,
  loading,
  selectedValue,
  onValueChange
}) => {
  const fieldName = title.toLowerCase() === 'categories' ? 'category' : 'city';
  
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-base font-medium text-default'>{title}</h1>
      <div className='flex flex-wrap gap-x-2 gap-y-3'>
        {loading ? (
          <FilterOptionLoading style='col' />
        ) : (
          <>
            <RadioOption
              name={fieldName}
              value=''
              label='All'
              onChange={onValueChange}
              checked={selectedValue === null || selectedValue === ''}
            />
            {items?.map((item, i) => (
              <RadioOption
                key={i}
                name={fieldName}
                value={typeof item === 'string' ? item : item.name}
                label={typeof item === 'string' ? item : item.name}
                onChange={onValueChange}
                checked={selectedValue === (typeof item === 'string' ? item : item.name)}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MobileSearchFilter;