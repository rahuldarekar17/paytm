import {
  actions,
  actionOffsets,
  blueOffsets,
  brand,
  colours,
  materials,
  mono,
  overlays,
  surfacePrimitives,
} from './colorPrimitives';

export type ThemeMode = 'light' | 'dark';

export interface ThemedColor {
  light: string;
  dark: string;
}

// Text, icon, border, background, surface, overlay, brand, and glass
// semantics as observed in the Figma semantics tables.

export const text = {
  // Figma: Text/Neutral Strong
  neutralStrong: {
    light: mono[860],
    dark: mono[50],
  },
  // Figma: Text/Neutral Moderate
  neutralModerate: {
    light: mono[800],
    dark: mono[175],
  },
  // Figma: Text/Neutral Medium
  neutralMedium: {
    light: mono[600],
    dark: mono[550],
  },
  // Figma: Text/Neutral Weak (in table, same as surface/border soft neutrals)
  neutralWeak: {
    light: mono[400],
    dark: mono[800],
  },
  // Figma: Text/Neutral Inverse
  neutralInverse: {
    light: mono[50],
    dark: mono[860],
  },
  // Figma: Text/Title Text
  titleText: {
    light: mono[860],
    dark: mono[175],
  },
  // Figma (from type node vars): Text/Primary Strong
  primaryStrong: {
    light: actions.primary,
    dark: actions.primaryAltLight,
  },
  // Button-specific text tokens
  filledText: {
    light: mono[50],
    dark: mono[50],
  },
  tonalText: {
    light: actions.primary,
    dark: actions.primaryAltLight,
  },
  linkNormal: {
    light: actions.primary,
    dark: actions.primaryAltLight,
  },
  linkPressed: {
    light: actionOffsets.primaryShade,
    dark: actions.primaryAltLight,
  },
  linkDisabled: {
    light: mono[400],
    dark: mono[800],
  },
  strokeNormal: {
    light: actions.primary,
    dark: actions.primaryAltLight,
  },
  strokePressed: {
    light: actionOffsets.primaryShade,
    dark: actions.primaryAltLight,
  },
  strokeDisabled: {
    light: mono[400],
    dark: mono[800],
  },
} as const satisfies Record<string, ThemedColor>;

export const icon = {
  // Example from type node: Icon/Primary Strong
  primaryStrong: {
    light: actions.primary,
    dark: actions.primaryAltLight,
  },
  // Example: Icon/Icon Dark - High Emphasis
  darkHighEmphasis: {
    light: '#101010',
    dark: '#101010',
  },
} as const satisfies Record<string, ThemedColor>;

export const border = {
  // Figma: Border/Neutral Strong
  neutralStrong: {
    light: mono[175],
    dark: mono[800],
  },
  // Figma: Border/Neutral Medium
  neutralMedium: {
    light: mono[100],
    dark: mono[850],
  },
  // Figma: Border/Neutral Weak
  neutralWeak: {
    light: mono[90],
    dark: mono[860],
  },
  // Primary / status borders mirror action strong tokens
  primaryStrong: {
    light: actions.primary,
    dark: actions.primaryAltLight,
  },
  // Button-specific border tokens
  strokeNormal: {
    light: actions.primary,
    dark: actions.primaryAltLight,
  },
  strokePressed: {
    light: actionOffsets.primaryShade,
    dark: actions.primaryAltLight,
  },
  strokeDisabled: {
    light: mono[400],
    dark: mono[800],
  },
  positiveStrong: {
    light: actions.positive,
    dark: actions.positive,
  },
  noticeStrong: {
    light: actions.notice,
    dark: actions.notice,
  },
  negativeStrong: {
    light: actions.negative,
    dark: actions.negative,
  },
} as const satisfies Record<string, ThemedColor>;

export const background = {
  // Figma: Background/Offset 1
  offset1: {
    light: blueOffsets.blue100,
    dark: blueOffsets.blue890,
  },
  // Figma: Background/Offset 2
  offset2: {
    light: blueOffsets.blue150,
    dark: blueOffsets.blue850,
  },
  // Figma: Background/Offset 3
  offset3: {
    light: blueOffsets.blue200,
    dark: blueOffsets.blue800,
  },
  // Figma: Background/Neutral Inverse
  neutralInverse: {
    light: mono[50],
    dark: mono[875],
  },
  // Button-specific background tokens
  // Filled button backgrounds
  filledNormal: {
    light: actions.primary,
    dark: actions.primary,
  },
  filledPressed: {
    light: actionOffsets.primaryShade,
    dark: actionOffsets.primaryShade,
  },
  filledDisabled: {
    light: mono[400],
    dark: mono[800],
  },
  // Primary weak background (used for selected chip gradient)
  primaryWeak: {
    light: actionOffsets.primaryTint,
    dark: actionOffsets.primaryShade,
  },
  // Tonal button backgrounds
  tonalNormal: {
    light: actionOffsets.primaryTint,
    dark: actionOffsets.primaryShade,
  },
  tonalPressed: {
    light: blueOffsets.blue200,
    dark: blueOffsets.blue800,
  },
  tonalDisabled: {
    light: blueOffsets.blue100,
    dark: blueOffsets.blue890,
  },
} as const satisfies Record<string, ThemedColor>;

