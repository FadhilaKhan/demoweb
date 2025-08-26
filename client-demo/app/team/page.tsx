// app/team/page.tsx
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed
import { Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link"; // Use Link for navigation
import { Button } from "@/components/ui/button"; // Import Button for consistency

export default function TeamPage() {
  const teamMembers = [
    { 
      name: "John Doe", 
      role: "CEO & Founder", 
      avatar: "/images/p1.jpg",
      bio: "Visionary leader with 10+ years in tech innovation and business strategy.",
      linkedin: "#",
      twitter: "#",
      email: "john@company.com"
    },
    { 
      name: "Jane Smith", 
      role: "Lead Developer", 
      avatar: "/images/p2.jpg",
      bio: "Full-stack expert specializing in React, Node.js, and cloud architecture.",
      linkedin: "#",
      twitter: "#",
      email: "jane@company.com"
    },
    { 
      name: "Mike Johnson", 
      role: "UI/UX Designer", 
      avatar: "/images/p3.jpg",
      bio: "Creative designer focused on user-centered design and modern aesthetics.",
      linkedin: "#",
      twitter: "#",
      email: "mike@company.com"
    },
    { 
      name: "Emily Brown", 
      role: "Project Manager", 
      avatar: "/images/p4.jpeg",
      bio: "Agile expert ensuring seamless project delivery and client satisfaction.",
      linkedin: "#",
      twitter: "#",
      email: "emily@company.com"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-16 md:py-20">
      <div className="container">
        <MotionWrap>
          <div className="text-center mb-12 md:mb-16">
            {/* --- MOBILE CHANGE: Adjusted font sizes for mobile --- */}
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-[#85421C]">Meet Our Team</h1>
            <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
              The talented people behind our success.
            </p>
          </div>
        </MotionWrap>

        <MotionWrap delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card 
                key={member.name} 
                className="text-center bg-white/80 backdrop-blur-sm border border-[#85421C]/20 shadow-lg hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="relative">
                    <Avatar className="w-32 h-32 mx-auto mb-6 ring-4 ring-[#85421C]/20 group-hover:ring-[#85421C]/40 transition-all duration-300">
                      <AvatarImage 
                        src={member.avatar} 
                        alt={member.name}
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-[#85421C] to-[#6B3416] text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl font-bold text-[#6B3416] group-hover:text-[#85421C] transition-colors duration-200">
                    {member.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-4 pb-6">
                  <p className="text-[#85421C] font-semibold text-lg">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 pt-4">
                    <a href={member.linkedin} className="p-2 rounded-full bg-[#85421C]/10 hover:bg-[#85421C] text-[#85421C] hover:text-white transition-all duration-200 hover:scale-110">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.twitter} className="p-2 rounded-full bg-[#85421C]/10 hover:bg-[#85421C] text-[#85421C] hover:text-white transition-all duration-200 hover:scale-110">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-[#85421C]/10 hover:bg-[#85421C] text-[#85421C] hover:text-white transition-all duration-200 hover:scale-110">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MotionWrap>

        {/* Call to Action */}
        <MotionWrap delay={0.4}>
          <div className="text-center mt-16 md:mt-20">
            <div className="bg-gradient-to-r from-[#85421C] to-[#6B3416] rounded-2xl p-6 sm:p-8 md:p-12 text-white max-w-4xl mx-auto">
              {/* --- MOBILE CHANGE: Adjusted font sizes for mobile --- */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Want to Join Our Team?</h3>
              <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                We&apos;re always looking for talented individuals who share our passion for innovation and excellence. 
                Let&apos;s build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 {/* --- CODE IMPROVEMENT: Used consistent Button component --- */}
                <Button asChild size="lg" className="bg-white text-[#85421C] hover:bg-gray-100 shadow-lg">
                  <Link href="/careers">View Open Positions</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-[#85421C]">
                  <Link href="/contact">Send Your Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}