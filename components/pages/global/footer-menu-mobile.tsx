import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import React from 'react'

interface MenuChildrenItem {
    label: string
    href: string
}

interface MenuItem {
    label: string;
    children: MenuChildrenItem[]
}

interface FooterMenuMobileProps {
    menu: MenuItem[]
}

const FooterMenuMobile: React.FC<FooterMenuMobileProps> = ({ menu }) => {
  return (
    <div className='w-full lg:hidden'>
        {
            menu.map((item, index) => (
                <Accordion key={index} collapsible type='single' className='w-full text-[#fff]'>
                    <AccordionItem value={item.label}>
                        <AccordionTrigger>
                            <h1 className='text-base font-medium'>{ item.label }</h1>
                        </AccordionTrigger>
                        <AccordionContent className='flex flex-col gap-2'>
                            {
                                item.children.map((link, i) => (
                                    <Link key={i} href={link.href}>
                                        <p className='text-sm font-normal'>{ link.label }</p>
                                    </Link>
                                ))
                            }
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))
        }
    </div>
  )
}

export default FooterMenuMobile