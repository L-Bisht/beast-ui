import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";var r=e(t(),1),i={spinner:`_spinner_n7fus_1`,svg:`_svg_n7fus_6`,spin:`_spin_n7fus_1`,track:`_track_n7fus_12`,head:`_head_n7fus_16`,visuallyHidden:`_visuallyHidden_n7fus_30`,sm:`_sm_n7fus_43`,md:`_md_n7fus_47`,lg:`_lg_n7fus_51`,primary:`_primary_n7fus_57`,"on-surface":`_on-surface_n7fus_60`,inherit:`_inherit_n7fus_63`},a=n(),o=(0,r.forwardRef)(({size:e=`md`,color:t=`inherit`,label:n=`Loading`,className:r,style:o,...s},c)=>{let l=typeof e==`number`;return(0,a.jsxs)(`div`,{ref:c,className:[`beast-spinner`,i.spinner,!l&&`beast-spinner-${e}`,!l&&i[e],`beast-spinner-${t}`,i[t],r].filter(Boolean).join(` `),style:l?{...o,width:`${e}px`,height:`${e}px`}:o,role:`status`,...s,children:[(0,a.jsxs)(`svg`,{className:i.svg,viewBox:`0 0 24 24`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,a.jsx)(`circle`,{className:i.track,cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`3`}),(0,a.jsx)(`path`,{className:i.head,d:`M12 2C6.47715 2 2 6.47715 2 12`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`})]}),(0,a.jsx)(`span`,{className:`beast-visually-hidden ${i.visuallyHidden}`,children:n})]})});o.displayName=`Spinner`,o.__docgenInfo={description:``,methods:[],displayName:`Spinner`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg' | number`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`number`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'on-surface' | 'inherit'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'on-surface'`},{name:`literal`,value:`'inherit'`}]},description:``,defaultValue:{value:`'inherit'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Loading'`,computed:!1}}}};var s={title:`Feedback/Spinner`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,64]},color:{control:`select`,options:[`primary`,`on-surface`,`inherit`]}}},c={args:{size:`md`,color:`primary`}},l={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,a.jsx)(o,{size:`sm`}),(0,a.jsx)(o,{size:`md`}),(0,a.jsx)(o,{size:`lg`}),(0,a.jsx)(o,{size:64})]})},u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,gap:`24px`,alignItems:`center`},children:[(0,a.jsx)(o,{color:`primary`}),(0,a.jsx)(o,{color:`on-surface`}),(0,a.jsx)(`div`,{style:{color:`var(--beast-color-success)`,display:`inline-flex`},children:(0,a.jsx)(o,{color:`inherit`})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'primary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size={64} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <Spinner color="primary" />
      <Spinner color="on-surface" />
      <div style={{
      color: 'var(--beast-color-success)',
      display: 'inline-flex'
    }}>
        <Spinner color="inherit" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};var d=[`Default`,`Sizes`,`Colors`];export{u as Colors,c as Default,l as Sizes,d as __namedExportsOrder,s as default};