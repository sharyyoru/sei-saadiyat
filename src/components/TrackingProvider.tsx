'use client';

import { useEffect } from 'react';
import { usePageTracking, useScrollTracking } from '@/hooks/useTracking';

interface TrackingProviderProps {
  children: React.ReactNode;
}

export function TrackingProvider({ children }: TrackingProviderProps) {
  usePageTracking();
  useScrollTracking();

  return <>{children}</>;
}
