import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * ServicesDarkSection - A high-contrast dark section showcasing agency expertise
 * with a large vertical list of services.
 */
export default function ServicesDarkSection() {
  const services = [
    { title: 'Brand Identity', href: '/branding/' },
    { title: 'Websites', href: '/web-design/' },
    { title: 'SEO', href: '/search-engine-optimisation-manchester/' },
    { title: 'Craft CMS', href: '/craft-cms/' },
    { title: 'Shopify', href: '/shopify/' },
  ];

  return (
    <section className="bg-black text-white section-padding rounded-t-[3rem] lg:rounded-t-[4rem] -mt-12 relative z-10">
      <div className="container mx-auto px-6">
        {/* Header Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              <span className="text-sm font-medium tracking-tight uppercase">Our Expertise</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-center lg:text-left">
              How we take your business to the next level
            </h2>
          </div>

          <div className="lg:col-span-3 flex flex-col items-center lg:items-start space-y-6">
            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs text-center lg:text-left">
              We are a digital marketing agency with expertise, and we’re on a mission to help you take the next step in your business.
            </p>
            <a
              href="/services/"
              className="group relative inline-flex items-center justify-between bg-primary text-black rounded-full px-6 py-2.5 transition-transform hover:scale-105"
            >
              <span className="text-sm font-medium relative top-px mr-2">See all services</span>
              <div className="bg-primary flex items-center justify-center rounded-full w-6 h-6 -mr-1 transition-transform group-hover:rotate-45">
                 <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Vertical Services List */}
        <div className="mt-12">
          {services.map((service, index) => (
            <div key={service.title} className="group border-t border-white/10 last:border-b last:border-white/10">
              <a 
                href={service.href} 
                className="flex items-center justify-center lg:justify-start py-10 lg:py-14 transition-colors hover:bg-white/5 relative overflow-hidden group/link"
              >
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter transition-transform duration-500 xl:group-hover/link:translate-x-6">
                  {service.title}
                </h3>
                
                {/* Optional: Add hover arrow icon for large screens or maintain pure text focus as per screenshot */}
                <div className="hidden xl:flex absolute right-12 opacity-0 -translate-x-10 transition-all duration-500 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                   <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black">
                      <ArrowUpRight className="w-8 h-8" />
                   </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}