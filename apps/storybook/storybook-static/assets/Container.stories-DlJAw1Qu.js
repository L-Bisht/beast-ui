import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Frame-OJVaauL9.js";var i=e(t(),1),a=n(),o=e=>/^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(e)),s=e=>{if(e!==void 0)return o(e)?`var(--beast-space-${e})`:String(e)},c={sm:`640px`,md:`768px`,lg:`1024px`,xl:`1280px`,full:`100%`},l=e=>{if(e!==void 0)return e in c?c[e]:String(e)},u=(0,i.forwardRef)(({as:e,maxWidth:t,padding:n,className:i,style:o,...c},u)=>{let d={...o,marginLeft:`auto`,marginRight:`auto`,...t!==void 0&&{maxWidth:l(t)}};return n===void 0?(d.paddingLeft=`var(--beast-space-4)`,d.paddingRight=`var(--beast-space-4)`):d.padding=s(n),(0,a.jsx)(r,{as:e||`div`,ref:u,className:i,style:Object.keys(d).length>0?d:void 0,...c})});u.__docgenInfo={description:``,methods:[],displayName:`Container`,props:{maxWidth:{required:!1,tsType:{name:`union`,raw:`Breakpoint | string | number`,elements:[{name:`union`,raw:`keyof typeof BREAKPOINTS`,elements:[{name:`literal`,value:`sm`},{name:`literal`,value:`md`},{name:`literal`,value:`lg`},{name:`literal`,value:`xl`},{name:`literal`,value:`full`}]},{name:`string`},{name:`number`}]},description:``},padding:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``}}};var d={title:`Layout/Container`,component:u,parameters:{layout:`fullscreen`},tags:[`autodocs`],argTypes:{maxWidth:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`full`]},padding:{control:`select`,options:[1,2,3,4,5,6,7,8]}}},f=({label:e})=>(0,a.jsx)(`div`,{style:{background:`var(--beast-color-primary-soft, #e6f0ff)`,border:`1px dashed var(--beast-color-primary, #007bff)`,borderRadius:`6px`,padding:`16px`,fontFamily:`monospace`,fontSize:`13px`,color:`var(--beast-color-primary-dark, #0056b3)`,textAlign:`center`},children:e}),p={args:{maxWidth:`lg`},render:e=>(0,a.jsx)(u,{...e,children:(0,a.jsx)(f,{label:`maxWidth="${e.maxWidth}" — Container auto-centers with horizontal padding`})})},m={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`,background:`var(--beast-color-surface-variant, #f3f4f6)`,padding:`24px 0`},children:[`sm`,`md`,`lg`,`xl`,`full`].map(e=>(0,a.jsx)(u,{maxWidth:e,children:(0,a.jsx)(f,{label:`maxWidth="${e}"`})},e))})},h={render:()=>(0,a.jsx)(`div`,{style:{background:`var(--beast-color-surface-variant, #f3f4f6)`,padding:`24px 0`},children:(0,a.jsx)(u,{maxWidth:`500px`,children:(0,a.jsx)(f,{label:`maxWidth="500px" — custom pixel value`})})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    maxWidth: 'lg'
  },
  render: args => <Container {...args}>
      <Content label={\`maxWidth="\${args.maxWidth}" — Container auto-centers with horizontal padding\`} />
    </Container>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    background: 'var(--beast-color-surface-variant, #f3f4f6)',
    padding: '24px 0'
  }}>
      {(['sm', 'md', 'lg', 'xl', 'full'] as const).map(size => <Container key={size} maxWidth={size}>
          <Content label={\`maxWidth="\${size}"\`} />
        </Container>)}
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: 'var(--beast-color-surface-variant, #f3f4f6)',
    padding: '24px 0'
  }}>
      <Container maxWidth="500px">
        <Content label='maxWidth="500px" — custom pixel value' />
      </Container>
    </div>
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`AllPresets`,`CustomWidth`];export{m as AllPresets,h as CustomWidth,p as Default,g as __namedExportsOrder,d as default};