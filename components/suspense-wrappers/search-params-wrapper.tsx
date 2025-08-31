'use client';

import { Suspense, ReactNode } from 'react';

interface SearchParamsWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function SearchParamsWrapper({
  children,
  fallback,
}: SearchParamsWrapperProps) {
  return (
    <Suspense
      fallback={
        fallback || <div className="animate-pulse bg-muted h-10 rounded" />
      }
    >
      {children}
    </Suspense>
  );
}
