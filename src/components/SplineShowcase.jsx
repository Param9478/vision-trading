import { useRef, useState, useEffect, useCallback } from 'react';
import {
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';

export function SplineShowcase({ scene, size = 200 }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [parentElement, setParentElement] = useState(null);
  const [textIndex, setTextIndex] = useState(0);

  // Just changing the highlighted words in the heading
  const changingText = [
    'AI-Powered Tools',
    'Expert Strategies',
    // 'Profitable Trading',
    // 'Market Mastery',
  ];

  // Rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((current) => (current + 1) % changingText.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [changingText.length]);

  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  const handleMouseMove = useCallback(
    (event) => {
      if (!parentElement) return;
      const { left, top } = parentElement.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY, parentElement]
  );

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () =>
        setIsHovered(false)
      );
    };
  }, [parentElement, handleMouseMove]);

  return (
    <div className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden rounded-lg border shadow-md">
      {/* Spotlight Effect */}
      <motion.div
        ref={containerRef}
        className="pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200 from-white/50 via-white/20 to-transparent"
        style={{
          width: size,
          height: size,
          left: spotlightLeft,
          top: spotlightTop,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 flex flex-col justify-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Master Trading with{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-teal-400 inline-block"
              >
                {changingText[textIndex]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Unlock the power of real-time market data, automated trading bots,
            and expert education to elevate your trading game.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in delay-200">
            <a
              href="/bots"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-transform"
            >
              Trading Bots
            </a>
            <a
              href="/courses"
              className="border border-gray-700 text-white px-8 py-3 rounded-lg hover:border-teal-600 transform hover:scale-105 transition-transform"
            >
              View Courses
            </a>
          </div>
        </div>

        {/* Right content - Spline */}
        {/* <div className="flex-1">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center text-white">
                Loading...
              </div>
            }
          >
            <Spline scene={scene} className="w-full h-full" />
          </Suspense>
        </div> */}
      </div>
    </div>
  );
}
