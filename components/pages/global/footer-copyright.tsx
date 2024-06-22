import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FooterCopyRight = () => {
    return (
        <div className='w-full flex flex-col md:flex-row items-start md:items-center gap-4 mb-10'>
            <div className='w-max flex gap-5'>
                <Link href=''>
                    <Twitter className='text-[#fff]' />
                </Link>
                <Link href=''>
                    <Instagram className='text-[#fff]' />
                </Link>
                <Link href=''>
                    <Facebook className='text-[#fff]' />
                </Link>
            </div>
            <div className='w-max md:ml-auto'>
                <h1 className='text-[#fff] whitespace-nowrap'>&copy; Evently Incorporated</h1>
            </div>
        </div>
    )
}

export default FooterCopyRight