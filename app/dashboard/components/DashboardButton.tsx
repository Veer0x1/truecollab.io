"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"

import { Button, buttonVariants } from "@/components/ui/button"

export default function DashboardButton() {
  const { data: session } = useSession()
  return (
    <div>
      {session?.user ? (
        <Button>
          <Link
            href={"/dashboard"}
            
          >
            Dashboard
          </Link>
        </Button>
      ) : null}
    </div>
  )
}
