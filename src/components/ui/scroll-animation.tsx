"use client";

import { ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

export function ScrollAnimation({ children, className = '' }: ScrollAnimationProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`${inView ? 'animate-in fade-in slide-in-from-bottom-4 duration-600' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}
