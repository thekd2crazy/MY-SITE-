import { getCurrentUser } from "../components/Current"
import { compare } from "bcryptjs"
import { cookies } from "next/headers"

export async function Admin() {
    const user = await getCurrentUser
    if (!user) {
        return <p>You need to log in.</p>
    }
    return <p>You are logged in.</p>
}