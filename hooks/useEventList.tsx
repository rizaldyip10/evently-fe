import { SearchQueryType } from "@/constants/type/search-query-type"
import { getEventList } from "@/lib/api/getEventList";
import { useInfiniteQuery } from "@tanstack/react-query"

const useEventList = (filters?: Partial<SearchQueryType>) => {
    const {
        data: eventList,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['get-event', filters],
        queryFn: async ({ pageParam }) => {
            const response = await getEventList({ ...filters, page: pageParam });
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
        initialPageParam: 0,
        enabled: !!filters,
    })

    return { 
        events: eventList?.pages.flatMap((page) => page.events), 
        isLoading, 
        error, 
        fetchNextPage, 
        hasNextPage, 
        isFetchingNextPage 
    }
}

export default useEventList;