"use client"

import axios from "@/utils/axios"
import { useQuery } from "@tanstack/react-query"

const useActiveTrxDetail = (trxId: string | null) => {
    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ['get-active-trx-detail', trxId],
        queryFn: async () => await axios.get(`/transactions/detail/${trxId}`),
        enabled: !!trxId
    })

    return { data: data?.data.data, isLoading, error }
}

export default useActiveTrxDetail