import React from 'react';

const Waitlist: React.FC = () => {
  const handleWaitlistClick = () => {
    window.open('https://tally.so/r/wQaGEl', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="waitlist-section">
      <div className="waitlist-container">
        <div className="waitlist-content">
          <h2 className="waitlist-title">Ready to Revolutionize Twitch Tipping?</h2>
          <p className="waitlist-description">
            Join hundreds of creators who are already on the waitlist for the future of content monetization.
          </p>
          <button
            className="waitlist-button"
            onClick={handleWaitlistClick}
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
