# paytm

## PML DS25 Components

React component library built from Figma designs using the DS25 design token system.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

## Project Structure

```
├── tokens/              # Design token definitions
│   ├── colorPrimitives.ts
│   ├── colorSemantics.ts
│   ├── numberTokens.ts
│   ├── typography.ts
│   └── theme.ts
├── src/
│   ├── components/      # React components
│   │   └── Button/
│   ├── App.tsx          # Test/showcase page
│   └── main.tsx         # Entry point
└── package.json
```

## Components

### Button

A fully-featured button component with support for:

- **Types**: Filled, Tonal, Link, Stroke
- **Sizes**: Large, Medium, Small, Extra Small
- **States**: Normal, Pressed, Loading, Disabled
- **Icon Positions**: None, Leading, Trailing, Only
- **Theming**: Light and Dark mode support

#### Usage

```tsx
import { Button } from './components/Button';

<Button
  type="Filled"
  size="Large"
  label="Click me"
  iconPosition="Leading"
  state="Normal"
  mode="light"
  onClick={() => console.log('Clicked!')}
/>
```

## Design Tokens

All components use the design token system defined in the `tokens/` directory. The tokens mirror the Figma variable structure:

- **Color Primitives**: Base color values (Actions, Colours, Mono, etc.)
- **Color Semantics**: Themed semantic tokens (Text, Icon, Border, Background, etc.)
- **Number Tokens**: Spacing and radius values
- **Typography**: Font styles and scales

## Testing Components

The `App.tsx` file serves as a showcase/test page where you can:

- View all button variants
- Test different sizes, states, and icon positions
- Toggle between light and dark themes
- See all combinations of types and states

## Building

To build for production:

```bash
npm run build
```

The output will be in the `dist/` directory.
