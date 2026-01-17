import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { ThemeMode } from '../../../tokens/theme';
import { themeResolvers } from '../../../tokens/theme';
import { numberSemantics } from '../../../tokens/numberTokens';
import { Chip } from './Chip';
import type { ChipSize, ChipVariant } from './Chip';

const ThemeWrapper = ({
  children,
  mode,
}: {
  children: React.ReactNode;
  mode: ThemeMode;
}) => {
  return (
    <div
      style={{
        padding: `${numberSemantics.spacing.spacing48Sections}px`,
        backgroundColor: themeResolvers.surface('level1', mode),
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      }}
    >
      {children}
    </div>
  );
};

const PlaceholderIcon = () => (
  <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" aria-hidden="true">
    <circle cx="10" cy="10" r="6" />
  </svg>
);

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Chip component supports small, medium, and large sizes with default, selected, and disabled variants. 
Styles are derived from semantic color, spacing, and typography tokens.
        `,
      },
    },
  },
  argTypes: {
    showLabel: {
      control: 'boolean',
      description: 'Toggle label visibility without changing the label text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    label: {
      control: 'text',
      description: 'Chip label text',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['Small', 'Medium', 'Large'],
      description: 'Chip size',
      table: {
        type: { summary: 'ChipSize' },
        defaultValue: { summary: 'Small' },
      },
    },
    variant: {
      control: 'select',
      options: ['Default', 'Selected', 'Disabled', 'Primary Action', 'Secondary Action'],
      description: 'Chip variant',
      table: {
        type: { summary: 'ChipVariant' },
        defaultValue: { summary: 'Default' },
      },
    },
    mode: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme mode (light or dark)',
      table: {
        type: { summary: 'ThemeMode' },
        defaultValue: { summary: 'light' },
      },
    },
    iconLeading: {
      control: false,
    },
    iconTrailing: {
      control: false,
    },
    badge: {
      control: false,
    },
    onClick: {
      action: 'clicked',
    },
  },
  args: {
    label: 'Label',
    size: 'Small',
    variant: 'Default',
    mode: 'light',
    showLabel: true,
  },
  decorators: [
    (Story, context) => {
      const mode = (context.args.mode || 'light') as ThemeMode;
      return (
        <ThemeWrapper mode={mode}>
          <Story />
        </ThemeWrapper>
      );
    },
  ],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => {
    const variants: ChipVariant[] = ['Default', 'Selected', 'Disabled'];
    const label = args.showLabel ? args.label : undefined;
    return (
      <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, flexWrap: 'wrap' }}>
        {variants.map((variant) => (
          <Chip key={variant} {...args} variant={variant} label={label ? variant : undefined} />
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: (args) => {
    const sizes: ChipSize[] = ['Small', 'Medium', 'Large'];
    const label = args.showLabel ? args.label : undefined;
    return (
      <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, flexWrap: 'wrap' }}>
        {sizes.map((size) => (
          <Chip key={size} {...args} size={size} label={label ? size : undefined} />
        ))}
      </div>
    );
  },
};

export const WithIconsAndBadge: Story = {
  render: (args) => {
    const label = args.showLabel ? args.label : undefined;
    return (
      <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, flexWrap: 'wrap' }}>
        <Chip {...args} label={label ? "Leading" : undefined} iconLeadingVisible iconLeading={<PlaceholderIcon />} />
        <Chip {...args} label={label ? "Trailing" : undefined} iconTrailingVisible iconTrailing={<PlaceholderIcon />} />
        <Chip {...args} label={label ? "Badge" : undefined} badgeVisible badge="3" />
        <Chip
          {...args}
          label={label ? "All" : undefined}
          iconLeadingVisible
          iconLeading={<PlaceholderIcon />}
          iconTrailingVisible
          iconTrailing={<PlaceholderIcon />}
          badgeVisible
          badge="3"
        />
      </div>
    );
  },
};

export const Interactive: Story = {
  render: (args) => {
    const [mode, setMode] = useState<ThemeMode>('light');
    const label = args.showLabel ? args.label : undefined;
    return (
      <ThemeWrapper mode={mode}>
        <div style={{ marginBottom: `${numberSemantics.spacing.spacing24}px` }}>
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            style={{
              padding: `${numberSemantics.spacing.spacing8}px ${numberSemantics.spacing.spacing16CardDefault}px`,
              backgroundColor: themeResolvers.background('filledNormal', mode),
              color: themeResolvers.text('filledText', mode),
              border: 'none',
              borderRadius: `${numberSemantics.radius.radius8}px`,
              cursor: 'pointer',
            }}
          >
            Toggle Theme: {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <Chip {...args} mode={mode} label={label} />
      </ThemeWrapper>
    );
  },
  args: {
    label: 'Chip',
    showLabel: true,
  },
};
