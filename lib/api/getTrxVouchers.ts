import axios from "@/utils/axios";

export const getTrxVouchers = async (eventSlug: string, page?: number) => {
    try {
        const { data, status } = await axios.get(`/voucher/transaction/${eventSlug}`, {
            params: { page }
        })

        if (status !== 200) throw new Error(`Failed to fetch trx data with status ${status}`)

        return data.data
    } catch (error) {
        console.log(error);
        throw error
    }
}