"use client"

import { UserProfileType } from '@/constants/type/user-profile';
import { useQuery } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { UserSessionProps } from '@/constants/type/user-session-props';
import { useSession } from 'next-auth/react';

const useUserProfile = () => {
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps
    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ["get-profile"],
        queryFn: async () => await axios.get("/auth/profile", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
    })

    console.log(data);
    

    return {
        profile: data?.data.data as UserProfileType,
        isLoading,
        error
    }
}

export default useUserProfile