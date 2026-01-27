"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

/**
 * Navigation Component
 * 
 * Pixel-perfect clone of MadeByShape floating pill navigation.
 * Features:
 * - Floating pill shape background
 * - Services & About dropdowns with tiered layouts
 * - Theme toggle (Light/Dark)
 * - "Start a project" CTA with lime neon accent
 */

const services = [
  { title: "Web Design", desc: "Deliver your business to a wider audience", href: "https://madebyshape.co.uk/web-design/" },
  { title: "Craft CMS", desc: "The most reliable way to build a website", href: "https://madebyshape.co.uk/craft-cms/" },
  { title: "Branding", desc: "Creating brands you're proud of", href: "https://madebyshape.co.uk/branding/" },
  { title: "SEO", desc: "Get your brand seen online", href: "https://madebyshape.co.uk/search-engine-optimisation-manchester/" },
  { title: "Shopify", desc: "Custom Shopify store in 4 weeks", href: "https://madebyshape.co.uk/shopify/" },
];

const aboutLinks = [
  { title: "About us", desc: "An award winning agency in Manchester", href: "https://madebyshape.co.uk/about/" },
  { title: "Meet the Team", desc: "Putting faces to names", href: "https://madebyshape.co.uk/meet-the-team/" },
  { title: "Culture", desc: "How we do things around here", href: "https://madebyshape.co.uk/culture/" },
  { title: "Testimonials", desc: "What our clients say about us", href: "https://madebyshape.co.uk/testimonials/" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-[100] pointer-events-none py-4 lg:py-6">
      <div 
        className={`inline-flex items-center bg-white dark:bg-black rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-500 pointer-events-auto px-2 lg:px-4 py-2 lg:py-3 ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
        {/* Logo */}
        <div className="ml-2 lg:ml-4 mr-4 lg:mr-8 flex items-center">
          <Link href="https://madebyshape.co.uk/" className="flex items-center">
            <span className="sr-only">Shape Logo</span>
            <svg 
              viewBox="0 0 100 32" 
              className="w-20 lg:w-24 h-8 fill-current text-black dark:text-white"
            >
              <path d="M12.4 20.3v-2.1c0-.9-.7-1.6-1.6-1.6l-2.4-.1c-.9 0-1.6.7-1.6 1.6V25c0 1.9 1.5 3.5 3.4 3.5h5.5c2 0 3.7-1.7 3.7-3.7V17c0-2-1.7-3.7-3.7-3.7h-5.9c-2 0-3.6 1.6-3.6 3.6v3.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-2c0-.3.3-.6.6-.6h3.4c.3 0 .6.3.6.6V25c0 .3-.3.6-.6.6h-4.3c-.3 0-.6-.3-.6-.6v-4.1zM34.7 13.3h-4.6c-.6 0-1 .4-1 1v13.5c0 .5.4 1 1 1h4.6c.6 0 1-.4 1-1V22h4.5v6.8c0 .5.5 1 1 1h4.6c.5 0 1-.5 1-1V14.3c0-.6-.4-1-1-1h-4.6c-.5 0-1 .4-1 1V20h-4.5v-5.7c0-.6-.5-1-1-1zM64 13.3h-3.3c-.5 0-.9.4-.9 1v13.5c0 .5.4 1 .9 1h3.3c.5 0 .9-.5.9-1v-2.8H70c3.2 0 5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8H64v-.1zm5.1 8.8H64v-6h5.1c1.5 0 2.8 1.3 2.8 3s-1.3 3-2.8 3zM25 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm59.2 3.3h-5.4l-.6 5.2c-.1.5.3 1 .8 1h3.7c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5h-5.6l.2-1.4c.1-.5.5-.9 1-.9h2.8c.5 0 .9-.4.9-1s-.4-1-.9-1h-4.4c-.6 0-1 .4-1 1l-.9 7.7c-.1.6.4 1.1 1 1.1h8.1c3.1 0 5.6-2.5 5.6-5.6s-2.5-5.6-5.6-5.6z" />
              <rect x="23.8" y="13.3" width="2.4" height="15.5" rx="1" />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-8 xl:space-x-10 mr-8">
            <li 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="absolute -top-3 -right-4 bg-[#d9ff66] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full z-10">
                13
              </div>
              <Link href="https://madebyshape.co.uk/services/" className="text-sm font-light hover:opacity-60 transition-opacity dark:text-white py-2">
                Services
              </Link>
              
              {/* Dropdown Services */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ${activeDropdown === "services" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}`}>
                <div className="bg-white dark:bg-[#1a1a1a] shadow-2xl rounded-[2rem] p-8 w-[44rem] flex overflow-hidden border border-gray-50 dark:border-gray-800">
                  <div className="flex-1 space-y-1">
                    {services.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={item.href}
                        className="group/item flex flex-col p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-base font-medium text-black dark:text-white">{item.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-black dark:text-white opacity-0 group-hover/item:opacity-100 translate-x-1 -translate-y-1 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-300" />
                        </div>
                        <span className="text-sm text-gray-400 dark:text-gray-300 font-light">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="w-[18rem] ml-6">
                    <Link href="https://madebyshape.co.uk/services/" className="group/all h-full bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-black dark:text-white">View all Services</span>
                          <ArrowUpRight className="w-4 h-4 text-black dark:text-white opacity-0 group-hover/all:opacity-100 translate-x-1 -translate-y-1 group-hover/all:translate-x-0 group-hover/all:translate-y-0 transition-all duration-300" />
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-300 font-light leading-relaxed">
                          We don’t stop there, check out all the services we offer here at Shape
                        </p>
                      </div>
                      <div className="mt-6 rounded-xl overflow-hidden relative aspect-[4/3]">
                        <Image 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f672461-66b6-48e6-bf74-a3a5b2a40d73-madebyshape-co-uk/assets/images/Shape-April-2022-HR-219-1.jpg"
                          alt="Service highlights"
                          fill
                          className="object-cover transition-transform duration-700 group-hover/all:scale-110"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="https://madebyshape.co.uk/work/" className="text-sm font-light hover:opacity-60 transition-opacity dark:text-white py-2">
                Work
              </Link>
            </li>

            <li 
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link href="https://madebyshape.co.uk/about/" className="text-sm font-light hover:opacity-60 transition-opacity dark:text-white py-2">
                About
              </Link>
              {/* Dropdown About */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-300 ${activeDropdown === "about" ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}`}>
                <div className="bg-white dark:bg-[#1a1a1a] shadow-2xl rounded-[2rem] p-8 w-[44rem] flex overflow-hidden border border-gray-50 dark:border-gray-800">
                  <div className="flex-1 space-y-1">
                    {aboutLinks.map((item, idx) => (
                      <Link 
                        key={idx} 
                        href={item.href}
                        className="group/item flex flex-col p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-base font-medium text-black dark:text-white">{item.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-black dark:text-white opacity-0 group-hover/item:opacity-100 translate-x-1 -translate-y-1 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all duration-300" />
                        </div>
                        <span className="text-sm text-gray-400 dark:text-gray-300 font-light">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="w-[18rem] ml-6">
                    <div className="group/reel relative h-full bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex flex-col justify-between overflow-hidden cursor-pointer">
                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-black dark:text-white">Watch our Showreel</span>
                          <ArrowUpRight className="w-4 h-4 text-black dark:text-white opacity-0 group-hover/reel:opacity-100 translate-x-1 -translate-y-1 group-hover/reel:translate-x-0 group-hover/reel:translate-y-0 transition-all duration-300" />
                        </div>
                        <p className="text-sm text-gray-400 dark:text-gray-300 font-light leading-relaxed">
                          Want a snippet of our work in under a minute? We’ve got just the thing for ya...
                        </p>
                      </div>
                      <div className="mt-6 rounded-xl overflow-hidden relative aspect-[4/3]">
                        <Image 
                          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f672461-66b6-48e6-bf74-a3a5b2a40d73-madebyshape-co-uk/assets/images/sketch-website-2.jpg"
                          alt="Showreel preview"
                          fill
                          className="object-cover transition-transform duration-700 group-hover/reel:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-[#d9ff66] rounded-full flex items-center justify-center transition-transform group-hover/reel:scale-110">
                            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-black ml-1">
                              <path d="M5 3l14 9-14 9V3z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="https://madebyshape.co.uk/web-design-blog/" className="text-sm font-light hover:opacity-60 transition-opacity dark:text-white py-2">
                Blog
              </Link>
            </li>

            <li>
              <Link href="https://madebyshape.co.uk/contact/" className="text-sm font-light hover:opacity-60 transition-opacity dark:text-white py-2">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
          <div className="flex items-center space-x-1 lg:space-x-4">
            <button 
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <>
                  <Moon className="w-[18px] h-[18px] text-black dark:hidden" />
                  <Sun className="w-[18px] h-[18px] text-white hidden dark:block" />
                </>
              )}
            </button>


          <Link 
            href="https://madebyshape.co.uk/project-planner/" 
            className="group relative flex items-center"
          >
            <div className="bg-[#d9ff66] text-black text-sm font-medium px-6 py-2.5 rounded-full flex items-center transition-all duration-300">
              Start a project
            </div>
            <div className="ml-[-8px] w-9 h-9 bg-[#d9ff66] rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-3 group-hover:rotate-45">
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </div>
          </Link>

          {/* Mobile Menu Icon (Hidden on desktop) */}
          <button className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 ml-2">
            <span className="w-5 h-[2px] bg-black dark:bg-white transition-all"></span>
            <span className="w-5 h-[2px] bg-black dark:bg-white transition-all"></span>
            <span className="w-5 h-[2px] bg-black dark:bg-white transition-all"></span>
          </button>
        </div>
      </div>
    </div>
  );
}