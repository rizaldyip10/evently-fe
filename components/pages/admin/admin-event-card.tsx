import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import eventImg from "@/assets/image/image 2.png"
import Image from "next/image"
import EventCardMenu from "./event-card-menu"
import { AdminEventsType } from "@/constants/type/admin-event-types"
import { DateFormater } from "@/utils/date-formatter"
import { Separator } from "@/components/ui/separator"
import useEventVouchers from "@/hooks/useEventVouchers"

interface AdminEventCardProps {
    event: AdminEventsType
}

const AdminEventCard: React.FC<AdminEventCardProps> = ({ event }) => {
    const { vouchers, isLoading, error } = useEventVouchers(event.event.slug)

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error) {
        return (
            <div>Error</div>
        )
    }
    return (
        <Accordion type="single">
            <AccordionItem value="item-1">
                <AccordionTrigger className="w-full flex flex-col items-start px-3 gap-1">
                    <Image src={eventImg} alt="" className="object-cover" />
                    <h1 className="text-xl">{event.event.name}</h1>
                    <div className="w-full flex gap-2 items-center">
                        <h1>{event.event.city}</h1>
                        <Separator orientation="vertical" className="bg-second-lightest" />
                        <h1>{DateFormater(event.event.date)}</h1>
                    </div>
                </AccordionTrigger>
                {
                    vouchers && vouchers?.map((voucher, i) => (
                        <AccordionContent key={i}>
                            <div className="w-full flex flex-col items-start gap-3">
                                <h1>{voucher.voucher.name}</h1>
                                <p>Discount: {voucher.voucher.discount * 100}%</p>
                                <p>Expire date: {voucher.expiredAt}</p>
                                <EventCardMenu />
                            </div>
                        </AccordionContent>
                    ))
                }
            </AccordionItem>
        </Accordion>
    )
}

export default AdminEventCard