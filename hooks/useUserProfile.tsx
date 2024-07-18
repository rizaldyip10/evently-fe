"use client"

import axios from '@/utils/axios';
import { UserProfileType } from '@/constants/type/user-profile';
import { useQuery } from '@tanstack/react-query';
import { UserSessionProps } from '@/constants/type/user-session-props';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useUserProfile = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const user = session?.user as UserSessionProps;

    useEffect(() => {
        const checkTokenExpiration = () => {
            if (session?.expires) {
                const expirationTime = new Date(session.expires).getTime();
                const currentTime = new Date().getTime();
                
                if (currentTime >= expirationTime) {
                    signOut({ callbackUrl: '/' });
                }
            }
        };

        checkTokenExpiration();
        const intervalId = setInterval(checkTokenExpiration, 60000);

        return () => clearInterval(intervalId);
    }, [session, router]);
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

    return {
        profile: data?.data.data as UserProfileType,
        isLoading,
        error
    }
}

export default useUserProfile