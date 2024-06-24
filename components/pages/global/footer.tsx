import { Separator } from '@/components/ui/separator'
import React from 'react'
import FooterMenuMobile from './footer-menu-mobile'
import FooterMenu from './footer-menu'
import FooterCopyRight from './footer-copyright'

const menus = [
  {
      label: "About",
      children: [
          { label: "About Evently", href: "/" },
          { label: "How it works", href: "/" },
          { label: "Careers", href: "/" },
          { label: "Press", href: "/" },
          { label: "Blog", href: "/" },
          { label: "Forum", href: "/" },
      ]
  },
  {
      label: "Partner with us",
      children: [
          { label: "Partnership programs", href: "/" },
          { label: "Affiliate programs", href: "/" },
          { label: "Connectivity partners", href: "/" },
          { label: "Promotion and events", href: "/" },
          { label: "Integrations", href: "/" },
          { label: "Community", href: "/" },
          { label: "Loyalty program", href: "/" },
      ]
  },
  {
      label: "Support",
      children: [
          { label: "Help Center", href: "/" },
          { label: "Contact us", href: "/" },
          { label: "Privacy policy", href: "/" },
          { label: "Terms of service", href: "/" },
          { label: "Trust and safety", href: "/" },
          { label: "Accessibility", href: "/" },
      ]
  },
  {
      label: "Get the app",
      children: [
          { label: "Evently for Android", href: "/" },
          { label: "Evently for iOS", href: "/" },
          { label: "Mobile site", href: "/" },
      ]
  },
]

const Footer: React.FC = () => {
  return (
    <div className='w-full flex flex-col bg-primary-default'>
        <div className='w-full flex flex-col lg:flex-row p-5 lg:py-14 lg:px-32 gap-10 lg:gap-16'>
          <h1 className='text-[#fff] font-bold text-3xl'>Evently</h1>
          <FooterMenuMobile menu={menus} />
          <FooterMenu menu={menus} />
        </div>
        <Separator className='my-10 bg-second-lightest' />
        <div className='w-full px-5 py-1 lg:py-3 lg:px-32'>
            <FooterCopyRight />
        </div>
    </div>
  )
}

export default Footer