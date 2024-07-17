import { jwtDecode } from "jwt-decode";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import axios from "./utils/axios";
import { cookies } from "next/headers";
import { UserSessionProps } from "./constants/type/user-session-props";

interface DecodedTokenProps {
    iss: string
    iat: number
    exp: number
    sub: string
    scope: string
    userId: number
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: { label: "Email", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { data, status } = await axios.post("/auth/login",
                    { email: credentials.username, password: credentials.password },
                    {
                        headers:
                            { "Content-Type": "application/json" },
                        withCredentials: true
                    }
                )

                if (status != 200) {
                    throw new Error("User nor found")
                }

                const useCookie = cookies()
                useCookie.set("sid", data.token, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 3600,
                    path: "/"
                })

                const decodedJwt = jwtDecode<DecodedTokenProps>(data.token)
                const returnedValue: UserSessionProps = {
                    id: decodedJwt.userId.toString(),
                    email: decodedJwt.sub,
                    role: decodedJwt.scope,
                    token: data.token
                }

                return returnedValue
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        async jwt({ token, user }: { token: JWT, user: User & { role?: string, token?: string } }) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.role = user.role
                token.token = user.token
            }

            return token
        },
        async session({ session, token }: { session: any, token: JWT }) {
            session.user = {
                id: token.id,
                email: token.email,
                role: token.role,
                token: token.token
            }
            return session
        }
    }
})