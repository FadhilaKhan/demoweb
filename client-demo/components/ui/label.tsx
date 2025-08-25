"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        // --- WHY THIS COMPONENT IS RESPONSIVE ---

        // 1. No Fixed Width: The component has no 'w-...' class. This is crucial.
        //    It means the label will naturally be as wide as its text content,
        //    allowing it to fit into any grid or flex layout you create.

        // 2. Appropriate Font Size: 'text-sm' (14px) is a standard, readable font size
        //    that works well on both mobile and desktop for form labels. It doesn't
        //    need to change between screen sizes.

        // 3. Natural Text Wrapping: As a text element, if the parent container is
        //    very narrow, the label's text will automatically wrap to the next line.
        //    This is default browser behavior and is inherently responsive.

        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        
        className
      )}
      {...props}
    />
  )
}

export { Label }