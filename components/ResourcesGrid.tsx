import React from 'react';
import { MousePointerClick, Mail, Rocket, DollarSign, ShieldCheck, Users, ChevronRight } from 'lucide-react';

const ResourcesGrid: React.FC = () => {
  const categories = [
    {
      id: 'marketing-tools',
      title: "Marketing Tools",
      description: "The most effective company marketing tools have been investigated and verified by me.",
      icon: <MousePointerClick size={48} />,
      links: [
        "Buyer Click System Review – Get 1,000 Real Buyer Clicks Instantly!",
        "The Click Generator Review – Is This Traffic Software Worth Your Money in 2025?",
        "Traffic Posting Zone Review – Honest Guide for 2025",
        "12 Best Email Marketing Tools 2025"
      ]
    },
    {
      id: 'solo-ads',
      title: "Solo Ads Marketing",
      description: "This is the best way to generate traffic to your website or landing page.",
      icon: <Mail size={48} />,
      links: [
        "Best Solo Ads for Affiliate Marketing in 2025"
      ]
    },
    {
      id: 'seo-tips',
      title: "SEO Tips",
      description: "Helpful SEO tips for every website owner.",
      icon: <Rocket size={48} />,
      links: [
        "How to Increase Your Domain Authority in 30 Days: Proven Strategies to Boost Your SEO Fast",
        "Top 150+ Social Bookmarking Sites List 2025 (High DA, Free, Do Follow Link)",
        "15 Tips on How to Get Traffic To Your Website Fast in 2025"
      ]
    },
    {
      id: 'make-money',
      title: "Make Money Online",
      description: "Learn how to earn money online fast.",
      icon: <DollarSign size={48} />,
      links: [
        "One Dollar Unlimited Traffic Review 2025 – Get Unlimited Traffic for Just $1? [Honest Breakdown]",
        "PassiveProfit AI Review 2025 – Is It Worth It for Passive Income?",
        "500 A Pop Review – Can You Really Earn $500 Per Sale Using AI?",
        "Buyer Click System Review – Get 1,000 Real Buyer Clicks Instantly!"
      ]
    },
    {
      id: 'proxies',
      title: "Proxies & Scrapers",
      description: "Best proxies and scrapers for market data research.",
      icon: <ShieldCheck size={48} />,
      links: [
        "Top 10 Residential Proxies for 2025 - Fast & Secure",
        "Best Web Scraping Tools for Lead Generation"
      ]
    },
    {
      id: 'cpa',
      title: "CPA Marketing",
      description: "Learn CPA Marketing step by step with our entire instructions.",
      icon: <Users size={48} />,
      links: [
        "CPA Marketing For Beginners 2025: A Step-By-Step Guide"
      ]
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Top Resources for Online Entrepreneurs</h2>
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
          <div className="w-8 h-2 bg-brand-cyan rounded-full"></div>
          <div className="w-2 h-2 bg-brand-cyan rounded-full"></div>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm uppercase tracking-widest">
          Get the latest insights, strategies, and tools every digital marketer needs to succeed.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 items-stretch">
            
            {/* Left Column: Category Card */}
            <div className="w-full md:w-1/3 bg-gradient-to-br from-brand-teal to-blue-900 rounded-lg p-8 text-white flex flex-col items-center text-center justify-center min-h-[280px] shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                {category.description}
              </p>
              <div className="w-12 h-1 bg-brand-cyan mt-6 rounded-full"></div>
            </div>

            {/* Right Column: Content List */}
            <div className="w-full md:w-2/3 flex flex-col gap-3">
              {category.links.map((link, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-brand-card border border-white/5 hover:border-brand-cyan/30 rounded-lg p-6 flex items-center justify-between group cursor-pointer transition-all duration-300 hover:bg-brand-card/80 hover:translate-x-2 hover:shadow-neon"
                >
                  <span className="text-gray-200 font-medium text-sm md:text-base pr-4 group-hover:text-brand-cyan transition-colors">
                    {link}
                  </span>
                  <ChevronRight className="text-gray-600 group-hover:text-brand-cyan transition-colors flex-shrink-0" size={20} />
                </div>
              ))}
              {category.links.length === 0 && (
                 <div className="flex-1 bg-red-900/20 border border-red-500/20 rounded-lg p-6 text-center text-red-200 text-sm">
                    The current query has no posts. Please make sure you have published items matching your query.
                 </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourcesGrid;