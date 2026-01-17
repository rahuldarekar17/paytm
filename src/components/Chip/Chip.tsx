import React from 'react';
import { themeResolvers, ThemeMode } from '../../../tokens/theme';
import { numberSemantics } from '../../../tokens/numberTokens';
import { typography } from '../../../tokens/typography';

export type ChipVariant =
  | 'Default'
  | 'Selected'
  | 'Disabled'
  | 'Primary Action'
  | 'Secondary Action';
export type ChipSize = 'Small' | 'Medium' | 'Large';

export interface ChipProps {
  label?: string;
  ariaLabel?: string;
  size?: ChipSize;
  variant?: ChipVariant;
  iconLeading?: React.ReactNode;
  iconTrailing?: React.ReactNode;
  badge?: React.ReactNode;
  iconLeadingVisible?: boolean;
  iconTrailingVisible?: boolean;
  badgeVisible?: boolean;
  onClick?: () => void;
  mode?: ThemeMode;
  className?: string;
}

const sizeConfig = {
  Small: {
    height: 32,
    paddingX: numberSemantics.spacing.spacing16CardDefault,
    paddingY: numberSemantics.spacing.spacing8,
    font: typography.subtextMedium,
    fontSelected: typography.subtextSemiBold,
    iconSize: 20,
    gap: numberSemantics.spacing.spacing6,
  },
  Medium: {
    height: 36,
    paddingX: numberSemantics.spacing.spacing16CardDefault,
    paddingY: numberSemantics.spacing.spacing8,
    font: typography.bodyMedium,
    fontSelected: typography.bodySemiBold,
    iconSize: 20,
    gap: numberSemantics.spacing.spacing6,
  },
  Large: {
    height: 40,
    paddingX: numberSemantics.spacing.spacing16CardDefault,
    paddingY: numberSemantics.spacing.spacing8,
    font: typography.title4Medium,
    fontSelected: typography.title4SemiBold,
    iconSize: 20,
    gap: numberSemantics.spacing.spacing6,
  },
} as const;

const hexToRgba = (value: string, alpha: number) => {
  if (!value.startsWith('#')) return value;
  let hex = value.replace('#', '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }
  if (hex.length !== 6) return value;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Chip: React.FC<ChipProps> = ({
  label,
  ariaLabel,
  size = 'Small',
  variant = 'Default',
  iconLeading,
  iconTrailing,
  badge,
  iconLeadingVisible,
  iconTrailingVisible,
  badgeVisible,
  onClick,
  mode = 'light',
  className = '',
}) => {
  const config = sizeConfig[size];
  const isDisabled = variant === 'Disabled';
  const isSelected = variant === 'Selected' || variant === 'Primary Action';
  const isDefault = variant === 'Default' || variant === 'Secondary Action';
  const effectiveLabel = ariaLabel ?? label;
  const showLeadingIcon =
    iconLeadingVisible ?? Boolean(iconLeading);
  const showTrailingIcon =
    iconTrailingVisible ?? Boolean(iconTrailing);
  const showBadge =
    badgeVisible ?? badge != null;

  const textColor = isDisabled
    ? themeResolvers.text('neutralWeak', mode)
    : isSelected
    ? themeResolvers.text('neutralStrong', mode)
    : themeResolvers.text('neutralModerate', mode);

  const borderColor = isSelected
    ? themeResolvers.border('primaryStrong', mode)
    : isDisabled
    ? themeResolvers.border('neutralWeak', mode)
    : themeResolvers.glass('tintedL4', mode);

  const defaultGradient = `linear-gradient(153deg, ${hexToRgba(
    themeResolvers.surface('level2', mode),
    0.82,
  )} 0%, ${hexToRgba(themeResolvers.surface('level4', mode), 0.82)} 100%)`;

  const selectedGradient = `linear-gradient(112deg, ${themeResolvers.background(
    'offset3',
    mode,
  )} 0%, ${themeResolvers.background('primaryWeak', mode)} 100%)`;

  const backgroundImage = isSelected
    ? selectedGradient
    : isDefault
    ? defaultGradient
    : undefined;

  const boxShadow = isSelected
    ? '0px 1px 10px 0px rgba(16, 16, 16, 0.22)'
    : isDefault
    ? '0px 1px 4px 0px rgba(16, 16, 16, 0.08)'
    : undefined;

  const fontToken = isSelected ? config.fontSelected : config.font;

  const iconStyle: React.CSSProperties = {
    width: `${config.iconSize}px`,
    height: `${config.iconSize}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: textColor,
    flexShrink: 0,
  };

  const badgeBackground = isDisabled
    ? themeResolvers.background('offset2', mode)
    : themeResolvers.background('offset3', mode);

  const badgeText = themeResolvers.text('neutralModerate', mode);

  return (
    <button
      type="button"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-pressed={isSelected && !isDisabled ? true : undefined}
      aria-disabled={isDisabled}
      aria-label={!label && effectiveLabel ? effectiveLabel : undefined}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: `${config.gap}px`,
        height: `${config.height}px`,
        paddingLeft: `${config.paddingX}px`,
        paddingRight: `${config.paddingX}px`,
        paddingTop: `${config.paddingY}px`,
        paddingBottom: `${config.paddingY}px`,
        borderRadius: `${numberSemantics.radius.fullyRounded}px`,
        border: `1px solid ${borderColor}`,
        backgroundColor: 'transparent',
        backgroundImage,
        boxShadow,
        fontFamily: fontToken.family,
        fontSize: `${fontToken.size}px`,
        lineHeight: `${fontToken.lineHeight}px`,
        fontWeight: fontToken.weight,
        color: textColor,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {showLeadingIcon && iconLeading && (
        <span style={iconStyle} aria-hidden="true">{iconLeading}</span>
      )}
      {label && <span>{label}</span>}
      {showTrailingIcon && iconTrailing && (
        <span style={iconStyle} aria-hidden="true">{iconTrailing}</span>
      )}
      {showBadge && badge != null && (
        <span
          style={{
            minWidth: `${numberSemantics.spacing.spacing8 * 2}px`,
            minHeight: `${numberSemantics.spacing.spacing8 * 2}px`,
            paddingLeft: `${numberSemantics.spacing.spacing4}px`,
            paddingRight: `${numberSemantics.spacing.spacing4}px`,
            paddingTop: `${numberSemantics.spacing.spacing2}px`,
            paddingBottom: `${numberSemantics.spacing.spacing2}px`,
            borderRadius: `${numberSemantics.radius.radius16}px`,
            backgroundColor: badgeBackground,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: badgeText,
            fontFamily: typography.subtextMedium.family,
            fontSize: `${typography.subtextMedium.size}px`,
            lineHeight: `${typography.subtextMedium.lineHeight}px`,
            fontWeight: typography.subtextMedium.weight,
          }}
        >
          {badge}
        </span>
      )}
    </button>
  );
};
