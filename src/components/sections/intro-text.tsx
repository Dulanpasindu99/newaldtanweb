import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const IntroText = () => {
  return (
    <section className="bg-white py-20 md:py-32 lg:py-40">
      <div className="container px-6 lg:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Label */}
          <div className="flex items-center space-x-2 mb-8 lg:mb-0">
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            <span className="text-[14px] font-medium tracking-tight font-display">
              Who are we?
            </span>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[85%] xl:w-[80%]">
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-semibold leading-[1.05] tracking-[-0.03em] font-display text-black">
              An independent web design and branding agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.
            </h2>

            {/* CTA Buttons */}
            <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-6">
              <a
                href="/about/"
                className="group relative inline-flex items-center bg-[#d9ff66] hover:bg-[#c8f04d] text-black rounded-full pl-5 pr-1.5 py-1.5 transition-colors duration-300"
              >
                <span className="text-[15px] font-medium tracking-tight pr-3 py-1">
                  About Shape
                </span>
                <div className="bg-[#d9ff66] group-hover:bg-[#c8f04d] rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:rotate-45 duration-300 border border-black/5">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              <a
                href="/meet-the-team/"
                className="group inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300"
              >
                <span className="text-[15px] font-medium tracking-tight mr-2">
                  Meet the Team
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45 duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Client Logos Grid - Marquee Fallback for Visual Accuracy */}
        <div className="mt-24 md:mt-32 border-t border-gray-100 pt-16 md:pt-20">
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* These would typically be images from assets, using text/placeholders as fallback */}
            <div className="text-xl font-bold tracking-tighter">SELFRIDGES&CO</div>
            <div className="w-16 h-12 flex items-center justify-center">
               <span className="font-extrabold text-2xl">20th</span>
            </div>
            <div className="text-xl font-black uppercase tracking-[0.2em]">Sacha Lord</div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold leading-none">University of</span>
              <span className="text-lg font-black leading-none uppercase">Salford</span>
              <span className="text-[10px] uppercase font-bold leading-none">Manchester</span>
            </div>
            <div className="text-xl font-serif italic tracking-widest opacity-40">ROSEB...</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroText;