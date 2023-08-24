import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from "./api/auth/[...nextauth]/options"


export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
      {session ? redirect('/home') : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  )
}