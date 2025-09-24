import React, { createContext, useContext, useMemo, useRef } from 'react';

interface CarouselProps {
  className?: string;
  children: React.ReactNode;
}

type CarouselCtx = {
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
  scrollNext: () => void;
  scrollPrev: () => void;
};

const Ctx = createContext<CarouselCtx | null>(null);

export const Carousel: React.FC<CarouselProps> = ({ className = '', children }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    const node = contentRef.current;
    if (!node) return;
    const item = node.querySelector<HTMLElement>('.ui-carousel-item');
    if (!item) return;
    const itemWidth = item.offsetWidth;
    const gap = parseFloat(getComputedStyle(node).columnGap || getComputedStyle(node).gap || '12');
    const amount = itemWidth + gap;
    const current = node.scrollLeft;
    const target = Math.round((current + dir * amount) / amount) * amount;
    node.scrollTo({ left: target, behavior: 'smooth' });
  };

  const value = useMemo<CarouselCtx>(() => ({
    contentRef,
    scrollNext: () => scrollByAmount(1),
    scrollPrev: () => scrollByAmount(-1),
  }), []);

  return (
    <div className={`ui-carousel ${className}`}>
      <Ctx.Provider value={value}>{children}</Ctx.Provider>
    </div>
  );
};

interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CarouselContent: React.FC<CarouselContentProps> = ({ className = '', children, ...rest }) => {
  const ctx = useContext(Ctx);
  return (
    <div ref={ctx?.contentRef ?? undefined} className={`ui-carousel-content ${className}`} {...rest}>
      {children}
    </div>
  );
};

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ className = '', children, ...rest }) => {
  return (
    <div className={`ui-carousel-item ${className}`} {...rest}>
      {children}
    </div>
  );
};

export const CarouselPrevious: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', ...rest }) => {
  const ctx = useContext(Ctx);
  return <button aria-label="Previous" className={`ui-carousel-prev ${className}`} onClick={ctx?.scrollPrev} {...rest}>‹</button>;
};

export const CarouselNext: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', ...rest }) => {
  const ctx = useContext(Ctx);
  return <button aria-label="Next" className={`ui-carousel-next ${className}`} onClick={ctx?.scrollNext} {...rest}>›</button>;
};


