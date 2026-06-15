import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";var r=e(t(),1),i=n(),a=(0,r.forwardRef)(({label:e,helperText:t,error:n,size:a=`md`,variant:o=`outlined`,startAdornment:s,endAdornment:c,fullWidth:l=!1,disabled:u=!1,required:d=!1,className:f,style:p,id:m,...h},g)=>{let _=(0,r.useId)(),v=m||_,y=`${v}-helper`,b=`${v}-error`,x=!!n,S=x?b:t?y:void 0,C=[`beast-input-wrapper`,l&&`beast-input-full-width`,f].filter(Boolean).join(` `),w=[`beast-input-container`,`beast-input-${o}`,`beast-input-${a}`,x&&`beast-input-error`,u&&`beast-input-disabled`].filter(Boolean).join(` `);return(0,i.jsxs)(`div`,{className:C,style:{display:`flex`,flexDirection:`column`,gap:`var(--beast-space-1)`,...l&&{width:`100%`},...p},children:[e&&(0,i.jsxs)(`label`,{htmlFor:v,className:`beast-input-label`,style:{fontSize:`var(--beast-font-size-sm)`,fontWeight:`var(--beast-font-weight-medium)`,color:u?`var(--beast-color-muted)`:`var(--beast-color-on-surface)`},children:[e,d&&(0,i.jsx)(`span`,{className:`beast-input-required-asterisk`,style:{color:`var(--beast-color-danger)`,marginLeft:`var(--beast-space-1)`},children:`*`})]}),(0,i.jsxs)(`div`,{className:w,style:{display:`flex`,alignItems:`center`},children:[s&&(0,i.jsx)(`span`,{className:`beast-input-adornment start`,children:s}),(0,i.jsx)(`input`,{ref:g,id:v,disabled:u,required:d,"aria-invalid":x?`true`:void 0,"aria-errormessage":x?b:void 0,"aria-describedby":S,className:`beast-input-element`,style:{flex:1,backgroundColor:`transparent`,border:`none`,outline:`none`},...h}),c&&(0,i.jsx)(`span`,{className:`beast-input-adornment end`,children:c})]}),x?(0,i.jsx)(`div`,{id:b,className:`beast-input-error-text`,style:{color:`var(--beast-color-danger)`,fontSize:`var(--beast-font-size-xs)`},children:n}):t?(0,i.jsx)(`div`,{id:y,className:`beast-input-helper-text`,style:{color:`var(--beast-color-muted)`,fontSize:`var(--beast-font-size-xs)`},children:t}):null]})});a.displayName=`Input`,a.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`ReactNode`},description:``},error:{required:!1,tsType:{name:`ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'outlined' | 'filled'`,elements:[{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'filled'`}]},description:``,defaultValue:{value:`'outlined'`,computed:!1}},startAdornment:{required:!1,tsType:{name:`ReactNode`},description:``},endAdornment:{required:!1,tsType:{name:`ReactNode`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},required:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`Omit`]};var o={title:`Inputs/Input`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},fullWidth:{control:`boolean`}}},s={args:{placeholder:`Enter text here...`}},c={args:{label:`Email address`,placeholder:`you@example.com`}},l={args:{label:`Password`,type:`password`,helperText:`Must be at least 8 characters long.`}},u={args:{label:`Username`,defaultValue:`admin`,error:`This username is already taken.`}},d={args:{label:`Disabled Input`,disabled:!0,placeholder:`Not allowed`}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text here...'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'you@example.com'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters long.'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    defaultValue: 'admin',
    error: 'This username is already taken.'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    disabled: true,
    placeholder: 'Not allowed'
  }
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`WithLabel`,`WithHelperText`,`WithError`,`Disabled`];export{s as Default,d as Disabled,u as WithError,l as WithHelperText,c as WithLabel,f as __namedExportsOrder,o as default};