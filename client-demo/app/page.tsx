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
        {/*
          --- RESPONSIVE ENHANCEMENT ---
          - Increased vertical padding across all breakpoints for a more spacious, premium feel.
          - Added more granular control (sm, md, lg) for smoother scaling.
        */}
        <section className="container mx-auto text-center py-20 sm:py-24 md:py-28 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#85421C]/10 via-transparent to-[#85421C]/10 rounded-3xl"></div>
          <div className="relative z-10">
            {/*
              --- RESPONSIVE ENHANCEMENT ---
              - Added an `lg:text-7xl` class to make the title more impactful on large desktop screens.
              - The existing mobile-first scaling (`text-4xl sm:text-5xl`) is excellent.
            */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-[#85421C]">
              Modern Solutions for Your Business
            </h1>
            {/*
              --- RESPONSIVE ENHANCEMENT ---
              - Increased max-width to `max-w-3xl` to improve line length on larger screens while maintaining readability.
              - Adjusted typography for better consistency across devices.
            */}
            <p className="max-w-xl mx-auto text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed md:max-w-2xl lg:max-w-3xl lg:text-xl">
              We build beautiful, responsive, and high-performing websites to help
              you grow. This is a demo showcasing our capabilities.
            </p>
            {/*
              --- RESPONSIVE ENHANCEMENT ---
              - The `flex-col sm:flex-row` pattern is perfect for responsive buttons. No changes needed.
            */}
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
        <section className="container mx-auto py-16 sm:py-20 md:py-24 relative">
          <div className="absolute inset-0 bg-[#85421C]/5 rounded-3xl backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 text-[#85421C]">
              What We Offer
            </h2>
            {/*
              --- RESPONSIVE ENHANCEMENT (KEY CHANGE) ---
              - Changed the grid from `md:grid-cols-3` to a more adaptive `sm:grid-cols-2 lg:grid-cols-3`.
              - This creates a 2-column layout on tablets (sm), preventing a single stretched column,
                and then expands to a 3-column layout on laptops and desktops (lg).
              - Increased the gap slightly on larger screens (`sm:gap-8`).
            */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
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
        <section className="container mx-auto py-16 sm:py-20 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#85421C]/5 via-transparent to-[#85421C]/5 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 md:mb-16 text-[#85421C]">
              Trusted by Amazing Clients
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/90 border-[#85421C]/30 shadow-2xl hover:shadow-[#85421C]/20 transition-all duration-300 backdrop-blur-sm">
                {/*
                  --- RESPONSIVE ENHANCEMENT ---
                  - Added `lg:p-12` to give the content more breathing room on very large screens.
                */}
                <CardContent className="p-6 md:p-8 lg:p-12">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-6 bg-[#85421C]/10 rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#85421C]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    {/*
                      --- RESPONSIVE ENHANCEMENT ---
                      - Added `max-w-prose` to ensure the blockquote line length is optimal for reading, even on wide screens.
                      - The `mx-auto` centers the prose content block.
                    */}
                    <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed max-w-prose mx-auto">
                      &quot;Working with this team was a game-changer. The final product exceeded all of our expectations. Highly recommend!&quot;
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-12 h-12 bg-[#85421C] rounded-full flex items-center justify-center text-white font-bold text-lg">
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