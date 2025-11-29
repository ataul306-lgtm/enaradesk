import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="w-full bg-gray-100/5 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">
          Join Our Newsletter To Stay
        </h2>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 tracking-tight">
          Update
        </h2>
        
        <div className="bg-brand-card p-2 rounded-lg md:rounded-full border border-white/10 shadow-2xl max-w-3xl mx-auto">
          <form className="flex flex-col md:flex-row gap-4 p-2">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="flex-1 bg-brand-dark border border-white/10 rounded-md md:rounded-full px-6 py-3 text-white placeholder-gray-500 outline-none focus:border-brand-cyan transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="flex-1 bg-brand-dark border border-white/10 rounded-md md:rounded-full px-6 py-3 text-white placeholder-gray-500 outline-none focus:border-brand-cyan transition-colors"
            />
            <button 
              type="button"
              className="bg-brand-teal hover:bg-brand-cyan text-white font-bold px-10 py-3 rounded-md md:rounded-full transition-all duration-300 hover:shadow-glow"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;