import { EventType, TicketType } from "./event-list"
import { UserProfileType } from "./user-profile"
import { VoucherType } from "./voucher-type"

export interface TrxItemsType {
    id: number
    ticket: TicketType
    amount: number
}

export interface TrxDetailType {
    id: number
    invoiceNumber: string
    totalPrice: number
    totalDiscount?: number
    finalPrice?: number
    paymentStatus: {
        id: number
        name: string
    }
    paymentMethod?: {
        id: number
        name: string
    }
    user: UserProfileType
    event: EventType
    trxItems?: TrxItemsType[]
    vouchers?: VoucherType[]
}