import { UserSessionProps } from "@/constants/type/user-session-props"
import axios from "@/utils/axios"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

const useReferralCode = () => {
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps
    const {
        data: response,
        isLoading,
        error
    } = useQuery({
        queryKey: ['get-referral-code'],
        queryFn: async () => await axios.get("/users/referral-code", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
    })

    return {
        referralCode: response?.data.data,
        isLoading,
        error
    }
}

export default useReferralCode