import { semanticColors, ThemeMode } from './colorSemantics';
import { numberSemantics } from './numberTokens';
import { typography } from './typography';

// Re-export ThemeMode for convenience
export type { ThemeMode };

export interface Theme {
  mode: ThemeMode;
  color: {
    text: typeof semanticColors.text;
    icon: typeof semanticColors.icon;
    border: typeof semanticColors.border;
    background: typeof semanticColors.background;
    surface: typeof semanticColors.surface;
    overlay: typeof semanticColors.overlay;
    hues: typeof semanticColors.semanticColours;
    brand: typeof semanticColors.brandColours;
    glass: typeof semanticColors.glass;
  };
  number: typeof numberSemantics;
  typography: typeof typography;
}

function pickMode<T extends { light: string; dark: string }>(
  token: T,
  mode: ThemeMode,
): string {
  return mode === 'light' ? token.light : token.dark;
}

export function createTheme(mode: ThemeMode): Theme {
  return {
    mode,
    color: {
      // These keep the full themed structures; components can either
      // access the whole object or pick `light`/`dark` as needed.
      text: semanticColors.text,
      icon: semanticColors.icon,
      border: semanticColors.border,
      background: semanticColors.background,
      surface: semanticColors.surface,
      overlay: semanticColors.overlay,
      hues: semanticColors.semanticColours,
      brand: semanticColors.brandColours,
      glass: semanticColors.glass,
    },
    number: numberSemantics,
    typography,
  };
}

// Convenience helpers for React usage: resolve a specific semantic token
// to a concrete value given the current mode.

export const themeResolvers = {
  text(tokenKey: keyof typeof semanticColors.text, mode: ThemeMode): string {
    return pickMode(semanticColors.text[tokenKey], mode);
  },
  icon(tokenKey: keyof typeof semanticColors.icon, mode: ThemeMode): string {
    return pickMode(semanticColors.icon[tokenKey], mode);
  },
  border(
    tokenKey: keyof typeof semanticColors.border,
    mode: ThemeMode,
  ): string {
    return pickMode(semanticColors.border[tokenKey], mode);
  },
  background(
    tokenKey: keyof typeof semanticColors.background,
    mode: ThemeMode,
  ): string {
    return pickMode(semanticColors.background[tokenKey], mode);
  },
  surface(
    tokenKey: keyof typeof semanticColors.surface,
    mode: ThemeMode,
  ): string {
    return pickMode(semanticColors.surface[tokenKey], mode);
  },
  overlay(
    tokenKey: keyof typeof semanticColors.overlay,
    mode: ThemeMode,
  ): string {
    return pickMode(semanticColors.overlay[tokenKey], mode);
  },
  glass(tokenKey: keyof typeof semanticColors.glass, mode: ThemeMode): string {
    return pickMode(semanticColors.glass[tokenKey], mode);
  },
  brandColours(
    tokenKey: keyof typeof semanticColors.brandColours,
    mode: ThemeMode,
  ): string {
    return pickMode(semanticColors.brandColours[tokenKey], mode);
  },
};

