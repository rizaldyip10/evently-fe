import Link from 'next/link'
import React from 'react'
import NavbarRoutes from './navbar-routes'
import AuthBtn from './auth-btn'
import MobileMenu from './mobile-menu'

const Navbar: React.FC = () => {
  return (
    <div className='w-full flex justify-between items-center px-8 md:px-16'>
      <Link href="/">
        <h1 className='text-primary-default font-bold text-2xl'>Evently</h1>
      </Link>
      <div className='hidden lg:block'>
        <NavbarRoutes style='flex justify-center items-center gap-8' />
      </div>
      <div className='hidden lg:block'>
        <AuthBtn containerStyle='flex items-center justify-between gap-8 flex-row' />
      </div>
      <div className='lg:hidden flex items-center'>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar