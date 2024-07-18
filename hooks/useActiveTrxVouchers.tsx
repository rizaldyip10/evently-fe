"use client"

import { UserSessionProps } from "@/constants/type/user-session-props"
import { VoucherType } from "@/constants/type/voucher-type"
import { getTrxVouchers } from "@/lib/api/getTrxVouchers"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

const useActiveTrxVouchers = (eventSlug: string) => {
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps
    const {
        data: voucherList,
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['get-trx-vouchers', eventSlug],
        queryFn: async ({ pageParam }) => {
            const response = await getTrxVouchers(eventSlug, user.token, pageParam)
            return {
                vouchers: response.content,
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
        vouchers: voucherList?.pages.flatMap(page => page.vouchers) as VoucherType[],
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    }
}

export default useActiveTrxVouchers