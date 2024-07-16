"use client"

import { getTicketList } from "@/lib/api/getTicketList"
import { useQuery } from "@tanstack/react-query"

const useTicketList = (eventSlug: string) => {
    const {
        data: ticketList,
        isLoading,
        error
    } = useQuery({
        queryKey: ["get-ticket-list"],
        queryFn: async () => getTicketList(eventSlug),
        retry: false
    })

    return { ticketList, isLoading, error }
}

export default useTicketList