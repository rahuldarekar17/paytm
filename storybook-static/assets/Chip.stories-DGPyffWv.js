import{j as a}from"./jsx-runtime-CIOfmAEN.js";import{t as r,r as le}from"./iframe-CmJvfGYo.js";import{n as i,t as d}from"./typography-D41dN3wn.js";import"./preload-helper-C1FmrZbK.js";const re={Small:{height:32,paddingX:i.spacing.spacing16CardDefault,paddingY:i.spacing.spacing8,font:d.subtextMedium,fontSelected:d.subtextSemiBold,iconSize:20,gap:i.spacing.spacing6},Medium:{height:36,paddingX:i.spacing.spacing16CardDefault,paddingY:i.spacing.spacing8,font:d.bodyMedium,fontSelected:d.bodySemiBold,iconSize:20,gap:i.spacing.spacing6},Large:{height:40,paddingX:i.spacing.spacing16CardDefault,paddingY:i.spacing.spacing8,font:d.title4Medium,fontSelected:d.title4SemiBold,iconSize:20,gap:i.spacing.spacing6}},k=(e,n)=>{if(!e.startsWith("#"))return e;let t=e.replace("#","");if(t.length===3&&(t=t.split("").map(g=>g+g).join("")),t.length!==6)return e;const l=parseInt(t.slice(0,2),16),m=parseInt(t.slice(2,4),16),b=parseInt(t.slice(4,6),16);return`rgba(${l}, ${m}, ${b}, ${n})`},c=({label:e,ariaLabel:n,size:t="Small",variant:l="Default",iconLeading:m,iconTrailing:b,badge:g,iconLeadingVisible:_,iconTrailingVisible:E,badgeVisible:F,onClick:G,mode:s="light",className:O=""})=>{const o=re[t],p=l==="Disabled",u=l==="Selected"||l==="Primary Action",T=l==="Default"||l==="Secondary Action",$=n??e,J=_??!!m,K=E??!!b,Q=F??g!=null,L=p?r.text("neutralWeak",s):u?r.text("neutralStrong",s):r.text("neutralModerate",s),U=u?r.border("primaryStrong",s):p?r.border("neutralWeak",s):r.glass("tintedL4",s),Z=`linear-gradient(153deg, ${k(r.surface("level2",s),.82)} 0%, ${k(r.surface("level4",s),.82)} 100%)`,ee=`linear-gradient(112deg, ${r.background("offset3",s)} 0%, ${r.background("primaryWeak",s)} 100%)`,ae=u?ee:T?Z:void 0,ie=u?"0px 1px 10px 0px rgba(16, 16, 16, 0.22)":T?"0px 1px 4px 0px rgba(16, 16, 16, 0.08)":void 0,h=u?o.fontSelected:o.font,w={width:`${o.iconSize}px`,height:`${o.iconSize}px`,display:"flex",alignItems:"center",justifyContent:"center",color:L,flexShrink:0},ne=p?r.background("offset2",s):r.background("offset3",s),te=r.text("neutralModerate",s);return a.jsxs("button",{type:"button",onClick:p?void 0:G,disabled:p,"aria-pressed":u&&!p?!0:void 0,"aria-disabled":p,"aria-label":!e&&$?$:void 0,className:O,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:`${o.gap}px`,height:`${o.height}px`,paddingLeft:`${o.paddingX}px`,paddingRight:`${o.paddingX}px`,paddingTop:`${o.paddingY}px`,paddingBottom:`${o.paddingY}px`,borderRadius:`${i.radius.fullyRounded}px`,border:`1px solid ${U}`,backgroundColor:"transparent",backgroundImage:ae,boxShadow:ie,fontFamily:h.family,fontSize:`${h.size}px`,lineHeight:`${h.lineHeight}px`,fontWeight:h.weight,color:L,cursor:p?"not-allowed":"pointer",transition:"all 0.2s ease"},children:[J&&m&&a.jsx("span",{style:w,"aria-hidden":"true",children:m}),e&&a.jsx("span",{children:e}),K&&b&&a.jsx("span",{style:w,"aria-hidden":"true",children:b}),Q&&g!=null&&a.jsx("span",{style:{minWidth:`${i.spacing.spacing8*2}px`,minHeight:`${i.spacing.spacing8*2}px`,paddingLeft:`${i.spacing.spacing4}px`,paddingRight:`${i.spacing.spacing4}px`,paddingTop:`${i.spacing.spacing2}px`,paddingBottom:`${i.spacing.spacing2}px`,borderRadius:`${i.radius.radius16}px`,backgroundColor:ne,display:"inline-flex",alignItems:"center",justifyContent:"center",color:te,fontFamily:d.subtextMedium.family,fontSize:`${d.subtextMedium.size}px`,lineHeight:`${d.subtextMedium.lineHeight}px`,fontWeight:d.subtextMedium.weight},children:g})]})};c.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'Small' | 'Medium' | 'Large'",elements:[{name:"literal",value:"'Small'"},{name:"literal",value:"'Medium'"},{name:"literal",value:"'Large'"}]},description:"",defaultValue:{value:"'Small'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| 'Default'
| 'Selected'
| 'Disabled'
| 'Primary Action'
| 'Secondary Action'`,elements:[{name:"literal",value:"'Default'"},{name:"literal",value:"'Selected'"},{name:"literal",value:"'Disabled'"},{name:"literal",value:"'Primary Action'"},{name:"literal",value:"'Secondary Action'"}]},description:"",defaultValue:{value:"'Default'",computed:!1}},iconLeading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconTrailing:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},badge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},iconLeadingVisible:{required:!1,tsType:{name:"boolean"},description:""},iconTrailingVisible:{required:!1,tsType:{name:"boolean"},description:""},badgeVisible:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},mode:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Y=({children:e,mode:n})=>a.jsx("div",{style:{padding:`${i.spacing.spacing48Sections}px`,backgroundColor:r.surface("level1",n),minHeight:"100vh",transition:"background-color 0.3s ease"},children:e}),f=()=>a.jsx("svg",{viewBox:"0 0 20 20",width:"20",height:"20",fill:"currentColor","aria-hidden":"true",children:a.jsx("circle",{cx:"10",cy:"10",r:"6"})}),pe={title:"Components/Chip",component:c,parameters:{layout:"padded",docs:{description:{component:`
The Chip component supports small, medium, and large sizes with default, selected, and disabled variants. 
Styles are derived from semantic color, spacing, and typography tokens.
        `}}},argTypes:{showLabel:{control:"boolean",description:"Toggle label visibility without changing the label text",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},label:{control:"text",description:"Chip label text",table:{type:{summary:"string"}}},size:{control:"select",options:["Small","Medium","Large"],description:"Chip size",table:{type:{summary:"ChipSize"},defaultValue:{summary:"Small"}}},variant:{control:"select",options:["Default","Selected","Disabled","Primary Action","Secondary Action"],description:"Chip variant",table:{type:{summary:"ChipVariant"},defaultValue:{summary:"Default"}}},mode:{control:"select",options:["light","dark"],description:"Theme mode (light or dark)",table:{type:{summary:"ThemeMode"},defaultValue:{summary:"light"}}},iconLeading:{control:!1},iconTrailing:{control:!1},badge:{control:!1},onClick:{action:"clicked"}},args:{label:"Label",size:"Small",variant:"Default",mode:"light",showLabel:!0},decorators:[(e,n)=>{const t=n.args.mode||"light";return a.jsx(Y,{mode:t,children:a.jsx(e,{})})}]},x={},y={render:e=>{const n=["Default","Selected","Disabled"],t=e.showLabel?e.label:void 0;return a.jsx("div",{style:{display:"flex",gap:`${i.spacing.spacing16CardDefault}px`,flexWrap:"wrap"},children:n.map(l=>a.jsx(c,{...e,variant:l,label:t?l:void 0},l))})}},v={render:e=>{const n=["Small","Medium","Large"],t=e.showLabel?e.label:void 0;return a.jsx("div",{style:{display:"flex",gap:`${i.spacing.spacing16CardDefault}px`,flexWrap:"wrap"},children:n.map(l=>a.jsx(c,{...e,size:l,label:t?l:void 0},l))})}},S={render:e=>{const n=e.showLabel?e.label:void 0;return a.jsxs("div",{style:{display:"flex",gap:`${i.spacing.spacing16CardDefault}px`,flexWrap:"wrap"},children:[a.jsx(c,{...e,label:n?"Leading":void 0,iconLeadingVisible:!0,iconLeading:a.jsx(f,{})}),a.jsx(c,{...e,label:n?"Trailing":void 0,iconTrailingVisible:!0,iconTrailing:a.jsx(f,{})}),a.jsx(c,{...e,label:n?"Badge":void 0,badgeVisible:!0,badge:"3"}),a.jsx(c,{...e,label:n?"All":void 0,iconLeadingVisible:!0,iconLeading:a.jsx(f,{}),iconTrailingVisible:!0,iconTrailing:a.jsx(f,{}),badgeVisible:!0,badge:"3"})]})}},C={render:e=>{const[n,t]=le.useState("light"),l=e.showLabel?e.label:void 0;return a.jsxs(Y,{mode:n,children:[a.jsx("div",{style:{marginBottom:`${i.spacing.spacing24}px`},children:a.jsxs("button",{onClick:()=>t(n==="light"?"dark":"light"),style:{padding:`${i.spacing.spacing8}px ${i.spacing.spacing16CardDefault}px`,backgroundColor:r.background("filledNormal",n),color:r.text("filledText",n),border:"none",borderRadius:`${i.radius.radius8}px`,cursor:"pointer"},children:["Toggle Theme: ",n==="light"?"🌙 Dark":"☀️ Light"]})}),a.jsx(c,{...e,mode:n,label:l})]})},args:{label:"Chip",showLabel:!0}};var j,D,V;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:"{}",...(V=(D=x.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var z,R,M;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const variants: ChipVariant[] = ['Default', 'Selected', 'Disabled'];
    const label = args.showLabel ? args.label : undefined;
    return <div style={{
      display: 'flex',
      gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
      flexWrap: 'wrap'
    }}>
        {variants.map(variant => <Chip key={variant} {...args} variant={variant} label={label ? variant : undefined} />)}
      </div>;
  }
}`,...(M=(R=y.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var I,W,B;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const sizes: ChipSize[] = ['Small', 'Medium', 'Large'];
    const label = args.showLabel ? args.label : undefined;
    return <div style={{
      display: 'flex',
      gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
      flexWrap: 'wrap'
    }}>
        {sizes.map(size => <Chip key={size} {...args} size={size} label={label ? size : undefined} />)}
      </div>;
  }
}`,...(B=(W=v.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var q,A,N;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const label = args.showLabel ? args.label : undefined;
    return <div style={{
      display: 'flex',
      gap: \`\${numberSemantics.spacing.spacing16CardDefault}px\`,
      flexWrap: 'wrap'
    }}>
        <Chip {...args} label={label ? "Leading" : undefined} iconLeadingVisible iconLeading={<PlaceholderIcon />} />
        <Chip {...args} label={label ? "Trailing" : undefined} iconTrailingVisible iconTrailing={<PlaceholderIcon />} />
        <Chip {...args} label={label ? "Badge" : undefined} badgeVisible badge="3" />
        <Chip {...args} label={label ? "All" : undefined} iconLeadingVisible iconLeading={<PlaceholderIcon />} iconTrailingVisible iconTrailing={<PlaceholderIcon />} badgeVisible badge="3" />
      </div>;
  }
}`,...(N=(A=S.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var P,H,X;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [mode, setMode] = useState<ThemeMode>('light');
    const label = args.showLabel ? args.label : undefined;
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
          cursor: 'pointer'
        }}>
            Toggle Theme: {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <Chip {...args} mode={mode} label={label} />
      </ThemeWrapper>;
  },
  args: {
    label: 'Chip',
    showLabel: true
  }
}`,...(X=(H=C.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};const ge=["Default","Variants","Sizes","WithIconsAndBadge","Interactive"];export{x as Default,C as Interactive,v as Sizes,y as Variants,S as WithIconsAndBadge,ge as __namedExportsOrder,pe as default};
