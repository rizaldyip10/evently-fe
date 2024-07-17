"use client"

import { UserSessionProps } from "@/constants/type/user-session-props"
import axios from "@/utils/axios"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

const useActiveTrxDetail = (trxId: string | null) => {
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps
    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ['get-active-trx-detail', trxId],
        queryFn: async () => await axios.get(`/transactions/detail/${trxId}`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }),
        enabled: !!trxId
    })

    return { data: data?.data.data, isLoading, error }
}

export default useActiveTrxDetail