import React, { useState, useEffect } from 'react';
import '../styles/privacyAterms.css';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-10% 0px -80% 0px'
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="table-of-contents">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={activeSection === section.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section.id);
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              {section.title.split('.')[0]}.
              <span> {section.title.split('.').slice(1).join('.').trim()}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SITE_NAME = 'WaveTip';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'collection', title: '2. Information We Collect' },
  { id: 'usage', title: '3. How We Use Information' },
  { id: 'extension-data', title: '4. Browser Extension Data' },
  { id: 'sharing', title: '5. Sharing & Disclosure' },
  { id: 'security', title: '6. Data Security' },
  { id: 'choices', title: '7. Your Choices & Rights' },
  { id: 'cookies', title: '8. Cookies & Tracking' },
  { id: 'changes', title: '9. Updates to This Policy' },
  { id: 'contact', title: '10. Contact' }
];

const PrivacyPage: React.FC = () => {
  return (
    <div className="content-page">
      <TableOfContents sections={sections} />
      <div className="container">
        <div className="content-header">
          <h1>Privacy Policy</h1>
        </div>
        <div className="content-body">
          <section id="introduction">
            <h2><span className="section-number">1.</span> Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how {SITE_NAME} (the browser extension,
              waitlist form, and related websites) collects, uses, and protects information when you interact with us.
            </p>
            <p>
              By installing the {SITE_NAME} extension, visiting our site, or joining the waitlist, you agree to the
              practices described below. If you do not agree, please discontinue use of our services.
            </p>
          </section>
          
          <section id="collection">
            <h2><span className="section-number">2.</span> Information Collection</h2>
            <p>
              {SITE_NAME} is designed to minimize data collection. We gather the following categories of information:
            </p>
            <ul>
              <li><strong>Account & Waitlist Data:</strong> Email address, social handles, and preferences submitted through forms such as our waitlist on Tally.</li>
              <li><strong>Usage Information:</strong> Aggregated analytics about button clicks, page views, and extension events, collected to understand feature adoption.</li>
              <li><strong>Device & Technical Data:</strong> Browser type, operating system, referral URLs, and language settings used to optimize compatibility.</li>
              <li><strong>Wallet Metadata:</strong> Public wallet addresses and transaction hashes required to complete RLUSD tipping transactions.</li>
              <li><strong>Support Correspondence:</strong> Messages and attachments you send to our support channels.</li>
            </ul>
            <p>
              We prioritize privacy and collect only what is necessary to provide and improve our services.
            </p>
          </section>
          
          <section id="usage">
            <h2><span className="section-number">3.</span> How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>Operating the {SITE_NAME} extension and processing RLUSD tipping transactions.</li>
              <li>Providing customer support and responding to your inquiries.</li>
              <li>Sending product updates, beta invitations, and marketing communications (you can opt out at any time).</li>
              <li>Improving functionality, safety, and performance of the extension and website.</li>
              <li>Detecting, preventing, and investigating fraud, abuse, or security incidents.</li>
            </ul>
          </section>
          
          <section id="extension-data">
            <h2><span className="section-number">4.</span> Browser Extension Data</h2>
            <p>
              The {SITE_NAME} extension stores minimal information locally on your device, including your preferred
              settings and recent tipping history for convenience. Wallet credentials are never collected or stored by us.
            </p>
            <p>
              Transactions are executed on the XRP Ledger (XRPL). Transaction details such as wallet addresses and
              RLUSD amounts are recorded on-chain and governed by the XRPL’s public ledger rules.
            </p>
          </section>
          
          <section id="sharing">
            <h2><span className="section-number">5.</span> Sharing & Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your information to third parties for marketing or 
              advertising purposes. Information may be shared in the following circumstances:
            </p>
            <ul>
              <li>With infrastructure providers (for example, analytics, hosting, payment partners) who support our operations under confidentiality obligations.</li>
              <li>When required to comply with applicable laws, regulations, or legal processes.</li>
              <li>To protect the rights, property, or safety of {SITE_NAME}, our users, or the public.</li>
              <li>In connection with a merger, acquisition, or sale of assets, provided appropriate safeguards are in place.</li>
            </ul>
          </section>
          
          <section id="security">
            <h2><span className="section-number">6.</span> Data Security</h2>
            <p>
              We implement technical and organizational safeguards to protect your information, including encryption
              of data in transit, strict access controls, and routine security reviews.
            </p>
            <p>
              As a non-custodial service, we never store your private keys or seed phrases. We recommend maintaining
              up-to-date security practices on your devices and wallets.
            </p>
          </section>
          
          <section id="choices">
            <h2><span className="section-number">7.</span> Your Choices & Rights</h2>
            <p>You can manage your information in several ways:</p>
            <ul>
              <li>Update or remove your email address from the waitlist by following unsubscribe links in our emails.</li>
              <li>Disconnect your wallet from the {SITE_NAME} extension at any time.</li>
              <li>Configure your browser to limit cookies or local storage.</li>
              <li>Contact us to request access, correction, or deletion of personal data we hold about you.</li>
            </ul>
            <p>
              Depending on your jurisdiction, additional data protection rights may apply. We will honor valid requests
              in accordance with applicable law.
            </p>
          </section>
          
          <section id="cookies">
            <h2><span className="section-number">8.</span> Cookies & Tracking</h2>
            <p>
              {SITE_NAME} uses cookies, local storage, and similar technologies to remember preferences, authenticate
              sessions, and gather usage analytics. You can control cookies through your browser settings, though
              disabling them may affect functionality.
            </p>
          </section>

          <section id="changes">
            <h2><span className="section-number">9.</span> Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Material changes will be announced through the extension,
              website, or email. The “last updated” date reflects the most recent revision.
            </p>
            <p>
              Continued use of {SITE_NAME} after updates become effective constitutes acceptance of the revised Policy.
            </p>
          </section>
          
          <section id="contact">
            <h2><span className="section-number">10.</span> Contact</h2>
            <p>
              Questions about this Privacy Policy can be sent via the Support tab in the {SITE_NAME} extension or by
              emailing <a href="mailto:contact@wavetip.fi">contact@wavetip.fi</a>.
            </p>
          </section>
          
          <div className="content-disclaimer">
            {SITE_NAME} is a non-custodial tipping experience built for Twitch creators and fans. Wallets remain under
            your control, and all RLUSD transfers occur on the XRP Ledger. Always verify recipient details before
            completing a transaction.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage; 