// components/CookieBanner.tsx
"use client";
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Cookie } from 'lucide-react';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already consented to cookies
    if (!localStorage.getItem('cookie_consent')) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Store the user's consent in local storage
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };
  
  const handleDecline = () => {
    // Handle the decline action, for now, it just closes the banner
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#85421C]/50 p-4 z-50 shadow-lg">
      <div className="container mx-auto">
        {/* --- THIS IS THE KEY RESPONSIVE CONTAINER ---
          - On mobile (default): 'flex-col' stacks the text and buttons vertically. 'items-start' aligns them to the left.
          - On small screens and up ('sm:'): 'sm:flex-row' places them side-by-side. 'sm:items-center' vertically aligns them.
        */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#85421C]/10 flex-shrink-0">
              <Cookie className="w-5 h-5 text-[#85421C]" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1">
                We use cookies to enhance your experience
              </p>
              <p className="text-xs text-gray-600">
                By continuing to use our site, you agree to our use of cookies.
              </p>
            </div>
          </div>

          {/* --- THIS IS THE KEY RESPONSIVE BUTTON GROUP ---
            - On mobile (default): 'w-full' makes the container take up the full width.
            - On small screens and up ('sm:'): 'sm:w-auto' makes the container shrink to fit the buttons.
          */}
          <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleDecline}
              className="border-[#85421C] text-[#85421C] hover:bg-[#85421C]/5 hover:text-[#6B3416] hover:border-[#6B3416] transition-all duration-200 flex-1 sm:flex-none"
            >
              Decline
            </Button>
            <Button 
              size="sm"
              onClick={handleAccept}
              className="bg-[#85421C] hover:bg-[#6B3416] text-white shadow-md hover:shadow-lg transition-all duration-200 flex-1 sm:flex-none"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
