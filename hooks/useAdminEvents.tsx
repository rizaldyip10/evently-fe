"use client"

import { AdminEventsType } from "@/constants/type/admin-event-types"
import { UserSessionProps } from "@/constants/type/user-session-props"
import { getAdminEventList } from "@/lib/api/getAdminEventList"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

const useAdminEvents = () => {
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps

    const {
        data: eventList,
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['get-admin-events'],
        queryFn: async () => {
            const response = await getAdminEventList(user.token)
            return {
                events: response.content,
                totalPages: response.totalPages,
                totalElements: response.totalElements,
                currentPage: response.pageable.pageNumber
            }
        },
        getNextPageParam: (lastPage) => {
            if (lastPage.currentPage < lastPage.totalPages - 1) {
                return lastPage.currentPage + 1;
            }

            return undefined;
        },
        initialPageParam: 0
    })

    return {
        events: eventList?.pages.flatMap(event => event.events) as AdminEventsType[],
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    }
}

export default useAdminEvents