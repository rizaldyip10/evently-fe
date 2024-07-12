"use client"

import { UserProfileType } from '@/lib/type/user-profile';
import axios from '@/utils/axios';
import { useEffect, useState } from 'react'

const useUserProfile = () => {
    const [profile, setProfile] = useState<UserProfileType | null>(null);
    
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const { data, status } = await axios.get("/auth/profile")
    
                if (status !== 200) {
                    console.log("Cannot fetch user profile");
                    throw new Error("Cannot fetch data")
                }
    
                setProfile(data.data)
            } catch (error) {
                console.error(error);
            }
        }

        fetchUserProfile()
    }, [])

    return { profile }
}

export default useUserProfile