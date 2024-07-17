import Link from 'next/link'
import React from 'react'
import SidebarMobileBtn from './sidebar-mobile-btn'
import UserNavbarBtn from '../global/user-navbar-btn'

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
                <UserNavbarBtn />
            </div>
        </div>
    )
}

export default NavbarAdmin