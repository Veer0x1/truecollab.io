import Link from "next/link"

import Image from "next/image"
 
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { useSession } from "next-auth/react"

export default function IndexPage() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://unsplash.com/s/photos/refresh"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
    </section>
  )
}
