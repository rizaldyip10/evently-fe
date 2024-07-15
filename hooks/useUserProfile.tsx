"use client"

import { UserProfileType } from '@/constants/type/user-profile';
import axios from '@/utils/axios';
import { isAxiosError } from 'axios';
import { signOut } from 'next-auth/react';
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
                if (isAxiosError(error)) {
                    if (error.response?.status === 401) {
                        signOut()
                    }
                }
                console.error(error);
            }
        }

        fetchUserProfile()
    }, [])

    return { profile }
}

export default useUserProfile