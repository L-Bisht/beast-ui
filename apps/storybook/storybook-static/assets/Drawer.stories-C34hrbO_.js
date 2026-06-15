import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Surface-CZ1YDbUI.js";import{o as i,t as a}from"./useOverlayTriggerState-B5m_JbzQ.js";import{i as o}from"./usePreventScroll-mMPzozCa.js";import{n as s,t as c}from"./useModalOverlay-CSdvX9KB.js";import{t as l}from"./Text-CQXSr0Su.js";import{t as u}from"./Button-BhBHpNLp.js";var d=e(t(),1),f={underlay:`_underlay_phd7m_1`,"fade-in":`_fade-in_phd7m_1`,drawer:`_drawer_phd7m_9`,left:`_left_phd7m_18`,"slide-right":`_slide-right_phd7m_1`,right:`_right_phd7m_25`,"slide-left":`_slide-left_phd7m_1`,top:`_top_phd7m_32`,"slide-down":`_slide-down_phd7m_1`,bottom:`_bottom_phd7m_39`,"slide-up":`_slide-up_phd7m_1`,"size-sm":`_size-sm_phd7m_47`,"size-md":`_size-md_phd7m_48`,"size-lg":`_size-lg_phd7m_49`,header:`_header_phd7m_56`,title:`_title_phd7m_64`,content:`_content_phd7m_72`,closeButton:`_closeButton_phd7m_80`,closeButtonAbsolute:`_closeButtonAbsolute_phd7m_80`},p=n(),m=({open:e=!1,onClose:t,title:n,anchor:l=`right`,size:u=`md`,closeOnOverlayClick:m=!0,closeOnEscape:h=!0,children:g,className:_,style:v,...y})=>{let b=a({isOpen:e,onOpenChange:e=>{!e&&t&&t()}}),x=(0,d.useRef)(null),{dialogProps:S,titleProps:C}=s({...y,role:`dialog`},x),{modalProps:w,underlayProps:T}=c({isDismissable:m,isKeyboardDismissDisabled:!h},b,x);if(!b.isOpen)return null;let E=[`sm`,`md`,`lg`].includes(u),D=[`beast-drawer`,f.drawer,`beast-drawer-${l}`,f[l],E&&`beast-drawer-size-${u}`,E&&f[`size-${u}`],_].filter(Boolean).join(` `),O={...v};return E||(l===`left`||l===`right`?O.width=typeof u==`number`?`${u}px`:u:O.height=typeof u==`number`?`${u}px`:u),(0,p.jsx)(o,{children:(0,p.jsx)(`div`,{className:f.underlay,...T,children:(0,p.jsx)(i,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,p.jsxs)(r,{...w,...S,ref:x,className:D,style:Object.keys(O).length>0?O:void 0,elevation:4,radius:`none`,"aria-modal":`true`,children:[n&&(0,p.jsxs)(`div`,{className:`beast-drawer-header ${f.header}`,children:[(0,p.jsx)(`h2`,{...C,className:`beast-drawer-title ${f.title}`,children:n}),t&&(0,p.jsx)(`button`,{type:`button`,className:`beast-drawer-close ${f.closeButton}`,onClick:t,"aria-label":`Close drawer`,children:(0,p.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,p.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,p.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})})]}),!n&&t&&(0,p.jsx)(`button`,{type:`button`,className:`beast-drawer-close ${f.closeButtonAbsolute}`,onClick:t,"aria-label":`Close drawer`,children:(0,p.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,p.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,p.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),(0,p.jsx)(`div`,{className:`beast-drawer-content ${f.content}`,children:g})]})})})})};m.displayName=`Drawer`,m.__docgenInfo={description:``,methods:[],displayName:`Drawer`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`ReactNode`},description:``},anchor:{required:!1,tsType:{name:`union`,raw:`'left' | 'right' | 'top' | 'bottom'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`},{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`}]},description:``,defaultValue:{value:`'right'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg' | string | number`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`string`},{name:`number`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},closeOnEscape:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}},composes:[`AriaDialogProps`]};var h={title:`Overlays/Drawer`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{anchor:{control:`select`,options:[`left`,`right`,`top`,`bottom`]},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},g={render:e=>{let[t,n]=(0,d.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{onClick:()=>{n(!0)},children:`Open Drawer`}),(0,p.jsx)(m,{...e,open:t,onClose:()=>{n(!1)},title:`Navigation Menu`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,marginTop:`16px`},children:[(0,p.jsx)(u,{variant:`soft`,fullWidth:!0,style:{justifyContent:`flex-start`},children:`Dashboard`}),(0,p.jsx)(u,{variant:`soft`,fullWidth:!0,style:{justifyContent:`flex-start`},children:`Profile`}),(0,p.jsx)(u,{variant:`soft`,fullWidth:!0,style:{justifyContent:`flex-start`},children:`Settings`})]})})]})}},_={render:()=>{let[e,t]=(0,d.useState)(null);return(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,p.jsx)(u,{onClick:()=>{t(`left`)},children:`Left`}),(0,p.jsx)(u,{onClick:()=>{t(`right`)},children:`Right`}),(0,p.jsx)(u,{onClick:()=>{t(`top`)},children:`Top`}),(0,p.jsx)(u,{onClick:()=>{t(`bottom`)},children:`Bottom`}),(0,p.jsx)(m,{open:!!e,onClose:()=>{t(null)},anchor:e||`right`,title:`${e?.toUpperCase()} Drawer`,children:(0,p.jsxs)(l,{children:[`Drawer sliding in from the `,e,`.`]})})]})}},v={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{onClick:()=>{t(!0)},children:`Open Custom Size (800px)`}),(0,p.jsx)(m,{open:e,onClose:()=>{t(!1)},title:`Wide Panel`,size:800,children:(0,p.jsx)(l,{children:`This drawer has a custom width of 800px.`})})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>Open Drawer</Button>
        <Drawer {...args} open={open} onClose={() => {
        setOpen(false);
      }} title="Navigation Menu">
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginTop: '16px'
        }}>
            <Button variant="soft" fullWidth style={{
            justifyContent: 'flex-start'
          }}>Dashboard</Button>
            <Button variant="soft" fullWidth style={{
            justifyContent: 'flex-start'
          }}>Profile</Button>
            <Button variant="soft" fullWidth style={{
            justifyContent: 'flex-start'
          }}>Settings</Button>
          </div>
        </Drawer>
      </>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [anchor, setAnchor] = useState<'left' | 'right' | 'top' | 'bottom' | null>(null);
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Button onClick={() => {
        setAnchor('left');
      }}>Left</Button>
        <Button onClick={() => {
        setAnchor('right');
      }}>Right</Button>
        <Button onClick={() => {
        setAnchor('top');
      }}>Top</Button>
        <Button onClick={() => {
        setAnchor('bottom');
      }}>Bottom</Button>
        
        <Drawer open={!!anchor} onClose={() => {
        setAnchor(null);
      }} anchor={anchor || 'right'} title={\`\${anchor?.toUpperCase()} Drawer\`}>
          <Text>Drawer sliding in from the {anchor}.</Text>
        </Drawer>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>Open Custom Size (800px)</Button>
        <Drawer open={open} onClose={() => {
        setOpen(false);
      }} title="Wide Panel" size={800}>
          <Text>This drawer has a custom width of 800px.</Text>
        </Drawer>
      </>;
  }
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`Anchors`,`CustomSize`];export{_ as Anchors,v as CustomSize,g as Default,y as __namedExportsOrder,h as default};