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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5">
      {/* Adjusted padding for different screen sizes */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 lg:py-24">
        
        {/* Header Section */}
        {/* Adjusted margins and font sizes for mobile */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#85421C] mb-4 leading-tight">
            Our Services
          </h1>
          <div className="w-20 h-1 bg-[#85421C] rounded-full mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We offer a comprehensive range of services to meet your business needs and help you achieve your digital goals.
          </p>
        </div>

        {/* Services Grid */}
        {/* Added grid-cols-1 for a single column layout on mobile by default */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="bg-white/80 border-[#85421C]/30 hover:bg-white hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105 group backdrop-blur-sm relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#85421C]/10 to-transparent rounded-bl-3xl"></div>
                
                <CardHeader className="pb-4 relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 rounded-xl bg-[#85421C]/10 group-hover:bg-[#85421C]/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#85421C] group-hover:text-[#6B3416] transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-[#85421C] group-hover:text-[#6B3416] transition-colors duration-300 text-lg">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Call to action */}
                  <div className="mt-4 pt-4 border-t border-[#85421C]/20">
                    <span className="text-sm font-medium text-[#85421C] group-hover:text-[#6B3416] transition-colors duration-300 cursor-pointer">
                      Learn More →
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        {/* Adjusted margins, padding, and font sizes for mobile */}
        <div className="text-center mt-12 md:mt-16 p-6 sm:p-8 bg-gradient-to-r from-[#85421C]/5 via-white to-[#85421C]/5 rounded-2xl border border-[#85421C]/20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#85421C] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help transform your business and achieve your goals.
          </p>
          {/* flex-col stacks buttons on mobile, sm:flex-row places them side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#85421C] hover:bg-[#6B3416] text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Get a Quote
            </button>
            <button className="px-8 py-3 border border-[#85421C] text-[#85421C] hover:bg-[#85421C]/5 hover:text-[#6B3416] hover:border-[#6B3416] rounded-lg font-medium transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
