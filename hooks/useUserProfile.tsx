"use client"

import { UserProfileType } from '@/constants/type/user-profile';
import { useQuery } from '@tanstack/react-query';
import axios from '@/utils/axios';
import { getCookieClient } from '@/utils/client-cookies';

const useUserProfile = () => {
    const cookie = getCookieClient("sid")
    console.log(cookie);
    
    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ["get-profile"],
        queryFn: async () => await axios.get("/auth/profile")
    })

    return {
        profile: data?.data.data as UserProfileType,
        isLoading,
        error
    }
}

export default useUserProfile