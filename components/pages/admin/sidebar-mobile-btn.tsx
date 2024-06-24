"use client"

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import SidebarMobile from './mobile-menu'

const SidebarMobileBtn = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Button onClick={onOpen} variant='ghost' className='p-0 lg:hidden'>
                <Menu />
            </Button>

            <SidebarMobile isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default SidebarMobileBtn