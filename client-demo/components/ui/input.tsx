import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // --- KEY RESPONSIVE CLASSES ---

        // 1. 'w-full': This is the most critical class. It makes the input
        //    always expand to 100% of the width of its parent container.
        //    This means if your form layout is responsive (e.g., a grid that stacks),
        //    the input will automatically adapt.
        "w-full",

        // 2. 'min-w-0': This is a subtle but important fix for flexbox layouts.
        //    It allows the input to shrink if needed when placed in a flex container,
        //    preventing it from overflowing on small screens.
        "min-w-0",

        // 3. 'text-base md:text-sm': This is a mobile-first typography approach.
        //    - 'text-base' (16px) is the default, which is great for readability and
        //      tapping on mobile phones.
        //    - 'md:text-sm' reduces the font size to 14px on medium screens (tablets)
        //      and larger, which is more appropriate for desktop layouts.
        "text-base md:text-sm",


        // --- BASE STYLING (Works on all screen sizes) ---
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 rounded-md border bg-transparent px-3 py-1 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        
        // --- STATE STYLES (Focus, Invalid, etc.) ---
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        
        className
      )}
      {...props}
    />
  )
}

export { Input }