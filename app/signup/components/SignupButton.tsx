"use client"

import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"

export default function SignupButton() {
  const { data: session } = useSession()
  return (
    <div>
      {session?.user ? (
        <>
          <Button variant="destructive" onClick={() => signOut()}>
            Log Out
          </Button>
        </>
      ) : (
        <>
          <Button variant="outline" onClick={() => signIn()}>
            Sign Up
            {/* <Link>Sign Up</Link> */}
          </Button>
        </>
      )}
    </div>
  )
}
