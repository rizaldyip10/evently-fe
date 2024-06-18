"use client"

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import React, { useState } from 'react'
import MobileMenu from './mobile-menu'

const MobileMenuBtn = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const onMenuOpen = () => {
        setIsMenuOpen(true)
    }

    const onMenuClose = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <Button variant='ghost' onClick={onMenuOpen} className='absolute right-0 mr-3 lg:hidden'>
                <Menu />
            </Button>

            <MobileMenu isOpen={isMenuOpen} onClose={onMenuClose} />
        </>
    )
}

export default MobileMenuBtn