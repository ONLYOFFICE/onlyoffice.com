import { forwardRef, useEffect, useRef } from 'react';
import { StyledLazyBackground } from './LazyBackgroundImage.styled';
import { ILazyBackgroundImage } from './LazyBackgroundImage.types';

export const LazyBackgroundImage = forwardRef<HTMLDivElement, ILazyBackgroundImage>(
  ({ 
    imageUrl, 
    placeholder = '/images/templates/events/play-icon.svg',
    className = '',
    position,
    size,
    ...props 
  }, ref) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!imageUrl) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => {
              if (elementRef.current) {
                elementRef.current.classList.add('image-loaded');
              }
            };
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, [imageUrl]);

    return (
      <StyledLazyBackground
        ref={elementRef}
        $imageUrl={imageUrl}
        $placeholder={placeholder}
        position={position}
        size={size}
        className={className}
        {...props}
      />
    );
  }
);
