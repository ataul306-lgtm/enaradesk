import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchAndIcons from './components/SearchAndIcons';
import ResourcesGrid from './components/ResourcesGrid';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { Post } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'admin'>('home');

  // Initial Seed Data (The data that was previously hardcoded in ResourcesGrid)
  const [posts, setPosts] = useState<Post[]>([
    { id: '1', title: 'Buyer Click System Review – Get 1,000 Real Buyer Clicks Instantly!', categoryId: 'marketing-tools', categoryName: 'Marketing Tools', status: 'Published', date: 'Nov 29, 2025' },
    { id: '2', title: 'The Click Generator Review – Is This Traffic Software Worth Your Money in 2025?', categoryId: 'marketing-tools', categoryName: 'Marketing Tools', status: 'Published', date: 'Nov 29, 2025' },
    { id: '3', title: 'Traffic Posting Zone Review – Honest Guide for 2025', categoryId: 'marketing-tools', categoryName: 'Marketing Tools', status: 'Published', date: 'Nov 28, 2025' },
    { id: '4', title: '12 Best Email Marketing Tools 2025', categoryId: 'marketing-tools', categoryName: 'Marketing Tools', status: 'Published', date: 'Nov 27, 2025' },
    { id: '5', title: 'Best Solo Ads for Affiliate Marketing in 2025', categoryId: 'solo-ads', categoryName: 'Solo Ads Marketing', status: 'Published', date: 'Nov 26, 2025' },
    { id: '6', title: 'How to Increase Your Domain Authority in 30 Days: Proven Strategies to Boost Your SEO Fast', categoryId: 'seo-tips', categoryName: 'SEO Tips', status: 'Published', date: 'Nov 25, 2025' },
    { id: '7', title: 'Top 150+ Social Bookmarking Sites List 2025 (High DA, Free, Do Follow Link)', categoryId: 'seo-tips', categoryName: 'SEO Tips', status: 'Published', date: 'Nov 25, 2025' },
    { id: '8', title: '15 Tips on How to Get Traffic To Your Website Fast in 2025', categoryId: 'seo-tips', categoryName: 'SEO Tips', status: 'Published', date: 'Nov 24, 2025' },
    { id: '9', title: 'One Dollar Unlimited Traffic Review 2025 – Get Unlimited Traffic for Just $1? [Honest Breakdown]', categoryId: 'make-money', categoryName: 'Make Money Online', status: 'Published', date: 'Nov 23, 2025' },
    { id: '10', title: 'PassiveProfit AI Review 2025 – Is It Worth It for Passive Income?', categoryId: 'make-money', categoryName: 'Make Money Online', status: 'Published', date: 'Nov 22, 2025' },
    { id: '11', title: '500 A Pop Review – Can You Really Earn $500 Per Sale Using AI?', categoryId: 'make-money', categoryName: 'Make Money Online', status: 'Published', date: 'Nov 21, 2025' },
    { id: '12', title: 'Top 10 Residential Proxies for 2025 - Fast & Secure', categoryId: 'proxies', categoryName: 'Proxies & Scrapers', status: 'Published', date: 'Nov 20, 2025' },
    { id: '13', title: 'CPA Marketing For Beginners 2025: A Step-By-Step Guide', categoryId: 'cpa', categoryName: 'CPA Marketing', status: 'Published', date: 'Nov 19, 2025' },
  ]);

  // CMS Actions
  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const handleUpdatePost = (updatedPost: Post) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  if (currentView === 'admin') {
    return (
      <AdminDashboard 
        onLogout={() => setCurrentView('home')} 
        posts={posts}
        onAddPost={handleAddPost}
        onUpdatePost={handleUpdatePost}
        onDeletePost={handleDeletePost}
      />
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-brand-dark text-white overflow-x-hidden font-sans">
      <Header />
      <main className="flex-grow space-y-12 pb-20">
        <HeroSection />
        <SearchAndIcons />
        <ResourcesGrid posts={posts} />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer onAdminClick={() => setCurrentView('admin')} />
    </div>
  );
};

export default App;
