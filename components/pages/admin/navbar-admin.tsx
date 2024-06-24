import Link from 'next/link'
import React from 'react'

const NavbarAdmin = () => {
    return (
        <div className='w-full flex px-10'>
            <div className='md:hidden'>
                <Link href="/admin">
                    <h1 className='text-primary-default font-bold text-2xl'>Evently</h1>
                </Link>
            </div>
            <div className='flex items-center gap-2 ml-auto'>
                <p>+ Event</p>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default NavbarAdmin