# Token Reference Chain Documentation

This document explains how design tokens are connected from primitives → semantics → components, ensuring that changes to tokens automatically propagate to all components.

## Token Architecture

The token system follows a three-layer architecture:

```
┌─────────────────────────────────────────────────────────────┐
│  Layer 1: PRIMITIVES (colorPrimitives.ts)                  │
│  Base color values - the source of truth                   │
│  Example: actions.primary = '#1576DB'                       │
└─────────────────────────────────────────────────────────────┘
                        ↓ references
┌─────────────────────────────────────────────────────────────┐
│  Layer 2: SEMANTIC TOKENS (colorSemantics.ts)              │
│  Meaningful roles with light/dark mappings                  │
│  Example: filledNormal: { light: actions.primary, ... }     │
└─────────────────────────────────────────────────────────────┘
                        ↓ uses via themeResolvers
┌─────────────────────────────────────────────────────────────┐
│  Layer 3: COMPONENTS (Button.tsx, App.tsx)                 │
│  React components that consume tokens                       │
│  Example: themeResolvers.background('filledNormal', mode)   │
└─────────────────────────────────────────────────────────────┘
```

## How Token Changes Propagate

### Example: Changing Primary Button Color

**Step 1: Update Primitive Token**
```typescript
// tokens/colorPrimitives.ts
export const actions = {
  primary: '#1576DB',  // ← Change this to '#FF0000'
  // ...
}
```

**Step 2: Semantic Token Automatically Updates**
```typescript
// tokens/colorSemantics.ts
export const background = {
  filledNormal: {
    light: actions.primary,  // ← Automatically becomes '#FF0000'
    dark: actions.primary,    // ← Automatically becomes '#FF0000'
  },
  // ...
}
```

**Step 3: Component Automatically Updates**
```typescript
// src/components/Button/Button.tsx
backgroundColor: themeResolvers.background('filledNormal', mode)
// ← Automatically uses new '#FF0000' color
```

## Token Reference Verification

### ✅ Button Component
- **All colors use semantic tokens**: `themeResolvers.background()`, `themeResolvers.text()`, `themeResolvers.border()`
- **No hardcoded hex colors**: All colors reference tokens
- **Spacing uses tokens**: `numberSemantics.spacing.*`
- **Typography uses tokens**: `typography.*`
- **Radius uses tokens**: `numberSemantics.radius.*`

### ✅ App Component
- **Theme toggle button**: Uses `themeResolvers.background('filledNormal', mode)` and `themeResolvers.text('filledText', mode)`
- **All spacing uses tokens**: `numberSemantics.spacing.*`
- **All typography uses tokens**: `typography.*`

## Token Chain Examples

### Color Token Chain
```
colorPrimitives.ts
  actions.primary = '#1576DB'
    ↓
colorSemantics.ts
  background.filledNormal.light = actions.primary
  background.filledNormal.dark = actions.primary
    ↓
Button.tsx
  themeResolvers.background('filledNormal', mode)
    → Returns '#1576DB' (or dark mode value)
```

### Spacing Token Chain
```
numberTokens.ts
  spacing.spacing24 = 24
    ↓
Button.tsx
  paddingX: numberSemantics.spacing.spacing24
    → Uses 24px
```

### Typography Token Chain
```
typography.ts
  title4SemiBold.size = 16
    ↓
Button.tsx
  fontSize: typography.title4SemiBold.size
    → Uses 16px
```

## Testing Token Changes

To verify tokens are properly connected, try this:

1. **Change a primitive color**:
   ```typescript
   // tokens/colorPrimitives.ts
   export const actions = {
     primary: '#FF0000',  // Changed from '#1576DB'
   }
   ```

2. **All buttons should automatically update** because:
   - Semantic tokens reference `actions.primary`
   - Components use semantic tokens via `themeResolvers`

3. **No component code changes needed** - the change propagates automatically!

## Best Practices

1. ✅ **Always use semantic tokens in components** - Never hardcode colors
2. ✅ **Reference primitives in semantic tokens** - Don't duplicate values
3. ✅ **Use themeResolvers for all colors** - Ensures light/dark mode support
4. ✅ **Use numberSemantics for spacing/radius** - Ensures consistency
5. ✅ **Use typography tokens for text** - Ensures design system compliance

## Current Token Status

- ✅ **Button Component**: Fully tokenized
- ✅ **App Component**: Fully tokenized
- ✅ **All colors**: Use semantic tokens with light/dark mappings
- ✅ **All spacing**: Use number tokens
- ✅ **All typography**: Use typography tokens
- ✅ **All radius**: Use number tokens
