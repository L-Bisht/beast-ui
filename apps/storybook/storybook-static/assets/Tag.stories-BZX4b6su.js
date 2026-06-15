import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{t as r}from"./Frame-OJVaauL9.js";var i=e(t(),1),a=n(),o=(0,i.forwardRef)(({variant:e=`filled`,color:t=`primary`,size:n=`md`,onDelete:i,icon:o,clickable:s=!1,children:c,className:l,style:u,onClick:d,onKeyDown:f,...p},m)=>{let h=e=>{s&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),d?.(e)),f?.(e)},g=e=>{e.stopPropagation(),i?.()};return(0,a.jsxs)(r,{ref:m,className:[`beast-tag`,`beast-tag-${e}`,`beast-tag-${t}`,`beast-tag-${n}`,s&&`beast-tag-clickable`,l].filter(Boolean).join(` `),role:s?`button`:void 0,tabIndex:s?0:void 0,onClick:s?d:void 0,onKeyDown:s?h:f,display:`inline-flex`,style:{alignItems:`center`,...u},...p,children:[o&&(0,a.jsx)(`span`,{className:`beast-tag-icon`,children:o}),(0,a.jsx)(`span`,{className:`beast-tag-label`,children:c}),i&&(0,a.jsx)(`button`,{type:`button`,className:`beast-tag-delete`,"aria-label":`Remove`,onClick:g,children:(0,a.jsxs)(`svg`,{width:`1em`,height:`1em`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,a.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,a.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})})]})});o.displayName=`Tag`,o.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'filled' | 'outlined' | 'soft'`,elements:[{name:`literal`,value:`'filled'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'soft'`}]},description:``,defaultValue:{value:`'filled'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'danger' | 'warning' | 'success' | 'info'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},clickable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]};var s={title:`Display/Tag`,component:o,parameters:{layout:`centered`},tags:[`autodocs`]},c={args:{children:`New Feature`}},l={args:{variant:`outlined`,color:`success`,children:`Completed`}},u={args:{variant:`soft`,color:`danger`,children:`Removable`,onDelete:()=>{alert(`Tag deleted!`)}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'New Feature'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    color: 'success',
    children: 'Completed'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    color: 'danger',
    children: 'Removable',
    onDelete: () => {
      alert('Tag deleted!');
    }
  }
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`Outlined`,`Deletable`];export{c as Default,u as Deletable,l as Outlined,d as __namedExportsOrder,s as default};