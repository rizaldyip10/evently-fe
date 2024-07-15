import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Edit, EllipsisVertical, Trash2 } from 'lucide-react'
import axios from '@/utils/axios'
import React from 'react'
import toast from 'react-hot-toast'
import { useSession } from 'next-auth/react'
import { useQueryClient } from '@tanstack/react-query'

interface ReviewMenuProps {
    setEditState: React.Dispatch<React.SetStateAction<boolean>>
    reviewId: number
    userEmail: string
}

const ReviewMenu: React.FC<ReviewMenuProps> = ({ reviewId, userEmail, setEditState }) => {
    const { data: session } = useSession()
    const queryClient = useQueryClient()

    if (session?.user?.email != userEmail) return null

    const onClick = () => {
        setEditState(true)
    }

    const onDelete = async () => {
        const toastLoading = toast.loading("Deleteing review")
        try {
            const response = await axios.delete(`/review/user-review/${reviewId}`)
            console.log(response);
            toast.dismiss(toastLoading)
            toast.success("Review deleted")
            queryClient.invalidateQueries({ queryKey: ["get-event-reviews"] })
        } catch (error) {
            console.log(error);
            toast.dismiss(toastLoading)
            toast.error("Failed to delete your review")
        }
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
                <DropdownMenuItem className='w-full flex items-center justify-between cursor-pointer' onClick={onDelete}>
                    <h1 className='text-base font-general-sans text-error'>Delete</h1>
                    <Trash2 className='w-5 h-5 text-error' />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ReviewMenu