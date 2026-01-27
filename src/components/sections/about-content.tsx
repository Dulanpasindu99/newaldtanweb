import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutContent = () => {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1536px]">
        <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-12 lg:gap-24">
          
          {/* Left Column: Bold Statement */}
          <div className="w-full lg:w-[45%] flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
              <span className="text-[14px] font-medium tracking-tight text-black flex items-center">
                Sharing the love
              </span>
            </div>
            
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-semibold leading-[1.1] tracking-[-0.02em] text-black">
              A web design agency in Manchester that cares about you and your brand, no matter the size or what industry your business is in.
            </h2>
          </div>

          {/* Right Column: Detailed Context */}
          <div className="w-full lg:w-[48%] mt-4 lg:mt-2">
            <div className="space-y-6">
              <p className="text-[17px] leading-[1.6] font-light text-black">
                Born in 2010, MadeByShape is an Award-Winning Web Design Agency based in Manchester specialising in{' '}
                <a href="#" className="underline decoration-black underline-offset-4 hover:opacity-70 transition-opacity">Web Design</a>,{' '}
                <a href="#" className="underline decoration-black underline-offset-4 hover:opacity-70 transition-opacity">Branding</a>,{' '}
                <a href="#" className="underline decoration-black underline-offset-4 hover:opacity-70 transition-opacity">eCommerce</a>, Digital Marketing and{' '}
                <a href="#" className="underline decoration-black underline-offset-4 hover:opacity-70 transition-opacity">Organic SEO</a>.
              </p>

              <p className="text-[17px] leading-[1.6] font-light text-black">
                Our content management system of choice is{' '}
                <a href="#" className="underline decoration-black underline-offset-4 hover:opacity-70 transition-opacity">Craft CMS</a> rather than WordPress, allowing you to manage your website pages, content and SEO easily. We&apos;re proud to be a verified Craft CMS and{' '}
                <a href="#" className="underline decoration-black underline-offset-4 hover:opacity-70 transition-opacity">Craft Commerce</a> professional partner. And we build{' '}
                <a href="#" className="underline decoration-black underline-offset-4 hover:opacity-70 transition-opacity">Shopify</a> projects every week, a super intuitive eCommerce platform for clients to take their business to the next level.
              </p>

              <p className="text-[17px] leading-[1.6] font-light text-black">
                So, if you need a professional Manchester Web Design Agency to support you with your branding or website design,{' '}
                <a href="#" className="underline decoration-black underline-offset-4 hover:opacity-70 transition-opacity">get in touch</a> with us today.
              </p>

              {/* Action Button */}
              <div className="pt-8">
                <a 
                  href="/about" 
                  className="inline-flex items-center bg-[#D9FF66] text-black px-6 py-3.5 rounded-full font-medium text-[15px] hover:scale-105 transition-transform group"
                >
                  About Shape
                  <div className="ml-8 flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutContent;