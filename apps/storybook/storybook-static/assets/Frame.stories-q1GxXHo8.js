import{t as e}from"./jsx-runtime-BjHVURKR.js";import{t}from"./Frame-OJVaauL9.js";var n=e(),r={title:`Layout/Frame`,component:t,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{padding:{control:`select`,options:[1,2,3,4,5,6,7,8]},margin:{control:`select`,options:[1,2,3,4,5,6,7,8]},display:{control:`select`,options:[`block`,`inline-block`,`flex`,`grid`,`none`]},overflow:{control:`select`,options:[`visible`,`hidden`,`scroll`,`auto`]}}},i=({children:e,...t})=>(0,n.jsx)(`div`,{style:{background:`var(--beast-color-primary-soft, #e6f0ff)`,border:`1px dashed var(--beast-color-primary, #007bff)`,borderRadius:`4px`,padding:`8px`,fontSize:`13px`,fontFamily:`monospace`,color:`var(--beast-color-primary-dark, #0056b3)`},...t,children:e}),a={args:{padding:4,children:(0,n.jsx)(i,{children:`Frame with padding=4`})}},o={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[1,2,3,4,5,6,7,8].map(e=>(0,n.jsx)(t,{padding:e,style:{background:`var(--beast-color-surface-variant, #f3f4f6)`,borderRadius:`4px`},children:(0,n.jsxs)(i,{children:[`padding=`,e]})},e))})},s={render:()=>(0,n.jsx)(`div`,{style:{background:`var(--beast-color-surface-variant, #f3f4f6)`,borderRadius:`8px`},children:[1,2,4,6,8].map(e=>(0,n.jsx)(t,{margin:e,children:(0,n.jsxs)(i,{children:[`margin=`,e]})},e))})},c={name:`Polymorphic (as prop)`,render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,n.jsx)(t,{as:`section`,padding:4,style:{background:`var(--beast-color-surface-variant, #f3f4f6)`,borderRadius:`8px`},children:(0,n.jsx)(i,{children:`Rendered as <section>`})}),(0,n.jsx)(t,{as:`article`,padding:4,style:{background:`var(--beast-color-surface-variant, #f3f4f6)`,borderRadius:`8px`},children:(0,n.jsx)(i,{children:`Rendered as <article>`})}),(0,n.jsx)(t,{as:`main`,padding:4,style:{background:`var(--beast-color-surface-variant, #f3f4f6)`,borderRadius:`8px`},children:(0,n.jsx)(i,{children:`Rendered as <main>`})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 4,
    children: <Box>Frame with padding=4</Box>
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(p => <Frame key={p} padding={p} style={{
      background: 'var(--beast-color-surface-variant, #f3f4f6)',
      borderRadius: '4px'
    }}>
          <Box>padding={p}</Box>
        </Frame>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: 'var(--beast-color-surface-variant, #f3f4f6)',
    borderRadius: '8px'
  }}>
      {[1, 2, 4, 6, 8].map(m => <Frame key={m} margin={m}>
          <Box>margin={m}</Box>
        </Frame>)}
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Polymorphic (as prop)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Frame as="section" padding={4} style={{
      background: 'var(--beast-color-surface-variant, #f3f4f6)',
      borderRadius: '8px'
    }}>
        <Box>Rendered as &lt;section&gt;</Box>
      </Frame>
      <Frame as="article" padding={4} style={{
      background: 'var(--beast-color-surface-variant, #f3f4f6)',
      borderRadius: '8px'
    }}>
        <Box>Rendered as &lt;article&gt;</Box>
      </Frame>
      <Frame as="main" padding={4} style={{
      background: 'var(--beast-color-surface-variant, #f3f4f6)',
      borderRadius: '8px'
    }}>
        <Box>Rendered as &lt;main&gt;</Box>
      </Frame>
    </div>
}`,...c.parameters?.docs?.source}}};var l=[`Default`,`PaddingScale`,`MarginScale`,`PolymorphicAs`];export{a as Default,s as MarginScale,o as PaddingScale,c as PolymorphicAs,l as __namedExportsOrder,r as default};