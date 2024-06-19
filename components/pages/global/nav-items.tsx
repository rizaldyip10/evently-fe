"use client"

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

interface NavbarItemsProps {
    href: string;
    label: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    textSize: string;
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ href, label, variant, textSize }) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href)
    };

  return (
    <Button onClick={onClick} variant={variant}>
        <p className={textSize}>{ label }</p>
    </Button>
  )
}

export default NavbarItems