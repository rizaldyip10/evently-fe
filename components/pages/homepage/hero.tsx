import React from 'react'
import lamp from '@/assets/image/pablita-794.png'
import lampMobile from '@/assets/image/pablita-794 mobile.png'
import image1mobile from '@/assets/image/pablita-693 mobile.png'
import image6mobile from '@/assets/image/pablita-673 1 mobile.png'
import image1 from '@/assets/image/pablita-693.webp'
import image2 from '@/assets/image/pablita-251 1.webp'
import image3 from '@/assets/image/pablita-woman-10 1.webp'
import image4 from '@/assets/image/pablita-man-15 1.webp'
import image5 from '@/assets/image/pablita-woman-16 1.webp'
import image6 from '@/assets/image/pablita-673 1.webp'
import Image from 'next/image'
import EventSearch from './event-search'

const Hero: React.FC = () => {
  return (
    <div className='w-full h-64 md:h-96 flex flex-col justify-between relative border-b border-default'>
      <div className='flex w-full justify-between px-5'>
        <Image src={lamp} alt='' className='hidden md:block' />
        <Image src={lamp} alt='' className='hidden md:block' />

        <Image src={lampMobile} alt='' className='md:hidden' />
        <Image src={lampMobile} alt='' className='md:hidden' />
      </div>
      <div className='w-full flex justify-center text-center px-5'>
        <h1 className='text-3xl font-bold font-cabinet-grotesk text-primary-default lg:text-6xl'>
          Exclusive events, priceless moments
        </h1>
      </div>
      <div className='w-full flex justify-center lg:justify-between items-end'>
        <Image src={image1} alt='' className='hidden md:block' />
        <Image src={image2} alt='' className='hidden lg:block' />
        <Image src={image3} alt='' className='hidden lg:block' />
        <Image src={image4} alt='' className='hidden lg:block' />
        <Image src={image5} alt='' className='hidden lg:block' />
        <Image src={image6} alt='' className='hidden md:block' />

        <Image src={image1mobile} alt='' className='md:hidden' />
        <Image src={image6mobile} alt='' className='md:hidden' />
      </div>
      <div className='absolute w-full bottom-0 translate-y-1/2 px-5'>
        <EventSearch />
      </div>
    </div>
  )
}

export default Hero