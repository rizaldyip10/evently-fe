import React from 'react'
import SidebarRoutes from './sidebar-routes'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface SidebarMobileProps {
    isOpen: boolean
    onClose: () => void
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ isOpen, onClose }) => {
    return (
        <div className={cn('w-full md:w-1/4 absolute h-screen top-0 left-0 flex-col border-r border-[#CFCFCF] bg-[#fff]', isOpen ? 'flex animate-slide-in-right' : 'hidden animate-slide-out-right')}>
            <div className='w-full flex justify-end mt-3'>
                <Button onClick={onClose}>
                    <X />
                </Button>
            </div>
            <div className='mt-4 p-3'>
                <SidebarRoutes />
            </div>
        </div>
    )
}

export default SidebarMobile