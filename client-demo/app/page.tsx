// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BarChart, Users } from "lucide-react";
import { MotionWrap } from '@/components/framer/MotionWrap';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5">
      {/* Hero Section */}
      <MotionWrap>
      {/* --- MOBILE CHANGE: Reduced vertical padding on mobile (py-16) --- */}
      <section className="container text-center py-16 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#85421C]/10 via-transparent to-[#85421C]/10 rounded-3xl"></div>
        <div className="relative z-10">
          {/* --- MOBILE CHANGE: Adjusted font sizes for better readability on small screens --- */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-[#85421C]">
            Modern Solutions for Your Business
          </h1>
          {/* --- MOBILE CHANGE: Adjusted font size and margin for mobile --- */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed">
            We build beautiful, responsive, and high-performing websites to help
            you grow. This is a demo showcasing our capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#85421C] hover:bg-[#6B3416] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#85421C] text-[#85421C] hover:bg-[#85421C]/5 hover:text-[#6B3416] hover:border-[#6B3416] transition-all duration-300"
            >
              Our Services
            </Button>
          </div>
        </div>
      </section>
      </MotionWrap>

      {/* Services Preview Section */}
      <MotionWrap>
      {/* --- MOBILE CHANGE: Reduced vertical padding on mobile (py-12) --- */}
      <section className="container py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-[#85421C]/5 rounded-3xl backdrop-blur-sm"></div>
        <div className="relative z-10">
          {/* --- MOBILE CHANGE: Adjusted font sizes for mobile --- */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-[#85421C]">
            What We Offer
          </h2>
          {/* --- MOBILE CHANGE: Reduced gap on mobile (gap-6) --- */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-white/80 border-[#85421C]/30 hover:bg-white hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105 group backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-2 rounded-lg bg-[#85421C]/10 group-hover:bg-[#85421C]/20 transition-colors">
                  <CheckCircle2 className="w-8 h-8 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
                </div>
                <CardTitle className="text-[#85421C] group-hover:text-[#6B3416] transition-colors">Next.js Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Blazing fast, SEO-friendly websites using the latest web technologies.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-[#85421C]/30 hover:bg-white hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105 group backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-2 rounded-lg bg-[#85421C]/10 group-hover:bg-[#85421C]/20 transition-colors">
                  <BarChart className="w-8 h-8 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
                </div>
                <CardTitle className="text-[#85421C] group-hover:text-[#6B3416] transition-colors">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Intuitive and beautiful user interfaces that your customers will love.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 border-[#85421C]/30 hover:bg-white hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105 group backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="p-2 rounded-lg bg-[#85421C]/10 group-hover:bg-[#85421C]/20 transition-colors">
                  <Users className="w-8 h-8 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
                </div>
                <CardTitle className="text-[#85421C] group-hover:text-[#6B3416] transition-colors">Digital Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  A comprehensive plan to achieve your business goals online.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </MotionWrap>

      {/* Ratings/Testimonials Section */}
      <MotionWrap>
      {/* --- MOBILE CHANGE: Reduced vertical padding on mobile (py-16) --- */}
      <section className="container py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#85421C]/5 via-transparent to-[#85421C]/5 rounded-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 md:mb-12 text-[#85421C]">
            Trusted by Amazing Clients
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/90 border-[#85421C]/30 shadow-2xl hover:shadow-[#85421C]/20 transition-all duration-300 backdrop-blur-sm">
              {/* --- MOBILE CHANGE: Reduced padding inside card for mobile (p-6) --- */}
              <CardContent className="p-6 md:p-8">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-6 bg-[#85421C]/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#85421C]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  {/* --- MOBILE CHANGE: Adjusted font size for mobile --- */}
                  <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed">
                    "Working with this team was a game-changer. The final product exceeded all of our expectations. Highly recommend!"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-[#85421C] rounded-full flex items-center justify-center text-white font-bold">
                      JD
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-[#85421C]">Jane Doe</p>
                      <p className="text-sm text-gray-500">CEO of ExampleCorp</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </MotionWrap>
    </main>
  );
}