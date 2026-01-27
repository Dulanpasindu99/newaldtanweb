import React from 'react';
import Image from 'next/image';

const ProjectGrid = () => {
  const projects = [
    {
      id: "gary-neville",
      year: "2023",
      client: "Gary Neville",
      title: "Refreshing Gary Neville's digital presence",
      video: "https://servd-made-byshape.b-cdn.net/production/uploads/videos/gary-neville-thumbnail_2024-06-03-125526_bljp.mp4",
      size: "large", // Left column tall or right column tall alternating
    },
    {
      id: "nth-degree",
      year: "2024",
      client: "Nth Degree",
      title: "Furniture designed to the greatest extent",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f672461-66b6-48e6-bf74-a3a5b2a40d73-madebyshape-co-uk/assets/images/Camera_6_Sun_loungers_Dining_set_Final_300dpi-5.jpg",
      size: "wide",
    },
    {
      id: "sketch-studios",
      year: "2024",
      client: "Sketch Studios",
      title: "A workplace consultancy creating inspiring environments",
      image: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/sketch-website.jpg?w=800&h=600&q=80&fm=webp&fit=crop",
      size: "square",
    },
    {
      id: "ymu",
      year: "2024",
      client: "YMU",
      title: "Redefining a leading global talent group",
      video: "https://servd-made-byshape.b-cdn.net/production/uploads/videos/ymu-thumbnail.mp4",
      size: "tall",
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-end items-start mb-16 lg:mb-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-black rounded-full" />
              <span className="text-sm font-medium tracking-tight uppercase">Our Work</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-black">
              Take a look at <br /> our projects
            </h2>
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-16 lg:gap-24">
            {/* Project: Gary Neville (Video) */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 mb-6">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <source src={projects[0].video} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-400 font-light">
                  <span>{projects[0].year}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{projects[0].client}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium leading-tight text-black group-hover:underline decoration-1 underline-offset-4">
                  {projects[0].title}
                </h3>
              </div>
            </div>

            {/* Project: Sketch Studios */}
            <div className="group cursor-pointer pt-0 md:pt-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-gray-100 mb-6">
                {projects[2].image && (
                  <Image
                    src={projects[2].image}
                    alt={projects[2].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-400 font-light">
                  <span>{projects[2].year}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{projects[2].client}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium leading-tight text-black group-hover:underline decoration-1 underline-offset-4">
                  {projects[2].title}
                </h3>
              </div>
            </div>

            {/* "Like what you see?" Block */}
            <div className="flex flex-col items-center justify-center text-center py-12 md:py-24">
              <h2 className="text-4xl lg:text-5xl font-semibold mb-6">Like what <br /> you see?</h2>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-[#d9ff66] px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105"
              >
                Contact us
                <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className="mt-6 flex flex-col items-center">
                <div className="flex text-orange-400 text-xs mb-1">★★★★★</div>
                <p className="text-xs text-gray-500 font-medium">Google reviews</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-16 lg:gap-24 md:mt-[-15%] lg:mt-[-20%]">
            {/* Project: Nth Degree */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[6/5] overflow-hidden rounded-[2.5rem] bg-gray-100 mb-6">
                {projects[1].image && (
                  <Image
                    src={projects[1].image}
                    alt={projects[1].title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-400 font-light">
                  <span>{projects[1].year}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{projects[1].client}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium leading-tight text-black group-hover:underline decoration-1 underline-offset-4">
                  {projects[1].title}
                </h3>
              </div>
            </div>

            {/* Project: YMU (Video) */}
            <div className="group cursor-pointer pt-0 md:pt-12">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 mb-6">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <source src={projects[3].video} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-400 font-light">
                  <span>{projects[3].year}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{projects[3].client}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium leading-tight text-black group-hover:underline decoration-1 underline-offset-4">
                  {projects[3].title}
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;