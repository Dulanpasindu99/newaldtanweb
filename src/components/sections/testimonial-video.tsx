import React from 'react';
import Image from 'next/image';

/**
 * TestimonialVideoSection Component
 * 
 * Clones the video testimonial section featuring Hannah Wessel from Stoneletters.
 * Includes play button overlay, quote elements, and "View more testimonials" button.
 */
const TestimonialVideoSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative w-full max-w-[1400px] mx-auto group">
          
          {/* Main Video Wrapper with Large Border Radius */}
          <div className="relative rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] overflow-hidden aspect-[16/9] shadow-2xl">
            {/* Background Image/Poster */}
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f672461-66b6-48e6-bf74-a3a5b2a40d73-madebyshape-co-uk/assets/images/Stoneletters-testimonial-large-image-11.jpg"
              alt="Hannah Wessel Testimonial Background"
              fill
              className="object-cover"
              priority
            />
            
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20" />

            {/* Quote Overlay - Top Left */}
            <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20">
              <div className="max-w-xs md:max-w-md">
                <blockquote className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl">
                  <div className="flex gap-2 mb-2">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-black fill-current"
                    >
                      <path d="M0 15V7.5L3.75 0H7.5L5 7.5H7.5V15H0ZM11.25 15V7.5L15 0H18.75L16.25 7.5H18.75V15H11.25Z" />
                    </svg>
                    <h3 className="text-xl md:text-3xl font-semibold leading-tight tracking-tight text-black">
                      Shape created something better than I ever could have imagined
                    </h3>
                  </div>
                </blockquote>
              </div>
            </div>

            {/* Profile Overlay - Top Left (Slightly further down) */}
            <div className="absolute top-[160px] left-6 md:top-[180px] md:left-12 z-20">
              <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-2xl flex items-center gap-3 shadow-lg">
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f672461-66b6-48e6-bf74-a3a5b2a40d73-madebyshape-co-uk/assets/images/Hannah-Wessel-Profile-image-12.jpg"
                    alt="Hannah Wessel Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs md:text-sm font-bold text-black leading-none">Hannah Wessel</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-0.5">Co-Founder, Stoneletters</div>
                </div>
              </div>
            </div>

            {/* Play Button - Center Left (Bottomish) */}
            <div className="absolute bottom-10 left-10 z-20">
              <button className="w-12 h-12 md:w-16 md:h-16 bg-lime-neon rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group/play shadow-lg">
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 fill-current text-black ml-1" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="mt-8 flex flex-wrap items-center justify-end gap-3 md:gap-4">
            {/* View Project / Play Video Badge */}
            <button className="bg-lime-neon px-6 py-3 rounded-full flex items-center gap-3 hover:bg-opacity-90 transition-colors group/pill">
              <span className="text-sm font-medium text-black">Play video</span>
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center">
                 <svg className="w-2.5 h-2.5 fill-current text-black" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>

            {/* View More Testimonials */}
            <a 
              href="/testimonials/" 
              className="bg-[#1a1a1a] px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black transition-colors group/pill"
            >
              <span className="text-sm font-medium text-white">View more testimonials</span>
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center transition-transform group-hover/pill:rotate-45">
                <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideoSection;