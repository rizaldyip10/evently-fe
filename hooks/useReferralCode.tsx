import axios from "@/utils/axios"
import { useQuery } from "@tanstack/react-query"

const useReferralCode = () => {
    const {
        data: response,
        isLoading,
        error
    } = useQuery({
        queryKey: ['get-referral-code'],
        queryFn: async () => await axios.get("/users/referral-code")
    })

    return {
        referralCode: response?.data.data,
        isLoading,
        error
    }
}

export default useReferralCode