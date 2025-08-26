"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    // --- THIS IS THE KEY RESPONSIVE WRAPPER ---
    // 'overflow-x-auto' makes the table scrollable horizontally on small screens.
    // We've added a border and rounded corners to the container itself,
    // which provides a clear visual boundary for the scrollable area.
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto border rounded-lg"
    >
      <table
        data-slot="table"
        // --- RESPONSIVE TYPOGRAPHY ---
        // We use a larger font size on mobile for readability (`text-base`)
        // and scale it down for tablets and desktops (`sm:text-sm`) where more data density is expected.
        className={cn("w-full caption-bottom text-base sm:text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        // 'whitespace-nowrap' prevents headers from wrapping, maintaining column integrity.
        "whitespace-nowrap text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",

        // --- RESPONSIVE SIZING & PADDING ---
        // We use taller headers with more padding on larger screens for better spacing and readability.
        "h-12 px-3 sm:h-12 sm:px-4",
        
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        // 'whitespace-nowrap' is optional for cells. You might remove it if you
        // want long text in a cell to wrap on larger screens.
        "whitespace-nowrap align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",

        // --- RESPONSIVE PADDING ---
        // Padding is tighter on mobile to save space and more generous on larger screens.
        "p-3 sm:p-4",

        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn(
        "text-muted-foreground mt-4 px-3 text-center text-sm sm:px-4", 
        className
      )}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}