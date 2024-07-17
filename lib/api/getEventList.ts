import { SearchQueryType } from "@/constants/type/search-query-type";
import axios from "@/utils/axios";

export const getEventList = async (filters?: Partial<SearchQueryType>) => {
    try {
        const { data, status } = await axios.get("/event", {
            params: filters
        });

        if (status != 200) throw new Error(`Failed to fetch data with status code ${status}`);

        return data.data;
    } catch (error: any) {
        throw error;
    };
}