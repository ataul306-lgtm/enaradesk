import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "PETER BATE",
      role: "E-commerce Store Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      content: "I hired Enara to manage my Facebook ads and email marketing campaigns, and the results were amazing. Within just 3 weeks, I started seeing a noticeable increase in sales. He understands the market and audience behavior very well."
    },
    {
      name: "MAJD ABO",
      role: "Local Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      content: "Enara managed our Facebook ad campaigns, and I was amazed at the conversion rates we got. He doesn't just run ads – he crafts proper strategies and optimizes everything from creatives to audience targeting. We went from 0 to 500 leads in just a few weeks."
    },
    {
      name: "JENNY WILSON",
      role: "Digital Content Creator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1061&q=80",
      content: "Enara's SEO advice is top-notch. I followed the guides on domain authority and backlinking, and my organic traffic grew by 200% in a few months. Highly recommended for anyone serious about blogging and affiliate marketing."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white/90 mb-4">Clients Reviews</h2>
        <p className="text-gray-500 text-sm uppercase tracking-wider">Hear What Our Clients Are Saying About Working With Our Team.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-brand-card border border-white/5 rounded-xl overflow-hidden flex flex-col hover:border-brand-cyan/30 hover:shadow-neon transition-all duration-300 group">
            <div className="w-full h-56 relative overflow-hidden">
              <img 
                src={review.image} 
                alt={review.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-90"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow -mt-16 relative z-10">
               <div className="bg-brand-dark/95 backdrop-blur-sm p-5 rounded-lg border border-white/10 mb-4 shadow-lg flex-grow flex items-center">
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    "{review.content}"
                  </p>
               </div>
              <div className="mt-auto pl-2">
                <h4 className="text-white font-bold text-lg">{review.name}</h4>
                <p className="text-xs text-brand-cyan mb-2">{review.role}</p>
                <div className="flex gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;