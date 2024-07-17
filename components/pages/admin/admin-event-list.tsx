"use client"

import { Input } from "@/components/ui/input"
import AdminEventCard from "./admin-event-card"
import useAdminEvents from "@/hooks/useAdminEvents"


const AdminEventList = () => {
    const {
        events,
        isLoading,
        error,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage
    } = useAdminEvents()
    return (
        <div className="w-full flex flex-col gap-8">
            <div className="w-full flex flex-col md:flex-row items-center gap-5">
                <Input placeholder="Search" className="rounded-[4px] border-primary-default"/>
                <select className="w-full p-3 rounded-[4px] border-primary-default">
                    <option value="">Sort by:</option>
                    <option value="">Name</option>
                    <option value="">Date</option>
                    <option value="">Price</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-5">
                {
                    isLoading && <div>Loading...</div>
                }
                {
                    error && <div>Error fetching event list</div>
                }
                {
                    events?.map((event, i) => (
                        <AdminEventCard key={i} event={event} />
                    ))
                }
            </div>
        </div>
    )
}

export default AdminEventList