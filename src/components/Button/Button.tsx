import React, { useState } from 'react';
import { themeResolvers, ThemeMode } from '../../../tokens/theme';
import { numberSemantics } from '../../../tokens/numberTokens';
import { typography } from '../../../tokens/typography';

export type ButtonType = 'Filled' | 'Tonal' | 'Link' | 'Stroke';
export type IconPosition = 'None' | 'Leading' | 'Trailing' | 'Only';
export type ButtonSize = 'Large' | 'Medium' | 'Small' | 'Extra Small';
export type ButtonState = 'Normal' | 'Pressed' | 'Loading' | 'Disabled';

export interface ButtonProps {
  label?: string;
  ariaLabel?: string;
  type?: ButtonType;
  iconPosition?: IconPosition;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: React.ReactNode;
  onClick?: () => void;
  mode?: ThemeMode;
  className?: string;
}

const sizeConfig = {
  Large: {
    height: 52,
    paddingX: numberSemantics.spacing.spacing24,
    paddingY: numberSemantics.spacing.spacing16CardDefault,
    fontSize: typography.title4SemiBold.size,
    lineHeight: typography.title4SemiBold.lineHeight,
    fontWeight: typography.title4SemiBold.weight,
    iconSize: 24,
    gap: numberSemantics.spacing.spacing8,
  },
  Medium: {
    height: 40,
    paddingX: numberSemantics.spacing.spacing16CardDefault,
    paddingY: numberSemantics.spacing.spacing8,
    fontSize: typography.title4SemiBold.size,
    lineHeight: typography.title4SemiBold.lineHeight,
    fontWeight: typography.title4SemiBold.weight,
    iconSize: 20,
    gap: numberSemantics.spacing.spacing6,
  },
  Small: {
    height: 32,
    paddingX: numberSemantics.spacing.spacing12,
    paddingY: numberSemantics.spacing.spacing6,
    fontSize: typography.bodySemiBold.size,
    lineHeight: typography.bodySemiBold.lineHeight,
    fontWeight: typography.bodySemiBold.weight,
    iconSize: 16,
    gap: numberSemantics.spacing.spacing4,
  },
  'Extra Small': {
    height: 24,
    paddingX: numberSemantics.spacing.spacing8,
    paddingY: numberSemantics.spacing.spacing4,
    fontSize: typography.subtextSemiBold.size,
    lineHeight: typography.subtextSemiBold.lineHeight,
    fontWeight: typography.subtextSemiBold.weight,
    iconSize: 16,
    gap: numberSemantics.spacing.spacing4,
  },
} as const;

