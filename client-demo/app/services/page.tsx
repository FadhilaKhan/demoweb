// app/services/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Palette, Search, Wrench } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "End-to-end development of robust and scalable web applications using modern technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Creating seamless experiences on iOS and Android platforms with native and cross-platform solutions."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Infrastructure setup, CI/CD pipelines, and cloud management for scalable and reliable deployments."
    },
    {
      icon: Palette,
      title: "UI/UX & Branding",
      description: "Designing intuitive interfaces and memorable brand identities that resonate with your audience."
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Improving your online visibility and driving organic traffic through strategic optimization."
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Ongoing support to ensure your application runs smoothly with regular updates and monitoring."
    }
  ];

  return (
    // Main container with responsive vertical padding
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-8 sm:py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        
        {/* Header Section with responsive spacing and typography */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 max-w-3xl mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#85421C] mb-3 sm:mb-4 leading-tight px-2 sm:px-0">
            Our Services
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[#85421C] rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4 sm:px-2 md:px-0">
            We offer a comprehensive range of services to meet your business needs and help you achieve your digital goals.
          </p>
        </div>

        {/* Services Grid - Enhanced mobile responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="bg-white/80 border-[#85421C]/30 hover:bg-white hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105 group backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background decoration - responsive sizing */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-[#85421C]/10 to-transparent rounded-bl-3xl"></div>
                
                <CardHeader className="pb-3 sm:pb-4 relative p-4 sm:p-6">
                  {/* Responsive layout: better mobile stacking */}
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#85421C]/10 group-hover:bg-[#85421C]/20 transition-colors duration-300 shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#85421C] group-hover:text-[#6B3416] transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-[#85421C] group-hover:text-[#6B3416] transition-colors duration-300 text-base sm:text-lg md:text-xl leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 p-4 sm:p-6">
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  {/* Call to action with enhanced mobile interaction */}
                  <div className="mt-4 pt-4 border-t border-[#85421C]/20">
                    <span className="text-sm font-medium text-[#85421C] group-hover:text-[#6B3416] transition-colors duration-300 cursor-pointer inline-flex items-center">
                      Learn More 
                      <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section with enhanced mobile responsiveness */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-[#85421C]/5 via-white to-[#85421C]/5 rounded-xl sm:rounded-2xl border border-[#85421C]/20 mx-2 sm:mx-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#85421C] mb-3 sm:mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Let's discuss how our services can help transform your business and achieve your goals.
          </p>
          
          {/* Enhanced responsive button layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#85421C] hover:bg-[#6B3416] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base">
              Get a Quote
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-[#85421C] text-[#85421C] hover:bg-[#85421C]/5 hover:text-[#6B3416] hover:border-[#6B3416] rounded-lg font-medium transition-all duration-200 text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}