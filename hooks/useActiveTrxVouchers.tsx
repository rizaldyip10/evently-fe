"use client"

import { VoucherType } from "@/constants/type/voucher-type"
import { getTrxVouchers } from "@/lib/api/getTrxVouchers"
import { useInfiniteQuery } from "@tanstack/react-query"

const useActiveTrxVouchers = (eventSlug: string) => {
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
            const response = await getTrxVouchers(eventSlug, pageParam)
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