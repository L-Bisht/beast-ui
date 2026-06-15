import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Text-CQXSr0Su.js";import{t as i}from"./Card-ofzIS5lH.js";var a=e(t(),1),o={tabs:`_tabs_1f55c_1`,horizontal:`_horizontal_1f55c_6`,vertical:`_vertical_1f55c_10`,tabList:`_tabList_1f55c_15`,"list-horizontal":`_list-horizontal_1f55c_20`,"list-vertical":`_list-vertical_1f55c_24`,"list-underline":`_list-underline_1f55c_29`,"list-filled":`_list-filled_1f55c_37`,tab:`_tab_1f55c_1`,disabled:`_disabled_1f55c_64`,"tab-underline":`_tab-underline_1f55c_74`,selected:`_selected_1f55c_74`,"tab-filled":`_tab-filled_1f55c_108`,"list-outlined":`_list-outlined_1f55c_118`,"tab-outlined":`_tab-outlined_1f55c_123`,panel:`_panel_1f55c_139`},s=n(),c=(0,a.createContext)(null),l=()=>{let e=(0,a.useContext)(c);if(!e)throw Error(`Tabs components must be used within a Tabs wrapper`);return e},u=a.forwardRef(({selectedKey:e,defaultSelectedKey:t,onSelectionChange:n,orientation:r=`horizontal`,variant:i=`underline`,className:l,children:u,...d},f)=>{let[p,m]=(0,a.useState)(t||``),h=e!==void 0,g=h?e:p,_=e=>{h||m(e),n?.(e)},v=(0,a.useRef)(new Map),[y,b]=(0,a.useState)([]),x=(e,t)=>{v.current.set(e,t),b(Array.from(v.current.keys())),!g&&v.current.size===1&&_(e)},S=e=>{v.current.delete(e),b(Array.from(v.current.keys()))},C=[`beast-tabs`,o.tabs,`beast-tabs-${r}`,o[r],`beast-tabs-${i}`,o[i],l].filter(Boolean).join(` `);return(0,s.jsx)(c.Provider,{value:{selectedKey:g,setSelectedKey:_,orientation:r,variant:i,tabRefs:v,registerTab:x,unregisterTab:S,keys:y},children:(0,s.jsx)(`div`,{ref:f,className:C,"data-orientation":r,...d,children:u})})});u.displayName=`Tabs`;var d=a.forwardRef(({children:e,className:t,...n},r)=>{let{orientation:i,variant:a}=l();return(0,s.jsx)(`div`,{ref:r,role:`tablist`,"aria-orientation":i,className:[`beast-tabs-list`,o.tabList,o[`list-${i}`],o[`list-${a}`],t].filter(Boolean).join(` `),...n,children:e})});d.displayName=`Tabs.List`;var f=a.forwardRef(({id:e,disabled:t,children:n,className:r,onClick:i,onKeyDown:c,...u},d)=>{let{selectedKey:f,setSelectedKey:p,orientation:m,variant:h,registerTab:g,unregisterTab:_,keys:v,tabRefs:y}=l(),b=f===e,x=(0,a.useRef)(null);(0,a.useEffect)(()=>(x.current&&g(e,x.current),()=>{_(e)}),[e,g,_]);let S=e=>{x.current=e,typeof d==`function`?d(e):d&&(d.current=e)},C=n=>{t||p(e),i?.(n)},w=n=>{if(t)return;let r=v.indexOf(e),i=r,a=m===`horizontal`?`ArrowRight`:`ArrowDown`,o=m===`horizontal`?`ArrowLeft`:`ArrowUp`;if(n.key===a?(n.preventDefault(),i=(r+1)%v.length):n.key===o?(n.preventDefault(),i=(r-1+v.length)%v.length):n.key===`Home`?(n.preventDefault(),i=0):n.key===`End`&&(n.preventDefault(),i=v.length-1),i!==r){let e=v[i],t=y.current.get(e);t&&!t.disabled&&(t.focus(),p(e))}c?.(n)},T=[`beast-tab`,o.tab,o[`tab-${h}`],b&&`beast-tab-selected`,b&&o.selected,t&&`beast-tab-disabled`,t&&o.disabled,r].filter(Boolean).join(` `);return(0,s.jsx)(`button`,{ref:S,role:`tab`,id:`beast-tab-${e}`,"aria-selected":b,"aria-controls":`beast-panel-${e}`,"aria-disabled":t,disabled:t,tabIndex:b?0:-1,className:T,onClick:C,onKeyDown:w,...u,children:n})});f.displayName=`Tabs.Tab`;var p=a.forwardRef(({id:e,children:t,className:n,...r},i)=>{let{selectedKey:a}=l();if(a!==e)return null;let c=[`beast-tab-panel`,o.panel,n].filter(Boolean).join(` `);return(0,s.jsx)(`div`,{ref:i,role:`tabpanel`,id:`beast-panel-${e}`,"aria-labelledby":`beast-tab-${e}`,tabIndex:0,className:c,...r,children:t})});p.displayName=`Tabs.Panel`;var m=Object.assign(u,{List:d,Tab:f,Panel:p});u.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{selectedKey:{required:!1,tsType:{name:`string`},description:``},defaultSelectedKey:{required:!1,tsType:{name:`string`},description:``},onSelectionChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'underline' | 'filled' | 'outlined'`,elements:[{name:`literal`,value:`'underline'`},{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outlined'`}]},description:``,defaultValue:{value:`'underline'`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]},d.__docgenInfo={description:``,methods:[],displayName:`Tabs.List`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`HTMLAttributes`]},f.__docgenInfo={description:``,methods:[],displayName:`Tabs.Tab`,props:{id:{required:!0,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]},p.__docgenInfo={description:``,methods:[],displayName:`Tabs.Panel`,props:{id:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}},composes:[`Omit`]};var h={title:`Navigation/Tabs`,component:m,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},variant:{control:`select`,options:[`underline`,`filled`,`outlined`]}}},g={args:{children:null},render:e=>(0,s.jsx)(`div`,{style:{maxWidth:`600px`},children:(0,s.jsxs)(m,{...e,defaultSelectedKey:`account`,children:[(0,s.jsxs)(m.List,{"aria-label":`Settings`,children:[(0,s.jsx)(m.Tab,{id:`account`,children:`Account`}),(0,s.jsx)(m.Tab,{id:`notifications`,children:`Notifications`}),(0,s.jsx)(m.Tab,{id:`security`,children:`Security`}),(0,s.jsx)(m.Tab,{id:`billing`,disabled:!0,children:`Billing (Disabled)`})]}),(0,s.jsx)(m.Panel,{id:`account`,children:(0,s.jsxs)(i,{padding:`4`,children:[(0,s.jsx)(r,{weight:`semibold`,children:`Account Settings`}),(0,s.jsx)(r,{color:`muted`,children:`Update your account information here.`})]})}),(0,s.jsx)(m.Panel,{id:`notifications`,children:(0,s.jsxs)(i,{padding:`4`,children:[(0,s.jsx)(r,{weight:`semibold`,children:`Notification Preferences`}),(0,s.jsx)(r,{color:`muted`,children:`Choose what we notify you about.`})]})}),(0,s.jsx)(m.Panel,{id:`security`,children:(0,s.jsxs)(i,{padding:`4`,children:[(0,s.jsx)(r,{weight:`semibold`,children:`Security`}),(0,s.jsx)(r,{color:`muted`,children:`Manage your password and 2FA settings.`})]})})]})})},_={args:{children:null},render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`32px`,maxWidth:`600px`},children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{weight:`bold`,style:{marginBottom:`8px`},children:`Underline (Default)`}),(0,s.jsx)(m,{defaultSelectedKey:`1`,variant:`underline`,children:(0,s.jsxs)(m.List,{"aria-label":`Underline variant`,children:[(0,s.jsx)(m.Tab,{id:`1`,children:`First`}),(0,s.jsx)(m.Tab,{id:`2`,children:`Second`}),(0,s.jsx)(m.Tab,{id:`3`,children:`Third`})]})})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{weight:`bold`,style:{marginBottom:`8px`},children:`Filled`}),(0,s.jsx)(m,{defaultSelectedKey:`1`,variant:`filled`,children:(0,s.jsxs)(m.List,{"aria-label":`Filled variant`,children:[(0,s.jsx)(m.Tab,{id:`1`,children:`First`}),(0,s.jsx)(m.Tab,{id:`2`,children:`Second`}),(0,s.jsx)(m.Tab,{id:`3`,children:`Third`})]})})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{weight:`bold`,style:{marginBottom:`8px`},children:`Outlined`}),(0,s.jsx)(m,{defaultSelectedKey:`1`,variant:`outlined`,children:(0,s.jsxs)(m.List,{"aria-label":`Outlined variant`,children:[(0,s.jsx)(m.Tab,{id:`1`,children:`First`}),(0,s.jsx)(m.Tab,{id:`2`,children:`Second`}),(0,s.jsx)(m.Tab,{id:`3`,children:`Third`})]})})]})]})},v={args:{children:null},render:()=>(0,s.jsx)(`div`,{style:{maxWidth:`800px`,height:`300px`},children:(0,s.jsxs)(m,{defaultSelectedKey:`profile`,orientation:`vertical`,variant:`outlined`,children:[(0,s.jsxs)(m.List,{"aria-label":`Vertical tabs`,children:[(0,s.jsx)(m.Tab,{id:`profile`,children:`Profile`}),(0,s.jsx)(m.Tab,{id:`settings`,children:`Settings`}),(0,s.jsx)(m.Tab,{id:`messages`,children:`Messages`})]}),(0,s.jsx)(m.Panel,{id:`profile`,children:(0,s.jsx)(i,{style:{height:`100%`},children:(0,s.jsx)(r,{weight:`semibold`,children:`Profile Panel`})})}),(0,s.jsx)(m.Panel,{id:`settings`,children:(0,s.jsx)(i,{style:{height:`100%`},children:(0,s.jsx)(r,{weight:`semibold`,children:`Settings Panel`})})}),(0,s.jsx)(m.Panel,{id:`messages`,children:(0,s.jsx)(i,{style:{height:`100%`},children:(0,s.jsx)(r,{weight:`semibold`,children:`Messages Panel`})})})]})})},y={args:{children:null},render:()=>{let[e,t]=(0,a.useState)(`tab1`);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{style:{marginBottom:`16px`},children:(0,s.jsxs)(r,{children:[`Currently Selected: `,e]})}),(0,s.jsxs)(m,{selectedKey:e,onSelectionChange:t,children:[(0,s.jsxs)(m.List,{"aria-label":`Controlled Tabs`,children:[(0,s.jsx)(m.Tab,{id:`tab1`,children:`Tab 1`}),(0,s.jsx)(m.Tab,{id:`tab2`,children:`Tab 2`}),(0,s.jsx)(m.Tab,{id:`tab3`,children:`Tab 3`})]}),(0,s.jsx)(m.Panel,{id:`tab1`,children:`Content 1`}),(0,s.jsx)(m.Panel,{id:`tab2`,children:`Content 2`}),(0,s.jsx)(m.Panel,{id:`tab3`,children:`Content 3`})]})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: args => <div style={{
    maxWidth: '600px'
  }}>
      <Tabs {...args} defaultSelectedKey="account">
        <Tabs.List aria-label="Settings">
          <Tabs.Tab id="account">Account</Tabs.Tab>
          <Tabs.Tab id="notifications">Notifications</Tabs.Tab>
          <Tabs.Tab id="security">Security</Tabs.Tab>
          <Tabs.Tab id="billing" disabled>Billing (Disabled)</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="account">
          <Card padding="4">
            <Text weight="semibold">Account Settings</Text>
            <Text color="muted">Update your account information here.</Text>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="notifications">
          <Card padding="4">
            <Text weight="semibold">Notification Preferences</Text>
            <Text color="muted">Choose what we notify you about.</Text>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="security">
          <Card padding="4">
            <Text weight="semibold">Security</Text>
            <Text color="muted">Manage your password and 2FA settings.</Text>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '600px'
  }}>
      <div>
        <Text weight="bold" style={{
        marginBottom: '8px'
      }}>Underline (Default)</Text>
        <Tabs defaultSelectedKey="1" variant="underline">
          <Tabs.List aria-label="Underline variant">
            <Tabs.Tab id="1">First</Tabs.Tab>
            <Tabs.Tab id="2">Second</Tabs.Tab>
            <Tabs.Tab id="3">Third</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      <div>
        <Text weight="bold" style={{
        marginBottom: '8px'
      }}>Filled</Text>
        <Tabs defaultSelectedKey="1" variant="filled">
          <Tabs.List aria-label="Filled variant">
            <Tabs.Tab id="1">First</Tabs.Tab>
            <Tabs.Tab id="2">Second</Tabs.Tab>
            <Tabs.Tab id="3">Third</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      <div>
        <Text weight="bold" style={{
        marginBottom: '8px'
      }}>Outlined</Text>
        <Tabs defaultSelectedKey="1" variant="outlined">
          <Tabs.List aria-label="Outlined variant">
            <Tabs.Tab id="1">First</Tabs.Tab>
            <Tabs.Tab id="2">Second</Tabs.Tab>
            <Tabs.Tab id="3">Third</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    maxWidth: '800px',
    height: '300px'
  }}>
      <Tabs defaultSelectedKey="profile" orientation="vertical" variant="outlined">
        <Tabs.List aria-label="Vertical tabs">
          <Tabs.Tab id="profile">Profile</Tabs.Tab>
          <Tabs.Tab id="settings">Settings</Tabs.Tab>
          <Tabs.Tab id="messages">Messages</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id="profile">
          <Card style={{
          height: '100%'
        }}>
            <Text weight="semibold">Profile Panel</Text>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="settings">
          <Card style={{
          height: '100%'
        }}>
            <Text weight="semibold">Settings Panel</Text>
          </Card>
        </Tabs.Panel>
        <Tabs.Panel id="messages">
          <Card style={{
          height: '100%'
        }}>
            <Text weight="semibold">Messages Panel</Text>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => {
    const [selected, setSelected] = useState('tab1');
    return <div>
        <div style={{
        marginBottom: '16px'
      }}>
          <Text>Currently Selected: {selected}</Text>
        </div>
        <Tabs selectedKey={selected} onSelectionChange={setSelected}>
          <Tabs.List aria-label="Controlled Tabs">
            <Tabs.Tab id="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab id="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab id="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel id="tab2">Content 2</Tabs.Panel>
          <Tabs.Panel id="tab3">Content 3</Tabs.Panel>
        </Tabs>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};var b=[`Default`,`Variants`,`Vertical`,`Controlled`];export{y as Controlled,g as Default,_ as Variants,v as Vertical,b as __namedExportsOrder,h as default};