// app/faq/page.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Assuming MotionWrap is available

export default function FaqPage() {
  return (
    // Main container with responsive vertical padding
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <MotionWrap>
          {/* Header Section with responsive margins and font sizes */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#85421C]">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto leading-relaxed">
              Have questions? We have answers. Find everything you need to know about our services and process.
            </p>
          </div>
        </MotionWrap>

        <MotionWrap delay={0.2}>
          {/* FAQ Accordion container with responsive padding */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#85421C]/10 p-6 sm:p-8 md:p-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              
              <AccordionItem 
                value="item-1" 
                className="border border-[#85421C]/20 rounded-xl px-4 sm:px-6 py-2 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-md"
              >
                {/* Responsive font size for the trigger */}
                <AccordionTrigger className="text-md sm:text-lg font-semibold text-left text-[#6B3416] hover:text-[#85421C] transition-colors duration-200">
                  What is Next.js?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-4 pb-2">
                  Next.js is a React framework that gives you building blocks to create fast, full-stack web applications. 
                  It provides features like server-side rendering, static site generation, and automatic code splitting to 
                  help you build performant and SEO-friendly websites.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-2" 
                className="border border-[#85421C]/20 rounded-xl px-4 sm:px-6 py-2 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="text-md sm:text-lg font-semibold text-left text-[#6B3416] hover:text-[#85421C] transition-colors duration-200">
                  How long does a project typically take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-4 pb-2">
                  Project timelines vary based on complexity, but a standard marketing website often takes 4-6 weeks from start to finish. 
                  This includes initial consultation, design mockups, development, testing, and deployment. More complex applications 
                  with custom features may take 8-12 weeks or longer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-3" 
                className="border border-[#85421C]/20 rounded-xl px-4 sm:px-6 py-2 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="text-md sm:text-lg font-semibold text-left text-[#6B3416] hover:text-[#85421C] transition-colors duration-200">
                  Do you offer support after the website is live?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-4 pb-2">
                  Yes, we offer a range of monthly support and maintenance packages to ensure your website remains secure, updated, and performant. 
                  Our support includes regular updates, security monitoring, performance optimization, content updates, and technical assistance 
                  whenever you need it.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-4" 
                className="border border-[#85421C]/20 rounded-xl px-4 sm:px-6 py-2 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="text-md sm:text-lg font-semibold text-left text-[#6B3416] hover:text-[#85421C] transition-colors duration-200">
                  What technologies do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-4 pb-2">
                  We specialize in modern web technologies including React, Next.js, TypeScript, Tailwind CSS, and Node.js. 
                  We also work with various databases, cloud platforms, and deployment solutions to create scalable and 
                  maintainable applications that meet your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem 
                value="item-5" 
                className="border border-[#85421C]/20 rounded-xl px-4 sm:px-6 py-2 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="text-md sm:text-lg font-semibold text-left text-[#6B3416] hover:text-[#85421C] transition-colors duration-200">
                  How do you handle project communication?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-4 pb-2">
                  We believe in transparent and regular communication throughout the project. We provide weekly progress updates, 
                  maintain a shared project dashboard, and are available for calls or meetings as needed. You'll always know 
                  where your project stands and what's coming next.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </MotionWrap>

        <MotionWrap delay={0.4}>
          {/* Call to Action with responsive margin */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-gradient-to-r from-[#85421C] to-[#6B3416] rounded-2xl p-8 text-white">
              {/* Responsive font sizes */}
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-lg mb-6 opacity-90">
                We're here to help! Get in touch with us for a personalized consultation.
              </p>
              <button className="bg-white text-[#85421C] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Contact Us Today
              </button>
            </div>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}
