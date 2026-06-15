import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Frame-OJVaauL9.js";var i=e(t(),1),a=n(),o=e=>/^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(e)),s=e=>{if(e!==void 0)return o(e)?`var(--beast-space-${e})`:String(e)},c=(0,i.forwardRef)(({as:e,columns:t,rows:n,gap:i,columnGap:o,rowGap:c,areas:l,className:u,style:d,...f},p)=>{let m={...d,...t!==void 0&&{gridTemplateColumns:typeof t==`number`?`repeat(${t}, 1fr)`:t},...n!==void 0&&{gridTemplateRows:n},...i!==void 0&&{gap:s(i)},...o!==void 0&&{columnGap:s(o)},...c!==void 0&&{rowGap:s(c)},...l!==void 0&&{gridTemplateAreas:l}};return(0,a.jsx)(r,{as:e||`div`,ref:p,display:`grid`,className:u,style:Object.keys(m).length>0?m:void 0,...f})});c.__docgenInfo={description:``,methods:[],displayName:`Lattice`,props:{columns:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``},rows:{required:!1,tsType:{name:`string`},description:``},gap:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},columnGap:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},rowGap:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},areas:{required:!1,tsType:{name:`string`},description:``}}};var l={title:`Layout/Lattice`,component:c,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{columns:{control:`number`},gap:{control:`select`,options:[1,2,3,4,5,6]}}},u=({children:e,area:t})=>(0,a.jsx)(`div`,{style:{background:`var(--beast-color-primary-soft, #e6f0ff)`,border:`1px solid var(--beast-color-primary, #007bff)`,borderRadius:`6px`,padding:`16px`,fontFamily:`system-ui, sans-serif`,fontSize:`13px`,fontWeight:500,color:`var(--beast-color-primary-dark, #0056b3)`,display:`flex`,alignItems:`center`,justifyContent:`center`,...t&&{gridArea:t}},children:e}),d={args:{columns:3,gap:4},render:e=>(0,a.jsx)(c,{...e,children:Array.from({length:6},(e,t)=>(0,a.jsxs)(u,{children:[`Cell `,t+1]},t))})},f={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[2,3,4,6].map(e=>(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`p`,{style:{fontFamily:`monospace`,marginBottom:`8px`,fontSize:`13px`},children:[`columns=`,e]}),(0,a.jsx)(c,{columns:e,gap:3,children:Array.from({length:e*2},(e,t)=>(0,a.jsx)(u,{children:t+1},t))})]},e))})},p={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{fontFamily:`monospace`,marginBottom:`8px`,fontSize:`13px`},children:`columns="1fr 2fr 1fr"`}),(0,a.jsxs)(c,{columns:`1fr 2fr 1fr`,gap:4,children:[(0,a.jsx)(u,{children:`Sidebar`}),(0,a.jsx)(u,{children:`Main Content`}),(0,a.jsx)(u,{children:`Aside`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{fontFamily:`monospace`,marginBottom:`8px`,fontSize:`13px`},children:`columns="200px auto 200px"`}),(0,a.jsxs)(c,{columns:`200px auto 200px`,gap:4,children:[(0,a.jsx)(u,{children:`Fixed`}),(0,a.jsx)(u,{children:`Fluid`}),(0,a.jsx)(u,{children:`Fixed`})]})]})]})},m={render:()=>(0,a.jsxs)(c,{columns:`1fr 2fr 1fr`,rows:`auto 1fr auto`,areas:`"header header header" "nav main aside" "footer footer footer"`,gap:4,style:{minHeight:`300px`},children:[(0,a.jsx)(u,{area:`header`,children:`Header`}),(0,a.jsx)(u,{area:`nav`,children:`Nav`}),(0,a.jsx)(u,{area:`main`,children:`Main Content`}),(0,a.jsx)(u,{area:`aside`,children:`Aside`}),(0,a.jsx)(u,{area:`footer`,children:`Footer`})]})},h={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{fontFamily:`monospace`,marginBottom:`8px`,fontSize:`13px`},children:`columnGap=6, rowGap=2`}),(0,a.jsx)(c,{columns:3,columnGap:6,rowGap:2,children:Array.from({length:6},(e,t)=>(0,a.jsx)(u,{children:t+1},t))})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 4
  },
  render: args => <Lattice {...args}>
      {Array.from({
      length: 6
    }, (_, i) => <Cell key={i}>Cell {i + 1}</Cell>)}
    </Lattice>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      {[2, 3, 4, 6].map(cols => <div key={cols}>
          <p style={{
        fontFamily: 'monospace',
        marginBottom: '8px',
        fontSize: '13px'
      }}>columns={cols}</p>
          <Lattice columns={cols} gap={3}>
            {Array.from({
          length: cols * 2
        }, (_, i) => <Cell key={i}>{i + 1}</Cell>)}
          </Lattice>
        </div>)}
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <p style={{
        fontFamily: 'monospace',
        marginBottom: '8px',
        fontSize: '13px'
      }}>columns="1fr 2fr 1fr"</p>
        <Lattice columns="1fr 2fr 1fr" gap={4}>
          <Cell>Sidebar</Cell>
          <Cell>Main Content</Cell>
          <Cell>Aside</Cell>
        </Lattice>
      </div>

      <div>
        <p style={{
        fontFamily: 'monospace',
        marginBottom: '8px',
        fontSize: '13px'
      }}>columns="200px auto 200px"</p>
        <Lattice columns="200px auto 200px" gap={4}>
          <Cell>Fixed</Cell>
          <Cell>Fluid</Cell>
          <Cell>Fixed</Cell>
        </Lattice>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Lattice columns="1fr 2fr 1fr" rows="auto 1fr auto" areas={\`"header header header" "nav main aside" "footer footer footer"\`} gap={4} style={{
    minHeight: '300px'
  }}>
      <Cell area="header">Header</Cell>
      <Cell area="nav">Nav</Cell>
      <Cell area="main">Main Content</Cell>
      <Cell area="aside">Aside</Cell>
      <Cell area="footer">Footer</Cell>
    </Lattice>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <p style={{
        fontFamily: 'monospace',
        marginBottom: '8px',
        fontSize: '13px'
      }}>columnGap=6, rowGap=2</p>
        <Lattice columns={3} columnGap={6} rowGap={2}>
          {Array.from({
          length: 6
        }, (_, i) => <Cell key={i}>{i + 1}</Cell>)}
        </Lattice>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`ColumnCounts`,`CustomTemplate`,`NamedAreas`,`GapVariants`];export{f as ColumnCounts,p as CustomTemplate,d as Default,h as GapVariants,m as NamedAreas,g as __namedExportsOrder,l as default};