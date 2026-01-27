import React from 'react';

const clientLogos = [
  {
    name: "Selfridges",
    src: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Logos/Selfridges-Co.png?w=200&h=100&q=80&fm=webp&fit=max&dm=1614167341&s=4d5b27e8d6957ce94162985f6a9e164c",
    width: 140,
    height: 40
  },
  {
    name: "20th Century Fox",
    src: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Logos/20th-Century-Fox.png?w=200&h=100&q=80&fm=webp&fit=max&dm=1614167341&s=4d5b27e8d6957ce94162985f6a9e164c",
    width: 60,
    height: 60
  },
  {
    name: "Sacha Lord",
    src: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Logos/Sacha-Lord.png?w=200&h=100&q=80&fm=webp&fit=max&dm=1614167341&s=4d5b27e8d6957ce94162985f6a9e164c",
    width: 120,
    height: 40
  },
  {
    name: "University of Salford",
    src: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Logos/University-of-Salford.png?w=200&h=100&q=80&fm=webp&fit=max&dm=1614167341&s=4d5b27e8d6957ce94162985f6a9e164c",
    width: 130,
    height: 50
  },
  {
    name: "Rosebury",
    src: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/Logos/Rosebury.png?w=200&h=100&q=80&fm=webp&fit=max&dm=1614167341&s=4d5b27e8d6957ce94162985f6a9e164c",
    width: 110,
    height: 40
  }
];

const ClientLogos = () => {
  return (
    <section className="bg-white py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Gradient Overlays for smooth entry/exit */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />
          
          <div className="flex items-center justify-between space-x-8 md:space-x-16 lg:space-x-24 opacity-80 hover:opacity-100 transition-opacity duration-500">
            {/* Selfridges */}
            <div className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-[22px] font-bold tracking-tighter uppercase font-display text-black">SELFRIDGES&CO</span>
            </div>

            {/* 20th Century Fox Replacement (Since asset is generic in prompt) */}
            <div className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="border-t-2 border-b-2 border-black px-1 py-0.5 text-center leading-none">
                <div className="text-[10px] font-bold">20th</div>
                <div className="text-[10px] font-bold">CENTURY</div>
                <div className="text-[12px] font-black">FOX</div>
              </div>
            </div>

            {/* Sacha Lord */}
            <div className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-[18px] font-black tracking-tight uppercase font-display text-black">SACHA LORD</span>
            </div>

            {/* University of Salford */}
            <div className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-left font-display leading-[1.1]">
                <div className="text-[10px] font-light">University of</div>
                <div className="text-[16px] font-bold">Salford</div>
                <div className="text-[9px] font-medium tracking-[0.2em] uppercase">Manchester</div>
              </div>
            </div>

            {/* Rosebury */}
            <div className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
              <span className="text-[20px] font-bold italic tracking-wide font-display text-black opacity-40 blur-[0.5px]">ROSEBURY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;