export const Button: React.FC<ButtonProps> = ({
  label,
  ariaLabel,
  type = 'Filled',
  iconPosition = 'None',
  size = 'Large',
  state = 'Normal',
  icon,
  onClick,
  mode = 'light',
  className = '',
}) => {
  const config = sizeConfig[size];
  const isIconOnly = iconPosition === 'Only';
  const isDisabled = state === 'Disabled';
  const isLoading = state === 'Loading';
  const isPressed = state === 'Pressed';
  const [isActive, setIsActive] = useState(false);
  const isPressedVisual = isPressed || isActive;
  
  // Effective label resolves to explicit ariaLabel first, then visual label
  const effectiveLabel = ariaLabel ?? label;

  // For icon-only buttons, we rely on effectiveLabel for accessibility
  const accessibleLabel = isIconOnly ? effectiveLabel : undefined;

  // Get colors based on type and state
  const getButtonStyles = () => {
    const baseStyles: React.CSSProperties = {
      fontFamily: typography.title4SemiBold.family,
      fontSize: `${config.fontSize}px`,
      lineHeight: `${config.lineHeight}px`,
      fontWeight: config.fontWeight,
      borderRadius: `${numberSemantics.radius.fullyRounded}px`,
      border: 'none',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: `${config.gap}px`,
      transition: 'all 0.2s ease',
      position: 'relative',
      overflow: 'hidden',
    };

    if (isIconOnly) {
      baseStyles.width = `${config.height}px`;
      baseStyles.paddingLeft = 0;
      baseStyles.paddingRight = 0;
      baseStyles.paddingTop = 0;
      baseStyles.paddingBottom = 0;
    } else {
      baseStyles.paddingLeft = `${config.paddingX}px`;
      baseStyles.paddingRight = `${config.paddingX}px`;
      baseStyles.paddingTop = `${config.paddingY}px`;
      baseStyles.paddingBottom = `${config.paddingY}px`;
    }

    switch (type) {
      case 'Filled':
        return {
          ...baseStyles,
          backgroundColor: isDisabled
            ? themeResolvers.background('filledDisabled', mode)
            : isPressedVisual
            ? themeResolvers.background('filledPressed', mode)
            : themeResolvers.background('filledNormal', mode),
          color: themeResolvers.text('filledText', mode),
          opacity: isDisabled ? 0.5 : 1,
        };

      case 'Tonal':
        return {
          ...baseStyles,
          backgroundColor: isDisabled
            ? themeResolvers.background('tonalDisabled', mode)
            : isPressedVisual
            ? themeResolvers.background('tonalPressed', mode)
            : themeResolvers.background('tonalNormal', mode),
          color: themeResolvers.text('tonalText', mode),
          opacity: isDisabled ? 0.5 : 1,
        };

      case 'Link':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: isDisabled
            ? themeResolvers.text('linkDisabled', mode)
            : isPressedVisual
            ? themeResolvers.text('linkPressed', mode)
            : themeResolvers.text('linkNormal', mode),
          textDecoration: 'underline',
          textUnderlineOffset: `${numberSemantics.spacing.spacing2}px`,
          opacity: isDisabled ? 0.5 : 1,
        };

      case 'Stroke':
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          border: `1px solid ${
            isDisabled
              ? themeResolvers.border('strokeDisabled', mode)
              : isPressedVisual
              ? themeResolvers.border('strokePressed', mode)
              : themeResolvers.border('strokeNormal', mode)
          }`,
          color: isDisabled
            ? themeResolvers.text('strokeDisabled', mode)
            : isPressedVisual
            ? themeResolvers.text('strokePressed', mode)
            : themeResolvers.text('strokeNormal', mode),
          opacity: isDisabled ? 0.5 : 1,
        };

      default:
        return baseStyles;
    }
  };

  const renderIcon = () => {
    if (!icon && iconPosition === 'None') return null;

    const iconStyle: React.CSSProperties = {
      width: `${config.iconSize}px`,
      height: `${config.iconSize}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    };

    if (icon) {
      return <span style={iconStyle} aria-hidden="true">{icon}</span>;
    }

    // Placeholder icon (you can replace with actual icon component)
    return (
      <span
        style={{
          ...iconStyle,
          backgroundColor: 'currentColor',
          borderRadius: '2px',
          opacity: 0.6,
        }}
        aria-hidden="true"
      />
    );
  };

  const renderLoader = () => {
    // Calculate dot size based on button size
    // For larger buttons, use larger dots; for smaller, use smaller dots
    const dotSize = Math.max(4, Math.min(8, config.iconSize * 0.3));
    const gap = Math.max(2, dotSize * 0.5);

    // Loader colours from design tokens based on button type
    // Filled (67:558): White dots
    // Other states (67:711 Tonal/Link/Stroke): Brand Dark Blue (dots 1–3) + Brand Blue (dots 4–5)
    let dotColors: string[];

    if (type === 'Filled') {
      // Filled state: white loader dots
      const whiteColor = themeResolvers.text('filledText', mode); // mono[50] = #FFFFFF
      dotColors = [
        whiteColor, // Dot 1
        whiteColor, // Dot 2
        whiteColor, // Dot 3
        whiteColor, // Dot 4
        whiteColor, // Dot 5
      ];
    } else {
      // Tonal, Link, Stroke: brand gradient loader
      const brandDarkBlue = themeResolvers.brandColours('brandDarkBlue', mode);
      const brandBlue = themeResolvers.brandColours('brandBlue', mode);
      dotColors = [
        brandDarkBlue, // Dot 1
        brandDarkBlue, // Dot 2
        brandDarkBlue, // Dot 3
        brandBlue,     // Dot 4
        brandBlue,     // Dot 5
      ];
    }

    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: `${gap}px`,
          height: `${config.iconSize}px`,
        }}
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <span
            key={index}
            style={{
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              borderRadius: '50%',
              backgroundColor: dotColors[index],
              animation: `dotPulse 1.4s ease-in-out infinite`,
              animationDelay: `${index * 0.16}s`,
            }}
          />
        ))}
      </span>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          {renderLoader()}
          <span className="sr-only">
            {isIconOnly && accessibleLabel
              ? `Loading: ${accessibleLabel}`
              : 'Loading'}
          </span>
        </>
      );
    }

    const iconElement = renderIcon();

    if (isIconOnly) {
      return (
        <>
          {iconElement}
          <span className="sr-only">{accessibleLabel}</span>
        </>
      );
    }

    const elements: React.ReactNode[] = [];

    if (iconPosition === 'Leading' && iconElement) {
      elements.push(iconElement);
    }

    // Always ensure buttons have visible text when a label is provided
    if (label) {
      elements.push(<span key="label">{label}</span>);
    }

    if (iconPosition === 'Trailing' && iconElement) {
      elements.push(iconElement);
    }

    return elements;
  };

  return (
    <>
      <style>
        {`
          @keyframes dotPulse {
            0%, 80%, 100% {
              transform: scale(0.6);
              opacity: 0.5;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
      <button
        type="button"
        onClick={isDisabled || isLoading ? undefined : onClick}
        onMouseDown={isDisabled || isLoading ? undefined : () => setIsActive(true)}
        onMouseUp={isDisabled || isLoading ? undefined : () => setIsActive(false)}
        onMouseLeave={isDisabled || isLoading ? undefined : () => setIsActive(false)}
        onTouchStart={isDisabled || isLoading ? undefined : () => setIsActive(true)}
        onTouchEnd={isDisabled || isLoading ? undefined : () => setIsActive(false)}
        style={getButtonStyles()}
        className={className}
        disabled={isDisabled || isLoading}
        aria-label={isIconOnly ? accessibleLabel : undefined}
        aria-busy={isLoading}
        aria-pressed={isPressed && !isDisabled && !isLoading ? true : undefined}
        aria-disabled={isDisabled}
        title={isIconOnly ? accessibleLabel : undefined}
      >
        {renderContent()}
      </button>
    </>
  );
};
