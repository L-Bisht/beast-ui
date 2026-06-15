import{t as e}from"./jsx-runtime-BjHVURKR.js";import{t}from"./Text-CQXSr0Su.js";var n=e(),r={title:`Display/Text`,component:t,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`]},weight:{control:`select`,options:[`normal`,`medium`,`semibold`,`bold`]},color:{control:`select`,options:[`primary`,`secondary`,`danger`,`warning`,`success`,`info`,`on-surface`,`muted`]},align:{control:`select`,options:[`left`,`center`,`right`,`justify`]},truncate:{control:`boolean`}}},i={args:{children:`The quick brown fox jumps over the lazy dog.`,size:`md`,weight:`normal`}},a={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`].map(e=>(0,n.jsxs)(t,{size:e,children:[`size="`,e,`" — The quick brown fox jumps over the lazy dog.`]},e))})},o={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[`normal`,`medium`,`semibold`,`bold`].map(e=>(0,n.jsxs)(t,{weight:e,size:`lg`,children:[`weight="`,e,`" — Typography matters.`]},e))})},s={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:[`primary`,`secondary`,`danger`,`warning`,`success`,`info`,`on-surface`,`muted`].map(e=>(0,n.jsxs)(t,{color:e,weight:`medium`,children:[`color="`,e,`" — Semantic color mapping`]},e))})},c={render:()=>(0,n.jsx)(`div`,{style:{maxWidth:`300px`,border:`1px dashed #ccc`,padding:`16px`,borderRadius:`8px`},children:(0,n.jsx)(t,{truncate:!0,children:`This is a very long piece of text that will be truncated with an ellipsis because the container is too narrow to display it all.`})})},l={render:()=>(0,n.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,n.jsx)(t,{as:`h1`,size:`2xl`,weight:`bold`,children:`Heading 1 (h1)`}),(0,n.jsx)(t,{as:`h2`,size:`xl`,weight:`semibold`,children:`Heading 2 (h2)`}),(0,n.jsx)(t,{as:`h3`,size:`lg`,weight:`semibold`,children:`Heading 3 (h3)`}),(0,n.jsx)(t,{as:`span`,size:`sm`,color:`muted`,children:`Inline span element`}),(0,n.jsx)(t,{as:`small`,size:`xs`,color:`muted`,children:`Small text element`}),(0,n.jsx)(t,{as:`blockquote`,size:`md`,color:`primary`,style:{borderLeft:`3px solid var(--beast-color-primary)`,paddingLeft:`16px`,fontStyle:`italic`},children:`"Design is not just what it looks like, design is how it works." — Steve Jobs`})]})},u={render:()=>(0,n.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[`left`,`center`,`right`,`justify`].map(e=>(0,n.jsx)(`div`,{style:{border:`1px dashed #ccc`,padding:`16px`,borderRadius:`8px`},children:(0,n.jsxs)(t,{align:e,children:[`align="`,e,`" — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`]})},e))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: 'md',
    weight: 'normal'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map(size => <Text key={size} size={size}>
          size="{size}" — The quick brown fox jumps over the lazy dog.
        </Text>)}
    </div>
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['normal', 'medium', 'semibold', 'bold'] as const).map(weight => <Text key={weight} weight={weight} size="lg">
          weight="{weight}" — Typography matters.
        </Text>)}
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      {(['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'on-surface', 'muted'] as const).map(color => <Text key={color} color={color} weight="medium">
          color="{color}" — Semantic color mapping
        </Text>)}
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '300px',
    border: '1px dashed #ccc',
    padding: '16px',
    borderRadius: '8px'
  }}>
      <Text truncate>
        This is a very long piece of text that will be truncated with an ellipsis because the container is too narrow to display it all.
      </Text>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Text as="h1" size="2xl" weight="bold">Heading 1 (h1)</Text>
      <Text as="h2" size="xl" weight="semibold">Heading 2 (h2)</Text>
      <Text as="h3" size="lg" weight="semibold">Heading 3 (h3)</Text>
      <Text as="span" size="sm" color="muted">Inline span element</Text>
      <Text as="small" size="xs" color="muted">Small text element</Text>
      <Text as="blockquote" size="md" color="primary" style={{
      borderLeft: '3px solid var(--beast-color-primary)',
      paddingLeft: '16px',
      fontStyle: 'italic'
    }}>
        "Design is not just what it looks like, design is how it works." — Steve Jobs
      </Text>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      {(['left', 'center', 'right', 'justify'] as const).map(alignment => <div key={alignment} style={{
      border: '1px dashed #ccc',
      padding: '16px',
      borderRadius: '8px'
    }}>
          <Text align={alignment}>
            align="{alignment}" — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>)}
    </div>
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`Sizes`,`Weights`,`Colors`,`Truncation`,`SemanticElements`,`Alignment`];export{u as Alignment,s as Colors,i as Default,l as SemanticElements,a as Sizes,c as Truncation,o as Weights,d as __namedExportsOrder,r as default};