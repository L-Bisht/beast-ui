import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Frame-OJVaauL9.js";var i=e(t(),1),a=n(),o=e=>/^(1|2|3|4|5|6|7|8|9|10|11|12)$/.test(String(e)),s=e=>{if(e!==void 0)return o(e)?`var(--beast-space-${e})`:String(e)},c=(0,i.forwardRef)(({as:e,direction:t,gap:n,align:i,justify:o,wrap:c,className:l,style:u,...d},f)=>{let p={...u,...t&&{flexDirection:t},...n!==void 0&&{gap:s(n)},...i&&{alignItems:i},...o&&{justifyContent:o},...c&&{flexWrap:c}};return(0,a.jsx)(r,{as:e||`div`,ref:f,display:`flex`,className:l,style:Object.keys(p).length>0?p:void 0,...d})});c.__docgenInfo={description:``,methods:[],displayName:`Flex`,props:{direction:{required:!1,tsType:{name:`union`,raw:`'row' | 'column' | 'row-reverse' | 'column-reverse'`,elements:[{name:`literal`,value:`'row'`},{name:`literal`,value:`'column'`},{name:`literal`,value:`'row-reverse'`},{name:`literal`,value:`'column-reverse'`}]},description:``},gap:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},align:{required:!1,tsType:{name:`union`,raw:`'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'`,elements:[{name:`literal`,value:`'flex-start'`},{name:`literal`,value:`'flex-end'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'baseline'`},{name:`literal`,value:`'stretch'`}]},description:``},justify:{required:!1,tsType:{name:`union`,raw:`'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'`,elements:[{name:`literal`,value:`'flex-start'`},{name:`literal`,value:`'flex-end'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'space-between'`},{name:`literal`,value:`'space-around'`},{name:`literal`,value:`'space-evenly'`}]},description:``},wrap:{required:!1,tsType:{name:`union`,raw:`'nowrap' | 'wrap' | 'wrap-reverse'`,elements:[{name:`literal`,value:`'nowrap'`},{name:`literal`,value:`'wrap'`},{name:`literal`,value:`'wrap-reverse'`}]},description:``}}};var l={title:`Layout/Flex`,component:c,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{direction:{control:`select`,options:[`row`,`column`,`row-reverse`,`column-reverse`]},gap:{control:`select`,options:[1,2,3,4,5,6,7,8]},align:{control:`select`,options:[`flex-start`,`flex-end`,`center`,`baseline`,`stretch`]},justify:{control:`select`,options:[`flex-start`,`flex-end`,`center`,`space-between`,`space-around`,`space-evenly`]},wrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]}}},u=({children:e,w:t,h:n})=>(0,a.jsx)(`div`,{style:{background:`var(--beast-color-primary-soft, #e6f0ff)`,border:`1px solid var(--beast-color-primary, #007bff)`,borderRadius:`6px`,padding:`12px 16px`,fontFamily:`system-ui, sans-serif`,fontSize:`13px`,fontWeight:500,color:`var(--beast-color-primary-dark, #0056b3)`,width:t,height:n,display:`flex`,alignItems:`center`,justifyContent:`center`},children:e}),d={args:{gap:3,direction:`row`},render:e=>(0,a.jsxs)(c,{...e,children:[(0,a.jsx)(u,{children:`One`}),(0,a.jsx)(u,{children:`Two`}),(0,a.jsx)(u,{children:`Three`})]})},f={render:()=>(0,a.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[`row`,`column`,`row-reverse`,`column-reverse`].map(e=>(0,a.jsxs)(`div`,{children:[(0,a.jsxs)(`p`,{style:{fontFamily:`monospace`,marginBottom:`8px`,fontSize:`13px`},children:[`direction="`,e,`"`]}),(0,a.jsxs)(c,{direction:e,gap:3,style:{border:`1px dashed #ccc`,padding:`16px`,borderRadius:`8px`},children:[(0,a.jsx)(u,{children:`A`}),(0,a.jsx)(u,{children:`B`}),(0,a.jsx)(u,{children:`C`})]})]},e))})},p={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{fontFamily:`monospace`,marginBottom:`8px`,fontSize:`13px`},children:`justify="space-between", align="center"`}),(0,a.jsxs)(c,{justify:`space-between`,align:`center`,gap:3,style:{background:`var(--beast-color-surface-variant, #f3f4f6)`,padding:`16px`,borderRadius:`8px`},children:[(0,a.jsx)(u,{h:`40px`,children:`Short`}),(0,a.jsx)(u,{h:`80px`,children:`Tall`}),(0,a.jsx)(u,{h:`60px`,children:`Medium`})]})]}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`p`,{style:{fontFamily:`monospace`,marginBottom:`8px`,fontSize:`13px`},children:`justify="center", align="flex-end"`}),(0,a.jsxs)(c,{justify:`center`,align:`flex-end`,gap:3,style:{background:`var(--beast-color-surface-variant, #f3f4f6)`,padding:`16px`,borderRadius:`8px`,height:`120px`},children:[(0,a.jsx)(u,{children:`A`}),(0,a.jsx)(u,{children:`B`}),(0,a.jsx)(u,{children:`C`})]})]})]})},m={render:()=>(0,a.jsxs)(`div`,{style:{maxWidth:`400px`},children:[(0,a.jsx)(`p`,{style:{fontFamily:`monospace`,marginBottom:`8px`,fontSize:`13px`},children:`wrap="wrap", constrained to 400px`}),(0,a.jsx)(c,{wrap:`wrap`,gap:3,children:Array.from({length:8},(e,t)=>(0,a.jsxs)(u,{w:`120px`,children:[`Item `,t+1]},t))})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    gap: 3,
    direction: 'row'
  },
  render: args => <Flex {...args}>
      <Item>One</Item>
      <Item>Two</Item>
      <Item>Three</Item>
    </Flex>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      {(['row', 'column', 'row-reverse', 'column-reverse'] as const).map(dir => <div key={dir}>
          <p style={{
        fontFamily: 'monospace',
        marginBottom: '8px',
        fontSize: '13px'
      }}>direction="{dir}"</p>
          <Flex direction={dir} gap={3} style={{
        border: '1px dashed #ccc',
        padding: '16px',
        borderRadius: '8px'
      }}>
            <Item>A</Item>
            <Item>B</Item>
            <Item>C</Item>
          </Flex>
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
      }}>justify="space-between", align="center"</p>
        <Flex justify="space-between" align="center" gap={3} style={{
        background: 'var(--beast-color-surface-variant, #f3f4f6)',
        padding: '16px',
        borderRadius: '8px'
      }}>
          <Item h="40px">Short</Item>
          <Item h="80px">Tall</Item>
          <Item h="60px">Medium</Item>
        </Flex>
      </div>
      <div>
        <p style={{
        fontFamily: 'monospace',
        marginBottom: '8px',
        fontSize: '13px'
      }}>justify="center", align="flex-end"</p>
        <Flex justify="center" align="flex-end" gap={3} style={{
        background: 'var(--beast-color-surface-variant, #f3f4f6)',
        padding: '16px',
        borderRadius: '8px',
        height: '120px'
      }}>
          <Item>A</Item>
          <Item>B</Item>
          <Item>C</Item>
        </Flex>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '400px'
  }}>
      <p style={{
      fontFamily: 'monospace',
      marginBottom: '8px',
      fontSize: '13px'
    }}>wrap="wrap", constrained to 400px</p>
      <Flex wrap="wrap" gap={3}>
        {Array.from({
        length: 8
      }, (_, i) => <Item key={i} w="120px">Item {i + 1}</Item>)}
      </Flex>
    </div>
}`,...m.parameters?.docs?.source}}};var h=[`Default`,`Directions`,`AlignAndJustify`,`Wrapping`];export{p as AlignAndJustify,d as Default,f as Directions,m as Wrapping,h as __namedExportsOrder,l as default};