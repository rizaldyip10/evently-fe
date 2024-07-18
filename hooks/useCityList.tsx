import { getCityList } from "@/lib/api/getCityList";
import { useInfiniteQuery } from "@tanstack/react-query";

const useCityList = () => {
    const {
        data: cityList,
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    } = useInfiniteQuery({
        queryKey: ['get-city'],
        queryFn: async ({ pageParam }) => {
            const response = await getCityList(pageParam);
            return {
                cities: response.content,
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
        cities: cityList?.pages.flatMap((page) => page.cities),
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    }
};

export default useCityList;