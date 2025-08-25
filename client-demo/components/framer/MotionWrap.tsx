// components/framer/MotionWrap.tsx
"use client"; // This is a client component

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface MotionWrapProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const MotionWrap = ({ children, className, delay = 0 }: MotionWrapProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    // --- HOW THIS COMPONENT IS RESPONSIVE ---

    // 1. It's a "Wrapper" Component: This component's only job is to wrap
    //    your *other* responsive components. The outer `div` has no styles
    //    of its own, so it simply takes the shape of the content you put inside it.

    // 2. No Visual Styles: It does not define any width, height, color, padding,
    //    or font size. It is visually "invisible" and therefore doesn't need
    //    any specific mobile styles.

    // 3. Universal Animation: The animation (`opacity` and `y` transform) is a
    //    universal effect that looks great on any screen size. It doesn't need
    //    to be adjusted for mobile.

    <div ref={ref} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};