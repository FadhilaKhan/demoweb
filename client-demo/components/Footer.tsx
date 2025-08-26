// components/Footer.tsx
import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-[#85421C]/30 bg-gradient-to-br from-[#85421C]/5 via-white to-gray-50/50">
      {/* Responsive padding for different screen sizes */}
      <div className="container py-10 px-4 sm:px-6 md:py-12 lg:px-8">
        
        {/* Responsive grid: 1 col on mobile, 2 on tablets, 4 on desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 text-center sm:text-left">
          
          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#85421C]">Company</h3>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-gray-600 hover:text-[#85421C] transition-colors duration-200 hover:translate-x-1 transform">About Us</Link>
              <Link href="/team" className="text-sm text-gray-600 hover:text-[#85421C] transition-colors duration-200 hover:translate-x-1 transform">Our Team</Link>
            </div>
          </div>
          
          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#85421C]">Resources</h3>
            <div className="flex flex-col gap-3">
              <Link href="/faq" className="text-sm text-gray-600 hover:text-[#85421C] transition-colors duration-200 hover:translate-x-1 transform">FAQ</Link>
              <Link href="/careers" className="text-sm text-gray-600 hover:text-[#85421C] transition-colors duration-200 hover:translate-x-1 transform">Careers</Link>
              <Link href="/dashboard" className="text-sm text-gray-600 hover:text-[#85421C] transition-colors duration-200 hover:translate-x-1 transform">Admin Panel</Link>
            </div>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#85421C]">Legal</h3>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#85421C] transition-colors duration-200 hover:translate-x-1 transform">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-600 hover:text-[#85421C] transition-colors duration-200 hover:translate-x-1 transform">Terms & Conditions</Link>
            </div>
          </div>
          
          {/* Social Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#85421C]">Social</h3>
            {/* Social icons are centered on mobile and left-aligned on larger screens */}
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-lg bg-[#85421C]/10 hover:bg-[#85421C]/20 transition-all duration-200 hover:scale-110 group">
                <Twitter className="w-5 h-5 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-[#85421C]/10 hover:bg-[#85421C]/20 transition-all duration-200 hover:scale-110 group">
                <Linkedin className="w-5 h-5 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-lg bg-[#85421C]/10 hover:bg-[#85421C]/20 transition-all duration-200 hover:scale-110 group">
                <Instagram className="w-5 h-5 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-2 rounded-lg bg-[#85421C]/10 hover:bg-[#85421C]/20 transition-all duration-200 hover:scale-110 group">
                <Youtube className="w-5 h-5 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section with responsive layout */}
        <div className="border-t border-[#85421C]/30 mt-10 pt-8 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
          <p className="text-center sm:text-left text-sm text-gray-500">
            © {new Date().getFullYear()} ClientDemo. All rights reserved.
          </p>
          <p className="font-bold text-[#85421C] text-lg">
            ClientDemo
          </p>
        </div>
      </div>
    </footer>
  );
};