export const surface = {
  // Figma: Surface/Level 1
  level1: {
    light: surfacePrimitives.level1,
    dark: mono[875],
  },
  // Figma: Surface/Level 2
  level2: {
    light: mono[75],
    dark: mono[860],
  },
  // Figma: Surface/Level 3
  level3: {
    light: mono[90],
    dark: mono[850],
  },
  // Figma: Surface/Level 4
  level4: {
    light: blueOffsets.background,
    dark: blueOffsets.backgroundAlt,
  },
} as const satisfies Record<string, ThemedColor>;

export const overlay = {
  // Figma: Overlay/Strong
  strong: {
    light: overlays[600],
    dark: overlays[800],
  },
  // Figma: Overlay/Weak
  weak: {
    light: overlays[200],
    dark: overlays[400],
  },
} as const satisfies Record<string, ThemedColor>;

// Semantic re-exports of hue and brand palettes.

export const semanticColours = {
  red: {
    light: colours.red,
    dark: colours.red,
  },
  orange: {
    light: colours.orange,
    dark: colours.orange,
  },
  yellow: {
    light: colours.yellow,
    dark: colours.yellow,
  },
  green: {
    light: colours.green,
    dark: colours.green,
  },
  mint: {
    light: colours.mint,
    dark: colours.mint,
  },
  teal: {
    light: colours.teal,
    dark: colours.teal,
  },
  cyan: {
    light: colours.cyan,
    dark: colours.cyan,
  },
  cyanAlt: {
    light: colours.cyanAlt,
    dark: colours.cyanAlt,
  },
  blue: {
    light: colours.blue,
    dark: colours.blue,
  },
  indigo: {
    light: colours.indigo,
    dark: colours.indigo,
  },
  purple: {
    light: colours.purple,
    dark: colours.purple,
  },
  pink: {
    light: colours.pink,
    dark: colours.pink,
  },
  pinkAlt: {
    light: colours.pinkAlt,
    dark: colours.pinkAlt,
  },
  brown: {
    light: colours.brown,
    dark: colours.brown,
  },
} as const satisfies Record<string, ThemedColor>;

export const brandColours = {
  brandBlue: {
    light: brand.brandBlue,
    dark: brand.brandBlue,
  },
  brandDarkBlue: {
    light: brand.brandDarkBlue,
    dark: brand.brandDarkBlue,
  },
  brandWhite: {
    light: brand.brandWhite,
    dark: brand.brandWhite,
  },
  brandSemiWhite: {
    light: brand.brandSemiWhite,
    dark: brand.brandSemiWhite,
  },
} as const satisfies Record<string, ThemedColor>;

export const glass = {
  surfaceL1: {
    light: materials['00_8'],
    dark: '#0000001A', // ~10% black, as in Figma table
  },
  surfaceL2: {
    light: '#FFFFFF00', // 0% white (transparent)
    dark: materials.ff7,
  },
  surfaceL3: {
    light: materials.fa70,
    dark: materials['00_80'],
  },
  surfaceL4: {
    light: mono[75],
    dark: mono[860],
  },
  tintedL1: {
    light: actions.primary,
    dark: actions.primaryAltLight,
  },
  tintedL2: {
    light: materials['99_100'],
    dark: materials['99_100'],
  },
  tintedL3: {
    light: materials.ff100,
    dark: materials.ff100,
  },
  tintedL4: {
    light: materials.ff25,
    dark: materials.ff25,
  },
  clearL1: {
    light: materials['00_8'],
    dark: materials['00_8'],
  },
  clearL2: {
    light: materials.ff7,
    dark: materials.ff7,
  },
} as const satisfies Record<string, ThemedColor>;

export const semanticColors = {
  text,
  icon,
  border,
  background,
  surface,
  overlay,
  semanticColours,
  brandColours,
  glass,
} as const;

