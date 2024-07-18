"use client"

import { UserSessionProps } from "@/constants/type/user-session-props"
import { getTicketList } from "@/lib/api/getTicketList"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

const useTicketList = (eventSlug: string) => {
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps
    const {
        data: ticketList,
        isLoading,
        error
    } = useQuery({
        queryKey: ["get-ticket-list", eventSlug],
        queryFn: async () => getTicketList(eventSlug, user.token),
        enabled: !!eventSlug
    })

    return { ticketList, isLoading, error }
}

export default useTicketList