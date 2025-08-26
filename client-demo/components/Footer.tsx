// components/Footer.tsx
import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[#85421C]/30 bg-gradient-to-br from-[#85421C]/5 via-white to-gray-50/50"
    >
      {/* Centered, responsive container */}
      <div className="container mx-auto max-w-screen-xl py-10 md:py-12 px-4 sm:px-6 lg:px-8">
        {/* Responsive grid: 1 col on mobile, 2 on tablets, 4 on desktops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center sm:text-left place-items-center sm:place-items-start">
          {/* Company Column */}
          <div className="w-full">
            <h3 className="font-bold text-lg sm:text-xl mb-4 text-[#85421C]">Company</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm sm:text-base text-gray-600 hover:text-[#85421C] transition-colors duration-200 sm:hover:translate-x-1 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85421C]/30 rounded"
              >
                About Us
              </Link>
              <Link
                href="/team"
                className="text-sm sm:text-base text-gray-600 hover:text-[#85421C] transition-colors duration-200 sm:hover:translate-x-1 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85421C]/30 rounded"
              >
                Our Team
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div className="w-full">
            <h3 className="font-bold text-lg sm:text-xl mb-4 text-[#85421C]">Resources</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/faq"
                className="text-sm sm:text-base text-gray-600 hover:text-[#85421C] transition-colors duration-200 sm:hover:translate-x-1 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85421C]/30 rounded"
              >
                FAQ
              </Link>
              <Link
                href="/careers"
                className="text-sm sm:text-base text-gray-600 hover:text-[#85421C] transition-colors duration-200 sm:hover:translate-x-1 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85421C]/30 rounded"
              >
                Careers
              </Link>
              <Link
                href="/dashboard"
                className="text-sm sm:text-base text-gray-600 hover:text-[#85421C] transition-colors duration-200 sm:hover:translate-x-1 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85421C]/30 rounded"
              >
                Admin Panel
              </Link>
            </div>
          </div>

          {/* Legal Column */}
          <div className="w-full">
            <h3 className="font-bold text-lg sm:text-xl mb-4 text-[#85421C]">Legal</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-sm sm:text-base text-gray-600 hover:text-[#85421C] transition-colors duration-200 sm:hover:translate-x-1 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85421C]/30 rounded"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm sm:text-base text-gray-600 hover:text-[#85421C] transition-colors duration-200 sm:hover:translate-x-1 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#85421C]/30 rounded"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Social Column */}
          <div className="w-full">
            <h3 className="font-bold text-lg sm:text-xl mb-4 text-[#85421C]">Social</h3>
            {/* Social icons are centered on mobile and left-aligned on larger screens */}
            <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-lg bg-[#85421C]/10 hover:bg-[#85421C]/20 transition-all duration-200 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-[#85421C]/10 hover:bg-[#85421C]/20 transition-all duration-200 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg bg-[#85421C]/10 hover:bg-[#85421C]/20 transition-all duration-200 hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2 rounded-lg bg-[#85421C]/10 hover:bg-[#85421C]/20 transition-all duration-200 hover:scale-110 group"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-[#85421C] group-hover:text-[#6B3416] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section with responsive layout */}
        <div className="w-full border-t border-[#85421C]/30 mt-10 pt-8 flex flex-col md:flex-row md:justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} ClientDemo. All rights reserved.
          </p>
          <p className="font-bold text-[#85421C] text-lg sm:text-xl">ClientDemo</p>
        </div>
      </div>
    </footer>
  );
};