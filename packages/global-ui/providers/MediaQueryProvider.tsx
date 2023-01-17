import React from 'react';

import { useMedia } from '../hooks';

interface MediaQueryContextValue {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

export const MediaQueryContext = React.createContext<MediaQueryContextValue>(
  {} as MediaQueryContextValue
);

export const MediaQueryProvider = ({ children }: { children: React.ReactNode }) => {
  // Media queries from theme [82em, 52em, 40em] 1312px, 832px, 640px
  const isMobile = useMedia<boolean>(['(max-width: 576.98px)'], [true], false);
  const isTablet = useMedia<boolean>(['(max-width: 768.98px)'], [true], false);
  const isDesktop = useMedia<boolean>(['(min-width:769px)'], [true], false);

  const value: MediaQueryContextValue = {
    isDesktop,
    isTablet,
    isMobile
  };

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>;
};
