// app/about/page.tsx
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed
import { Users, Briefcase, Star } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    // Main container with responsive padding and consistent background
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <MotionWrap>
          {/* Main grid layout: stacks on mobile, two columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content Section */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                {/* Responsive font sizes for the heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#85421C] leading-tight">
                  Crafting Digital Excellence
                </h1>
                <div className="w-20 h-1.5 bg-[#85421C] rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Our journey began with a simple mission: to create digital experiences that are not only beautiful but also incredibly effective. We believe in the power of technology to solve problems, connect people, and grow businesses.
                </p>
                <p>
                  Our team is our greatest asset. We are a diverse group of thinkers, creators, and strategists united by a shared passion for excellence.
                </p>
              </div>

              {/* Stats Section with responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <StatCard icon={Briefcase} value="50+" label="Projects Done" />
                <StatCard icon={Users} value="25+" label="Happy Clients" />
                <StatCard icon={Star} value="5+" label="Years of Experience" />
              </div>
            </div>
            
            {/* Image Section */}
            <div className="relative order-first lg:order-last">
              <div className="absolute inset-0 bg-gradient-to-br from-[#85421C]/10 to-[#85421C]/20 rounded-2xl transform -rotate-3 transition-transform duration-500 hover:rotate-0"></div>
              <div className="relative w-full h-80 md:h-96 bg-[#85421C]/5 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <Image 
                  src="/images/10.jpg" // Ensure this image exists in your public/images folder
                  alt="Our Team Collaborating" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#85421C]/20 rounded-full blur-xl opacity-70"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#85421C]/10 rounded-full blur-2xl opacity-70"></div>
            </div>

          </div>
        </MotionWrap>
      </div>
    </main>
  );
}

// Helper component for the stat cards to keep the code clean
const StatCard = ({ icon: Icon, value, label }: { icon: React.ElementType, value: string, label: string }) => (
  <div className="text-center p-4 bg-[#85421C]/5 rounded-xl border border-[#85421C]/20">
    <Icon className="w-8 h-8 text-[#85421C] mx-auto mb-2" />
    <div className="text-2xl font-bold text-[#85421C]">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);
