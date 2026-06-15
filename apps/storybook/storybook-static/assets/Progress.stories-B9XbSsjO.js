import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";var r=e(t(),1),i={progressContainer:`_progressContainer_1if05_1`,labelContainer:`_labelContainer_1if05_8`,label:`_label_1if05_8`,valueText:`_valueText_1if05_21`,track:`_track_1if05_26`,bar:`_bar_1if05_35`,indeterminate:`_indeterminate_1if05_43`,"indeterminate-animation":`_indeterminate-animation_1if05_1`,sm:`_sm_1if05_62`,md:`_md_1if05_65`,lg:`_lg_1if05_68`,primary:`_primary_1if05_73`,success:`_success_1if05_76`,warning:`_warning_1if05_79`,danger:`_danger_1if05_82`},a=n(),o=(0,r.forwardRef)(({value:e,max:t=100,size:n=`md`,color:r=`primary`,label:o,showValue:s=!1,className:c,style:l,...u},d)=>{let f=e===void 0,p=f?0:Math.min(Math.max(e,0),t),m=f?0:Math.round(p/t*100);return(0,a.jsxs)(`div`,{className:[`beast-progress`,i.progressContainer,`beast-progress-${n}`,i[n],`beast-progress-${r}`,i[r],c].filter(Boolean).join(` `),style:l,ref:d,...u,children:[(o||s)&&(0,a.jsxs)(`div`,{className:`beast-progress-label-container ${i.labelContainer}`,children:[o&&(0,a.jsx)(`span`,{className:i.label,children:o}),s&&!f&&(0,a.jsxs)(`span`,{className:i.valueText,children:[m,`%`]})]}),(0,a.jsx)(`div`,{role:`progressbar`,"aria-label":o,"aria-valuenow":f?void 0:p,"aria-valuemin":0,"aria-valuemax":t,className:`beast-progress-track ${i.track}`,children:(0,a.jsx)(`div`,{className:`beast-progress-bar ${i.bar} ${f?`beast-progress-indeterminate ${i.indeterminate}`:``}`,style:{transform:f?void 0:`translateX(-${100-m}%)`}})})]})});o.displayName=`Progress`,o.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{value:{required:!1,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},color:{required:!1,tsType:{name:`union`,raw:`'primary' | 'success' | 'warning' | 'danger'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'danger'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},showValue:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}};var s={title:`Feedback/Progress`,component:o,parameters:{layout:`padded`},tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`primary`,`success`,`warning`,`danger`]}}},c={args:{value:60,label:`Uploading files...`,showValue:!0}},l={args:{value:void 0,label:`Processing...`}},u={render:()=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,a.jsx)(o,{value:40,color:`primary`,label:`Primary`}),(0,a.jsx)(o,{value:60,color:`success`,label:`Success`}),(0,a.jsx)(o,{value:80,color:`warning`,label:`Warning`}),(0,a.jsx)(o,{value:90,color:`danger`,label:`Danger`})]})},d=()=>{let[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=setInterval(()=>{t(e=>e>=100?0:e+10)},1e3);return()=>{clearInterval(e)}},[]),(0,a.jsx)(o,{value:e,label:`Animated Progress`,showValue:!0})};d.__docgenInfo={description:``,methods:[],displayName:`Animated`},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: 'Uploading files...',
    showValue: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: undefined,
    label: 'Processing...'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Progress value={40} color="primary" label="Primary" />
      <Progress value={60} color="success" label="Success" />
      <Progress value={80} color="warning" label="Warning" />
      <Progress value={90} color="danger" label="Danger" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(v => v >= 100 ? 0 : v + 10);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <Progress value={value} label="Animated Progress" showValue />;
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Indeterminate`,`Colors`,`Animated`];export{d as Animated,u as Colors,c as Default,l as Indeterminate,f as __namedExportsOrder,s as default};