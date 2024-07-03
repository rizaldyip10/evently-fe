import React from 'react'
import profileImg from '@/assets/image/Photo (2).jpg'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ProfilePicture = () => {
    return (
        <div className='flex flex-col gap-5'>
            <label htmlFor="uploadImg" className='relative block w-48 h-48 bg-grey rounded-full overflow-hidden'>
                <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-primary-white bg-dark opacity-0 hover:opacity-50 cursor-pointer">
                    Upload Image
                </div>
                <Image src={profileImg} alt='' />
            </label>
            <Input 
                type='file'
                id='uploadImg'
                accept=".jpeg, .png, .jpg" 
                className='hidden'
            />
            <Button className='w-full bg-primary-default text-white text-lg text-primary-white hover:bg-primary-lightest hover:text-primary-default rounded-[4px]'>
                Upload
            </Button>
        </div>
    )
}

export default ProfilePicture