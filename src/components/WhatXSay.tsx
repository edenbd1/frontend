import React from 'react';

import '../styles/whatx.css';

interface TweetCardProps {
  handle: string;
  text: string;
  date: string;
}

const TweetCard: React.FC<TweetCardProps> = ({ handle, text, date }) => {
  return (
    <div className="tweet-card">
      <div className="tweet-header">
        <span className="tweet-handle">@{handle}</span>
        <span className="tweet-date">{date}</span>
      </div>
      <p className="tweet-text">{text}</p>
    </div>
  );
};

const WhatXSay: React.FC = () => {
  const tweets: TweetCardProps[] = [
    { handle: 'streamer_alex', text: 'WaveTip makes tipping so smooth. 1% fee is a game changer.', date: '2d' },
    { handle: 'crypto_fan', text: 'RLUSD tips land instantly. No chargebacks. Love it.', date: '4d' },
    { handle: 'dev_zoe', text: 'The extension UX is clean and simple. My chat loves it.', date: '1w' },
  ];

  return (
    <section className="whatx-section" id="WhatXSay">
      <div className="whatx-container">
        <h2 className="whatx-title">What X <span className="strike">Twitter</span> say</h2>
        <div className="tweet-grid">
          {tweets.map((t) => (
            <TweetCard key={t.handle + t.date} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatXSay;


