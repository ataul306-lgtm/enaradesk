import React, { useState } from 'react';
import { Menu, X, Youtube } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Buy Solo Ads', href: '#' },
    { name: 'SEO Tools', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <div className="flex items-center gap-2">
              {/* Simple Logo Representation */}
              <span className="text-2xl font-extrabold text-white tracking-tighter uppercase">
                ENARA'S <span className="text-brand-cyan">DESK</span>
              </span>
              <div className="h-1 w-10 bg-brand-cyan rounded-full mt-1"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-brand-cyan transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <button className="bg-brand-red hover:bg-red-600 text-white px-5 py-2 rounded-md font-bold text-sm flex items-center gap-2 transition-transform hover:scale-105">
              <Youtube size={18} />
              YouTube
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-card border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-brand-dark"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-brand-red hover:bg-red-600 text-white px-5 py-3 rounded-md font-bold flex items-center justify-center gap-2">
                <Youtube size={20} />
                YouTube Channel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;