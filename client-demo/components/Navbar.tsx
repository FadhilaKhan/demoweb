// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Link from "next/link";
import { Menu, Eye, EyeOff } from "lucide-react";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  // Reusable Login Form Component
  const LoginForm = () => (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="email-modal">Email</Label>
        <Input
          id="email-modal"
          type="email"
          placeholder="john@example.com"
          required
          className="border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C]"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password-modal">Password</Label>
          <Link href="#" className="text-sm font-medium text-[#85421C] hover:text-[#6B3416] underline">
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Input 
            id="password-modal" 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter your password"
            required 
            className="border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#85421C]"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <Button 
        type="submit" 
        className="w-full font-bold bg-[#85421C] hover:bg-[#6B3416] text-white"
        onClick={() => setIsLoggedIn(true)} // This simulates a successful login
      >
        Sign in
      </Button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#85421C]/30 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container h-16 flex items-center justify-between px-4">
        {/* Left Side: Logo */}
        <Link href="/" className="font-bold text-xl text-[#85421C] hover:text-[#6B3416] transition-all duration-300">
          ClientDemo
        </Link>

        {/* ================================================================= */}
        {/* ===== DESKTOP NAVIGATION (Hidden on screens smaller than lg) ===== */}
        {/* ================================================================= */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="relative text-gray-700 hover:text-[#85421C] transition-colors duration-200 group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#85421C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          
          <div className="h-6 w-px bg-gradient-to-b from-transparent via-[#85421C]/50 to-transparent" />

          {/* Authentication UI for Desktop */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer ring-2 ring-transparent hover:ring-[#85421C]/30 transition-all duration-200">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-[#85421C]/10 text-[#85421C]">CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 shadow-lg border-[#85421C]/30 bg-white">
                  <DropdownMenuLabel className="font-semibold text-[#85421C]">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#85421C]/20" />
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#85421C]/5 text-gray-700 hover:text-[#85421C]">Dashboard</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#85421C]/5 text-gray-700 hover:text-[#85421C]">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer hover:bg-[#85421C]/5 text-gray-700 hover:text-[#85421C]">Settings</DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-[#85421C]/20" />
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)} className="cursor-pointer text-red-600 hover:bg-red-50 hover:text-red-700">
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-3">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="hover:bg-[#85421C]/5 text-gray-700 hover:text-[#85421C] transition-colors duration-200">Log In</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md shadow-xl border-[#85421C]/30 bg-white">
                    <DialogHeader className="space-y-3">
                      <DialogTitle className="text-2xl font-semibold text-[#85421C]">Welcome Back</DialogTitle>
                      <DialogDescription className="text-gray-600">Enter your credentials to access your account.</DialogDescription>
                    </DialogHeader>
                    <LoginForm />
                  </DialogContent>
                </Dialog>
                <Button asChild className="bg-[#85421C] hover:bg-[#6B3416] text-white transition-all duration-200 shadow-md hover:shadow-lg">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* =================================================================== */}
        {/* ===== MOBILE & TABLET MENU (Visible on screens smaller than lg) ===== */}
        {/* =================================================================== */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[#85421C]" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] border-[#85421C]/30 bg-white">
              <SheetHeader>
                <SheetTitle className="text-2xl font-bold text-[#85421C]">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full py-6">
                <nav className="flex flex-col gap-6 text-lg font-medium">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link href={link.href} className="text-gray-700 hover:text-[#85421C] transition-colors">{link.label}</Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="w-full text-lg justify-start p-0 hover:bg-[#85421C]/5 text-gray-700 hover:text-[#85421C]">Log In</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md shadow-xl border-[#85421C]/30 bg-white">
                      <DialogHeader className="space-y-3">
                        <DialogTitle className="text-2xl font-semibold text-[#85421C]">Welcome Back</DialogTitle>
                        <DialogDescription className="text-gray-600">Enter your credentials to access your account.</DialogDescription>
                      </DialogHeader>
                      <LoginForm />
                    </DialogContent>
                  </Dialog>
                  <SheetClose asChild>
                    <Button asChild className="w-full text-lg bg-[#85421C] hover:bg-[#6B3416] text-white">
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
