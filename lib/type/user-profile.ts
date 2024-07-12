interface RoleType {
    id: number
    name: string
}

export interface UserProfileType {
    email: string
    name: string
    profileImg: string
    role: RoleType
}