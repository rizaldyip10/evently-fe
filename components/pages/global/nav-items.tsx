"use client"

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

interface NavbarItemsProps {
    href: string;
    label: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    textSize: string;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ href, label, variant, textSize }) => {
    const router = useRouter()
    const pathname = usePathname()

    const isActive = pathname == href
    
    const onClick = () => {
        router.push(href)
    };

  return (
    <Button onClick={onClick} variant={variant} className={cn("hover:text-primary-default hover:font-semibold", isActive ? 'lg:border-b lg:border-primary-default' : '')}>
        <p className={textSize}>{ label }</p>
    </Button>
  )
}

export default NavbarItems