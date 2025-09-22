import React from 'react';

import '../styles/whatx.css';

import easyaApp from '../assets/images/easya_app.jpg';
import krkmu from '../assets/images/krkmu_.jpg';
import digitalassetbuy from '../assets/images/digitalassetbuy.jpg';
import domKwok from '../assets/images/dom_kwok.jpg';

interface TweetCardProps {
  href: string;
  avatarSrc: string;
  authorName: string;
  authorHandle: string;
  text: string;
  date: string;
}

const TweetCard: React.FC<TweetCardProps> = ({ href, avatarSrc, authorName, authorHandle, text, date }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="tweet-card">
      <div className="tweet-header">
        <div className="tweet-avatar">
          <img src={avatarSrc} alt={authorName} />
        </div>
        <div className="tweet-author">
          <span className="author-name">{authorName}</span>
          <span className="author-handle">@{authorHandle}</span>
        </div>
        <div className="tweet-platform" aria-hidden>
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      </div>
      <div className="tweet-content">
        <p className="tweet-text">{text}</p>
      </div>
      <div className="tweet-footer">
        <div className="tweet-stats">
          <span className="tweet-date">{date}</span>
        </div>
      </div>
    </a>
  );
};

const WhatXSay: React.FC = () => {
  const tweets: TweetCardProps[] = [
    {
      href: 'https://x.com/easya_app/status/1933063715508924907',
      avatarSrc: easyaApp,
      authorName: 'EasyA 🤳📱',
      authorHandle: 'easya_app',
      text: 'WaveTip makes tipping your favourite online creators faster and fairer with $RLUSD 🎮',
      date: '9:27 AM · Jun 12, 2025 · 36.5K Views',
    },
    {
      href: 'https://x.com/krkmu_/status/1933769235173683225',
      avatarSrc: krkmu,
      authorName: 'Max',
      authorHandle: 'krkmu_',
      text: '🥇 Meet @wavetip_fi, the 1st place winner of the EasyA x Ripple APEX Hackathon. A browser extension to tip your favorite Twitch streamers in $RLUSD — with just 1% fees. No middlemen.',
      date: '8:11 AM · Jun 14, 2025 · 25.5K Views',
    },
    {
      href: 'https://x.com/digitalassetbuy/status/1933466270609117522',
      avatarSrc: digitalassetbuy,
      authorName: 'Digital Asset Investor',
      authorHandle: 'digitalassetbuy',
      text: "Who remembers the XRP Tipbot? Always wondered why such a good idea was never done again. I bet it's coming.",
      date: '12:07 PM · Jun 13, 2025 · 23.7K Views',
    },
    {
      href: 'https://x.com/dom_kwok/status/1937155767918100630',
      avatarSrc: domKwok,
      authorName: 'Dom | EasyA',
      authorHandle: 'dom_kwok',
      text: 'the winners of our @easya_app x @ripple hackathon are revolutionising trillion dollar industries, all on the #XRP Ledger. this is exactly what crypto needs right now.',
      date: '4:28 PM · Jun 23, 2025 · 11.2K Views',
    },
  ];

  return (
    <section className="whatx-section" id="WhatXSay">
      <div className="whatx-container">
        <h2 className="whatx-title">What X <span className="strike">Twitter</span> say</h2>
        <div className="tweets-row">
          {tweets.map((t, idx) => (
            <TweetCard key={`${t.authorHandle}-${idx}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatXSay;


