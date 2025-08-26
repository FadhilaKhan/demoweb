// app/careers/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { MotionWrap } from "@/components/framer/MotionWrap"; // Adjust path if needed
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer (Next.js)",
      location: "Remote | Full-time",
      description: "We are looking for an experienced frontend developer to build modern, high-performance web applications using Next.js."
    },
    {
      title: "Product Designer (UI/UX)",
      location: "New York | Full-time",
      description: "We are seeking a creative Product Designer to design intuitive and engaging user experiences across our platforms."
    },
    {
      title: "DevOps Engineer",
      location: "Remote | Full-time",
      description: "Join our team to manage and scale our cloud infrastructure, ensuring reliability and performance for all our services."
    }
  ];

  return (
    // Main container with responsive padding and consistent background
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <MotionWrap>
          {/* Header with responsive text and margins */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-[#85421C]">Join Our Team</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
              We&apos;re always looking for talented and passionate individuals to help us build the future.
            </p>
          </div>
        </MotionWrap>

        <MotionWrap delay={0.2}>
          {/* Job listings container */}
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card 
                key={index}
                className="bg-white/80 border-[#85421C]/30 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-[#85421C]/20 hover:border-[#85421C]/40"
              >
                {/* Use a flex layout for responsiveness */}
                <div className="p-6 sm:p-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
                  <div className="flex-grow">
                    <CardTitle className="text-xl font-bold text-[#6B3416]">{job.title}</CardTitle>
                    <CardDescription className="mt-1 text-gray-500">{job.location}</CardDescription>
                    <CardContent className="p-0 mt-4">
                      <p className="text-gray-700">{job.description}</p>
                    </CardContent>
                  </div>
                  <div className="mt-6 sm:mt-0 sm:flex-shrink-0">
                    <Button className="w-full sm:w-auto bg-[#85421C] hover:bg-[#6B3416] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </MotionWrap>

        <MotionWrap delay={0.4}>
          {/* "Don't see a role?" CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/50 border border-dashed border-[#85421C]/40 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#6B3416] mb-3">Don&apos;t See Your Role?</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                We&apos;re always interested in connecting with talented people. If you believe you&apos;d be a great fit for our team, send us your resume.
              </p>
              <Button 
                variant="outline"
                className="border-[#85421C] text-[#85421C] hover:bg-[#85421C]/5 hover:text-[#6B3416] hover:border-[#6B3416] transition-all duration-300"
              >
                Submit Your Resume
              </Button>
            </div>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}
