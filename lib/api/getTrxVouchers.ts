import axios from "@/utils/axios";

export const getTrxVouchers = async (eventSlug: string, token: string, page?: number) => {
    try {
        const { data, status } = await axios.get(`/voucher/transaction/${eventSlug}`, {
            params: { page },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (status !== 200) throw new Error(`Failed to fetch trx data with status ${status}`)

        return data.data
    } catch (error) {
        throw error
    }
}