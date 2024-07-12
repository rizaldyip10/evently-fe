import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Edit, EllipsisVertical, Trash2 } from 'lucide-react'
import React from 'react'

interface ReviewMenuProps {
    setEditState: React.Dispatch<React.SetStateAction<boolean>>
}

const ReviewMenu: React.FC<ReviewMenuProps> = ({ setEditState }) => {
    const onClick = () => {
        setEditState(true)
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='w-5 h-5 p-0 hover:bg-second-lightest focus:outline-none'>
                <EllipsisVertical className='w-5 h-5' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-primary-white rounded-[4px]'>
                <DropdownMenuItem className='w-full flex items-center justify-between cursor-pointer' onClick={onClick}>
                    <h1 className='text-base font-general-sans'>Edit</h1>
                    <Edit className='w-5 h-5' />
                </DropdownMenuItem>
                <Separator className='bg-second-lightest' />
                <DropdownMenuItem className='w-full flex items-center justify-between cursor-pointer'>
                    <h1 className='text-base font-general-sans text-error'>Delete</h1>
                    <Trash2 className='w-5 h-5 text-error' />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ReviewMenu