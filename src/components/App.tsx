import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Header';
import Demo from './Demo';
import WhatXSay from './WhatXSay';
import Hero from './Hero';
import Features from './Features';
import Faq from './Faq';
import Waitlist from './Waitlist';
import Footer from './Footer';

import FaqPage from '../pages/FaqPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import NotFoundPage from '../pages/NotFoundPage';

import '../styles/footer.css';
import '../styles/waitlist.css';

const ScrollToHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Demo />
      <WhatXSay />
      <Features />
      <Faq />
      <Waitlist />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#010314' }}>
        <ScrollToHandler />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
