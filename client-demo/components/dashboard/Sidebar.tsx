// components/dashboard/Sidebar.tsx
"use client";

import { BarChart, Home, Settings, Bell, User, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "../ui/card";

export const Sidebar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "Home", icon: Home },
    { href: "/analytics", label: "Analytics", icon: BarChart },
    { href: "/notifications", label: "Notifications", icon: Bell },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    // The sidebar is hidden on mobile (by the lg:block in the layout) and revealed in a drawer.
    // On desktop, it's a fixed part of the layout.
    <div className="flex h-full max-h-screen flex-col gap-2 bg-muted/40">
      {/* Header */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[#6B3416]">
          <User className="h-6 w-6 text-[#85421C]" />
          <span>Admin Panel</span>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                pathname === link.href
                  ? "bg-[#85421C] text-white" // Active link style
                  : "text-gray-600 hover:bg-[#85421C]/10 hover:text-[#6B3416]" // Inactive link style
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer / User Account Section */}
      <div className="mt-auto p-4 border-t">
        <Card className="bg-white/50 border-[#85421C]/20 shadow-none">
          <CardContent className="p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold text-gray-800">Admin User</p>
                <p className="text-xs text-gray-500">admin@example.com</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-[#85421C]">
              <LogOut className="h-5 w-5" />
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
