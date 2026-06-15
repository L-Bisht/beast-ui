import{s as e}from"./iframe-tCqtZMMo.js";import{t}from"./react-_B835J-x.js";import{t as n}from"./jsx-runtime-BjHVURKR.js";import{i as r}from"./useGlobalListeners-DHJ8Vai_.js";import{t as i}from"./useLocalizedStringFormatter-C03FXK-6.js";import{t as a}from"./useLink-CigjX4lY.js";import{t as o}from"./Text-CQXSr0Su.js";function s(e,t){let{isCurrent:n,isDisabled:r,"aria-current":i,elementType:o=`a`,...s}=e,{linkProps:c}=a({isDisabled:r||n,elementType:o,...s},t),l=/^h[1-6]$/.test(o),u={};return l||(u=c),n&&(u[`aria-current`]=i||`page`,u.tabIndex=e.autoFocus?-1:void 0),{itemProps:{"aria-disabled":r,...u}}}var c={};c={breadcrumbs:`عناصر الواجهة`};var l={};l={breadcrumbs:`Трохи хляб`};var u={};u={breadcrumbs:`Popis cesty`};var d={};d={breadcrumbs:`Brødkrummer`};var f={};f={breadcrumbs:`Breadcrumbs`};var p={};p={breadcrumbs:`Πλοηγήσεις breadcrumb`};var m={};m={breadcrumbs:`Breadcrumbs`};var h={};h={breadcrumbs:`Migas de pan`};var g={};g={breadcrumbs:`Lingiread`};var _={};_={breadcrumbs:`Navigointilinkit`};var v={};v={breadcrumbs:`Chemin de navigation`};var y={};y={breadcrumbs:`שבילי ניווט`};var b={};b={breadcrumbs:`Navigacijski putovi`};var x={};x={breadcrumbs:`Morzsamenü`};var S={};S={breadcrumbs:`Breadcrumb`};var C={};C={breadcrumbs:`パンくずリスト`};var w={};w={breadcrumbs:`탐색 표시`};var T={};T={breadcrumbs:`Naršymo kelias`};var E={};E={breadcrumbs:`Atpakaļceļi`};var D={};D={breadcrumbs:`Navigasjonsstier`};var O={};O={breadcrumbs:`Broodkruimels`};var k={};k={breadcrumbs:`Struktura nawigacyjna`};var A={};A={breadcrumbs:`Caminho detalhado`};var j={};j={breadcrumbs:`Categorias`};var M={};M={breadcrumbs:`Miez de pâine`};var N={};N={breadcrumbs:`Навигация`};var P={};P={breadcrumbs:`Navigačné prvky Breadcrumbs`};var F={};F={breadcrumbs:`Drobtine`};var I={};I={breadcrumbs:`Putanje navigacije`};var L={};L={breadcrumbs:`Sökvägar`};var R={};R={breadcrumbs:`İçerik haritaları`};var z={};z={breadcrumbs:`Навігаційна стежка`};var B={};B={breadcrumbs:`导航栏`};var V={};V={breadcrumbs:`導覽列`};var H={};H={"ar-AE":c,"bg-BG":l,"cs-CZ":u,"da-DK":d,"de-DE":f,"el-GR":p,"en-US":m,"es-ES":h,"et-EE":g,"fi-FI":_,"fr-FR":v,"he-IL":y,"hr-HR":b,"hu-HU":x,"it-IT":S,"ja-JP":C,"ko-KR":w,"lt-LT":T,"lv-LV":E,"nb-NO":D,"nl-NL":O,"pl-PL":k,"pt-BR":A,"pt-PT":j,"ro-RO":M,"ru-RU":N,"sk-SK":P,"sl-SI":F,"sr-SP":I,"sv-SE":L,"tr-TR":R,"uk-UA":z,"zh-CN":B,"zh-TW":V};function U(e){return e&&e.__esModule?e.default:e}function W(e){let{"aria-label":t,...n}=e,a=i(U(H),`@react-aria/breadcrumbs`);return{navProps:{...r(n,{labelable:!0}),"aria-label":t||a.format(`breadcrumbs`)}}}var G=e(t(),1),K={breadcrumb:`_breadcrumb_iwegx_1`,list:`_list_iwegx_7`,item:`_item_iwegx_16`,itemLink:`_itemLink_iwegx_21`,current:`_current_iwegx_42`,separator:`_separator_iwegx_48`,defaultSeparator:`_defaultSeparator_iwegx_56`,ellipsisItem:`_ellipsisItem_iwegx_61`,ellipsisButton:`_ellipsisButton_iwegx_66`},q=n(),ee=(0,q.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:K.defaultSeparator,children:(0,q.jsx)(`polyline`,{points:`9 18 15 12 9 6`})}),J=G.forwardRef(({children:e,separator:t=ee,maxItems:n,className:r,style:i,...a},o)=>{let{navProps:s}=W({...a}),[c,l]=(0,G.useState)(!1),u=G.Children.toArray(e).filter(G.isValidElement),d=u.length,f=u;if(n!==void 0&&d>n&&!c){let e=n-1;f=[u[0],(0,q.jsxs)(`li`,{className:K.ellipsisItem,children:[(0,q.jsx)(`button`,{type:`button`,className:K.ellipsisButton,onClick:()=>{l(!0)},"aria-label":`Show more breadcrumbs`,children:`...`}),(0,q.jsx)(`span`,{className:K.separator,"aria-hidden":`true`,children:t})]},`ellipsis`),...u.slice(-e)]}let p=f.map(e=>{let n=e===u[d-1];return e.key===`ellipsis`?e:(0,G.cloneElement)(e,{isCurrent:n,separator:n?void 0:t})}),m=[`beast-breadcrumb`,K.breadcrumb,r].filter(Boolean).join(` `);return(0,q.jsx)(`nav`,{...s,ref:o,className:m,style:i,children:(0,q.jsx)(`ol`,{className:K.list,children:p})})});J.displayName=`Breadcrumb`;var Y=G.forwardRef(({children:e,href:t,isCurrent:n,separator:r,className:i,style:a,...o},c)=>{let l=G.useRef(null),{itemProps:u}=s({...o,isCurrent:n,elementType:t?`a`:`span`,children:e},l),d=t?`a`:`span`,f={...u,href:t,className:`${K.itemLink} ${n?K.current:``}`};return(0,q.jsxs)(`li`,{className:`${K.item} ${i||``}`,style:a,ref:c,children:[n?(0,q.jsx)(`span`,{...f,ref:l,"aria-current":`page`,children:e}):(0,q.jsx)(d,{...f,ref:l,children:e}),r&&(0,q.jsx)(`span`,{className:K.separator,"aria-hidden":`true`,children:r})]})});Y.displayName=`Breadcrumb.Item`;var X=Object.assign(J,{Item:Y});J.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},separator:{required:!1,tsType:{name:`ReactNode`},description:``,defaultValue:{value:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.defaultSeparator}>
  <polyline points="9 18 15 12 9 6" />
</svg>`,computed:!1}},maxItems:{required:!1,tsType:{name:`number`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}}},Y.__docgenInfo={description:``,methods:[],displayName:`Breadcrumb.Item`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},href:{required:!1,tsType:{name:`string`},description:``},isCurrent:{required:!1,tsType:{name:`boolean`},description:``},separator:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:``}}};var te={title:`Navigation/Breadcrumb`,component:X,parameters:{layout:`centered`},tags:[`autodocs`]},Z={args:{children:null},render:()=>(0,q.jsxs)(X,{children:[(0,q.jsx)(X.Item,{href:`/`,children:`Home`}),(0,q.jsx)(X.Item,{href:`/components`,children:`Components`}),(0,q.jsx)(X.Item,{href:`/components/navigation`,children:`Navigation`}),(0,q.jsx)(X.Item,{children:`Breadcrumb`})]})},Q={args:{children:null},render:()=>(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(o,{weight:`bold`,style:{marginBottom:`8px`},children:`Slash Separator`}),(0,q.jsxs)(X,{separator:`/`,children:[(0,q.jsx)(X.Item,{href:`/`,children:`Home`}),(0,q.jsx)(X.Item,{href:`/products`,children:`Products`}),(0,q.jsx)(X.Item,{children:`Shoes`})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(o,{weight:`bold`,style:{marginBottom:`8px`},children:`Arrow Separator`}),(0,q.jsxs)(X,{separator:`→`,children:[(0,q.jsx)(X.Item,{href:`/`,children:`Home`}),(0,q.jsx)(X.Item,{href:`/docs`,children:`Docs`}),(0,q.jsx)(X.Item,{children:`API`})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(o,{weight:`bold`,style:{marginBottom:`8px`},children:`Dash Separator`}),(0,q.jsxs)(X,{separator:(0,q.jsx)(`span`,{style:{color:`red`},children:`-`}),children:[(0,q.jsx)(X.Item,{href:`/`,children:`Home`}),(0,q.jsx)(X.Item,{href:`/blog`,children:`Blog`}),(0,q.jsx)(X.Item,{children:`Article`})]})]})]})},$={args:{children:null},render:()=>(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(o,{weight:`bold`,style:{marginBottom:`8px`},children:`Max Items = 3`}),(0,q.jsxs)(X,{maxItems:3,children:[(0,q.jsx)(X.Item,{href:`/`,children:`Home`}),(0,q.jsx)(X.Item,{href:`/store`,children:`Store`}),(0,q.jsx)(X.Item,{href:`/store/electronics`,children:`Electronics`}),(0,q.jsx)(X.Item,{href:`/store/electronics/phones`,children:`Phones`}),(0,q.jsx)(X.Item,{children:`Smartphones`})]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(o,{weight:`bold`,style:{marginBottom:`8px`},children:`Max Items = 4`}),(0,q.jsxs)(X,{maxItems:4,children:[(0,q.jsx)(X.Item,{href:`/`,children:`Home`}),(0,q.jsx)(X.Item,{href:`/store`,children:`Store`}),(0,q.jsx)(X.Item,{href:`/store/electronics`,children:`Electronics`}),(0,q.jsx)(X.Item,{href:`/store/electronics/phones`,children:`Phones`}),(0,q.jsx)(X.Item,{children:`Smartphones`})]})]})]})};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/components">Components</Breadcrumb.Item>
      <Breadcrumb.Item href="/components/navigation">Navigation</Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Text weight="bold" style={{
        marginBottom: '8px'
      }}>Slash Separator</Text>
        <Breadcrumb separator="/">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Item>Shoes</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Text weight="bold" style={{
        marginBottom: '8px'
      }}>Arrow Separator</Text>
        <Breadcrumb separator="→">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/docs">Docs</Breadcrumb.Item>
          <Breadcrumb.Item>API</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Text weight="bold" style={{
        marginBottom: '8px'
      }}>Dash Separator</Text>
        <Breadcrumb separator={<span style={{
        color: 'red'
      }}>-</span>}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/blog">Blog</Breadcrumb.Item>
          <Breadcrumb.Item>Article</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Text weight="bold" style={{
        marginBottom: '8px'
      }}>Max Items = 3</Text>
        <Breadcrumb maxItems={3}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/store">Store</Breadcrumb.Item>
          <Breadcrumb.Item href="/store/electronics">Electronics</Breadcrumb.Item>
          <Breadcrumb.Item href="/store/electronics/phones">Phones</Breadcrumb.Item>
          <Breadcrumb.Item>Smartphones</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <Text weight="bold" style={{
        marginBottom: '8px'
      }}>Max Items = 4</Text>
        <Breadcrumb maxItems={4}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/store">Store</Breadcrumb.Item>
          <Breadcrumb.Item href="/store/electronics">Electronics</Breadcrumb.Item>
          <Breadcrumb.Item href="/store/electronics/phones">Phones</Breadcrumb.Item>
          <Breadcrumb.Item>Smartphones</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </div>
}`,...$.parameters?.docs?.source}}};var ne=[`Default`,`CustomSeparator`,`MaxItems`];export{Q as CustomSeparator,Z as Default,$ as MaxItems,ne as __namedExportsOrder,te as default};