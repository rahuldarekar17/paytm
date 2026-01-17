import React, { useState } from 'react';
import { Button } from './components/Button';
import { ThemeMode, themeResolvers } from '../tokens/theme';
import { numberSemantics } from '../tokens/numberTokens';
import { typography } from '../tokens/typography';
import './App.css';

type ButtonType = 'Filled' | 'Tonal' | 'Link' | 'Stroke';
type ButtonSize = 'Large' | 'Medium' | 'Small' | 'Extra Small';
type ButtonState = 'Normal' | 'Pressed' | 'Disabled' | 'Loading';
type IconPosition = 'None' | 'Leading' | 'Trailing' | 'Only';

function App() {
  const [mode, setMode] = useState<ThemeMode>('light');

  const buttonTypes: ButtonType[] = ['Filled', 'Tonal', 'Link', 'Stroke'];
  const sizes: ButtonSize[] = ['Large', 'Medium', 'Small', 'Extra Small'];
  const states: ButtonState[] = ['Normal', 'Pressed', 'Disabled', 'Loading'];
  const iconPositions: IconPosition[] = ['None', 'Leading', 'Trailing', 'Only'];

  const containerStyle: React.CSSProperties = {
    padding: `${numberSemantics.spacing.spacing48Sections}px`,
    backgroundColor: themeResolvers.surface('level1', mode),
    minHeight: '100vh',
    transition: 'background-color 0.3s ease',
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: typography.display3Bold.family,
    fontSize: `${typography.display3Bold.size}px`,
    fontWeight: typography.display3Bold.weight,
    lineHeight: `${typography.display3Bold.lineHeight}px`,
    color: themeResolvers.text('neutralStrong', mode),
    marginBottom: `${numberSemantics.spacing.spacing24}px`,
  };

  const sectionHeadingStyle: React.CSSProperties = {
    fontFamily: typography.title1Bold.family,
    fontSize: `${typography.title1Bold.size}px`,
    fontWeight: typography.title1Bold.weight,
    lineHeight: `${typography.title1Bold.lineHeight}px`,
    color: themeResolvers.text('neutralStrong', mode),
    marginBottom: `${numberSemantics.spacing.spacing16CardDefault}px`,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: typography.subtextRegular.family,
    fontSize: `${typography.subtextRegular.size}px`,
    lineHeight: `${typography.subtextRegular.lineHeight}px`,
    color: themeResolvers.text('neutralMedium', mode),
    marginBottom: `${numberSemantics.spacing.spacing8}px`,
  };

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gap: `${numberSemantics.spacing.spacing24}px`,
    marginBottom: `${numberSemantics.spacing.spacing48Sections}px`,
  };

  // Render comprehensive button showcase matching Figma layout
  const renderButtonShowcase = () => {
    return sizes.map((size) => (
      <section key={size} style={{ marginBottom: `${numberSemantics.spacing.spacing48Sections}px` }}>
        <h2 style={sectionHeadingStyle}>{size} Size</h2>
        
        {/* Grid: Types as columns, States as rows */}
        <div style={{ marginBottom: `${numberSemantics.spacing.spacing32}px` }}>
          <h3 style={{ ...labelStyle, marginBottom: `${numberSemantics.spacing.spacing16CardDefault}px` }}>
            All Types × All States
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(${buttonTypes.length}, 1fr)`,
            gap: `${numberSemantics.spacing.spacing24}px`,
            marginBottom: `${numberSemantics.spacing.spacing24}px`
          }}>
            {buttonTypes.map((type) => (
              <div key={`${size}-${type}`} style={{ display: 'flex', flexDirection: 'column', gap: `${numberSemantics.spacing.spacing16CardDefault}px` }}>
                <span style={{ ...labelStyle, fontSize: `${typography.captionSemiBold.size}px`, fontWeight: typography.captionSemiBold.weight }}>
                  {type}
                </span>
                {states.map((state) => (
                  <div key={`${size}-${type}-${state}`} style={{ display: 'flex', flexDirection: 'column', gap: `${numberSemantics.spacing.spacing8}px` }}>
                    <span style={{ ...labelStyle, fontSize: `${typography.captionRegular.size}px`, marginBottom: `${numberSemantics.spacing.spacing4}px` }}>
                      {state}
                    </span>
                    <Button
                      type={type}
                      label="Label"
                      size={size}
                      state={state}
                      mode={mode}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Icon Positions Grid */}
        <div>
          <h3 style={{ ...labelStyle, marginBottom: `${numberSemantics.spacing.spacing16CardDefault}px` }}>
            Icon Positions (Normal State)
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: `repeat(${buttonTypes.length}, 1fr)`,
            gap: `${numberSemantics.spacing.spacing24}px`
          }}>
            {buttonTypes.map((type) => (
              <div key={`${size}-${type}-icons`} style={{ display: 'flex', flexDirection: 'column', gap: `${numberSemantics.spacing.spacing16CardDefault}px` }}>
                <span style={{ ...labelStyle, fontSize: `${typography.captionSemiBold.size}px`, fontWeight: typography.captionSemiBold.weight }}>
                  {type}
                </span>
                {iconPositions.map((iconPosition) => (
                  <div key={`${size}-${type}-${iconPosition}`} style={{ display: 'flex', flexDirection: 'column', gap: `${numberSemantics.spacing.spacing8}px` }}>
                    <span style={{ ...labelStyle, fontSize: `${typography.captionRegular.size}px`, marginBottom: `${numberSemantics.spacing.spacing4}px` }}>
                      {iconPosition}
                    </span>
                    <Button
                      type={type}
                      label={iconPosition === 'Only' ? '' : 'Label'}
                      size={size}
                      iconPosition={iconPosition}
                      state="Normal"
                      mode={mode}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    ));
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ marginBottom: `${numberSemantics.spacing.spacing48Sections}px` }}>
        <h1 style={headingStyle}>Button Component Showcase</h1>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          style={{
            padding: `${numberSemantics.spacing.spacing12}px ${numberSemantics.spacing.spacing24}px`,
            backgroundColor: themeResolvers.background('filledNormal', mode),
            color: themeResolvers.text('filledText', mode),
            border: 'none',
            borderRadius: `${numberSemantics.radius.radius8}px`,
            cursor: 'pointer',
            fontFamily: typography.bodySemiBold.family,
            fontSize: `${typography.bodySemiBold.size}px`,
            fontWeight: typography.bodySemiBold.weight,
            lineHeight: `${typography.bodySemiBold.lineHeight}px`,
          }}
        >
          Toggle Theme: {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      {/* Comprehensive Button Showcase */}
      {renderButtonShowcase()}
    </div>
  );
}

export default App;
