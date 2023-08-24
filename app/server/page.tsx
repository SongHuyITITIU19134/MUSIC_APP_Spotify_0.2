
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"

export default async function ServerPage() {
    const session = await getServerSession(options)
    if (!session) {
        redirect('/api/auth/callback/spotify')
    } else {
        redirect('/')
    }



}