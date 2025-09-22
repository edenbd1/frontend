import React from 'react';

import '../styles/hero.css';

import coin1 from '../assets/images/coin1.png';
import coin2 from '../assets/images/coin2.png';
import coin3 from '../assets/images/coin3.png';
import coin4 from '../assets/images/coin4.png';
import coin5 from '../assets/images/coin5.png';
import coin6 from '../assets/images/coin6.png';
import coin7 from '../assets/images/coin7.png';
import coin8 from '../assets/images/coin8.png';

// Removed rotating taglines for a calmer, clearer UX

const Hero: React.FC = () => {
  return (
    <section className="hero" id="Home">
      <div className="coin-container left-1">
        <div className="coin-side">
          <div></div>
        </div>
        <div className="coin-face">
          <div className="coin-face-front-outer"><img src={coin1} /></div>
          <div className="coin-face-front-inner"></div>
          <div className="coin-face-back-outer"><img src={coin1} /></div>
          <div className="coin-face-back-inner"></div>
        </div>
      </div>

      <div className="coin-container left-2">
        <div className="coin-side">
          <div></div>
        </div>
        <div className="coin-face">
          <div className="coin-face-front-outer"><img src={coin2} /></div>
          <div className="coin-face-front-inner"></div>
          <div className="coin-face-back-outer"><img src={coin2} /></div>
          <div className="coin-face-back-inner"></div>
        </div>
      </div>

      <div className="coin-container left-3">
        <div className="coin-side">
          <div></div>
        </div>
        <div className="coin-face">
          <div className="coin-face-front-outer"><img src={coin3} /></div>
          <div className="coin-face-front-inner"></div>
          <div className="coin-face-back-outer"><img src={coin3} /></div>
          <div className="coin-face-back-inner"></div>
        </div>
      </div>

      <div className="coin-container left-4">
        <div className="coin-side">
          <div></div>
        </div>
        <div className="coin-face">
          <div className="coin-face-front-outer"><img src={coin4} /></div>
          <div className="coin-face-front-inner"></div>
          <div className="coin-face-back-outer"><img src={coin4} /></div>
          <div className="coin-face-back-inner"></div>
        </div>
      </div>

      <div className="coin-container right-1">
        <div className="coin-side">
          <div></div>
        </div>
        <div className="coin-face">
          <div className="coin-face-front-outer"><img src={coin5} /></div>
          <div className="coin-face-front-inner"></div>
          <div className="coin-face-back-outer"><img src={coin5} /></div>
          <div className="coin-face-back-inner"></div>
        </div>
      </div>

      <div className="coin-container right-2">
        <div className="coin-side">
          <div></div>
        </div>
        <div className="coin-face">
          <div className="coin-face-front-outer"><img src={coin6} /></div>
          <div className="coin-face-front-inner"></div>
          <div className="coin-face-back-outer"><img src={coin6} /></div>
          <div className="coin-face-back-inner"></div>
        </div>
      </div>

      <div className="coin-container right-3">
        <div className="coin-side">
          <div></div>
        </div>
        <div className="coin-face">
          <div className="coin-face-front-outer"><img src={coin7} /></div>
          <div className="coin-face-front-inner"></div>
          <div className="coin-face-back-outer"><img src={coin7} /></div>
          <div className="coin-face-back-inner"></div>
        </div>
      </div>

      <div className="coin-container right-4">
        <div className="coin-side">
          <div></div>
        </div>
        <div className="coin-face">
          <div className="coin-face-front-outer"><img src={coin8} /></div>
          <div className="coin-face-front-inner"></div>
          <div className="coin-face-back-outer"><img src={coin8} /></div>
          <div className="coin-face-back-inner"></div>
        </div>
      </div>

      <div className="hero-text-container">
        <div className="hero-title">
          <span className="hero-title-primary">Tip your Streamers</span>
          <span className="hero-title-tertiary">
            with only <span className="hero-emphasis">1% fee</span>
          </span>
        </div>
        
        <div className="cta-container" style={{ marginTop: 'min(3rem, 6vh)' }}>
          <a href='https://app.zlend.fi/' target="_blank" rel="noopener noreferrer" className="cta-link">Add the browser extension
          <svg className="cta-arrow" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M2560 4095 l0 -255 255 0 255 0 0 -255 0 -255 255 0 255 0 0 -255 0 -255 -1532 -2 -1533 -3 0 -255 0 -255 1533 -3 1532 -2 0 -255 0 -255 -255 0 -255 0 0 -255 0 -255 -255 0 -255 0 0 -255 0 -255 255 0 255 0 0 255 0 255 255 0 255 0 0 255 0 255 258 2 257 3 3 252 2 253 253 2 252 3 0 255 0 255 -252 3 -253 2 -2 253 -3 252 -257 3 -258 2 0 255 0 255 -255 0 -255 0 0 255 0 255 -255 0 -255 0 0 -255z"/></g></svg>
          </a>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;