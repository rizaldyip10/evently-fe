import React from 'react'
import { Skeleton } from '../ui/skeleton';

interface FilterOptionLoadingProps {
    style: 'row' | 'col';
}
const FilterOptionLoading: React.FC<FilterOptionLoadingProps> = ({ style }) => {
    
    return (
        <div className={`w-full flex flex-${style} gap-2`}>
            <Skeleton className='w-full h-5 rounded-[4px] bg-light/20' />
            <Skeleton className='w-full h-5 rounded-[4px] bg-light/20' />
            <Skeleton className='w-full h-5 rounded-[4px] bg-light/20' />
            <Skeleton className='w-full h-5 rounded-[4px] bg-light/20' />
            <Skeleton className='w-full h-5 rounded-[4px] bg-light/20' />
        </div>
    )
}

export default FilterOptionLoading