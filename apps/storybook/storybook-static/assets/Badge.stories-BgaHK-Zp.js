import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Frame-OJVaauL9.js";import{t as i}from"./Avatar-DmAVC2T6.js";var a=e(t(),1),o=n(),s=(0,a.forwardRef)(({content:e,variant:t=`standard`,color:n=`primary`,max:i,invisible:a=!1,position:s=`top-right`,children:c,className:l,style:u,...d},f)=>{let p=e;t===`standard`&&typeof e==`number`&&i!==void 0&&e>i&&(p=`${i}+`),t===`dot`&&(p=``);let m={position:`absolute`,zIndex:1,...s.includes(`top`)&&{top:`0px`},...s.includes(`bottom`)&&{bottom:`0px`},...s.includes(`left`)&&{left:`0px`},...s.includes(`right`)&&{right:`0px`},backgroundColor:`var(--beast-color-${n})`,display:a?`none`:`flex`,alignItems:`center`,justifyContent:`center`,...t===`dot`?{width:`8px`,height:`8px`,borderRadius:`50%`}:{padding:`0 4px`,borderRadius:`9999px`,minWidth:`20px`,height:`20px`,fontSize:`12px`,color:`white`},...u};return(0,o.jsxs)(`div`,{style:{position:`relative`,display:`inline-flex`},ref:f,children:[c,!a&&(0,o.jsx)(r,{className:[`beast-badge`,t===`dot`?`beast-badge-dot`:``,l].filter(Boolean).join(` `),style:m,...d,children:p})]})});s.displayName=`Badge`,s.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{content:{required:!1,tsType:{name:`ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'standard' | 'dot'`,elements:[{name:`literal`,value:`'standard'`},{name:`literal`,value:`'dot'`}]},description:``,defaultValue:{value:`'standard'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'danger' | 'warning' | 'success'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'success'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``},invisible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},position:{required:!1,tsType:{name:`union`,raw:`'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'`,elements:[{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'bottom-right'`},{name:`literal`,value:`'bottom-left'`}]},description:``,defaultValue:{value:`'top-right'`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]};var c={title:`Display/Badge`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},l={args:{content:`3`,children:(0,o.jsx)(i,{fallback:`U`})}},u={args:{variant:`dot`,color:`success`,children:(0,o.jsx)(i,{fallback:`U`})}},d={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`24px`},children:[(0,o.jsx)(s,{content:`1`,color:`primary`,children:(0,o.jsx)(i,{fallback:`P`})}),(0,o.jsx)(s,{content:`!`,color:`danger`,children:(0,o.jsx)(i,{fallback:`D`})}),(0,o.jsx)(s,{variant:`dot`,color:`success`,children:(0,o.jsx)(i,{fallback:`S`})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: '3',
    children: <Avatar fallback="U" />
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dot',
    color: 'success',
    children: <Avatar fallback="U" />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <Badge content="1" color="primary"><Avatar fallback="P" /></Badge>
      <Badge content="!" color="danger"><Avatar fallback="D" /></Badge>
      <Badge variant="dot" color="success"><Avatar fallback="S" /></Badge>
    </div>
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Dot`,`Colors`];export{d as Colors,l as Default,u as Dot,f as __namedExportsOrder,c as default};