import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./react-dom-CDz2rB-f.js";var i=e(t(),1),a=e(r(),1),o=n(),s=()=>`tooltip-${Math.random().toString(36).slice(2,11)}`,c=({content:e,delay:t=200,arrow:n=!1,children:r})=>{let[c,l]=(0,i.useState)(!1),[u]=(0,i.useState)(s),d=(0,i.useRef)(null),f=()=>{d.current&&=(clearTimeout(d.current),null)},p=(0,i.useCallback)(()=>{f(),d.current=setTimeout(()=>{l(!0)},t)},[t]),m=(0,i.useCallback)(()=>{f(),l(!1)},[]);(0,i.useEffect)(()=>()=>{f()},[]);let h={onMouseEnter:e=>{p();let t=r.props;t.onMouseEnter&&t.onMouseEnter(e)},onMouseLeave:e=>{m();let t=r.props;t.onMouseLeave&&t.onMouseLeave(e)},onFocus:e=>{p();let t=r.props;t.onFocus&&t.onFocus(e)},onBlur:e=>{m();let t=r.props;t.onBlur&&t.onBlur(e)},"aria-describedby":c?u:void 0};return(0,o.jsxs)(o.Fragment,{children:[i.cloneElement(r,h),c&&(0,a.createPortal)((0,o.jsxs)(`div`,{id:u,role:`tooltip`,className:`beast-tooltip`,style:{position:`absolute`,zIndex:1e3,backgroundColor:`var(--beast-color-surface-variant)`,color:`var(--beast-color-on-surface)`,padding:`var(--beast-space-2) var(--beast-space-4)`,borderRadius:`var(--beast-radius-md)`,fontSize:`var(--beast-font-size-sm)`},children:[e,n&&(0,o.jsx)(`div`,{className:`beast-tooltip-arrow`})]}),document.body)]})};c.__docgenInfo={description:``,methods:[],displayName:`Tooltip`,props:{content:{required:!0,tsType:{name:`ReactNode`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:``},delay:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},arrow:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactElement`,raw:`React.ReactElement`},description:``}}};var l={title:`Display/Tooltip`,component:c,parameters:{layout:`centered`},tags:[`autodocs`]},u={args:{content:`This is a tooltip`,children:(0,o.jsx)(`button`,{children:`Hover me`})}},d={args:{content:``,children:(0,o.jsx)(`button`,{})},render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,o.jsx)(c,{content:`Top`,position:`top`,children:(0,o.jsx)(`button`,{children:`Top`})}),(0,o.jsx)(c,{content:`Bottom`,position:`bottom`,children:(0,o.jsx)(`button`,{children:`Bottom`})}),(0,o.jsx)(c,{content:`Left`,position:`left`,children:(0,o.jsx)(`button`,{children:`Left`})}),(0,o.jsx)(c,{content:`Right`,position:`right`,children:(0,o.jsx)(`button`,{children:`Right`})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <button>Hover me</button>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: '',
    children: <button />
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <Tooltip content="Top" position="top"><button>Top</button></Tooltip>
      <Tooltip content="Bottom" position="bottom"><button>Bottom</button></Tooltip>
      <Tooltip content="Left" position="left"><button>Left</button></Tooltip>
      <Tooltip content="Right" position="right"><button>Right</button></Tooltip>
    </div>
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Placements`];export{u as Default,d as Placements,f as __namedExportsOrder,l as default};