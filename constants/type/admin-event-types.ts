import { EventType } from "./event-list"

export interface AdminEventsType {
    id: number
    event: EventType
    createdAt: string
}