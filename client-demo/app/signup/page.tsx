// app/signup/page.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chrome, Github, Eye, EyeOff, CheckCircle, Shield, Users, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="w-full min-h-screen lg:grid lg:grid-cols-2 bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5">
      {/* Left Panel: Form */}
      <div className="flex items-center justify-center py-12 px-4 lg:px-8">
        <MotionWrap>
          <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border border-[#85421C]/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-[#85421C] mb-2">Create an account</CardTitle>
              <p className="text-gray-600">
                Join thousands of developers building the future
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Social Logins */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-[#85421C]/30 hover:bg-[#85421C]/5 hover:border-[#85421C] transition-all duration-200 group"
                >
                  <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  GitHub
                </Button>
                <Button 
                  variant="outline"
                  className="border-[#85421C]/30 hover:bg-[#85421C]/5 hover:border-[#85421C] transition-all duration-200 group"
                >
                  <Chrome className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Google
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-[#85421C]/20" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-gray-500 font-medium">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Sign-Up Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-gray-700 font-medium">First Name</Label>
                    <Input 
                      id="first-name" 
                      placeholder="John" 
                      required 
                      className="border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-gray-700 font-medium">Last Name</Label>
                    <Input 
                      id="last-name" 
                      placeholder="Doe" 
                      required 
                      className="border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] transition-all duration-200"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] transition-all duration-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create a strong password"
                      required 
                      className="border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] transition-all duration-200 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#85421C] transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span>At least 8 characters</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full font-bold bg-[#85421C] hover:bg-[#6B3416] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Create an account
                </Button>
              </div>

            </CardContent>
          </Card>
        </MotionWrap>
      </div>

      {/* Right Panel: Custom Illustration & Branding */}
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center relative bg-gradient-to-br from-[#85421C] to-[#6B3416] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Main Content */}
        <MotionWrap delay={0.3}>
          <div className="relative z-10 text-center px-8 max-w-lg">
            {/* Custom SVG Illustration */}
            <div className="mb-8">
              <svg
                className="w-80 h-80 mx-auto"
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle */}
                <circle cx="200" cy="200" r="180" fill="rgba(255,255,255,0.1)" />
                
                {/* Person Silhouette */}
                <ellipse cx="200" cy="320" rx="60" ry="15" fill="rgba(255,255,255,0.2)" />
                <rect x="170" y="240" width="60" height="80" rx="30" fill="white" opacity="0.9" />
                <circle cx="200" cy="180" r="35" fill="white" opacity="0.9" />
                
                {/* Laptop */}
                <rect x="120" y="280" width="160" height="100" rx="8" fill="white" opacity="0.9" />
                <rect x="130" y="290" width="140" height="80" rx="4" fill="#85421C" opacity="0.3" />
                
                {/* Floating Elements */}
                <circle cx="100" cy="120" r="20" fill="rgba(255,255,255,0.3)" />
                <circle cx="320" cy="100" r="15" fill="rgba(255,255,255,0.4)" />
                <circle cx="80" cy="300" r="12" fill="rgba(255,255,255,0.3)" />
                <circle cx="340" cy="280" r="18" fill="rgba(255,255,255,0.3)" />
                
                {/* Code Brackets */}
                <text x="60" y="200" fill="white" fontSize="24" opacity="0.6" fontFamily="monospace">{"<>"}</text>
                <text x="320" y="220" fill="white" fontSize="24" opacity="0.6" fontFamily="monospace">{"</>"}</text>
              </svg>
            </div>

            {/* Text Content */}
            <div className="text-white space-y-6">
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                "Join thousands of developers building the future"
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Start your journey with us today and unlock endless possibilities
              </p>
              
              {/* Features */}
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90">Secure & trusted platform</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90">Join 50,000+ developers</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white/90">Get started in minutes</span>
                </div>
              </div>
            </div>
          </div>
        </MotionWrap>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 right-8 w-3 h-3 bg-white/40 rounded-full animate-bounce delay-500"></div>
      </div>
    </main>
  );
}