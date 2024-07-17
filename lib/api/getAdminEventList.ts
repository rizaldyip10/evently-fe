import axios from "@/utils/axios";

export const getAdminEventList = async (token: string) => {
    try {
        const { data, status } = await axios.get("/event-organization/events", {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        })

        if (status != 200) throw new Error(`Failed to fetch admin event list with error ${status}`)

        return data.data
    } catch (error) {
        throw error
    }
}