// app/pricing/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { MotionWrap } from '@/components/framer/MotionWrap'; 

export default function PricingPage() {
  return (
    // Main page container with responsive padding
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
      <MotionWrap>
        <div className="container">
          <div className="text-center mb-12">
            {/* Responsive font sizes for the main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#85421C]">Our Pricing</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
              Choose the plan that's right for your business.
            </p>
          </div>
          
          {/* Responsive grid: 1 col on mobile, 2 on medium, 3 on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Basic Plan */}
            <Card className="flex flex-col bg-white/80 border-[#85421C]/30 hover:bg-white hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-[#85421C]">Basic</CardTitle>
                <CardDescription className="text-gray-600">For startups and small businesses.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p className="text-4xl font-bold text-[#6B3416]">$49<span className="text-xl font-normal text-gray-500">/mo</span></p>
                <div className="space-y-2 pt-4">
                  <p className="flex items-center text-gray-600"><Check className="w-5 h-5 mr-2 text-[#85421C]" /> 5 Pages</p>
                  <p className="flex items-center text-gray-600"><Check className="w-5 h-5 mr-2 text-[#85421C]" /> Basic SEO</p>
                  <p className="flex items-center text-gray-600"><Check className="w-5 h-5 mr-2 text-[#85421C]" /> Analytics</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-[#85421C] text-[#85421C] hover:bg-[#85421C]/5 hover:text-[#6B3416] hover:border-[#6B3416] transition-all duration-300"
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan - Highlighted */}
            {/* The scale effect is now applied on large screens only to avoid layout issues on mobile */}
            <Card className="flex flex-col bg-[#85421C] text-white shadow-2xl shadow-[#85421C]/40 ring-2 ring-[#6B3416] lg:scale-105">
              <CardHeader className="pb-4">
                <CardTitle>Pro</CardTitle>
                <CardDescription className="text-white/80">For growing businesses that need more.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p className="text-4xl font-bold">$99<span className="text-xl font-normal text-white/80">/mo</span></p>
                <div className="space-y-2 pt-4">
                  <p className="flex items-center"><Check className="w-5 h-5 mr-2" /> 20 Pages</p>
                  <p className="flex items-center"><Check className="w-5 h-5 mr-2" /> Advanced SEO</p>
                  <p className="flex items-center"><Check className="w-5 h-5 mr-2" /> CMS Integration</p>
                  <p className="flex items-center"><Check className="w-5 h-5 mr-2" /> 24/7 Support</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg"
                  className="w-full bg-white text-[#85421C] hover:bg-gray-200 font-bold transition-all duration-300"
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="flex flex-col bg-white/80 border-[#85421C]/30 hover:bg-white hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-[#85421C]">Enterprise</CardTitle>
                <CardDescription className="text-gray-600">For large-scale applications.</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-3">
                <p className="text-4xl font-bold text-[#6B3416]">Custom</p>
                <div className="space-y-2 pt-4">
                  <p className="flex items-center text-gray-600"><Check className="w-5 h-5 mr-2 text-[#85421C]" /> Unlimited Pages</p>
                  <p className="flex items-center text-gray-600"><Check className="w-5 h-5 mr-2 text-[#85421C]" /> Dedicated Support</p>
                  <p className="flex items-center text-gray-600"><Check className="w-5 h-5 mr-2 text-[#85421C]" /> Custom Integrations</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-[#85421C] text-[#85421C] hover:bg-[#85421C]/5 hover:text-[#6B3416] hover:border-[#6B3416] transition-all duration-300"
                >
                  Contact Us
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </MotionWrap>
    </main>
  );
}
