import React from 'react';
import { BarChart2, Search, PenTool, Network, Star } from 'lucide-react';

const SearchAndIcons: React.FC = () => {
  const icons = [
    { name: 'Website Traffic', icon: <BarChart2 size={32} /> },
    { name: 'SEO', icon: <Search size={32} /> },
    { name: 'Tools', icon: <PenTool size={32} /> },
    { name: 'Affiliate', icon: <Network size={32} /> },
    { name: 'Reviews', icon: <Star size={32} /> },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="relative flex shadow-neon rounded-md overflow-hidden">
          <input 
            type="text" 
            placeholder="Type to start searching....." 
            className="w-full bg-white text-gray-900 px-6 py-4 outline-none focus:ring-2 focus:ring-brand-cyan text-lg"
          />
          <button className="bg-brand-teal hover:bg-brand-cyan text-white px-8 transition-colors flex items-center justify-center">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {icons.map((item, index) => (
          <div 
            key={index} 
            className="group bg-black border border-white/10 rounded-xl py-6 px-2 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-brand-cyan hover:shadow-neon transition-all duration-300"
          >
            <div className="text-white group-hover:text-brand-cyan transition-colors">
              {item.icon}
            </div>
            <span className="text-white font-bold text-sm uppercase tracking-wider group-hover:text-brand-cyan transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchAndIcons;