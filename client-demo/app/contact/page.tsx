// app/contact/page.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    // Main container with responsive vertical padding
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <MotionWrap>
          {/* Header with responsive margins and font sizes */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#85421C]">Get In Touch</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
        </MotionWrap>

        <MotionWrap delay={0.2}>
          {/* Responsive grid: stacks on mobile, two columns on medium screens and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto items-start">
            
            {/* Contact Form Card */}
            <Card className="bg-white/80 border-[#85421C]/30 shadow-lg backdrop-blur-sm hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-[#6B3416] mb-6">Send us a Message</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      className="mt-2 bg-white/50 border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] transition-all duration-200" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="mt-2 bg-white/50 border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] transition-all duration-200" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-semibold">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      className="mt-2 bg-white/50 border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] transition-all duration-200" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="How can we help you?" 
                      rows={5} 
                      className="mt-2 bg-white/50 border-[#85421C]/30 focus:border-[#85421C] focus:ring-[#85421C] transition-all duration-200 resize-none" 
                    />
                  </div>
                  <Button 
                    size="lg"
                    className="w-full bg-[#85421C] hover:bg-[#6B3416] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="bg-white/80 border-[#85421C]/30 shadow-lg backdrop-blur-sm">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-[#6B3416] mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#85421C]/10 rounded-full">
                        <MapPin className="w-5 h-5 text-[#85421C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Address</p>
                        <p className="text-gray-600">123 Business Street, Jakarta, Indonesia</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#85421C]/10 rounded-full">
                        <Phone className="w-5 h-5 text-[#85421C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone</p>
                        <p className="text-gray-600">+62 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#85421C]/10 rounded-full">
                        <Mail className="w-5 h-5 text-[#85421C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email</p>
                        <p className="text-gray-600">hello@company.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-[#85421C]/10 rounded-full">
                        <Clock className="w-5 h-5 text-[#85421C]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Business Hours</p>
                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location Map */}
              <div>
                <h3 className="text-2xl font-bold text-[#6B3416] mb-4">Our Location</h3>
                <div className="overflow-hidden rounded-xl border border-[#85421C]/30 shadow-lg hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507802!3d-6.194741395514856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e6785421C80477!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1622550882046!5m2!1sen!2sid"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </MotionWrap>

        {/* Call to Action */}
        <MotionWrap delay={0.4}>
          <div className="text-center mt-16 md:mt-20">
            <div className="bg-gradient-to-r from-[#85421C] to-[#6B3416] rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your ideas and turn them into reality. We're here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-[#85421C] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                  Schedule a Call
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#85421C] transition-all duration-200">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}
