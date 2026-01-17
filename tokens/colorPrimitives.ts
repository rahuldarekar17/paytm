// Color primitive tokens, mirroring Figma variable collections.
// Source: PML — DS25 Tokens (Glass) Figma file.

export const actions = {
  // Figma: Actions/Primary
  primary: '#1576DB',
  // Figma: Actions/Primary Alt Light (used as alt/hover in light mode)
  primaryAltLight: '#45A1FF',
  // Figma: Actions/Positive
  positive: '#32AC58',
  // Figma: Actions/Notice
  notice: '#FF8D28',
  // Figma: Actions/Negative
  negative: '#F43F4B',
} as const;

export const colours = {
  // Figma: Colours/*
  red: '#FF383C',
  orange: '#FF8D28',
  yellow: '#FFCC00',
  green: '#34C759',
  mint: '#00C8B3',
  teal: '#00C3D0',
  cyan: '#00C0E8',
  cyanAlt: '#3CD3FE',
  blue: '#0088FF',
  indigo: '#6155F5',
  purple: '#CB30E0',
  pink: '#FF6784',
  pinkAlt: '#FF2D55',
  brown: '#AC7F5E',
} as const;

export const mono = {
  // Figma: Mono/*
  875: '#202020',
  860: '#282828',
  850: '#303030',
  800: '#414244',
  600: '#7E7E7E',
  550: '#8B9C8C', // note: slightly greenish gray in Figma
  450: '#BFBFBF',
  400: '#CACACA',
  175: '#EBECEE',
  100: '#F5F5F5',
  90: '#FAFAFA',
  75: '#FDFDFD',
  50: '#FFFFFF',
} as const;

export const actionOffsets = {
  // Figma: Actions Offsets/*
  primaryTint: '#DFEDFF',
  primaryShade: '#104167',
  positiveTint: '#DBF0E2',
  positiveShade: '#06260B',
  noticeTint: '#FFF2CC',
  noticeShade: '#382808',
  negativeTint: '#FFD1D1',
  negativeShade: '#33080A',
  yellowTint: '#FFFAE5',
  yellowShade: '#1A1400',
} as const;

export const blueOffsets = {
  // Figma: Blue Offsets/*
  blue100: '#F5F8FA',
  blue150: '#ECF2F8',
  blue200: '#D8E7F7',
  blue800: '#313B45',
  blue850: '#383C40',
  blue890: '#262B30',
  background: '#F2F2F7',
  backgroundAlt: '#000000',
} as const;

export const overlays = {
  // Figma: Overlays/*
  800: '#101010E3',
  600: '#101010B2',
  400: '#10101063',
  200: '#10101021',
} as const;

export const brand = {
  // Figma: Brand/*
  brandBlue: '#00B8F5',
  brandDarkBlue: '#012A72',
  brandWhite: '#FFFFFF',
  brandSemiWhite: '#FFFFFF66',
} as const;

export const materials = {
  // Figma: Materials/*
  ff100: '#FFFFFF',
  ff25: '#FFFFFF40',
  ff7: '#FFFFFF12',
  '00_80': '#000000CC',
  '00_8': '#00000014',
  of100: '#0F0F0F',
  '99_100': '#999999',
  cc100: '#CCCCCC',
  fa70: '#FAFAFAB2',
} as const;

export const surfacePrimitives = {
  // Only explicit primitive from Figma: Surface/Level 1
  level1: '#FFFFFF',
} as const;

export type ColorHex = `${string}`;

