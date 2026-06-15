import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Surface-CZ1YDbUI.js";import{o as i,t as a}from"./useOverlayTriggerState-B5m_JbzQ.js";import{i as o}from"./usePreventScroll-mMPzozCa.js";import{n as s,t as c}from"./useModalOverlay-CSdvX9KB.js";import{t as l}from"./Text-CQXSr0Su.js";import{t as u}from"./Button-BhBHpNLp.js";var d=e(t(),1),f={underlay:`_underlay_1s1jj_1`,"fade-in":`_fade-in_1s1jj_1`,dialog:`_dialog_1s1jj_13`,"zoom-in":`_zoom-in_1s1jj_1`,title:`_title_1s1jj_22`,description:`_description_1s1jj_31`,content:`_content_1s1jj_38`,closeButton:`_closeButton_1s1jj_43`,sm:`_sm_1s1jj_72`,md:`_md_1s1jj_75`,lg:`_lg_1s1jj_78`,fullscreen:`_fullscreen_1s1jj_81`},p=n(),m=({open:e=!1,onClose:t,title:n,description:l,size:u=`md`,closeOnOverlayClick:m=!0,closeOnEscape:h=!0,children:g,className:_,style:v,...y})=>{let b=a({isOpen:e,onOpenChange:e=>{!e&&t&&t()}}),x=(0,d.useRef)(null),S=d.useId(),{dialogProps:C,titleProps:w}=s({...y,role:`dialog`,"aria-describedby":l?S:void 0},x),{modalProps:T,underlayProps:E}=c({isDismissable:m,isKeyboardDismissDisabled:!h},b,x);if(!b.isOpen)return null;let D=[`beast-dialog`,f.dialog,`beast-dialog-${u}`,f[u],_].filter(Boolean).join(` `);return(0,p.jsx)(o,{children:(0,p.jsx)(`div`,{className:f.underlay,...E,"data-testid":`dialog-overlay`,children:(0,p.jsx)(i,{contain:!0,restoreFocus:!0,autoFocus:!0,children:(0,p.jsxs)(r,{...T,...C,ref:x,className:D,style:v,elevation:4,radius:`lg`,padding:`6`,"aria-modal":`true`,children:[n&&(0,p.jsx)(`h2`,{...w,className:`beast-dialog-title ${f.title}`,children:n}),l&&(0,p.jsx)(`p`,{className:`beast-dialog-description ${f.description}`,id:S,children:l}),(0,p.jsx)(`div`,{className:`beast-dialog-content ${f.content}`,children:g}),t&&(0,p.jsx)(`button`,{type:`button`,className:`beast-dialog-close ${f.closeButton}`,onClick:t,"aria-label":`Close dialog`,children:(0,p.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,p.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,p.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})})]})})})})};m.displayName=`Dialog`,m.__docgenInfo={description:``,methods:[],displayName:`Dialog`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg' | 'fullscreen'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'fullscreen'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},closeOnEscape:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}},composes:[`AriaDialogProps`]};var h={title:`Overlays/Dialog`,component:m,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`fullscreen`]}}},g={render:e=>{let[t,n]=(0,d.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{onClick:()=>{n(!0)},children:`Open Dialog`}),(0,p.jsx)(m,{...e,open:t,onClose:()=>{n(!1)},title:`Confirm Action`,description:`Are you sure you want to proceed? This action cannot be undone.`,children:(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`12px`,marginTop:`24px`},children:[(0,p.jsx)(u,{variant:`outlined`,onClick:()=>{n(!1)},children:`Cancel`}),(0,p.jsx)(u,{color:`danger`,onClick:()=>{n(!1)},children:`Confirm`})]})})]})}},_={render:()=>{let[e,t]=(0,d.useState)(null);return(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,p.jsx)(u,{onClick:()=>{t(`sm`)},children:`Small`}),(0,p.jsx)(u,{onClick:()=>{t(`md`)},children:`Medium`}),(0,p.jsx)(u,{onClick:()=>{t(`lg`)},children:`Large`}),(0,p.jsx)(u,{onClick:()=>{t(`fullscreen`)},children:`Fullscreen`}),(0,p.jsxs)(m,{open:!!e,onClose:()=>{t(null)},title:`${e?.toUpperCase()} Dialog`,size:e||`md`,children:[(0,p.jsxs)(l,{children:[`This is a `,e,` sized dialog.`]}),(0,p.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`12px`,marginTop:`24px`},children:(0,p.jsx)(u,{onClick:()=>{t(null)},children:`Close`})})]})]})}},v={render:()=>{let[e,t]=(0,d.useState)(!1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{onClick:()=>{t(!0)},children:`Force Action`}),(0,p.jsxs)(m,{open:e,onClose:()=>{t(!1)},title:`Required Action`,closeOnEscape:!1,closeOnOverlayClick:!1,children:[(0,p.jsx)(l,{children:`You must click the button below. Escape and overlay clicks are disabled.`}),(0,p.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`12px`,marginTop:`24px`},children:(0,p.jsx)(u,{color:`primary`,onClick:()=>{t(!1)},children:`I Understand`})})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>Open Dialog</Button>
        <Dialog {...args} open={open} onClose={() => {
        setOpen(false);
      }} title="Confirm Action" description="Are you sure you want to proceed? This action cannot be undone.">
          <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: '24px'
        }}>
            <Button variant="outlined" onClick={() => {
            setOpen(false);
          }}>Cancel</Button>
            <Button color="danger" onClick={() => {
            setOpen(false);
          }}>Confirm</Button>
          </div>
        </Dialog>
      </>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'fullscreen' | null>(null);
    return <div style={{
      display: 'flex',
      gap: '16px'
    }}>
        <Button onClick={() => {
        setSize('sm');
      }}>Small</Button>
        <Button onClick={() => {
        setSize('md');
      }}>Medium</Button>
        <Button onClick={() => {
        setSize('lg');
      }}>Large</Button>
        <Button onClick={() => {
        setSize('fullscreen');
      }}>Fullscreen</Button>
        
        <Dialog open={!!size} onClose={() => {
        setSize(null);
      }} title={\`\${size?.toUpperCase()} Dialog\`} size={size || 'md'}>
          <Text>This is a {size} sized dialog.</Text>
          <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: '24px'
        }}>
            <Button onClick={() => {
            setSize(null);
          }}>Close</Button>
          </div>
        </Dialog>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>Force Action</Button>
        <Dialog open={open} onClose={() => {
        setOpen(false);
      }} title="Required Action" closeOnEscape={false} closeOnOverlayClick={false}>
          <Text>You must click the button below. Escape and overlay clicks are disabled.</Text>
          <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: '24px'
        }}>
            <Button color="primary" onClick={() => {
            setOpen(false);
          }}>I Understand</Button>
          </div>
        </Dialog>
      </>;
  }
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`Sizes`,`NonDismissable`];export{g as Default,v as NonDismissable,_ as Sizes,y as __namedExportsOrder,h as default};