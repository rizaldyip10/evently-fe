import axios from "@/utils/axios";

export const getCityList = async (page: number) => {
    try {
        const { data, status } = await axios.get("/event/cities", {
            params: { page }
        });

        if (status !== 200) throw new Error("Failed to fetch city list");

        return data.data
    } catch (error) {
        throw error;
    }
}