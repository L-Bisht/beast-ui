import{t as e}from"./jsx-runtime-BjHVURKR.js";import{t}from"./Surface-CZ1YDbUI.js";var n=e(),r={title:`Surfaces/Surface`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{elevation:{control:`select`,options:[0,1,2,3,4]},radius:{control:`select`,options:[`none`,`sm`,`md`,`lg`,`full`]},padding:{control:`text`},border:{control:`boolean`}}},i={args:{padding:`4`,children:`This is a basic surface container.`}},a={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,gap:`24px`},children:[(0,n.jsx)(t,{elevation:0,padding:`4`,children:`Elevation 0`}),(0,n.jsx)(t,{elevation:1,padding:`4`,children:`Elevation 1`}),(0,n.jsx)(t,{elevation:2,padding:`4`,children:`Elevation 2`}),(0,n.jsx)(t,{elevation:3,padding:`4`,children:`Elevation 3`}),(0,n.jsx)(t,{elevation:4,padding:`4`,children:`Elevation 4`})]})},o={args:{border:!0,padding:`4`,children:`Bordered Surface`}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    padding: '4',
    children: 'This is a basic surface container.'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <Surface elevation={0} padding="4">Elevation 0</Surface>
      <Surface elevation={1} padding="4">Elevation 1</Surface>
      <Surface elevation={2} padding="4">Elevation 2</Surface>
      <Surface elevation={3} padding="4">Elevation 3</Surface>
      <Surface elevation={4} padding="4">Elevation 4</Surface>
    </div>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    border: true,
    padding: '4',
    children: 'Bordered Surface'
  }
}`,...o.parameters?.docs?.source}}};var s=[`Default`,`Elevations`,`Bordered`];export{o as Bordered,i as Default,a as Elevations,s as __namedExportsOrder,r as default};