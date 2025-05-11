"use client";
import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationType = 'flyInBottom' | 'fadeIn' | 'flyInTop' | 'flyInLeft' | 'flyInRight';

interface AnimatedElementProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number; // milliseconds
  animationType?: AnimationType;
  duration?: number; // milliseconds
  triggerOnce?: boolean; // For scroll-triggered animations if IntersectionObserver is used later
}

export function AnimatedElement({
  children,
  className,
  as: Component = 'div',
  delay = 0,
  animationType = 'fadeIn',
  duration = 1000,
  triggerOnce = true, // Currently unused, for future scroll observer
  ...props
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationStyles = () => {
    switch (animationType) {
      case 'flyInBottom':
        return {
          initial: 'opacity-0 translate-y-10',
          animate: 'opacity-100 translate-y-0',
        };
      case 'flyInTop':
        return {
          initial: 'opacity-0 -translate-y-10',
          animate: 'opacity-100 translate-y-0',
        };
      case 'flyInLeft':
        return {
          initial: 'opacity-0 -translate-x-10',
          animate: 'opacity-100 translate-x-0',
        };
      case 'flyInRight':
        return {
          initial: 'opacity-0 translate-x-10',
          animate: 'opacity-100 translate-x-0',
        };
      case 'fadeIn':
      default:
        return {
          initial: 'opacity-0',
          animate: 'opacity-100',
        };
    }
  };

  const { initial, animate } = getAnimationStyles();

  return (
    <Component
      className={cn(
        'transition-all ease-out',
        isVisible ? animate : initial,
        className
      )}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  );
}
