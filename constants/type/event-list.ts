import { CategoryType } from "./category-type"

export interface TicketType {
    id: number
    name: string
    price: number
    description: string
    quota: number
}

export interface EventType {
    name: string
    slug: string
    location: string
    description: string
    city: string
    date: string
    startTime: string
    endTime: string
    eventCategory: CategoryType
    audienceInfo: string
    attentionInfo: string
    eventImg: string
    tickets: TicketType[]
    createdAt: string
    updatedAt: string
}

export interface EventListType {
    totalElements: number
    totalPages: number
    size: number
    content: EventType[]
}