import Link from "next/link"
import style from "./logout.module.css"
export default function LogOut() {
    return (
      <div className={style.cover}>
      <h1>Do You Want To Log Out? </h1>
  <Link href="/api/auth/signout">Sign Out</Link>
      </div>
    )
}