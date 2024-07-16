import axios from "@/utils/axios";

export const getTicketList = async (eventSlug: string) => {
    try {
        const { data, status } = await axios.get(`/ticket/event/${eventSlug}`)

        if (status != 200) throw new Error(`Failed to fetch ticket list w/ error ${status}`)

        return data.data
    } catch (error) {
        console.log(error);
        return error
    }
}