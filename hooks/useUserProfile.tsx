"use client"

import { UserProfileType } from '@/constants/type/user-profile';
import axios from '@/utils/axios';
import { isAxiosError } from 'axios';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

const useUserProfile = () => {
    const router = useRouter()
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
                        router.push("/login")
                    }
                }
                console.error(error);
            }
        }

        fetchUserProfile()
    }, [router])

    return { profile }
}

export default useUserProfile