import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter, MapPin, Mail, Lock } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-[#080c17] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white tracking-tighter uppercase">
                ENARA'S <span className="text-brand-cyan">DESK</span>
              </span>
              <div className="h-1 w-8 bg-brand-cyan rounded-full mt-1"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enara is a full-time blogger and affiliate marketer. Follow Enara to learn how to scale up your online business to make more money.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-gray-400 hover:bg-brand-cyan hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-gray-400 hover:bg-brand-cyan hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-brand-cyan/30 pb-2 inline-block">Quick Link</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Terms And Conditions</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-brand-cyan/30 pb-2 inline-block">Categories</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Resources</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Affiliate Marketing</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Freelancing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-brand-cyan/30 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-cyan mt-1" />
                <div>
                    <p className="font-bold text-white">Email</p>
                    <p>info@enarasdesk.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-cyan mt-1" />
                <div>
                    <p className="font-bold text-white">Address</p>
                    <p>9 Joy Lane, Sherman Oaks, CA 91403.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>Copyright © 2025 <span className="text-white font-semibold">ENARA'S DESK</span>. All Rights Reserved</p>
          <button 
            onClick={onAdminClick}
            className="flex items-center gap-1 text-gray-400 hover:text-brand-cyan transition-colors px-3 py-1 rounded border border-white/5 hover:border-brand-cyan/30"
          >
            <Lock size={12} />
            <span className="text-xs font-medium">Admin Login</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;