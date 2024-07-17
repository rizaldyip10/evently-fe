import axios from "@/utils/axios";

export const getTicketList = async (eventSlug: string, token: string) => {
    try {
        const { data, status } = await axios.get(`/ticket/event/${eventSlug}`, {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        })

        if (status != 200) throw new Error(`Failed to fetch ticket list w/ error ${status}`)

        return data.data
    } catch (error) {
        console.log(error);
        return error
    }
}