// app/gallery/page.tsx
import Image from 'next/image';
import { MotionWrap } from '@/components/framer/MotionWrap'; // Adjust path if needed
import { Search } from 'lucide-react'; // For the image hover icon

export default function GalleryPage() {
  // We'll use the 12 images from public/images folder
  const imageIds = Array.from({ length: 12 }, (_, i) => i + 1); // Images are numbered 1-12

  // Add the YouTube video IDs you want to display
  const videoIds = [
    'H1CIBqDeWQ0', // Added video
    'lu72YfaDU1o', // Added video
    'k8m0SaGQ_1c'  // Added video
  ];

  return (
    // Main container with responsive vertical padding
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#85421C]/5 py-12 sm:py-20">
      {/* Responsive horizontal padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrap>
          {/* Responsive bottom margin */}
          <div className="text-center mb-12 md:mb-16">
            {/* Responsive font sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#85421C]">Media Gallery</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A Showcase of Our Work and Inspiration
            </p>
          </div>
        </MotionWrap>

        {/* ===== IMAGE GALLERY SECTION ===== */}
        <MotionWrap delay={0.2}>
          {/* Responsive bottom margin */}
          <div className="mb-16 md:mb-20">
            {/* Responsive font sizes and bottom margin */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-[#6B3416]">Image Showcase</h2>
            {/* Responsive grid columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {imageIds.map((id) => (
                <div 
                  key={id} 
                  className="aspect-square relative group overflow-hidden rounded-xl border border-[#85421C]/30 shadow-lg hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={`/images/${id}.jpg`} // Make sure you have these images in public/images/
                    alt={`Gallery image ${id}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover Overlay with Icon */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionWrap>

        {/* ===== VIDEO GALLERY SECTION ===== */}
        <MotionWrap delay={0.4}>
          <div>
            {/* Responsive font sizes and bottom margin */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-[#6B3416]">Video Highlights</h2>
            {/* Responsive grid columns for videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {videoIds.map((videoId) => (
                <div 
                  key={videoId} 
                  className="aspect-video overflow-hidden rounded-xl border border-[#85421C]/30 shadow-lg hover:shadow-xl hover:shadow-[#85421C]/20 transition-all duration-300 hover:scale-105"
                >
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}
