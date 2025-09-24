export interface IFaqItem {
  id: string;
  question: string;
  answer: string;
  theme: string;
}

export const LANDING_FAQ_IDS: string[] = [
  'what-is-wavetip',
  'supported-browsers',
  'send-tip',
  'fees'
];

export const FAQ_ITEMS: IFaqItem[] = [
  {
    id: 'what-is-wavetip',
    question: 'What is WaveTip?',
    answer: 'WaveTip is a browser extension that lets you send tips directly to your favorite Twitch streamers with only 1% fees. Tips are sent in RLUSD, Ripple’s stablecoin.',
    theme: 'General'
  },
  {
    id: 'supported-browsers',
    question: 'Which browsers are supported?',
    answer: 'WaveTip is available on Google Chrome.',
    theme: 'General'
  },
  {
    id: 'send-tip',
    question: 'How do I send a tip to a streamer?',
    answer: 'Once you install the extension and connect your wallet, simply click the WaveTip icon on the streamer’s Twitch page and choose the amount you’d like to send.',
    theme: 'Usage'
  },
  {
    id: 'fees',
    question: 'What are the fees?',
    answer: 'WaveTip charges just 1% in fees, much lower than traditional solutions like Twitch Bits (up to 37%).',
    theme: 'Fees'
  },
  {
    id: 'why-rlusd',
    question: 'Why RLUSD instead of another currency?',
    answer: 'RLUSD is a USD-backed stablecoin issued by Ripple. It provides price stability, fast transactions, and very low costs.',
    theme: 'General'
  },
  {
    id: 'streamer-requirements',
    question: 'Do streamers need WaveTip to receive tips?',
    answer: 'Yes. Streamers need to connect their RLUSD wallet to WaveTip to receive tips. They can then withdraw or convert them into fiat.',
    theme: 'Usage'
  },
  {
    id: 'cash-out',
    question: 'How can streamers cash out their tips?',
    answer: 'RLUSD tips can be withdrawn to an external wallet, used within the Ripple ecosystem, or exchanged into crypto/fiat through a partner exchange.',
    theme: 'Usage'
  },
  {
    id: 'security',
    question: 'Is WaveTip secure?',
    answer: 'Yes. WaveTip uses secure, audited protocols and never stores your private keys. You stay in full control of your funds.',
    theme: 'Security'
  },
  {
    id: 'hidden-fees',
    question: 'Does WaveTip charge any hidden fees?',
    answer: 'No. Only the 1% service fee applies. No hidden charges.',
    theme: 'Fees'
  },
  {
    id: 'platform-support',
    question: 'Is WaveTip available outside Twitch?',
    answer: 'Currently, WaveTip is integrated only with Twitch, but we plan to expand to YouTube, Kick, and Trovo soon.',
    theme: 'Availability'
  },
  {
    id: 'need-crypto',
    question: 'Do I need crypto to use WaveTip?',
    answer: 'Not necessarily. You can purchase RLUSD directly from the extension using a credit card or via a partner exchange.',
    theme: 'Usage'
  },
  {
    id: 'support',
    question: 'How do I contact support?',
    answer: 'You can reach us through the Support tab in the extension or on our Discord community.',
    theme: 'Support'
  }
];