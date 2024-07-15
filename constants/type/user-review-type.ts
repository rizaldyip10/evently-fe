interface UserRole  {
    id: number
    name: string
}

interface ReviewUserType {
    name: string
    email: string
    profileImg: string
    roles: UserRole[]
}

export interface UserReviewType {
    id: number,
    user: ReviewUserType
    review: string
    rating: number
    createdAt: string
}