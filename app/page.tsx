import Image from "next/image"
import Link from "next/link"
import HomeImage from "@/public/jean-baptiste-d-ZnkaqmVV4_g-unsplash.jpg"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image
          src={HomeImage}
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </section>
  )
}
