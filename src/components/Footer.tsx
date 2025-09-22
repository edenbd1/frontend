import React from 'react';

import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wave-separator">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="wave-svg"
        >
          <path
            d="
              M0,60
              Q120,0 240,60
              Q360,120 480,60
              Q600,0 720,60
              Q840,120 960,60
              Q1080,0 1200,60
              L1200,120
              L0,120
              Z"
            className="shape-fill wave-path"
          />
        </svg>
      </div>

      <div className="footer-content-wrapper">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img
                  src="/WaveTip Logo.webp"
                  alt="WaveTip"
                  className="logo-footer"
                />
              </div>
              <p>
                Making crypto tipping the default payment method for real-time
                creator monetization. Built on the XRPL for instant, secure
                payments.
              </p>
            </div>
            <div className="footer-section">
              <h4>Navigate</h4>
              <a href="#video">Demo</a>
              <a href="#roadmap">Roadmap</a>
              <a href="#highlights">Highlights</a>
            </div>
            <div className="footer-section">
              <h4>Ecosystem</h4>
              <a href="https://xrpl.org/" target="_blank" rel="noopener noreferrer">
                XRP Ledger
              </a>
              <a href="https://ripple.com/solutions/stablecoin/" target="_blank" rel="noopener noreferrer">
                RLUSD
              </a>
              <a href="https://web3auth.io" target="_blank" rel="noopener noreferrer">
                Web3Auth
              </a>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <a
                href="https://www.linkedin.com/company/wavetip/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="https://x.com/wavetip_fi" target="_blank" rel="noopener noreferrer">
                Twitter X
              </a>
              <a href="https://tally.so/r/wQaGEl" target="_blank" rel="noopener noreferrer">
                Waitlist
              </a>
            </div>
          </div>
          <div className="footer-bottom" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
