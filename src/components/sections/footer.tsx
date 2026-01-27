import React from 'react';
import { ArrowUpRight, Linkedin, Github, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"></path>
  </svg>
);

const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M22 7h-7v2h7V7zm-7 8c0 2.21 1.79 4 4 4s4-1.79 4-4v-1h-8v1zm4-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm-10 6H2V5h5.5C10 5 12 7 12 9.5 12 11 11 12.5 9.5 13 11 13.5 12 15 12 17.5 12 20 10 22 7.5 22zM4 12h3.5c1.38 0 2.5-1.12 2.5-2.5S8.88 7 7.5 7H4v5zm0 8h3.5c1.38 0 2.5-1.12 2.5-2.5S8.88 15 7.5 15H4v5z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black pt-20 px-4 pb-12 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1536px] mx-auto">
        <div className="relative flex flex-col md:flex-row items-start">
          
          {/* Social Sidebar with Inverted Corners */}
          <div className="hidden md:block absolute -left-4 top-0 w-20 h-full z-10">
            {/* Top scoop junction */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-black dark:bg-[#111]">
              <div className="w-full h-full bg-white dark:bg-black rounded-br-[3rem]" />
            </div>
            
            {/* Social Icons Stack */}
            <div className="absolute top-20 left-0 w-20 flex flex-col items-center gap-3 py-4 bg-white dark:bg-black">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: XIcon, href: "#" },
                { Icon: Github, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: BehanceIcon, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className="w-12 h-12 rounded-full bg-[#D9FF66] flex items-center justify-center text-black hover:scale-110 transition-transform shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Bottom scoop junction */}
            <div className="absolute top-[416px] left-0 w-20 h-20 bg-black dark:bg-[#111]">
              <div className="w-full h-full bg-white dark:bg-black rounded-tr-[3rem]" />
            </div>
          </div>

          {/* Main Dark Footer Container */}
          <div className="flex-1 bg-black dark:bg-[#111] rounded-[3rem] md:ml-12 p-10 md:p-20 relative overflow-hidden transition-colors duration-300">
            
            {/* Top Decorative Cut-out Label (Sh*t I've gone too far) */}
            <div className="absolute top-0 right-0 hidden md:block">
              <div className="bg-white dark:bg-black px-8 py-4 rounded-bl-[2.5rem] font-medium text-[13px] text-black dark:text-white transition-colors">
                Sh*t I&apos;ve gone too far, send me back up 👆
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
              {/* Left Section: CTA */}
              <div className="lg:col-span-7">
                <h2 className="text-white text-[4rem] md:text-[6.5rem] font-medium leading-[0.9] tracking-tight mb-14">
                  Do you like<br />what you see?
                </h2>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-12">
                  <a 
                    href="https://madebyshape.co.uk/project-planner/" 
                    className="group relative flex items-center"
                  >
                    <div className="bg-[#D9FF66] text-black pl-10 pr-16 py-5 rounded-full font-bold text-xl transition-transform group-hover:scale-[1.02]">
                      Start a project
                    </div>
                    <div className="absolute right-1 top-1/2 -translate-y-1/2 w-14 h-14 bg-black rounded-full flex items-center justify-center border-4 border-black box-content overflow-hidden">
                       <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-12 bg-[#D9FF66]">
                          <div className="w-full h-1/2 absolute top-0 bg-black rounded-tr-full" />
                          <div className="w-full h-1/2 absolute bottom-0 bg-black rounded-br-full" />
                       </div>
                       <ArrowUpRight className="w-7 h-7 text-[#D9FF66] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>

                  {/* Google Review Badge */}
                  <div className="flex flex-col gap-2">
                    <div className="text-[13px] text-white/50 font-medium">5.0 from 69 reviews</div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                      </div>
                      <div className="flex text-[#FFB800] text-sm">
                        {[1,2,3,4,5].map((i) => (
                          <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sections: Links */}
              <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Learn */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">Learn</h4>
                  <ul className="flex flex-col gap-3">
                    {['About', 'Culture', 'Testimonials', 'Processes', 'FAQs', 'Branding FAQs', 'Blog'].map((item) => (
                      <li key={item}>
                        <a href={`https://madebyshape.co.uk/${item.toLowerCase().replace(' ', '-')}/`} className="text-white hover:text-[#D9FF66] text-[15px] font-medium transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">Explore</h4>
                  <ul className="flex flex-col gap-3">
                    <li><a href="https://madebyshape.co.uk/" className="text-white hover:text-[#D9FF66] text-[15px] font-medium transition-colors">Home</a></li>
                    <li className="flex items-center gap-2">
                      <a href="https://madebyshape.co.uk/work/" className="text-white hover:text-[#D9FF66] text-[15px] font-medium transition-colors">Work</a>
                      <span className="bg-[#D9FF66] text-[9px] text-black px-1.5 py-0.5 rounded-full font-black">NEW</span>
                    </li>
                    {['Services', 'Careers', 'Sectors', 'Hex Test', 'Contact'].map((item) => (
                      <li key={item}>
                        <a href={`https://madebyshape.co.uk/${item.toLowerCase().replace(' ', '-')}/`} className="text-white hover:text-[#D9FF66] text-[15px] font-medium transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get in touch */}
                <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
                  <h4 className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">Get in touch</h4>
                  <div className="flex flex-col gap-5 text-white font-medium text-[15px]">
                    <a href="tel:01942894596" className="flex items-center gap-3 hover:text-[#D9FF66] transition-colors">
                      <Phone className="w-4 h-4" /> 01942 894 596
                    </a>
                    <a href="mailto:hello@madebyshape.co.uk" className="flex items-center gap-3 hover:text-[#D9FF66] transition-colors">
                      <Mail className="w-4 h-4" /> hello@madebyshape.co.uk
                    </a>
                    <div className="flex items-start gap-3 mt-2">
                      <MapPin className="w-4 h-4 mt-1" />
                      <p className="leading-tight">
                        MadeByShape<br />
                        1 Gibfield Park Avenue<br />
                        Atherton Manchester<br />
                        M46 0SU
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Massive Watermark */}
            <div className="select-none pointer-events-none mb-12">
              <h3 className="text-white text-[12.5vw] font-medium leading-none tracking-tighter whitespace-nowrap">
                Crafting since 2010
              </h3>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-[11px] text-white/60 font-medium">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-white text-lg font-bold">Shape.</span>
                <span>© MadeByShape Ltd 2025</span>
                <span className="text-white/20">|</span>
                <span>Company Reg Number 10529058</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href="#" className="hover:text-white transition-colors">Web Design Manchester</a>
                <span className="text-white/20">|</span>
                <span>All Rights Reserved</span>
                <span className="text-white/20">|</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy (you really care?)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
