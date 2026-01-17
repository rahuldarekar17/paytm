import{j as e}from"./jsx-runtime-CIOfmAEN.js";import{r as N,t}from"./iframe-CmJvfGYo.js";import{n as a,t as m}from"./typography-D41dN3wn.js";import"./preload-helper-C1FmrZbK.js";const ce={Large:{height:52,paddingX:a.spacing.spacing24,paddingY:a.spacing.spacing16CardDefault,fontSize:m.title4SemiBold.size,lineHeight:m.title4SemiBold.lineHeight,fontWeight:m.title4SemiBold.weight,iconSize:24,gap:a.spacing.spacing8},Medium:{height:40,paddingX:a.spacing.spacing16CardDefault,paddingY:a.spacing.spacing8,fontSize:m.title4SemiBold.size,lineHeight:m.title4SemiBold.lineHeight,fontWeight:m.title4SemiBold.weight,iconSize:20,gap:a.spacing.spacing6},Small:{height:32,paddingX:a.spacing.spacing12,paddingY:a.spacing.spacing6,fontSize:m.bodySemiBold.size,lineHeight:m.bodySemiBold.lineHeight,fontWeight:m.bodySemiBold.weight,iconSize:16,gap:a.spacing.spacing4},"Extra Small":{height:24,paddingX:a.spacing.spacing8,paddingY:a.spacing.spacing4,fontSize:m.subtextSemiBold.size,lineHeight:m.subtextSemiBold.lineHeight,fontWeight:m.subtextSemiBold.weight,iconSize:16,gap:a.spacing.spacing4}},y=({label:n,ariaLabel:i,type:r="Filled",iconPosition:o="None",size:p="Large",state:h="Normal",icon:c,onClick:te,mode:l="light",className:se=""})=>{const u=ce[p],f=o==="Only",d=h==="Disabled",b=h==="Loading",P=h==="Pressed",[ie,S]=N.useState(!1),L=P||ie,k=f?i??n:void 0,oe=()=>{const s={fontFamily:m.title4SemiBold.family,fontSize:`${u.fontSize}px`,lineHeight:`${u.lineHeight}px`,fontWeight:u.fontWeight,borderRadius:`${a.radius.fullyRounded}px`,border:"none",cursor:d?"not-allowed":"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",gap:`${u.gap}px`,transition:"all 0.2s ease",position:"relative",overflow:"hidden"};switch(f?(s.width=`${u.height}px`,s.paddingLeft=0,s.paddingRight=0,s.paddingTop=0,s.paddingBottom=0):(s.paddingLeft=`${u.paddingX}px`,s.paddingRight=`${u.paddingX}px`,s.paddingTop=`${u.paddingY}px`,s.paddingBottom=`${u.paddingY}px`),r){case"Filled":return{...s,backgroundColor:d?t.background("filledDisabled",l):L?t.background("filledPressed",l):t.background("filledNormal",l),color:t.text("filledText",l),opacity:d?.5:1};case"Tonal":return{...s,backgroundColor:d?t.background("tonalDisabled",l):L?t.background("tonalPressed",l):t.background("tonalNormal",l),color:t.text("tonalText",l),opacity:d?.5:1};case"Link":return{...s,backgroundColor:"transparent",color:d?t.text("linkDisabled",l):L?t.text("linkPressed",l):t.text("linkNormal",l),textDecoration:"underline",textUnderlineOffset:`${a.spacing.spacing2}px`,opacity:d?.5:1};case"Stroke":return{...s,backgroundColor:"transparent",border:`1px solid ${d?t.border("strokeDisabled",l):L?t.border("strokePressed",l):t.border("strokeNormal",l)}`,color:d?t.text("strokeDisabled",l):L?t.text("strokePressed",l):t.text("strokeNormal",l),opacity:d?.5:1};default:return s}},le=()=>{if(!c&&o==="None")return null;const s={width:`${u.iconSize}px`,height:`${u.iconSize}px`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return c?e.jsx("span",{style:s,"aria-hidden":"true",children:c}):e.jsx("span",{style:{...s,backgroundColor:"currentColor",borderRadius:"2px",opacity:.6},"aria-hidden":"true"})},re=()=>{const s=Math.max(4,Math.min(8,u.iconSize*.3)),x=Math.max(2,s*.5);let D;if(r==="Filled"){const g=t.text("filledText",l);D=[g,g,g,g,g]}else{const g=t.brandColours("brandDarkBlue",l),M=t.brandColours("brandBlue",l);D=[g,g,g,M,M]}return e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:`${x}px`,height:`${u.iconSize}px`},"aria-hidden":"true",children:[0,1,2,3,4].map(g=>e.jsx("span",{style:{width:`${s}px`,height:`${s}px`,borderRadius:"50%",backgroundColor:D[g],animation:"dotPulse 1.4s ease-in-out infinite",animationDelay:`${g*.16}s`}},g))})},de=()=>{if(b)return e.jsxs(e.Fragment,{children:[re(),e.jsx("span",{className:"sr-only",children:f&&k?`Loading: ${k}`:"Loading"})]});const s=le();if(f)return e.jsxs(e.Fragment,{children:[s,e.jsx("span",{className:"sr-only",children:k})]});const x=[];return o==="Leading"&&s&&x.push(s),n&&x.push(e.jsx("span",{children:n},"label")),o==="Trailing"&&s&&x.push(s),x};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),e.jsx("button",{type:"button",onClick:d||b?void 0:te,onMouseDown:d||b?void 0:()=>S(!0),onMouseUp:d||b?void 0:()=>S(!1),onMouseLeave:d||b?void 0:()=>S(!1),onTouchStart:d||b?void 0:()=>S(!0),onTouchEnd:d||b?void 0:()=>S(!1),style:oe(),className:se,disabled:d||b,"aria-label":f?k:void 0,"aria-busy":b,"aria-pressed":P&&!d&&!b?!0:void 0,"aria-disabled":d,title:f?k:void 0,children:de()})]})};y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'Filled' | 'Tonal' | 'Link' | 'Stroke'",elements:[{name:"literal",value:"'Filled'"},{name:"literal",value:"'Tonal'"},{name:"literal",value:"'Link'"},{name:"literal",value:"'Stroke'"}]},description:"",defaultValue:{value:"'Filled'",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'None' | 'Leading' | 'Trailing' | 'Only'",elements:[{name:"literal",value:"'None'"},{name:"literal",value:"'Leading'"},{name:"literal",value:"'Trailing'"},{name:"literal",value:"'Only'"}]},description:"",defaultValue:{value:"'None'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'Large' | 'Medium' | 'Small' | 'Extra Small'",elements:[{name:"literal",value:"'Large'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Small'"},{name:"literal",value:"'Extra Small'"}]},description:"",defaultValue:{value:"'Large'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'Normal' | 'Pressed' | 'Loading' | 'Disabled'",elements:[{name:"literal",value:"'Normal'"},{name:"literal",value:"'Pressed'"},{name:"literal",value:"'Loading'"},{name:"literal",value:"'Disabled'"}]},description:"",defaultValue:{value:"'Normal'",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},mode:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const I=({children:n,mode:i})=>e.jsx("div",{style:{padding:`${a.spacing.spacing48Sections}px`,backgroundColor:t.surface("level1",i),minHeight:"100vh",transition:"background-color 0.3s ease"},children:n}),v=()=>e.jsx("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor","aria-hidden":"true",children:e.jsx("circle",{cx:"10",cy:"10",r:"6"})}),be={title:"Components/Button",component:y,parameters:{layout:"padded",docs:{description:{component:`
The Button component is a versatile, accessible button that supports multiple types, sizes, states, and icon positions. 
All styling is driven by design tokens, ensuring consistency across the design system.

## Design Tokens
- **Colors**: Uses semantic color tokens with automatic light/dark theme support
- **Spacing**: Uses number tokens for padding, gaps, and margins
- **Typography**: Uses typography tokens for font size, weight, and line height
- **Radius**: Uses fully rounded radius token (200px) for pill-shaped buttons

## Usage
Buttons are used for primary actions, secondary actions, navigation, and form submissions.
        `}}},tags:[],argTypes:{showLabel:{control:"boolean",description:"Toggle label visibility without changing the label text",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showIcon:{control:"boolean",description:"Toggle icon rendering",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{control:"text",description:"Button label text",table:{type:{summary:"string"},defaultValue:{summary:"undefined"}}},type:{control:"select",options:["Filled","Tonal","Link","Stroke"],description:"Button type variant",table:{type:{summary:"ButtonType"},defaultValue:{summary:"Filled"}}},size:{control:"select",options:["Large","Medium","Small","Extra Small"],description:"Button size",table:{type:{summary:"ButtonSize"},defaultValue:{summary:"Large"}}},state:{control:"select",options:["Normal","Pressed","Disabled","Loading"],description:"Button state",table:{type:{summary:"ButtonState"},defaultValue:{summary:"Normal"}}},iconPosition:{control:"select",options:["None","Leading","Trailing","Only"],description:"Icon position relative to label",table:{type:{summary:"IconPosition"},defaultValue:{summary:"None"}}},mode:{control:"select",options:["light","dark"],description:"Theme mode (light or dark)",table:{type:{summary:"ThemeMode"},defaultValue:{summary:"light"}}},onClick:{action:"clicked",description:"Click handler function"}},args:{onClick:()=>{},label:"Label",showLabel:!0,showIcon:!1,type:"Filled",size:"Large",state:"Normal",iconPosition:"None",mode:"light"},decorators:[(n,i)=>{const r=i.args.mode||"light";return e.jsx(I,{mode:r,children:e.jsx(n,{})})}]},B={render:n=>{const i=n.showLabel?n.label:void 0,r=n.showIcon?e.jsx(v,{}):void 0,o=n.iconPosition==="Only"&&!i?"Button":void 0;return e.jsx(y,{...n,label:i,icon:r,ariaLabel:o})},args:{label:"Button",type:"Filled",size:"Large",state:"Normal"}},w={args:{label:"a",state:"Loading"},render:n=>{const[i,r]=N.useState("light"),o=["Filled","Tonal","Link","Stroke"],p=n.showLabel?n.label:void 0,h=n.showIcon?e.jsx(v,{}):void 0;return e.jsxs(I,{mode:i,children:[e.jsx("div",{style:{marginBottom:`${a.spacing.spacing24}px`},children:e.jsxs("button",{onClick:()=>r(i==="light"?"dark":"light"),style:{padding:`${a.spacing.spacing8}px ${a.spacing.spacing16CardDefault}px`,backgroundColor:t.background("filledNormal",i),color:t.text("filledText",i),border:"none",borderRadius:`${a.radius.radius8}px`,cursor:"pointer",marginBottom:`${a.spacing.spacing16CardDefault}px`},children:["Toggle Theme: ",i==="light"?"🌙 Dark":"☀️ Light"]})}),e.jsx("div",{style:{display:"flex",gap:`${a.spacing.spacing16CardDefault}px`,flexWrap:"wrap"},children:o.map(c=>e.jsx(y,{...n,type:c,label:p?c:void 0,icon:h,mode:i},c))})]})},parameters:{docs:{description:{story:"All button types: Filled (primary), Tonal (secondary), Link (text), and Stroke (outlined)."}}}},T={render:n=>{const i=["Large","Medium","Small","Extra Small"],r=n.showLabel?n.label:void 0,o=n.showIcon?e.jsx(v,{}):void 0;return e.jsx("div",{style:{display:"flex",gap:`${a.spacing.spacing16CardDefault}px`,alignItems:"center",flexWrap:"wrap"},children:i.map(p=>e.jsx(y,{...n,size:p,label:r?p:void 0,icon:o},p))})},parameters:{docs:{description:{story:"All button sizes from Large (52px height) to Extra Small (24px height)."}}}},z={args:{label:"Hello",type:"Link"},render:n=>{const i=["Normal","Pressed","Disabled","Loading"],r=n.showLabel?n.label:void 0,o=n.showIcon?e.jsx(v,{}):void 0;return e.jsx("div",{style:{display:"flex",gap:`${a.spacing.spacing16CardDefault}px`,flexWrap:"wrap"},children:i.map(p=>e.jsx(y,{...n,state:p,label:r?p:void 0,icon:o},p))})},parameters:{docs:{description:{story:"Button states: Normal (default), Pressed (active), Disabled (unavailable), and Loading (async action)."}}}},$={render:n=>{const i=["None","Leading","Trailing","Only"],r=n.showLabel?n.label:void 0;return e.jsx("div",{style:{display:"flex",gap:`${a.spacing.spacing16CardDefault}px`,alignItems:"center",flexWrap:"wrap"},children:i.map(o=>e.jsx(y,{...n,iconPosition:o,label:o==="Only"?void 0:r||"Button",icon:n.showIcon?e.jsx(v,{}):void 0,ariaLabel:o==="Only"?r||"Button":void 0},o))})},parameters:{docs:{description:{story:"Icon positions: None (no icon), Leading (before text), Trailing (after text), and Only (icon-only button)."}}}},C={render:()=>{const[n,i]=N.useState("light"),r=["Filled","Tonal","Link","Stroke"],o=["Large","Medium","Small","Extra Small"],p=["Normal","Pressed","Disabled","Loading"];return e.jsxs(I,{mode:n,children:[e.jsx("div",{style:{marginBottom:`${a.spacing.spacing32}px`},children:e.jsxs("button",{onClick:()=>i(n==="light"?"dark":"light"),style:{padding:`${a.spacing.spacing8}px ${a.spacing.spacing16CardDefault}px`,backgroundColor:t.background("filledNormal",n),color:t.text("filledText",n),border:"none",borderRadius:`${a.radius.radius8}px`,cursor:"pointer"},children:["Toggle Theme: ",n==="light"?"🌙 Dark":"☀️ Light"]})}),r.map(h=>e.jsxs("div",{style:{marginBottom:`${a.spacing.spacing48Sections}px`},children:[e.jsxs("h2",{style:{color:t.text("neutralStrong",n),marginBottom:`${a.spacing.spacing24}px`},children:[h," Buttons"]}),e.jsxs("div",{style:{marginBottom:`${a.spacing.spacing24}px`},children:[e.jsx("h3",{style:{color:t.text("neutralModerate",n),marginBottom:`${a.spacing.spacing16CardDefault}px`,fontSize:"14px"},children:"States"}),e.jsx("div",{style:{display:"flex",gap:`${a.spacing.spacing16CardDefault}px`,flexWrap:"wrap"},children:p.map(c=>e.jsx(y,{type:h,size:"Large",state:c,label:c,mode:n},c))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:t.text("neutralModerate",n),marginBottom:`${a.spacing.spacing16CardDefault}px`,fontSize:"14px"},children:"Sizes"}),e.jsx("div",{style:{display:"flex",gap:`${a.spacing.spacing16CardDefault}px`,alignItems:"center",flexWrap:"wrap"},children:o.map(c=>e.jsx(y,{type:h,size:c,label:c,mode:n},c))})]})]},h))]})},parameters:{layout:"fullscreen",docs:{description:{story:"Comprehensive showcase of all button variants, types, sizes, and states with theme switching."}}}},j={render:n=>{const i=n.showLabel?n.label:void 0,r=n.showIcon?e.jsx(v,{}):void 0,o=n.iconPosition==="Only"&&!i?"Button":void 0;return e.jsx(y,{...n,label:i,icon:r,ariaLabel:o})},args:{label:"Button",type:"Filled",size:"Large",state:"Normal",iconPosition:"None",mode:"light",showLabel:!0,showIcon:!1},parameters:{docs:{description:{story:"Interactive playground to test all button properties. Use the controls panel to modify properties."}}}};var R,F,W;B.parameters={...B.parameters,docs:{...(R=B.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => {
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    const ariaLabel = args.iconPosition === 'Only' && !label ? 'Button' : undefined;
    return <Button {...args} label={label} icon={icon} ariaLabel={ariaLabel} />;
  },
  args: {
    label: 'Button',
    type: 'Filled',
    size: 'Large',
    state: 'Normal'
  }
}`,...(W=(F=B.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var O,E,V;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "a",
    state: "Loading"
  },
  render: args => {
    const [mode, setMode] = useState<ThemeMode>('light');
    const types: ButtonType[] = ['Filled', 'Tonal', 'Link', 'Stroke'];
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    return <ThemeWrapper mode={mode}>
        <div style={{
        marginBottom: \`\${numberSemantics.spacing.spacing24}px\`
      }}>
          <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} style={{
          padding: \`\${numberSemantics.spacing.spacing8}px \${numberSemantics.spacing.spacing16CardDefault}px\`,
          backgroundColor: themeResolvers.background('filledNormal', mode),
          color: themeResolvers.text('filledText', mode),
          border: 'none',
          borderRadius: \`\${numberSemantics.radius.radius8}px\`,
          cursor: 'pointer',
          marginBottom: \`\${numberSemantics.spacing.spacing16CardDefault}px\`
        }}>
            Toggle Theme: {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <div style={{
        display: 'flex',
        gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
        flexWrap: 'wrap'
      }}>
          {types.map(type => <Button key={type} {...args} type={type} label={label ? type : undefined} icon={icon} mode={mode} />)}
        </div>
      </ThemeWrapper>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All button types: Filled (primary), Tonal (secondary), Link (text), and Stroke (outlined).'
      }
    }
  }
}`,...(V=(E=w.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var A,H,q;T.parameters={...T.parameters,docs:{...(A=T.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const sizes: ButtonSize[] = ['Large', 'Medium', 'Small', 'Extra Small'];
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    return <div style={{
      display: 'flex',
      gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        {sizes.map(size => <Button key={size} {...args} size={size} label={label ? size : undefined} icon={icon} />)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All button sizes from Large (52px height) to Extra Small (24px height).'
      }
    }
  }
}`,...(q=(H=T.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var U,X,Y;z.parameters={...z.parameters,docs:{...(U=z.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Hello",
    type: "Link"
  },
  render: args => {
    const states: ButtonState[] = ['Normal', 'Pressed', 'Disabled', 'Loading'];
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    return <div style={{
      display: 'flex',
      gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
      flexWrap: 'wrap'
    }}>
        {states.map(state => <Button key={state} {...args} state={state} label={label ? state : undefined} icon={icon} />)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Button states: Normal (default), Pressed (active), Disabled (unavailable), and Loading (async action).'
      }
    }
  }
}`,...(Y=(X=z.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var _,G,J;$.parameters={...$.parameters,docs:{...(_=$.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const positions: IconPosition[] = ['None', 'Leading', 'Trailing', 'Only'];
    const label = args.showLabel ? args.label : undefined;
    return <div style={{
      display: 'flex',
      gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        {positions.map(position => <Button key={position} {...args} iconPosition={position} label={position === 'Only' ? undefined : label || 'Button'} icon={args.showIcon ? <PlaceholderIcon /> : undefined} ariaLabel={position === 'Only' ? label || 'Button' : undefined} />)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon positions: None (no icon), Leading (before text), Trailing (after text), and Only (icon-only button).'
      }
    }
  }
}`,...(J=(G=$.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Z;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState<ThemeMode>('light');
    const types: ButtonType[] = ['Filled', 'Tonal', 'Link', 'Stroke'];
    const sizes: ButtonSize[] = ['Large', 'Medium', 'Small', 'Extra Small'];
    const states: ButtonState[] = ['Normal', 'Pressed', 'Disabled', 'Loading'];
    return <ThemeWrapper mode={mode}>
        <div style={{
        marginBottom: \`\${numberSemantics.spacing.spacing32}px\`
      }}>
          <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} style={{
          padding: \`\${numberSemantics.spacing.spacing8}px \${numberSemantics.spacing.spacing16CardDefault}px\`,
          backgroundColor: themeResolvers.background('filledNormal', mode),
          color: themeResolvers.text('filledText', mode),
          border: 'none',
          borderRadius: \`\${numberSemantics.radius.radius8}px\`,
          cursor: 'pointer'
        }}>
            Toggle Theme: {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        
        {types.map(type => <div key={type} style={{
        marginBottom: \`\${numberSemantics.spacing.spacing48Sections}px\`
      }}>
            <h2 style={{
          color: themeResolvers.text('neutralStrong', mode),
          marginBottom: \`\${numberSemantics.spacing.spacing24}px\`
        }}>
              {type} Buttons
            </h2>
            
            {/* States */}
            <div style={{
          marginBottom: \`\${numberSemantics.spacing.spacing24}px\`
        }}>
              <h3 style={{
            color: themeResolvers.text('neutralModerate', mode),
            marginBottom: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
            fontSize: '14px'
          }}>
                States
              </h3>
              <div style={{
            display: 'flex',
            gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
            flexWrap: 'wrap'
          }}>
                {states.map(state => <Button key={state} type={type} size="Large" state={state} label={state} mode={mode} />)}
              </div>
            </div>
            
            {/* Sizes */}
            <div>
              <h3 style={{
            color: themeResolvers.text('neutralModerate', mode),
            marginBottom: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
            fontSize: '14px'
          }}>
                Sizes
              </h3>
              <div style={{
            display: 'flex',
            gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
                {sizes.map(size => <Button key={size} type={type} size={size} label={size} mode={mode} />)}
              </div>
            </div>
          </div>)}
      </ThemeWrapper>;
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Comprehensive showcase of all button variants, types, sizes, and states with theme switching.'
      }
    }
  }
}`,...(Z=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,ne,ae;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    const label = args.showLabel ? args.label : undefined;
    const icon = args.showIcon ? <PlaceholderIcon /> : undefined;
    const ariaLabel = args.iconPosition === 'Only' && !label ? 'Button' : undefined;
    return <Button {...args} label={label} icon={icon} ariaLabel={ariaLabel} />;
  },
  args: {
    label: 'Button',
    type: 'Filled',
    size: 'Large',
    state: 'Normal',
    iconPosition: 'None',
    mode: 'light',
    showLabel: true,
    showIcon: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all button properties. Use the controls panel to modify properties.'
      }
    }
  }
}`,...(ae=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const ye=["Default","AllTypes","AllSizes","AllStates","IconPositions","Showcase","Playground"];export{T as AllSizes,z as AllStates,w as AllTypes,B as Default,$ as IconPositions,j as Playground,C as Showcase,ye as __namedExportsOrder,be as default};
