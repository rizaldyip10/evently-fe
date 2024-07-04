import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { ChevronsUpDown } from 'lucide-react'
import React from 'react'

const ProfileOrderFilter = () => {
  return (
    <Select>
        <SelectTrigger className='w-20 rounded-[4px] border border-primary-default text-primary-default'>
            Sort
        </SelectTrigger>
        <SelectContent className='bg-primary-white rounded-[4px] border border-primary-default'>
            <SelectGroup className='py-2 px-3 flex flex-col gap-2 text-primary-default'>
                <SelectLabel className='p-0 text-base'>Sort by:</SelectLabel>
                <Separator className='bg-second-lightest' />
                <SelectItem value='asc' className='py-0 text-base'>Recent purchase</SelectItem>
                <SelectItem value='desc' className='py-0 text-base'>Oldest purchase</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}

export default ProfileOrderFilter