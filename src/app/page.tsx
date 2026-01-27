import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import IntroText from "@/components/sections/intro-text";
import ClientLogos from "@/components/sections/client-logos";
import ProjectGrid from "@/components/sections/project-grid";
import ServicesDarkSection from "@/components/sections/services-dark";
import TestimonialVideoSection from "@/components/sections/testimonial-video";
import AboutContent from "@/components/sections/about-content";
import ScrollingTicker from "@/components/sections/scrolling-ticker";
import BlogPreview from "@/components/sections/blog-preview";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main>
        <HeroSection />
        <IntroText />
        <ClientLogos />
        <ProjectGrid />
        <ServicesDarkSection />
        <TestimonialVideoSection />
        <AboutContent />
        <ScrollingTicker />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
}
