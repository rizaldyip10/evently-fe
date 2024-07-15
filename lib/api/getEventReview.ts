import axios from "@/utils/axios";

export const getEventReview = async (eventSlug: string) => {
    try {
        const { data, status } = await axios.get(`/review/${eventSlug}`)

        if (status !== 200) throw new Error(`Failed to fetch ${eventSlug} reviews`)

        return data.data
    } catch (error) {
        console.log(error);
        throw error
    }
}