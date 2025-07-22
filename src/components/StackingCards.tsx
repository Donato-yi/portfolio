/**
 * Stacking cards component for work experience
 * Creates a smooth card stacking effect as user scrolls
 */
import React, { useRef, useEffect, useState, ReactNode } from 'react';

interface StackingCard {
  id: number;
  content: ReactNode;
}

interface StackingCardsProps {
  cards: StackingCard[];
  className?: string;
}

const StackingCards: React.FC<StackingCardsProps> = ({ cards, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress when container is in view
      const startPoint = windowHeight;
      const endPoint = -containerHeight;
      const totalDistance = startPoint - endPoint;
      const currentDistance = startPoint - containerTop;
      
      const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only show the top card fully, others are stacked below
  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: `${cards.length * 100}vh` }}>
      <div className="sticky top-24 flex justify-center items-start h-[70vh]">
        {cards.map((card, index) => {
          // Calculate how much this card should be offset based on scroll
          const progress = scrollProgress * (cards.length - 1);
          const cardOffset = Math.max(0, progress - index);
          const isTop = Math.floor(progress) === index;
          const zIndex = cards.length - index;

          // Only the top card is fully visible, others are stacked below
          return (
            <div
              key={card.id}
              className="absolute w-full max-w-4xl left-1/2 -translate-x-1/2 transition-all duration-500 ease-out"
              style={{
                transform: `translateY(${cardOffset * 40}px) scale(${1 - cardOffset * 0.04})`,
                opacity: cardOffset < 1 ? 1 : 0,
                zIndex: zIndex,
                pointerEvents: isTop ? 'auto' : 'none',
              }}
            >
              {/* Add a solid background to ensure full coverage */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-0">
                {card.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackingCards;