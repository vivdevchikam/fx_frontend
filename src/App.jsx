import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Scanner from './components/Scanner';
import About from './components/About';
import Testimonials from './components/Testimonials';
import HealthNews from './components/HealthNews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import LegalPages from './components/LegalPages';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedArticleId, setSelectedArticleId] = useState('');
  const [legalPageType, setLegalPageType] = useState('home');

  // Listen for legal page navigation events
  React.useEffect(() => {
    const handleLegalNavigation = (event) => {
      setLegalPageType(event.detail);
      setCurrentView('legal');
      window.scrollTo(0, 0);
    };

    window.addEventListener('navigate-legal', handleLegalNavigation);
    return () => window.removeEventListener('navigate-legal', handleLegalNavigation);
  }, []);

  const handleArticleClick = (articleId) => {
    setSelectedArticleId(articleId);
    setCurrentView('article');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedArticleId('');
    setLegalPageType('home');
    window.scrollTo(0, 0);
  };

  if (currentView === 'legal') {
    return (
      <LegalPages onBack={handleBackToHome} initialPage={legalPageType} />
    );
  }

  if (currentView === 'article') {
    return (
      <ArticlePage 
        articleId={selectedArticleId} 
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Scanner />
      <About />
      <Testimonials />
      <HealthNews 
        context="homepage" 
        onArticleClick={handleArticleClick}
      />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;