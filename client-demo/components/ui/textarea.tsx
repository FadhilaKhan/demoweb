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
        "md:text-sm",

        // Automatically grows the textarea's height as the user types.
        // This is a fantastic UX feature for both mobile and desktop.
        "field-sizing-content",
        
        // --- BASE STYLING (Works on all screen sizes) ---
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex min-h-16 rounded-md border bg-transparent px-3 py-2 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        
        className
      )}
      {...props}
    />
  )
}

export { Textarea }