import Link from 'next/link'
import React from 'react'
import SidebarMobileBtn from './sidebar-mobile-btn'

const NavbarAdmin = () => {
    return (
        <div className='w-full flex items-center px-5 lg:px-10'>
            <SidebarMobileBtn />
            <div className='lg:hidden ml-auto'>
                <Link href="/admin">
                    <h1 className='text-primary-default font-bold text-2xl'>Evently</h1>
                </Link>
            </div>
            <div className='flex items-center gap-2 ml-auto'>
                {/* <p>+ Event</p> */}
                <div className='w-6 h-6 md:w-10 md:h-10 rounded-full border flex items-center justify-center'>
                    U
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin