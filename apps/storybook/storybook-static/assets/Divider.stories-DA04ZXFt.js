import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";var r=e(t(),1),i=n(),a=e=>/^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(e)),o=e=>{if(e!==void 0)return a(e)?`var(--beast-space-${e})`:String(e)},s=(0,r.forwardRef)(({orientation:e=`horizontal`,variant:t=`solid`,color:n=`border`,spacing:r,className:a,style:s,...c},l)=>{let u=o(r),d={...s,borderStyle:t,borderColor:`var(--beast-color-${n})`,...e===`horizontal`?{borderWidth:`0 0 1px 0`,width:`100%`,marginTop:u,marginBottom:u}:{borderWidth:`0 0 0 1px`,height:`100%`,display:`inline-block`,marginLeft:u,marginRight:u}};return(0,i.jsx)(`hr`,{ref:l,className:[`beast-divider`,a].filter(Boolean).join(` `),style:d,role:`separator`,"aria-orientation":e,...c})});s.displayName=`Divider`,s.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'solid' | 'dashed'`,elements:[{name:`literal`,value:`'solid'`},{name:`literal`,value:`'dashed'`}]},description:``,defaultValue:{value:`'solid'`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'border'`,computed:!1}},spacing:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``}}};var c={title:`Display/Divider`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},l={render:()=>(0,i.jsxs)(`div`,{style:{width:`300px`},children:[(0,i.jsx)(`p`,{children:`Above`}),(0,i.jsx)(s,{}),(0,i.jsx)(`p`,{children:`Below`})]})},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,height:`50px`,alignItems:`center`},children:[(0,i.jsx)(`p`,{children:`Left`}),(0,i.jsx)(s,{orientation:`vertical`,style:{height:`100%`}}),(0,i.jsx)(`p`,{children:`Right`})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>
      <p>Above</p>
      <Divider />
      <p>Below</p>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: '50px',
    alignItems: 'center'
  }}>
      <p>Left</p>
      <Divider orientation="vertical" style={{
      height: '100%'
    }} />
      <p>Right</p>
    </div>
}`,...u.parameters?.docs?.source}}};var d=[`Horizontal`,`Vertical`];export{l as Horizontal,u as Vertical,d as __namedExportsOrder,c as default};