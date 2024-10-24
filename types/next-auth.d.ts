import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";

declare module 'next-auth' {
    interface User {
        id: string
        email: string
        accessToken: string
        refreshToken: string
        status: string
        roles: string
        expRT: number // Numberic time stamp seconds - experation time of user
        expAT: number // Numberic time stamp seconds - experation time of access token
    }

    interface Token extends JWT {
        super()
        id: string
        email: string
        accessToken: string
        refreshToken: string
        status: string
        roles: string
        expRT: number
        expAT: number
        error?: string
    }

    interface Session extends NextAuth.Session {
        user: {
            id: string
            email: string
            accessToken: string
            refreshToken: string
            roles: string
            status: string
            expRT: number // Numberic time stamp seconds - experation time of user
            expAT: number // Numberic time stamp seconds - experation time of access token
        },
        error?: string
    }

}