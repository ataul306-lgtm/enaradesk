import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Using a high-quality Unsplash image that resembles the "Man on balcony with laptop" vibe
  const heroImageSrc = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3";

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden mb-8">
      
      {/* Left Content Column */}
      <div className="flex-1 w-full max-w-2xl text-center lg:text-left z-10">
        
        {/* Glowing Headline */}
        <div className="relative mb-6">
            <div className="absolute -inset-1 bg-brand-cyan/20 blur-xl rounded-full opacity-30"></div>
            <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-glow">
                Stop waiting for <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-cyan drop-shadow-glow-strong">
                    visitors.
                </span>
            </h1>
        </div>

        {/* Cyan Sub-headline / Value Prop */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-cyan leading-tight mb-8 drop-shadow-md">
          Start driving them. Get the proven roadmap to massive traffic today.
        </h2>

        {/* Call to Action Button */}
        <div className="flex justify-center lg:justify-start">
          <button 
            className="group relative inline-flex items-center gap-3 px-8 py-5 bg-brand-dark border-2 border-brand-cyan rounded-lg overflow-hidden transition-all duration-300 hover:bg-brand-cyan/10 hover:shadow-neon hover:-translate-y-1 cursor-pointer"
            type="button"
          >
             <CheckCircle2 className="w-6 h-6 text-brand-cyan group-hover:text-white transition-colors" />
             <span className="text-lg font-bold tracking-wide text-white group-hover:text-brand-cyan transition-colors">
               YES, You're In The Right Place!
             </span>
          </button>
        </div>
      </div>

      {/* Right Image Column */}
      <div className="flex-1 relative w-full max-w-lg lg:max-w-xl z-10 flex justify-center lg:justify-end">
         <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl group">
            <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20"></div>
            <img 
              src={heroImageSrc} 
              alt="Traffic Mastery Strategy" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
         </div>
         {/* Decorative elements behind image */}
         <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl opacity-40 -z-10"></div>
         <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl opacity-40 -z-10"></div>
      </div>

    </section>
  );
};

export default HeroSection;