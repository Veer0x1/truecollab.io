"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"


import { Button } from "@/components/ui/button"

export default function LoginButton() {
  const { data: session } = useSession()
  return (
    <div>
      {session?.user ? null : (
        <>
          <Button variant="outline">
            <Link href="/login">Log In</Link>
          </Button>
        </>
      )}
    </div>
  )
}
