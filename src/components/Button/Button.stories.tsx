import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from './Button';
import type { 
  ButtonType, 
  ButtonSize, 
  ButtonState, 
  IconPosition 
} from './Button';
import type { ThemeMode } from '../../../tokens/theme';
import { themeResolvers } from '../../../tokens/theme';
import { numberSemantics } from '../../../tokens/numberTokens';

// Theme wrapper component
const ThemeWrapper = ({ 
  children, 
  mode 
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
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Button component is a versatile, accessible button that supports multiple types, sizes, states, and icon positions. 
All styling is driven by design tokens, ensuring consistency across the design system.

## Design Tokens
- **Colors**: Uses semantic color tokens with automatic light/dark theme support
- **Spacing**: Uses number tokens for padding, gaps, and margins
- **Typography**: Uses typography tokens for font size, weight, and line height
- **Radius**: Uses fully rounded radius token (200px) for pill-shaped buttons

## Usage
Buttons are used for primary actions, secondary actions, navigation, and form submissions.
        `,
      },
    },
  },
  tags: [],
  argTypes: {
    showLabel: {
      control: 'boolean',
      description: 'Toggle label visibility without changing the label text',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Toggle icon rendering',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'Button label text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    type: {
      control: 'select',
      options: ['Filled', 'Tonal', 'Link', 'Stroke'],
      description: 'Button type variant',
      table: {
        type: { summary: 'ButtonType' },
        defaultValue: { summary: 'Filled' },
      },
    },
    size: {
      control: 'select',
      options: ['Large', 'Medium', 'Small', 'Extra Small'],
      description: 'Button size',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'Large' },
      },
    },
    state: {
      control: 'select',
      options: ['Normal', 'Pressed', 'Disabled', 'Loading'],
      description: 'Button state',
      table: {
        type: { summary: 'ButtonState' },
        defaultValue: { summary: 'Normal' },
      },
    },
    iconPosition: {
      control: 'select',
      options: ['None', 'Leading', 'Trailing', 'Only'],
      description: 'Icon position relative to label',
      table: {
        type: { summary: 'IconPosition' },
        defaultValue: { summary: 'None' },
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
    onClick: {
      action: 'clicked',
      description: 'Click handler function',
    },
  },
  args: {
    onClick: () => {},
    label: 'Label',
    showLabel: true,
    showIcon: false,
    type: 'Filled',
    size: 'Large',
    state: 'Normal',
    iconPosition: 'None',
    mode: 'light',
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  render: (args) => {
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    const ariaLabel =
      args.iconPosition === 'Only' && !label
        ? 'Button'
        : undefined;
    return (
      <Button
        {...args}
        label={label}
        icon={icon}
        ariaLabel={ariaLabel}
      />
    );
  },
  args: {
    label: 'Button',
    type: 'Filled',
    size: 'Large',
    state: 'Normal',
  },
};

export const AllTypes: Story = {
  args: {
    label: "a",
    state: "Loading"
  },

  render: (args) => {
    const [mode, setMode] = useState<ThemeMode>('light');
    const types: ButtonType[] = ['Filled', 'Tonal', 'Link', 'Stroke'];
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    
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
              marginBottom: `${numberSemantics.spacing.spacing16CardDefault}px`,
            }}
          >
            Toggle Theme: {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, flexWrap: 'wrap' }}>
          {types.map((type) => (
            <Button
              key={type}
              {...args}
              type={type}
              label={label ? type : undefined}
              icon={icon}
              mode={mode}
            />
          ))}
        </div>
      </ThemeWrapper>
    );
  },

  parameters: {
    docs: {
      description: {
        story: 'All button types: Filled (primary), Tonal (secondary), Link (text), and Stroke (outlined).',
      },
    },
  }
};

export const AllSizes: Story = {
  render: (args) => {
    const sizes: ButtonSize[] = ['Large', 'Medium', 'Small', 'Extra Small'];
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    
    return (
      <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, alignItems: 'center', flexWrap: 'wrap' }}>
        {sizes.map((size) => (
          <Button
            key={size}
            {...args}
            size={size}
            label={label ? size : undefined}
            icon={icon}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'All button sizes from Large (52px height) to Extra Small (24px height).',
      },
    },
  },
};

export const AllStates: Story = {
  args: {
    label: "Hello",
    type: "Link"
  },

  render: (args) => {
    const states: ButtonState[] = ['Normal', 'Pressed', 'Disabled', 'Loading'];
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    
    return (
      <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, flexWrap: 'wrap' }}>
        {states.map((state) => (
          <Button
            key={state}
            {...args}
            state={state}
            label={label ? state : undefined}
            icon={icon}
          />
        ))}
      </div>
    );
  },

  parameters: {
    docs: {
      description: {
        story: 'Button states: Normal (default), Pressed (active), Disabled (unavailable), and Loading (async action).',
      },
    },
  }
};

export const IconPositions: Story = {
  render: (args) => {
    const positions: IconPosition[] = ['None', 'Leading', 'Trailing', 'Only'];
    const label = args.showLabel ? args.label : undefined;
    
    return (
      <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, alignItems: 'center', flexWrap: 'wrap' }}>
        {positions.map((position) => (
          <Button
            key={position}
            {...args}
            iconPosition={position}
            label={position === 'Only' ? undefined : (label || 'Button')}
            icon={args.showIcon ? <PlaceholderIcon /> : undefined}
            ariaLabel={position === 'Only' ? (label || 'Button') : undefined}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon positions: None (no icon), Leading (before text), Trailing (after text), and Only (icon-only button).',
      },
    },
  },
};

// Comprehensive Showcase
export const Showcase: Story = {
  render: () => {
    const [mode, setMode] = useState<ThemeMode>('light');
    const types: ButtonType[] = ['Filled', 'Tonal', 'Link', 'Stroke'];
    const sizes: ButtonSize[] = ['Large', 'Medium', 'Small', 'Extra Small'];
    const states: ButtonState[] = ['Normal', 'Pressed', 'Disabled', 'Loading'];
    
    return (
      <ThemeWrapper mode={mode}>
        <div style={{ marginBottom: `${numberSemantics.spacing.spacing32}px` }}>
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
        
        {types.map((type) => (
          <div key={type} style={{ marginBottom: `${numberSemantics.spacing.spacing48Sections}px` }}>
            <h2 style={{ 
              color: themeResolvers.text('neutralStrong', mode),
              marginBottom: `${numberSemantics.spacing.spacing24}px`,
            }}>
              {type} Buttons
            </h2>
            
            {/* States */}
            <div style={{ marginBottom: `${numberSemantics.spacing.spacing24}px` }}>
              <h3 style={{ 
                color: themeResolvers.text('neutralModerate', mode),
                marginBottom: `${numberSemantics.spacing.spacing16CardDefault}px`,
                fontSize: '14px',
              }}>
                States
              </h3>
              <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, flexWrap: 'wrap' }}>
                {states.map((state) => (
                  <Button
                    key={state}
                    type={type}
                    size="Large"
                    state={state}
                    label={state}
                    mode={mode}
                  />
                ))}
              </div>
            </div>
            
            {/* Sizes */}
            <div>
              <h3 style={{ 
                color: themeResolvers.text('neutralModerate', mode),
                marginBottom: `${numberSemantics.spacing.spacing16CardDefault}px`,
                fontSize: '14px',
              }}>
                Sizes
              </h3>
              <div style={{ display: 'flex', gap: `${numberSemantics.spacing.spacing16CardDefault}px`, alignItems: 'center', flexWrap: 'wrap' }}>
                {sizes.map((size) => (
                  <Button
                    key={size}
                    type={type}
                    size={size}
                    label={size}
                    mode={mode}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </ThemeWrapper>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all button variants, types, sizes, and states with theme switching.',
      },
    },
  },
};

// Interactive Playground
export const Playground: Story = {
  render: (args) => {
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    const ariaLabel =
      args.iconPosition === 'Only' && !label
        ? 'Button'
        : undefined;
    return (
      <Button
        {...args}
        label={label}
        icon={icon}
        ariaLabel={ariaLabel}
      />
    );
  },
  args: {
    label: 'Button',
    type: 'Filled',
    size: 'Large',
    state: 'Normal',
    iconPosition: 'None',
    mode: 'light',
    showLabel: true,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all button properties. Use the controls panel to modify properties.',
      },
    },
  },
};
