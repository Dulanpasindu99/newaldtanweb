"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * HeroSection Component
 * 
 * A pixel-perfect clone of the hero section for a creative agency.
 * Features:
 * - Large Display H1 with tight line-height
 * - Asymmetrical rounded light gray background shape
 * - Interactive pill buttons with "pushed-out" geometry
 * - Responsive layout following the brand's sophisticated minimalist aesthetic
 */

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-start pt-[120px] lg:pt-[160px] pb-20 overflow-x-hidden bg-white">
      {/* Background Shape - Large rounded light gray element */}
      <div 
        className="absolute top-[140px] right-0 w-[95%] h-[600px] md:h-[800px] lg:h-[850px] bg-[#F3F4F6] rounded-l-[3rem] lg:rounded-l-[4rem] z-0"
        style={{ 
          transform: 'translateX(0)',
          maxWidth: '1536px' 
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Subheading/Intro */}
          <div className="flex items-center gap-2 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
            <p className="text-sm font-light tracking-tight text-black">
              Hiya, we're Shape 👋
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="h1 text-black mb-12 max-w-[900px] tracking-[-0.04em] leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            A web design and<br />
            branding agency<br />
            in Manchester
          </h1>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            {/* View our work - Primary Pill Button */}
            <div className="group relative flex items-center">
              <a 
                href="/work/" 
                className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-[15px] font-normal transition-all duration-300 hover:pr-4"
              >
                View our work
              </a>
              <div className="w-10 h-10 -ml-1 flex items-center justify-center bg-black text-white rounded-full transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Meet the team - Secondary Text/Link Button */}
            <a 
              href="/meet-the-team/" 
              className="group flex items-center gap-2 px-6 py-4 rounded-full text-[15px] font-normal text-black transition-colors hover:bg-gray-100"
            >
              Meet the team
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>

      {/* Responsive Visual Adjustment for Mobile */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .h1 {
            font-size: clamp(2.5rem, 10vw, 4rem);
            line-height: 1.0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;