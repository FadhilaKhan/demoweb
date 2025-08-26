import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        // --- RESPONSIVE & CORE STYLES ---

        // This makes the textarea expand to 100% of its parent's width.
        // It's the most important class for responsiveness.
        "w-full",

        // This is a great mobile-first font size approach.
        // It's `text-base` (16px) on mobile for readability and tapping,
        // then becomes slightly smaller, `text-sm` (14px), on medium screens and up.
        "text-base sm:text-sm",

        // Automatically grows the textarea's height as the user types.
        // This is a fantastic UX feature for both mobile and desktop.
        "field-sizing-content",
        
        // --- RESPONSIVE PADDING ---
        // We'll use a comfortable padding on mobile devices,
        // and slightly increase it on larger screens for better visual balance.
        "px-3 py-2 sm:px-3.5 sm:py-2.5",

        // --- RESPONSIVE MINIMUM HEIGHT ---
        // A taller minimum height on mobile makes it easier to tap and start typing.
        // We can make it progressively larger on bigger screens.
        "min-h-20 md:min-h-24 lg:min-h-28",

        // --- BASE STYLING (Works on all screen sizes) ---
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex rounded-md border bg-transparent shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        
        className
      )}
      {...props}
    />
  )
}

export { Textarea }