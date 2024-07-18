"use client"

import React from 'react'
import { Separator } from '@/components/ui/separator';
import RadioOption from '../global/radio-option';
import useSearchFilter from '@/hooks/useSearchFilter';
import FilterOptionLoading from '@/components/loading/filter-option-loading';
import useCityList from '@/hooks/useCityList';
import useCategoryList from '@/hooks/useCategoryList';

const SearchFilter = () => {
    const { filters, handleFilterChange } = useSearchFilter();
    const { cities, isLoading, error } = useCityList();
    const { categories, loading, error: catError } = useCategoryList();

    return (
        <div className='w-full flex flex-col pl-8 lg:pl-16 pr-5'>
            <h1 className='text-xl text-default font-semibold font-general-sans'>Filters</h1>
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
        </div>
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
            <div className='flex flex-col gap-2'>
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
    )
};

export default SearchFilter;