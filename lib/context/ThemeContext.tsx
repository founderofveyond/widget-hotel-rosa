'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { HotelTheme } from '../data/types';

interface ThemeContextType {
  theme: HotelTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: HotelTheme;
}) {
  useEffect(() => {
    // Load Google Fonts if specified
    if (theme.fonts.bodyUrl) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = theme.fonts.bodyUrl;
      document.head.appendChild(link);
    }
    
    if (theme.fonts.headingUrl && theme.fonts.headingUrl !== theme.fonts.bodyUrl) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = theme.fonts.headingUrl;
      document.head.appendChild(link);
    }

    // Set CSS variables
    const root = document.documentElement;
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-primary-hover', theme.colors.primaryHover);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-background-alt', theme.colors.backgroundAlt);
    root.style.setProperty('--color-text', theme.colors.text);
    root.style.setProperty('--color-text-muted', theme.colors.textMuted);
    root.style.setProperty('--color-border', theme.colors.border);
    root.style.setProperty('--font-body', theme.fonts.body);
    root.style.setProperty('--font-heading', theme.fonts.heading);
    root.style.setProperty('--radius-card', `${theme.borderRadius.card}px`);
    root.style.setProperty('--radius-button', `${theme.borderRadius.button}px`);
    root.style.setProperty('--radius-input', `${theme.borderRadius.input}px`);

    return () => {
      // Cleanup if needed
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}



