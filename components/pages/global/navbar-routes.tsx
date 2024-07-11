import Link from 'next/link'
import React from 'react'
import NavbarItems from './nav-items'

const categories = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Events",
        href: "/events"
    },
    {
        name: "About Us",
        href: "/about-us"
    },
    {
        name: "Contact Us",
        href: "/contact"
    },
]

interface NavbarRoutesProps {
    style: string
}

const NavbarRoutes: React.FC<NavbarRoutesProps> = ({ style }) => {
  return (
    <div className={style}>
        {
            categories.map((item, index) => (
                <NavbarItems label={item.name} key={index} href={item.href} variant="ghost" textSize='text-lg text-default font-normal' />
            ))
        }
    </div>
  )
}

export default NavbarRoutes