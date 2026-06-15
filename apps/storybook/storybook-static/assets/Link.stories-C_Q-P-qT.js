import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./useLink-CigjX4lY.js";import{t as i}from"./Text-CQXSr0Su.js";var a=e(t(),1),o={link:`_link_18uom_1`,"color-primary":`_color-primary_18uom_14`,disabled:`_disabled_18uom_18`,"color-on-surface":`_color-on-surface_18uom_23`,"color-neutral":`_color-neutral_18uom_32`,"color-inherit":`_color-inherit_18uom_41`,"underline-always":`_underline-always_18uom_47`,"underline-hover":`_underline-hover_18uom_51`,"underline-none":`_underline-none_18uom_58`},s=n(),c=a.forwardRef(({as:e,href:t,external:n,color:i=`primary`,underline:c=`hover`,disabled:l,children:u,className:d,...f},p)=>{let m=e||`a`,h=n?{target:`_blank`,rel:`noopener noreferrer`}:{},g=a.useRef(null),{linkProps:_}=r({...f,href:l?void 0:t,isDisabled:l,elementType:typeof m==`string`?m:`span`},g),v=e=>{g.current=e,typeof p==`function`?p(e):p&&(p.current=e)},y=[`beast-link`,o.link,`beast-link-color-${i}`,o[`color-${i}`],`beast-link-underline-${c}`,o[`underline-${c}`],l&&`beast-link-disabled`,l&&o.disabled,d].filter(Boolean).join(` `),b={..._};return l&&(delete b.href,delete b.onClick),(0,s.jsx)(m,{...b,...h,...f,ref:v,className:y,"aria-disabled":l?`true`:void 0,children:u})});c.displayName=`Link`,c.__docgenInfo={description:``,methods:[],displayName:`Link`,props:{as:{required:!1,tsType:{name:`C`},description:``},href:{required:!1,tsType:{name:`string`},description:``},external:{required:!1,tsType:{name:`boolean`},description:``},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'on-surface' | 'inherit' | 'neutral'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'on-surface'`},{name:`literal`,value:`'inherit'`},{name:`literal`,value:`'neutral'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},underline:{required:!1,tsType:{name:`union`,raw:`'always' | 'hover' | 'none'`,elements:[{name:`literal`,value:`'always'`},{name:`literal`,value:`'hover'`},{name:`literal`,value:`'none'`}]},description:``,defaultValue:{value:`'hover'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}}};var l={title:`Navigation/Link`,component:c,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{color:{control:`select`,options:[`primary`,`on-surface`,`inherit`,`neutral`]},underline:{control:`select`,options:[`always`,`hover`,`none`]}}},u={args:{href:`#`,children:`This is a standard link`}},d={args:{href:`https://github.com`,external:!0,children:`Visit GitHub (opens in new tab)`}},f={args:{href:`#`,children:`Link`},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,s.jsxs)(i,{children:[`Primary (default): `,(0,s.jsx)(c,{href:`#`,color:`primary`,children:`Forgot password?`})]}),(0,s.jsxs)(i,{children:[`On Surface: `,(0,s.jsx)(c,{href:`#`,color:`on-surface`,children:`Terms of Service`})]}),(0,s.jsxs)(i,{children:[`Neutral: `,(0,s.jsx)(c,{href:`#`,color:`neutral`,children:`Privacy Policy`})]}),(0,s.jsxs)(i,{style:{color:`purple`},children:[`Inherit (Purple Parent): `,(0,s.jsx)(c,{href:`#`,color:`inherit`,children:`Read more`})]})]})},p={args:{href:`#`,children:`Link`},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,s.jsxs)(i,{children:[`Hover (default): `,(0,s.jsx)(c,{href:`#`,underline:`hover`,children:`Only underlines on hover`})]}),(0,s.jsxs)(i,{children:[`Always: `,(0,s.jsx)(c,{href:`#`,underline:`always`,children:`Always underlined`})]}),(0,s.jsxs)(i,{children:[`None: `,(0,s.jsx)(c,{href:`#`,underline:`none`,children:`Never underlined`})]})]})},m={args:{href:`#`,disabled:!0,children:`This link is disabled`}},h={args:{href:`#`,children:`Link`},render:()=>{let e=a.forwardRef((e,t)=>(0,s.jsx)(`a`,{...e,ref:t,onClick:t=>{t.preventDefault(),alert(`Navigated to ${e.to}`)},children:e.children}));return e.displayName=`RouterLink`,(0,s.jsxs)(i,{children:[`Using custom router link: `,(0,s.jsx)(c,{as:e,to:`/dashboard`,color:`primary`,children:`Go to Dashboard`})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'This is a standard link'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    href: 'https://github.com',
    external: true,
    children: 'Visit GitHub (opens in new tab)'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Link'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Text>
        Primary (default): <Link href="#" color="primary">Forgot password?</Link>
      </Text>
      <Text>
        On Surface: <Link href="#" color="on-surface">Terms of Service</Link>
      </Text>
      <Text>
        Neutral: <Link href="#" color="neutral">Privacy Policy</Link>
      </Text>
      <Text style={{
      color: 'purple'
    }}>
        Inherit (Purple Parent): <Link href="#" color="inherit">Read more</Link>
      </Text>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Link'
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Text>
        Hover (default): <Link href="#" underline="hover">Only underlines on hover</Link>
      </Text>
      <Text>
        Always: <Link href="#" underline="always">Always underlined</Link>
      </Text>
      <Text>
        None: <Link href="#" underline="none">Never underlined</Link>
      </Text>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    disabled: true,
    children: 'This link is disabled'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    href: '#',
    children: 'Link'
  },
  render: () => {
    // Simulating a custom router link component like Next.js Link
    const RouterLink = React.forwardRef<HTMLAnchorElement, any>((props, ref) => <a {...props} ref={ref} onClick={e => {
      e.preventDefault();
      alert(\`Navigated to \${props.to}\`);
    }}>
        {props.children}
      </a>);
    RouterLink.displayName = 'RouterLink';
    return <Text>
        Using custom router link: <Link as={RouterLink} to="/dashboard" color="primary">Go to Dashboard</Link>
      </Text>;
  }
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`External`,`Colors`,`UnderlineModes`,`Disabled`,`Polymorphic`];export{f as Colors,u as Default,m as Disabled,d as External,h as Polymorphic,p as UnderlineModes,g as __namedExportsOrder,l as default};