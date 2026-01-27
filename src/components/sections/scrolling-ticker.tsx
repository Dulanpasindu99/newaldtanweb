"use client";

import React from 'react';

/**
 * ScrollingTicker Component
 * 
 * A high-impact horizontally scrolling text section that repeats 
 * "Let's work together." in a massive bold font.
 * 
 * Based on design instructions and screenshots.
 */
const ScrollingTicker: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
      {/* 
        Marquee Container 
        Using a flex container with a custom animation defined in globals.css 
        or via utility classes. The 'marquee-text' class from globals.css 
        handles the translateX(-50%) animation.
      */}
      <div className="flex whitespace-nowrap select-none overflow-hidden">
        <div className="marquee-text flex items-center">
          {/* Repeating the text multiple times to ensure continuous flow */}
          <span className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-semibold leading-[0.9] tracking-tighter text-black lowercase mr-[4vw]">
            Let&apos;s work together.
          </span>
          <span className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-semibold leading-[0.9] tracking-tighter text-black lowercase mr-[4vw]">
            Let&apos;s work together.
          </span>
          <span className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-semibold leading-[0.9] tracking-tighter text-black lowercase mr-[4vw]">
            Let&apos;s work together.
          </span>
          <span className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-semibold leading-[0.9] tracking-tighter text-black lowercase mr-[4vw]">
            Let&apos;s work together.
          </span>
        </div>
        
        {/* Duplicate set for seamless looping */}
        <div className="marquee-text flex items-center" aria-hidden="true">
          <span className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-semibold leading-[0.9] tracking-tighter text-black lowercase mr-[4vw]">
            Let&apos;s work together.
          </span>
          <span className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-semibold leading-[0.9] tracking-tighter text-black lowercase mr-[4vw]">
            Let&apos;s work together.
          </span>
          <span className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-semibold leading-[0.9] tracking-tighter text-black lowercase mr-[4vw]">
            Let&apos;s work together.
          </span>
          <span className="text-[12vw] md:text-[15vw] lg:text-[18vw] font-semibold leading-[0.9] tracking-tighter text-black lowercase mr-[4vw]">
            Let&apos;s work together.
          </span>
        </div>
      </div>

      <style jsx>{`
        .marquee-text {
          white-space: nowrap;
          display: flex;
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default ScrollingTicker;