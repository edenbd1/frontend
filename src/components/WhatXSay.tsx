import React from 'react';

import '../styles/whatx.css';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import easyaApp from '../assets/images/easya_app.jpg';
import krkmu from '../assets/images/krkmu_.jpg';
import digitalassetbuy from '../assets/images/digitalassetbuy.jpg';
import domKwok from '../assets/images/dom_kwok.jpg';

interface ReviewItem {
  href: string;
  avatarSrc: string;
  authorName: string;
  authorHandle: string;
  text: string;
  date: string;
}

const reviews: ReviewItem[] = [
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

const WhatXSay: React.FC = () => {
  return (
    <section className="whatx-section" id="WhatXSay">
      <div className="whatx-container">
        <h2 className="whatx-title">People are talking...</h2>
        <Carousel className="w-full max-w-5xl">
          <CarouselContent className="-ml-4">
            {reviews.map((r, idx) => (
              <CarouselItem key={idx} className="pl-4">
                <a href={r.href} target="_blank" rel="noopener noreferrer" className="tweet-card">
                  <Card>
                    <CardContent className="review-card">
                      <div className="tweet-content">
                        <p className="tweet-text">{r.text}</p>
                      </div>
                      <div className="tweet-footer">
                        <div className="tweet-author">
                          <span className="author-name">{r.authorName}</span>
                          <span className="author-handle">@{r.authorHandle}</span>
                          <span className="tweet-date">{r.date}</span>
                        </div>
                        <div className="tweet-avatar">
                          <img src={r.avatarSrc} alt={r.authorName} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default WhatXSay;


