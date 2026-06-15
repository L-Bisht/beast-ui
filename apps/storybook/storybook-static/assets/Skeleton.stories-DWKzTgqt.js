import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Card-ofzIS5lH.js";var i=e(t(),1),a={container:`_container_gxuru_1`,skeleton:`_skeleton_gxuru_7`,text:`_text_gxuru_13`,circular:`_circular_gxuru_23`,rectangular:`_rectangular_gxuru_27`,pulse:`_pulse_gxuru_32`,wave:`_wave_gxuru_48`,none:`_none_gxuru_81`},o=n(),s=(0,i.forwardRef)(({variant:e=`text`,animation:t=`pulse`,width:n,height:r,lines:i=1,className:c,style:l,...u},d)=>{if(e===`text`&&i>1)return(0,o.jsx)(`div`,{ref:d,className:`beast-skeleton-container ${a.container} ${c||``}`,style:{width:n===void 0?`100%`:n,...l},"aria-hidden":`true`,...u,children:Array.from({length:i}).map((e,n)=>(0,o.jsx)(s,{variant:`text`,animation:t,height:r,style:{width:n===i-1?`60%`:`100%`}},n))});let f=[`beast-skeleton`,a.skeleton,`beast-skeleton-${e}`,a[e],`beast-skeleton-${t}`,a[t],c].filter(Boolean).join(` `),p={...l,...n!==void 0&&{width:typeof n==`number`?`${n}px`:n},...r!==void 0&&{height:typeof r==`number`?`${r}px`:r}};return(0,o.jsx)(`div`,{ref:d,className:f,style:Object.keys(p).length>0?p:void 0,"aria-hidden":`true`,...u})});s.displayName=`Skeleton`,s.__docgenInfo={description:``,methods:[],displayName:`Skeleton`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'text' | 'circular' | 'rectangular'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'circular'`},{name:`literal`,value:`'rectangular'`}]},description:``,defaultValue:{value:`'text'`,computed:!1}},animation:{required:!1,tsType:{name:`union`,raw:`'pulse' | 'wave' | 'none'`,elements:[{name:`literal`,value:`'pulse'`},{name:`literal`,value:`'wave'`},{name:`literal`,value:`'none'`}]},description:``,defaultValue:{value:`'pulse'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},lines:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}}}};var c={title:`Feedback/Skeleton`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`text`,`circular`,`rectangular`]},animation:{control:`select`,options:[`pulse`,`wave`,`none`]},lines:{control:`number`}}},l={args:{variant:`text`,width:200}},u={args:{variant:`circular`,width:48,height:48}},d={args:{variant:`rectangular`,width:300,height:150}},f={args:{variant:`text`,lines:4,width:300}},p={render:()=>(0,o.jsxs)(r,{style:{width:`300px`},padding:`4`,children:[(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`,marginBottom:`16px`},children:[(0,o.jsx)(s,{variant:`circular`,width:48,height:48}),(0,o.jsx)(s,{variant:`text`,lines:2,width:150})]}),(0,o.jsx)(s,{variant:`rectangular`,height:120,style:{marginBottom:`16px`}}),(0,o.jsx)(s,{variant:`text`,lines:3})]})},m={args:{variant:`text`,lines:3,width:300,animation:`wave`}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    width: 200
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 48,
    height: 48
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 300,
    height: 150
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 4,
    width: 300
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '300px'
  }} padding="4">
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    }}>
        <Skeleton variant="circular" width={48} height={48} />
        <Skeleton variant="text" lines={2} width={150} />
      </div>
      <Skeleton variant="rectangular" height={120} style={{
      marginBottom: '16px'
    }} />
      <Skeleton variant="text" lines={3} />
    </Card>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    lines: 3,
    width: 300,
    animation: 'wave'
  }
}`,...m.parameters?.docs?.source}}};var h=[`Text`,`Circular`,`Rectangular`,`MultiLineText`,`CardPlaceholder`,`WaveAnimation`];export{p as CardPlaceholder,u as Circular,f as MultiLineText,d as Rectangular,l as Text,m as WaveAnimation,h as __namedExportsOrder,c as default};