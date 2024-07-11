"use client"

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React from 'react'

interface BadgeProps {
    label: string
    classname: string
    href?: string
}

const Badge: React.FC<BadgeProps> = ({ label, classname, href }) => {
    const router = useRouter()
    let onClick

    if (href) {
        onClick = () => {
            router.push(href)
        }
    }

    return (
        <div className={cn('flex items-center justify-center border', classname)} onClick={onClick}>
            {label}
        </div>
    )
}

export default Badge