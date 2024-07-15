"use client"

import { getEventReview } from "@/lib/api/getEventReview"
import { useInfiniteQuery } from "@tanstack/react-query"

const UseEventReviews = (eventSlug: string) => {
    const {
        data: reviewList,
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ["get-event-reviews"],
        queryFn: async () => {
            const response = await getEventReview(eventSlug);
            console.log(response);
            
            return {
                reviews: response.content,
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
        initialPageParam: 0,
        enabled: !!eventSlug,
    })

    return {
        reviews: reviewList?.pages.flatMap((page) => page.reviews),
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    }
}

export default UseEventReviews