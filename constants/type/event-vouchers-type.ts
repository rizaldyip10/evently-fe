interface tickets {
    name: string
    price: number
    description: string
    quota: number
    updatedAt: string
    createdAt: string
    id: number
}

interface voucher {
    id: number
    name: string
    discount: number
    createdAt: string
    updatedAt: string
    deletedAt: string
}

export interface EventVouchersType {
    id: number
    event: {
        name: string
        slug: string
        location: string
        city: string
        date: string
        description: string
        startTime: string
        endTime: string
        audianceInfo: string
        attentionInfo: string
        eventCategoty: {
            id: number
            name: string
        }
        eventImage: string
        createdAt: string
        updatedAt: string
        deletedAt: string
        tickets: tickets[]
        id: number
    }
    voucher: voucher
    expiredAt: string
    createdAt: string
    updatedAt: string
    deletedAt: string
}