// Number tokens based on the Figma "Number Tokens Universal" tables.

// Primitive unit scale (Figma: Unit N)
export const units = {
  unit1: 2,
  unit2: 4,
  unit3: 6,
  unit4: 8,
  unit6: 12,
  unit7: 16,
  unit9: 24,
  unit10: 32,
  unit11: 48,
  unit12: 60,
  unitMax: 200,
} as const;

export type UnitKey = keyof typeof units;
export type UnitValue = (typeof units)[UnitKey];

// Semantic spacing tokens (Figma: Semantic Number Tokens / Spacing)
export const spacing = {
  spacing2: units.unit1, // Spacing - 2px
  spacing4: units.unit2, // Spacing - 4px
  spacing6: units.unit3, // Spacing - 6px
  spacing8: units.unit4, // Spacing - 8px
  spacing12: units.unit6, // Spacing - 12px
  spacing16CardDefault: units.unit7, // Spacing - 16px (Card Default)
  spacing24: units.unit9, // Spacing - 24px
  spacing32: units.unit10, // Spacing - 32px
  spacing48Sections: units.unit11, // Spacing - 48px (Sections)
  spacing60: units.unit12, // Spacing - 60px
} as const;

// Semantic radius tokens (Figma: Semantic Number Tokens / Radius)
export const radius = {
  radius4Badges: units.unit2, // Radius - 4px (Badges)
  radius8: units.unit4, // Radius - 8px
  radius12: units.unit6, // Radius - 12px
  radius16: units.unit7, // Radius - 16px
  radius24CardDefault: units.unit9, // Radius - 24px (Card Default)
  fullyRounded: units.unitMax, // Fully Rounded
} as const;

export const numberSemantics = {
  spacing,
  radius,
} as const;

