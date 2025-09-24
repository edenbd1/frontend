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
  { id: 'eligibility', title: '2. Eligibility & Accounts' },
  { id: 'services', title: '3. Services Description' },
  { id: 'wallets', title: '4. Wallets & Transactions' },
  { id: 'fees', title: '5. Fees & Payments' },
  { id: 'conduct', title: '6. Acceptable Use' },
  { id: 'risks', title: '7. Risks & Disclaimers' },
  { id: 'liability', title: '8. Limitation of Liability' },
  { id: 'modifications', title: '9. Changes to Terms' },
  { id: 'governing-law', title: '10. Governing Law & Contact' }
];

const TermsPage: React.FC = () => {
  return (
    <div className="content-page">
      <TableOfContents sections={sections} />
      <div className="container">
        <div className="content-header">
          <h1>Terms of Service</h1>
        </div>
        <div className="content-body">
          <section id="introduction">
            <h2><span className="section-number">1.</span> Introduction</h2>
            <p>
              Welcome to {SITE_NAME}! These Terms of Service ("Terms") govern your access to and use of the
              {SITE_NAME} website, browser extension, and related services (collectively, the "Services").
            </p>
            <p>
              By installing the extension, creating an account, or using the Services, you agree to these Terms.
              If you do not agree, please discontinue use immediately.
            </p>
          </section>
          
          <section id="eligibility">
            <h2><span className="section-number">2.</span> Eligibility & Accounts</h2>
            <p>
              You must be of legal age in your jurisdiction to use {SITE_NAME}. By using the Services you confirm
              that you are not barred from accessing cryptocurrency products under applicable law and that all
              information you provide is accurate and complete.
            </p>
            <p>
              Certain features (such as joining the waitlist) may require providing an email or social handle. You
              are responsible for keeping this information current and secure.
            </p>
          </section>

          <section id="services">
            <h2><span className="section-number">3.</span> Services Description</h2>
            <p>
              {SITE_NAME} is a non-custodial tipping experience built on the XRP Ledger (XRPL) that allows:
            </p>
            <ul>
              <li>Viewers to tip Twitch streamers in RLUSD with low fees.</li>
              <li>Streamers to connect wallets, receive RLUSD, and track tipping activity.</li>
              <li>Community managers to manage campaigns and analytics within the extension.</li>
            </ul>
            <p>
              We may add or remove features as we iterate on the product roadmap.
            </p>
          </section>
          
          <section id="wallets">
            <h2><span className="section-number">4.</span> Wallets & Transactions</h2>
            <p>
              {SITE_NAME} integrates with third-party wallets to execute RLUSD transactions on XRPL. We never take
              custody of your funds, private keys, or seed phrases.
            </p>
            <p>
              You are solely responsible for safeguarding your wallet credentials and for verifying recipient
              details before confirming a transaction. Transactions on XRPL are irreversible once broadcast.
            </p>
          </section>
          
          <section id="fees">
            <h2><span className="section-number">5.</span> Fees & Payments</h2>
            <p>
              Tipping transactions executed through {SITE_NAME} incur a 1% service fee on the amount tipped, in
              addition to any network fees required by XRPL. Fees are disclosed at checkout and may change with prior
              notice.
            </p>
            <p>
              We may partner with third-party providers to offer on-ramp services. Any purchases made through those
              partners are subject to their own terms and fees.
            </p>
          </section>
          
          <section id="conduct">
            <h2><span className="section-number">6.</span> Acceptable Use</h2>
            <p>
              You agree not to use {SITE_NAME} to engage in illegal activities, money laundering, fraudulent tipping
              campaigns, or harassment of creators. We reserve the right to suspend or terminate access for violations
              of these Terms or applicable law.
            </p>
            <p>
              You are responsible for ensuring that use of our Services complies with Twitch’s terms and community
              guidelines.
            </p>
          </section>

          <section id="risks">
            <h2><span className="section-number">7.</span> Risks & Disclaimers</h2>
            <p>
              Using blockchain technology and digital assets involves risks, including price volatility, regulatory
              changes, smart contract vulnerabilities, and network outages. {SITE_NAME} does not guarantee the
              availability or value of RLUSD or any other asset.
            </p>
            <p>
              You acknowledge that you are responsible for understanding these risks and for complying with any
              applicable tax or reporting obligations.
            </p>
          </section>
          
          <section id="liability">
            <h2><span className="section-number">8.</span> Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {SITE_NAME}, its founders, and partners are not liable for
              indirect, incidental, consequential, or punitive damages, including lost profits, arising from your use
              of the Services.
            </p>
            <p>
              We provide the Services on an "as is" and "as available" basis without warranties of any kind, express or
              implied.
            </p>
          </section>
          
          <section id="modifications">
            <h2><span className="section-number">9.</span> Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes will be communicated via the extension,
              website, or email. The “last updated” date indicates when revisions take effect.
            </p>
            <p>
              Continued use of {SITE_NAME} after revised Terms are posted constitutes acceptance. If you do not agree
              to the changes, you must stop using the Services.
            </p>
          </section>
          
          <section id="governing-law">
            <h2><span className="section-number">10.</span> Governing Law & Contact</h2>
            <p>
              These Terms are governed by the laws applicable in your jurisdiction of residence, without regard to
              conflicts of law principles.
            </p>
            <p>
              Questions regarding these Terms can be directed to <a href="mailto:contact@wavetip.fi">contact@wavetip.fi</a>.
            </p>
          </section>
          
          <div className="content-disclaimer">
            Nothing in {SITE_NAME} constitutes financial, investment, or legal advice. Digital assets are volatile and
            may lose value. Always do your own research before engaging in tipping or purchasing RLUSD.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage; 