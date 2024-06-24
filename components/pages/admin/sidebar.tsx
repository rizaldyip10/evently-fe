import Link from 'next/link'
import React from 'react'
import SidebarRoutes from './sidebar-routes'

const Sidebar = () => {
    return (
        <div className='w-full flex flex-col'>
            <div className='w-full p-9 '>
                <Link href="/admin">
                    <h1 className='text-primary-default font-bold text-2xl'>Evently</h1>
                </Link>
            </div>
            <div className='mt-4 p-3'>
                <SidebarRoutes />
            </div>
        </div>
    )
}

export default Sidebar