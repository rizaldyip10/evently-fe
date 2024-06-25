"use client"

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import { BarChart4, Calendar, Home, ReceiptText, TicketPercent } from 'lucide-react'
import React from 'react'

const iconMap = {
    Home,
    Calendar,
    ReceiptText,
    TicketPercent,
    BarChart4
};

interface SidebarItemsProps {
    href: string;
    label: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    textSize: string;
    icon: string
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ href, label, variant, textSize, icon }) => {
    const router = useRouter()
    const pathname = usePathname()

    const isActive = pathname == href
    
    const onClick = () => {
        router.push(href)
    };

    const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <Button onClick={onClick} variant={variant} className={cn("bg-[#fff] text-start flex justify-start h-14 gap-2 rounded-[4px] hover:bg-primary-lightest hover:text-primary-default text-light", isActive ? 'bg-primary-default text-[#fff]' : '')}>
        <Icon />
        <p className={textSize}>{ label }</p>
    </Button>
  )
}

export default SidebarItems