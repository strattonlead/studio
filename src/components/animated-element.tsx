"use client";
import type { HTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type AnimationType =
  | 'flyInBottom'
  | 'fadeIn'
  | 'flyInTop'
  | 'flyInLeft'
  | 'flyInRight'
  | 'blurReveal'
  | 'slideUpMask';

interface AnimatedElementProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  animationType?: AnimationType;
  duration?: number;
  triggerOnce?: boolean;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function AnimatedElement({
  children,
  className,
  as: Component = 'div',
  delay = 0,
  animationType = 'fadeIn',
  duration = 800,
  triggerOnce = true,
  ...props
}: AnimatedElementProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) observer.unobserve(entry.target);
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, triggerOnce]);

  const getAnimationStyles = () => {
    switch (animationType) {
      case 'flyInBottom':
        return { initial: 'opacity-0 translate-y-10', animate: 'opacity-100 translate-y-0' };
      case 'flyInTop':
        return { initial: 'opacity-0 -translate-y-10', animate: 'opacity-100 translate-y-0' };
      case 'flyInLeft':
        return { initial: 'opacity-0 -translate-x-10', animate: 'opacity-100 translate-x-0' };
      case 'flyInRight':
        return { initial: 'opacity-0 translate-x-10', animate: 'opacity-100 translate-x-0' };
      case 'blurReveal':
        return { initial: 'opacity-0 blur-md translate-y-4', animate: 'opacity-100 blur-0 translate-y-0' };
      case 'slideUpMask':
        return { initial: 'opacity-0 translate-y-6', animate: 'opacity-100 translate-y-0' };
      case 'fadeIn':
      default:
        return { initial: 'opacity-0', animate: 'opacity-100' };
    }
  };

  const { initial, animate } = getAnimationStyles();

  const style: React.CSSProperties = reducedMotion
    ? {}
    : {
        transitionProperty: 'opacity, transform, filter, clip-path',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      };

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={cn(isVisible || reducedMotion ? animate : initial, className)}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
