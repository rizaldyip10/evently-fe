import React from 'react'
import SidebarItems from './sidebar-items'


const routes = [
    {label: 'Home', href: '/admin', icon: 'Home'},
    {label: 'Events', href: '/admin/event', icon: 'Calendar'},
    {label: 'Orders', href: '/admin/order', icon: 'ReceiptText'},
    {label: 'Promo', href: '/admin/promo', icon: 'TicketPercent'},
    {label: 'Report', href: '/admin/report', icon: 'BarChart4'},
]

const SidebarRoutes = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
        {
            routes.map((route, index) => (
                <SidebarItems 
                    label={route.label} 
                    href={route.href} 
                    key={index} 
                    variant='default' 
                    textSize='text-base'
                    icon={route.icon}
                />
            ))
        }
    </div>
  )
}

export default SidebarRoutes