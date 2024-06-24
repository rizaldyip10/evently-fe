import Link from 'next/link';
import React from 'react'

interface MenuChildrenItem {
    label: string
    href: string
}

interface MenuItem {
    label: string;
    children: MenuChildrenItem[]
}

interface FooterMenuProps {
    menu: MenuItem[]
}

const FooterMenu: React.FC<FooterMenuProps> = ({ menu }) => {
  return (
    <div className='w-full hidden lg:flex justify-between'>
        {
            menu.map((item, index) => (
                <div key={index} className='flex flex-col'>
                    <h1 className='font-bold text-[#fff] text-xl'>{ item.label }</h1>
                    <div className='flex flex-col gap-2 mt-3'>
                        {
                            item.children.map((menu, i) => (
                                <Link key={i} href={menu.href} className='hover:underline text-[#fff]'>
                                    <p className='text-[#fff] font-normal text-base'>{ menu.label }</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default FooterMenu