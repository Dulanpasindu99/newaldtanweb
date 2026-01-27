import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f672461-66b6-48e6-bf74-a3a5b2a40d73-madebyshape-co-uk/assets/images/risexshape-team-14.jpg",
    readTime: "2 min read",
    title: "Why did Rise at Seven choose MadeByShape?",
    description: "It always has a feel good factor when another agency instructs us to totally rebrand their business, create a new digital environment and ..."
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f672461-66b6-48e6-bf74-a3a5b2a40d73-madebyshape-co-uk/assets/images/Shape-April-2022-HR-186-3.jpg",
    readTime: "6 min read",
    title: "Our Culture, Our Value & Our Studio",
    description: "In our own words, how important culture, values and studio environment is to us as a web design agency at MadeByShape"
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f672461-66b6-48e6-bf74-a3a5b2a40d73-madebyshape-co-uk/assets/images/shape-office-17.jpg",
    readTime: "10 min read",
    title: "Why haven't we upsized as a design agency?",
    description: "Co-Founder of MadeByShape, Andy Golpys, explains why we haven't turned our digital agency of 10 staff into 30."
  }
];

const BlogPreview = () => {
  return (
    <section className="bg-white py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Header Content */}
          <div className="lg:col-span-4 flex flex-col items-start pt-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span className="text-xs font-medium tracking-wide uppercase">Blog</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-8">
              The latest<br />
              from our<br />
              design studio
            </h2>

            <a 
              href="https://madebyshape.co.uk/web-design-blog/" 
              className="inline-flex items-center bg-[#d9ff66] text-black px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105 group"
            >
              View the blog
              <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Slider Controls (Hidden on mobile) */}
            <div className="hidden lg:flex gap-4 mt-auto pt-32">
              <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center transition-colors hover:bg-gray-50 bg-[#f9f9f9]">
                <ArrowLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center transition-colors hover:bg-gray-50 bg-[#f3f4f6]">
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* Cards Content - Horizontal Scrollable Area */}
          <div className="lg:col-span-8">
            <div className="flex overflow-x-auto lg:overflow-visible gap-8 pb-10 scrollbar-hide snap-x">
              {blogPosts.map((post, index) => (
                <div 
                  key={index} 
                  className="min-w-[300px] md:min-w-[380px] lg:flex-1 snap-start group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                    <span className="text-[0.8rem] text-gray-500 font-medium">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium leading-tight mb-4 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-500 font-light line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Mobile/Tablet Controls */}
            <div className="flex lg:hidden gap-3 mt-4">
              <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-[#f9f9f9]">
                <ArrowLeft className="w-4 h-4 text-gray-300" />
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-[#f3f4f6]">
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;