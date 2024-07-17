import { EventVouchersType } from "@/constants/type/event-vouchers-type"
import { UserSessionProps } from "@/constants/type/user-session-props"
import axios from "@/utils/axios"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

const useEventVouchers = (eventSlug: string) => {
    const { data: session } = useSession()
    const user = session?.user as UserSessionProps
    const {
        data,
        isLoading,
        error
    } = useQuery({
        queryKey: ['get-event-vouchers', eventSlug],
        queryFn: async () => await axios.get("/voucher/dwp-2024", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
    })
    const vouchers = data as unknown as EventVouchersType[]
    return { 
        vouchers,
        isLoading,
        error
    }
}

export default useEventVouchers