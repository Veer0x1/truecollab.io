"use client"

import Link from "next/link"
import { Loader2 } from "lucide-react"
import { useSession } from "next-auth/react"

import { Button, buttonVariants } from "@/components/ui/button"

export default function DashboardButton() {
  const { data: session, status } = useSession()
  if (status === "loading") {
    return (
      <div>
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
    )
  } else if (status === "authenticated") {
    return (
      <div>
        {session?.user ? (
          <Button>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
        ) : null}
      </div>
    )
  } else {
    return null
  }
}
