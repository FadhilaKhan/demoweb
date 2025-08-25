"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        // --- HOW THIS COMPONENT IS RESPONSIVE ---

        // 1. Fixed, Predictable Size: 'size-8' gives the avatar a consistent
        //    width and height (32px). Avatars are meant to be small and consistent,
        //    and this fixed size ensures they don't unexpectedly grow or shrink.

        // 2. Flexbox Safety: 'shrink-0' is crucial. It prevents the avatar from
        //    getting squished if it's placed inside a flex container that runs out
        //    of space on a small screen. It will always maintain its intended size.

        // 3. Overridable: Because 'className' is at the end, you can easily
        //    override the size for specific use cases, including responsive sizes
        //    (e.g., className="size-10 md:size-12").

        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }