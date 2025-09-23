import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import '../styles/footer.css';
import logoText from '../assets/images/logo_text.svg';

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logoText} className="footer-logo" />
            <div className="footer-description">
              <p>Making crypto tipping the default payment method for real-time creator monetization. Built on the XRP Ledger, it enables instant, low-cost, and secure payments directly on Twitch streams.</p>
            </div>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/wavetip/" className="social-link" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://x.com/wavetip_fi" className="social-link" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="https://github.com/WaveTip" className="social-link" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-right-section">
              <p>Ressources</p>
              <ul>
                <li><a href="/#Home">Home</a></li>
                <li><a href="/#Demo">Demo</a></li>
                <li><a href="/#FAQ">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-right-section">
              <p>Ecosystem</p>
              <ul>
                <li><a href="https://ripple.com/solutions/stablecoin/?qgad=730464058942&qgterm=ripple%20payment%20network&utm_medium=ppc&utm_source=google&utm_term=ripple%20payment%20network&utm_campaign=Search+-+EU+-+Payments+-+Brand&hsa_acc=4920537092&hsa_cam=22162329059&hsa_grp=176996728707&hsa_ad=730464058942&hsa_src=g&hsa_tgt=kwd-968362428955&hsa_kw=ripple%20payment%20network&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=22162329059&gbraid=0AAAAADRLBr-22gtzjYpuQWLy5dR4ctahx&gclid=CjwKCAjwisnGBhAXEiwA0zEOR02eSm05dvSguTGb9J6hXxND53y4INXH-EVFw1lRj6v59XnKUZw9JxoCxCMQAvD_BwE" target="_blank" rel="noopener noreferrer">RLUSD</a></li>
                <li><a href="https://xrpl.org/" target="_blank" rel="noopener noreferrer">XRP Ledger</a></li>
                <li><a href="https://web3auth.io/" target="_blank" rel="noopener noreferrer">Web3Auth</a></li>
              </ul>
            </div>
            <div className="footer-right-section">
              <p>Company</p>
              <ul>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
                <li><a href="mailto:contact@wavetip.fi">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
