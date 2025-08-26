// Use for legal pages like app/privacy/page.tsx or app/terms/page.tsx

// --- THIS IS A GENERIC TEMPLATE. CONSULT A LEGAL PROFESSIONAL FOR YOUR ACTUAL TERMS & CONDITIONS. ---

import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed

export default function TermsAndConditionsPage() {
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
                Terms and Conditions
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
                Please read these terms and conditions carefully before using Our Service.
              </p>

              <h2>Acknowledgment</h2>
              <p>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. By accessing or using the Service You agree to be bound by these Terms and Conditions.
              </p>

              <h2>User Accounts</h2>
              <p>
                When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.
              </p>
              <p>
                You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors. The Service is protected by copyright, trademark, and other laws of both the country and foreign countries.
              </p>

              <h2>Links to Other Websites</h2>
              <p>
                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend Your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven&apos;t purchased anything through the Service.
              </p>

              <h2>Governing Law</h2>
              <p>
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
              </p>

              <h2>Changes to These Terms and Conditions</h2>
              <p>
                We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days&apos; notice prior to any new terms taking effect.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, you can <a href="mailto:contact@example.com">contact us by email</a>.
              </p>
            </article>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}