import React, { useEffect, useRef, useState } from 'react';

import '../styles/demo.css';
import demoVideo from '../assets/demo.mp4';
import posterImage from '../assets/images/miniature.jpg';

const Demo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const targetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animRef = useRef<number | null>(null);
  const lastClientPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const widgetSizeRef = useRef<{ width: number; height: number }>({ width: 40, height: 40 });

  const startAnim = () => {
    if (animRef.current != null) return;
    const tick = () => {
      const ease = 0.13; // slower trailing for visible follow
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * ease;
      setCursorPos({ x: currentRef.current.x, y: currentRef.current.y });
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
  };

  const startPlayback = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      await v.play();
      setHasStarted(true);
      setIsPlaying(true);
      setIsEnded(false);
      setShowWidget(false);
    } catch (_) {
      // ignore autoplay errors
    }
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = () => {
    if (!isPlaying) setShowWidget(true);
    startAnim();
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (isPlaying) return;
    lastClientPosRef.current = { x: e.clientX, y: e.clientY };
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = 0; // collé au curseur
    const offsetY = 0;
    const x = e.clientX - rect.left + offsetX;
    const y = e.clientY - rect.top + offsetY;
    // keep inside container bounds en tenant compte de la taille réelle du widget
    const clampedX = Math.min(Math.max(0, x), rect.width - widgetSizeRef.current.width);
    const clampedY = Math.min(Math.max(0, y), rect.height - widgetSizeRef.current.height);
    targetRef.current = { x: clampedX, y: clampedY };
    // initialize current position immediately to avoid lag on first move
    if (currentRef.current.x === 0 && currentRef.current.y === 0) {
      currentRef.current = { x: clampedX, y: clampedY };
      setCursorPos({ x: clampedX, y: clampedY });
    }
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    if (!isPlaying) setShowWidget(false);
    if (animRef.current != null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
  };

  const handleContainerClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const v = videoRef.current;
    if (!v) return;
    const clickedInsideVideo = v.contains(e.target as Node);
    // If click is inside the video and we haven't started yet, treat it as a start click
    if (clickedInsideVideo && !hasStarted) {
      if (isEnded) {
        v.currentTime = 0;
        setIsEnded(false);
      }
      void startPlayback();
      return;
    }
    // If click is inside the video after start, avoid double toggles and let native behavior occur
    if (clickedInsideVideo) {
      return;
    }
    if (isPlaying) {
      v.pause();
      setShowWidget(true);
      return;
    }
    if (isEnded) {
      v.currentTime = 0;
      setIsEnded(false);
    }
    void startPlayback();
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => {
      setIsPlaying(true);
      setShowWidget(false);
    };
    const onPause = () => {
      setIsPlaying(false);
      setShowWidget(true);
      startAnim();
    };
    const onEnded = () => {
      setIsPlaying(false);
      setIsEnded(true);
      setShowWidget(true);
      startAnim();
    };
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    v.addEventListener('ended', onEnded);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      v.removeEventListener('ended', onEnded);
      if (animRef.current != null) {
        cancelAnimationFrame(animRef.current);
        animRef.current = null;
      }
    };
  }, []);

  // Mesure la taille réelle du widget pour ajuster le clamp
  useEffect(() => {
    const measure = () => {
      if (floatingRef.current) {
        const r = floatingRef.current.getBoundingClientRect();
        widgetSizeRef.current = { width: r.width, height: r.height };
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
    };
  }, [showWidget]);

  // keep following the cursor on global mouse move and window scroll
  useEffect(() => {
    const onWindowMouseMove = (e: MouseEvent) => {
      lastClientPosRef.current = { x: e.clientX, y: e.clientY };
      if (isPlaying) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetRef.current = {
        x: Math.min(Math.max(0, x), rect.width - widgetSizeRef.current.width),
        y: Math.min(Math.max(0, y), rect.height - widgetSizeRef.current.height),
      };
    };
    const onWindowScroll = () => {
      if (isPlaying || !showWidget) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const { x: cx, y: cy } = lastClientPosRef.current;
      const x = cx - rect.left;
      const y = cy - rect.top;
      targetRef.current = {
        x: Math.min(Math.max(0, x), rect.width - widgetSizeRef.current.width),
        y: Math.min(Math.max(0, y), rect.height - widgetSizeRef.current.height),
      };
    };
    window.addEventListener('mousemove', onWindowMouseMove, { passive: true });
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onWindowMouseMove as any);
      window.removeEventListener('scroll', onWindowScroll as any);
    };
  }, [isPlaying, showWidget]);

  return (
    <section className="demo-section" id="Demo">
      <div
        className={`demo-container${!hasStarted ? ' demo-interactive' : ''}`}
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleContainerClick}
      >
        <div className="demo-player">
          <video ref={videoRef} className="demo-video" controls={hasStarted} playsInline preload="metadata" poster={posterImage}>
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {!isPlaying && showWidget && (
          <div
            className="floating-play"
            ref={floatingRef}
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
            aria-hidden
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden>
              <path d="M8 5V19L19 12L8 5Z" fill="#ffffff"/>
            </svg>
            <span>Play</span>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Demo;


