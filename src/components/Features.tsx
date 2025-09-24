import React from 'react';

interface IFeature {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
}

const FEATURES_LIST: IFeature[] = [
  {
    id: 'foundation',
    title: 'Foundation & Hackathons',
    description: 'Core development and winning major hackathons',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'mvp-beta',
    title: 'MVP & Beta Launch',
    description: 'MVP release on XRPL, followed by beta launch with waitlist system',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'mainnet-launch',
    title: 'Mainnet Launch',
    description: 'Optimized platform ready for mass adoption & market growth',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 'global-scale',
    title: 'Global Scale',
    description: 'International rollout and premium features',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
];

import '../styles/features.css';

const Features: React.FC = () => {
  return (
    <section className="features-section" id="Perks">
      <div className="features-container">
        <div className="features-container-inner">
          <div className="features-left-column">
            <p className="features-main-title">Roadmap</p>
            <p className="features-main-subtitle">Building the future of tipping</p>
          </div>
          <div className="features-right-column">
            {FEATURES_LIST.map((feature) => (
              <div key={feature.id}>
                <div className="feature-video">
                  <div className="play-button" />
                </div>
                <h3 className="feature-item-title">{feature.title}</h3>
                <p className="feature-item-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;