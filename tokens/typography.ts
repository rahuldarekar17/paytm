// Typography tokens derived from the Figma "Type Scale" node.

export type FontWeight = 400 | 500 | 600 | 700;

export interface FontToken {
  family: 'Inter Subset';
  style: 'Regular' | 'Medium' | 'SemiBold' | 'Bold';
  size: number; // px
  weight: FontWeight;
  lineHeight: number; // px
  letterSpacing: number; // em or px, here 0
}

function fontToken(
  style: FontToken['style'],
  size: number,
  weight: FontWeight,
  lineHeight: number,
): FontToken {
  return {
    family: 'Inter Subset',
    style,
    size,
    weight,
    lineHeight,
    letterSpacing: 0,
  };
}

export const typography = {
  // Display
  display1Bold: fontToken('Bold', 42, 700, 48),
  display1Medium: fontToken('Medium', 42, 500, 48),
  display2Bold: fontToken('Bold', 36, 700, 40),
  display3Bold: fontToken('Bold', 32, 700, 36),
  display3Medium: fontToken('Medium', 32, 500, 36),

  // Titles
  title1Bold: fontToken('Bold', 22, 700, 28),
  title2Bold: fontToken('Bold', 20, 700, 24),
  title3Bold: fontToken('Bold', 18, 700, 24),
  title3Medium: fontToken('Medium', 18, 500, 24),
  title4Bold: fontToken('Bold', 16, 700, 20),
  title4SemiBold: fontToken('SemiBold', 16, 600, 20),
  title4Medium: fontToken('Medium', 16, 500, 20),
  title4Regular: fontToken('Regular', 16, 400, 20),

  // Body
  bodyBold: fontToken('Bold', 14, 700, 20),
  bodySemiBold: fontToken('SemiBold', 14, 600, 20),
  bodyMedium: fontToken('Medium', 14, 500, 20),
  bodyRegular: fontToken('Regular', 14, 400, 20),

  // Subtext
  subtextBold: fontToken('Bold', 12, 700, 16),
  subtextSemiBold: fontToken('SemiBold', 12, 600, 16),
  subtextMedium: fontToken('Medium', 12, 500, 16),
  subtextRegular: fontToken('Regular', 12, 400, 16),

  // Caption
  captionSemiBold: fontToken('SemiBold', 10, 600, 12),
  captionRegular: fontToken('Regular', 10, 400, 12),
} as const;

