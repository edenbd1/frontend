import React, { useState, useEffect, useCallback } from 'react';

import '../styles/header.css';
import logoText from '../assets/images/logo_text.svg';
import logoIcon from '../assets/images/logo_icon.svg';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (currentScrollY <= 0 || currentScrollY + windowHeight >= documentHeight - 10) {
      setIsVisible(true);
      return;
    }

    if (currentScrollY < lastScrollY) {
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLaunchApp = () => {
    window.open('https://app.zlend.fi/', '_blank', 'noopener,noreferrer');
  };

  const handleRedirect = () => {
    window.location.href = '/';
  };

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="logo-container">
        <img 
          src={isMobile ? logoIcon : logoText} 
          alt="Logo" 
          className={`logo-text ${isMobile ? 'mobile-logo' : ''}`} 
          onClick={handleRedirect}
        />
      </div>

      <div className="button-container">
        <button 
          aria-label="Launch App"
          onClick={handleLaunchApp}
        >
          <span>Launch App</span>
        </button>
      </div>
    </header>
  );
};

export default Header;