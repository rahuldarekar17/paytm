# Storybook Setup Guide

This project uses Storybook for component documentation and development.

## Getting Started

### Run Storybook

```bash
npm run storybook
```

This will start Storybook on `http://localhost:6006`

### Build Storybook

```bash
npm run build-storybook
```

This creates a static build of Storybook in the `storybook-static` directory.

## Project Structure

```
.storybook/
  ├── main.ts          # Storybook configuration
  └── preview.ts       # Global decorators and parameters

src/
  └── components/
      └── Button/
          ├── Button.tsx          # Component implementation
          ├── Button.stories.tsx  # Story definitions
          ├── Button.mdx          # Component documentation
          └── index.ts            # Exports
```

## Component Documentation

Each component has:

1. **Component File** (`Button.tsx`): The actual React component
2. **Stories File** (`Button.stories.tsx`): Story definitions showcasing all variants
3. **MDX Documentation** (`Button.mdx`): Comprehensive documentation with examples

## Available Stories

### Button Component

- **Default**: Basic button example
- **AllTypes**: Showcase of all button types (Filled, Tonal, Link, Stroke)
- **AllSizes**: Showcase of all button sizes (Large, Medium, Small, Extra Small)
- **AllStates**: Showcase of all button states (Normal, Pressed, Disabled, Loading)
- **IconPositions**: Showcase of all icon positions (None, Leading, Trailing, Only)
- **Showcase**: Comprehensive showcase with theme switching
- **Playground**: Interactive playground with controls

## Features

### Theme Switching
All stories support light/dark theme switching. The theme toggle button is available in stories that need it.

### Design Tokens
All components use design tokens, so changes to tokens automatically reflect in Storybook.

### Accessibility
Storybook includes the `@storybook/addon-a11y` addon for accessibility testing.

### Documentation
Each component has comprehensive MDX documentation with:
- Component description
- Design token information
- Usage examples
- Props documentation
- Interactive examples

## Adding New Components

To add a new component to Storybook:

1. Create your component in `src/components/YourComponent/`
2. Create `YourComponent.stories.tsx`:
   ```tsx
   import type { Meta, StoryObj } from '@storybook/react-vite';
   import { YourComponent } from './YourComponent';

   const meta = {
     title: 'Components/YourComponent',
     component: YourComponent,
     tags: ['autodocs'],
   } satisfies Meta<typeof YourComponent>;

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       // Your props
     },
   };
   ```

3. Create `YourComponent.mdx` for documentation (optional but recommended)

4. Storybook will automatically pick up your stories!

## Configuration

### Main Configuration (`.storybook/main.ts`)
- Story locations: `../src/**/*.stories.@(js|jsx|mjs|ts|tsx)`
- MDX documentation: `../src/**/*.mdx`
- Addons: Controls, A11y, Docs, Vitest

### Preview Configuration (`.storybook/preview.ts`)
- Custom backgrounds matching design tokens
- Global decorators
- Default parameters

## Tips

1. **Use Controls**: The Controls addon lets you interactively modify component props
2. **Use Actions**: The Actions addon logs events (clicks, etc.) in the Actions panel
3. **Use Docs**: The Docs tab provides comprehensive documentation
4. **Use Accessibility**: The Accessibility tab helps identify a11y issues

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)
- [Writing Docs](https://storybook.js.org/docs/writing-docs)
