import { CategoryType } from "./category-type"

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
    createdAt: string
    updatedAt: string
}

export interface EventListType {
    totalElements: number
    totalPages: number
    size: number
    content: EventType[]
}