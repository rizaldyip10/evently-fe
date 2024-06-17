import Link from 'next/link'
import React from 'react'
import NavbarItems from './nav-items'

const categories = [
    {
        name: "Concerts",
        href: "/concerts"
    },
    {
        name: "Arts",
        href: "/arts"
    },
    {
        name: "Conferences",
        href: "/conference"
    },
    {
        name: "Movies",
        href: "/movies"
    },
    {
        name: "International",
        href: "/international"
    },
]

const NavbarRoutes = () => {
  return (
    <div className='flex justify-center items-center gap-8'>
        {
            categories.map((item, index) => (
                <NavbarItems label={item.name} key={index} href={item.href} variant="link" textSize='text-lg text-default font-normal' />
            ))
        }
    </div>
  )
}

export default NavbarRoutes