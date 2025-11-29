import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchAndIcons from './components/SearchAndIcons';
import ResourcesGrid from './components/ResourcesGrid';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-brand-dark text-white overflow-x-hidden font-sans">
      <Header />
      <main className="flex-grow space-y-12 pb-20">
        <HeroSection />
        <SearchAndIcons />
        <ResourcesGrid />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;