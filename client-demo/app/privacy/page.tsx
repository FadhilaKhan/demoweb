// app/privacy/page.tsx

// --- THIS IS A GENERIC TEMPLATE. CONSULT A LEGAL PROFESSIONAL FOR YOUR ACTUAL PRIVACY POLICY. ---

import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed

export default function PrivacyPolicyPage() {
  return (
    // The main container with your site's consistent background gradient and padding
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/10 py-10 sm:py-16">
      {/* Ensure page content is centered and padded on all screens */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrap>
          {/* A styled container for the legal document, creating a "glassmorphism" effect */}
          <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl border border-[#85421C]/20 shadow-lg shadow-[#85421C]/10 overflow-hidden">
            {/* Header Section */}
            <div className="p-6 sm:p-8 md:p-10 text-center border-b border-[#85421C]/20 bg-white/50">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#85421C]">
                Privacy Policy
              </h1>
              <p className="mt-3 text-sm sm:text-base text-gray-500">
                <strong>Last Updated:</strong> August 25, 2025
              </p>
            </div>

            {/* Content Section with responsive padding */}
            <article
              className="
                prose prose-base sm:prose-lg lg:prose-xl max-w-none
                p-6 sm:p-8 md:p-10 lg:p-12
                prose-h2:text-[#6B3416]
                prose-h3:text-[#85421C]
                prose-strong:text-gray-800
                prose-a:text-[#85421C] hover:prose-a:text-[#6B3416]
                prose-ul:list-disc prose-ul:marker:text-[#85421C]
                break-words
              "
            >
              <p className="text-gray-600">
                Welcome to [Your Company Name] (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL]. Please read this policy carefully.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <h3>Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
              </p>
              <h3>Usage Data</h3>
              <p>
                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Improve our website and offerings.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Notify you of updates to the Site.</li>
              </ul>

              <h2>3. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <h3>By Law or to Protect Rights</h3>
              <p>
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>
              <h3>Third-Party Service Providers</h3>
              <p>
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>

              <h2>4. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2>5. Your Data Rights</h2>
              <p>
                You have certain rights regarding your personal data, including the right to access, correct, or delete your personal data. You may also have the right to restrict or object to certain processing of your data.
              </p>

              <h2>6. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, you can <a href="mailto:contact@example.com">contact us by email</a> at [Your Contact Email] or by mail:
              </p>
              <p>
                [Your Company Name] <br />
                [Your Company Address]
              </p>
            </article>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}