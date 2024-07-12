import { Calendar, Facebook, Instagram, Link as LinkIcon, MapPin, Star, Twitter } from 'lucide-react'
import React from 'react'
import EventPrice from './event-price'
import Link from 'next/link'

const EventDesc = () => {
    return (
        <div className='w-full flex flex-col gap-4 font-general-sans'>
            <div className='w-full flex items-start justify-between'>
                <div className='flex flex-col gap-4 max-w-[650px]'>
                    <h1 className='text-3xl font-bold'>Drive In Senja: Back to The Future</h1>
                    <div className='flex flex-col-reverse md:flex-row gap-4 md:gap-10 items-start md:items-center my-2'>
                        <div className='flex gap-2 items-center'>
                            <Star className='text-[#e7e55c]' />
                            <h1>4.5 ratings</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h1>Share:</h1>
                            <div className='flex gap-2'>
                                <Link className='w-8 h-8 border border-primary-default rounded-[2px] flex items-center justify-center' href=''>
                                    <LinkIcon className='w-4 h-4 text-primary-default' />
                                </Link>
                                <Link className='w-8 h-8 border border-primary-default rounded-[2px] flex items-center justify-center' href=''>
                                    <Instagram className='w-4 h-4 text-primary-default' />
                                </Link>
                                <Link className='w-8 h-8 border border-primary-default rounded-[2px] flex items-center justify-center' href=''>
                                    <Twitter className='w-4 h-4 text-primary-default' />
                                </Link>
                                <Link className='w-8 h-8 border border-primary-default rounded-[2px] flex items-center justify-center' href=''>
                                    <Facebook className='w-4 h-4 text-primary-default' />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex gap-2 items-center'>
                        <MapPin className='w-4 h-4 font-bold' />
                        <p className='font-bold'>Parkiran Utama Mall @ Alam Sutra</p>
                    </div>
                    <div className='w-full flex gap-2 items-center'>
                        <Calendar className='w-4 h-4 font-bold' />
                        <p className='font-bold'>September 22 2023 | 20.00 - 21.56</p>
                    </div>
                    <p className='text-lg font-general-sans'>
                        Marty travels back in time using an eccentric scientist&apos;s time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.
                    </p>
                </div>
                <EventPrice />
            </div>
            <div className='w-full flex flex-col gap-4 mt-5'>
                <h1 className='text-2xl font-semibold font-general-sans'>Description</h1>
                <p className='text-base font-normal font-general-sans'>
                    Drive-In Senja memberikan retro drive-in experience yang dikemas secara modern. Penggunaan transmisi radio kit, mengintegrasikan suara film ke dalam radio mobil, ditambah proyektor resolusi tinggi yang menyediakan pengalaman visual terbaik. Acara ini merupakan sarana yang aman untuk menghabiskan waktu bersama keluarga, pasangan, maupun komunitas
                </p>
            </div>
        </div>
    )
}

export default EventDesc