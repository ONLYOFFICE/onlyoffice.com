import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

interface LazyBackgroundProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
}

const StyledDiv = styled.div<{ $loaded: boolean; $backgroundImage: string }>`
  background-image: ${props => props.$loaded ? `url(${props.$backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.3s ease;
  opacity: ${props => props.$loaded ? 1 : 0};
`;

export const LazyBackground = ({ src, className, children }: LazyBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
  }, [isVisible, src]);

  return (
    <StyledDiv
      ref={divRef}
      className={className}
      $loaded={isLoaded}
      $backgroundImage={src}
    >
      {children}
    </StyledDiv>
  );
};
