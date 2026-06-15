import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Surface-CZ1YDbUI.js";import{t as i}from"./Button-BhBHpNLp.js";var a=e(t(),1),o={collapsible:`_collapsible_otu39_1`,trigger:`_trigger_otu39_6`,disabled:`_disabled_otu39_17`,contentWrapper:`_contentWrapper_otu39_22`,contentInner:`_contentInner_otu39_27`},s=n(),c=(0,a.forwardRef)(({open:e,defaultOpen:t=!1,onOpenChange:n,trigger:r,disabled:i=!1,children:c,className:l,style:u,...d},f)=>{let p=e!==void 0,[m,h]=(0,a.useState)(t),g=p?e:m,_=(0,a.useCallback)(()=>{if(i)return;let e=!g;p||h(e),n?.(e)},[i,g,p,n]),v=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),_())},y=typeof r==`function`?r({isOpen:g}):r,b=(0,a.useId)();return(0,s.jsxs)(`div`,{ref:f,className:[`beast-collapsible`,o.collapsible,l].filter(Boolean).join(` `),style:u,...d,children:[(0,s.jsx)(`div`,{className:`beast-collapsible-trigger ${o.trigger} ${i?o.disabled:``}`,onClick:_,onKeyDown:i?void 0:v,role:`button`,tabIndex:i?-1:0,"aria-expanded":g,"aria-controls":b,"aria-disabled":i,children:y}),(0,s.jsx)(`div`,{id:b,className:`beast-collapsible-content ${o.contentWrapper}`,"aria-hidden":!g,style:{gridTemplateRows:g?`1fr`:`0fr`},children:(0,s.jsx)(`div`,{className:o.contentInner,children:c})})]})});c.displayName=`Collapsible`,c.__docgenInfo={description:``,methods:[],displayName:`Collapsible`,props:{open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},trigger:{required:!0,tsType:{name:`union`,raw:`ReactNode | ((props: { isOpen: boolean }) => ReactNode)`,elements:[{name:`ReactNode`},{name:`unknown`}]},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}};var l={title:`Surfaces/Collapsible`,component:c,parameters:{layout:`centered`},tags:[`autodocs`]},u={args:{trigger:(0,s.jsx)(i,{children:`Toggle Content`}),children:(0,s.jsx)(r,{padding:`4`,border:!0,style:{marginTop:`8px`},children:(0,s.jsx)(`p`,{style:{margin:0},children:`This is the hidden content that gets revealed.`})})}},d={args:{disabled:!0,trigger:(0,s.jsx)(i,{disabled:!0,children:`Cannot Toggle`}),children:(0,s.jsx)(r,{padding:`4`,border:!0,style:{marginTop:`8px`},children:(0,s.jsx)(`p`,{style:{margin:0},children:`This content is trapped forever.`})})}},f=()=>{let[e,t]=(0,a.useState)(!1);return(0,s.jsx)(`div`,{style:{width:`300px`},children:(0,s.jsx)(c,{open:e,onOpenChange:t,trigger:(0,s.jsxs)(i,{fullWidth:!0,variant:e?`soft`:`filled`,children:[e?`Close`:`Open`,` Settings`]}),children:(0,s.jsx)(r,{padding:`4`,border:!0,style:{marginTop:`8px`},children:(0,s.jsx)(`p`,{style:{margin:0},children:`You have opened the settings panel.`})})})})};f.__docgenInfo={description:``,methods:[],displayName:`Controlled`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button>Toggle Content</Button>,
    children: <Surface padding="4" border style={{
      marginTop: '8px'
    }}>
        <p style={{
        margin: 0
      }}>This is the hidden content that gets revealed.</p>
      </Surface>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    trigger: <Button disabled>Cannot Toggle</Button>,
    children: <Surface padding="4" border style={{
      marginTop: '8px'
    }}>
        <p style={{
        margin: 0
      }}>This content is trapped forever.</p>
      </Surface>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <div style={{
    width: '300px'
  }}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen} trigger={<Button fullWidth variant={isOpen ? 'soft' : 'filled'}>{isOpen ? 'Close' : 'Open'} Settings</Button>}>
        <Surface padding="4" border style={{
        marginTop: '8px'
      }}>
          <p style={{
          margin: 0
        }}>You have opened the settings panel.</p>
        </Surface>
      </Collapsible>
    </div>;
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Disabled`,`Controlled`];export{f as Controlled,u as Default,d as Disabled,p as __namedExportsOrder,l as default};