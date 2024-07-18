import { auth } from '@/auth'
import ProfileBio from '@/components/pages/profile/profile-bio'
import ProfilePicture from '@/components/pages/profile/profile-picture'
import { UserSessionProps } from '@/constants/type/user-session-props'
import React from 'react'

const ProfilePage = async () => {
  // const session = await auth()
  // const user = session?.user as UserSessionProps;

  // if (!session || user.token == "ORGANIZER") {
  //   return <div>403</div>
  // }
  return (
    <div className='w-full flex flex-col px-5 lg:px-0 gap-10'>
        <h1 className='text-xl font-semibold'>Your Profile</h1>
        <div className='w-full flex flex-col items-center md:flex-row gap-14'>
            <ProfilePicture />
            <ProfileBio />
        </div>
    </div>
  )
}

export default ProfilePage