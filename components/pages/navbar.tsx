import Link from 'next/link'
import React from 'react'
import NavbarRoutes from './navbar-routes'
import AuthBtn from './auth-btn'

const Navbar: React.FC = () => {
  return (
    <div className='w-full flex justify-between items-center p-16'>
      <Link href="/">
        <h1 className='text-primary-default font-bold text-2xl'>Evently</h1>
      </Link>
      <div>
        <NavbarRoutes />
      </div>
      <div>
        <AuthBtn />
      </div>
    </div>
  )
}

export default Navbar