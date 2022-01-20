import{h as e,j as t,g as d,f as E,u as f}from"./vendor.7597709e.js";import{s as w,_ as Q,l as F,S as R,A as G,f as D,a as T,b as O,c as k}from"./add.118656f0.js";import{s as H,a as V,b as j,c as X,g as _,r as L}from"./index.bb5e5f0d.js";import{S as Z}from"./swiper.min.43eced01.js";import{N as Y}from"./news.ddd16e4e.js";import{S as K}from"./search.e6d63ef2.js";import{S as q}from"./ShoppingCartComponent.e49edd45.js";const v=i=>{const{menuBarData:a=[]}=i,o=s=>{};return e("div",{className:"menu-item__box",children:a.map((s,l)=>t("div",{className:"item-box",onClick:()=>{o(`${s.type}`)},children:[e("img",{src:s.picUrl,alt:"",className:"item-box__img"}),e("div",{className:"item-box__text",children:s.type})]},l))})};const z=i=>{const{menuBarData:a={}}=i;return d.exports.useEffect(()=>{new Z(".swiper",{direction:"horizontal",scrollbar:{el:".swiper-scrollbar"}})},[]),e("div",{className:"swiper-bg",children:e("div",{className:"swiper-region",children:t("div",{className:"swiper",children:[t("div",{className:"swiper-wrapper",children:[t("div",{className:"swiper-slide",children:[e(v,{menuBarData:a.list1}),e(v,{menuBarData:a.list2})]}),t("div",{className:"swiper-slide",children:[e(v,{menuBarData:a.list3}),e(v,{menuBarData:a.list4})]})]}),e("div",{className:"swiper-scrollbar"})]})})})};const S=i=>{const{goToSearch:a,navBarFixed:o}=i;return t("div",{className:o?"navBar navBar-fixed":"navBar",children:[e("div",{className:"navBar__proName",children:"\u7F8E\u56E2\u4F18\u9009"}),t("div",{className:"navBar__search",onClick:()=>a(),children:[e("img",{src:K}),e("div",{className:"navBar__search-recommend",children:"\u738B\u8001\u5409"})]}),e("div",{className:"navBar__news",children:e("img",{src:Y})})]})};w.div`
    background-color: #343334;
    width: 120px;
    height: 50px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 50;
    text-align: center;
    border-radius: 10px;
    display: fixed;
    top: 50%;
    left: 50%;
    z-index: 50;
`;const W=i=>{let{good:a={},i:o,selectedGoods:s,totalAccount:l,totalNum:n}=i;const{goToDetail:g,setCartInfo:C,setTotalAccount:m,setTotalNum:u,setAllSelected:N}=i;let c=s.findIndex(r=>r.id==a.id);const h=f(),p=(r,A)=>{A>0?c!=-1?(s[c].num++,s[c].isSelected?(m(D(l,A)),u(n+1)):(s[c].isSelected=!0,m(D(l,A*s[c].num)),u(n+s[c].num))):(r.num=1,r.isSelected=!0,s=[r,...s],m(D(l,A)),u(n+1)):(s[c].num--,s[c].isSelected&&(m(T(l,-A)),u(n-1)),s[c].num==0&&s.splice(c,1)),C(s),B()},B=()=>{let r=!0;s.map(A=>{A.isSelected||(r=!1)}),N(!!r)};return t("div",{className:(o+1)%2==0?"right-card":"left-card",children:[e(Q,{height:100,placeholder:e("img",{height:"100%",width:"100%",src:F}),children:e("img",{src:a.imgsrc,onClick:()=>h.push(`/detail/${a.id}`)})}),t("div",{className:"card__description",children:[t("div",{className:"description__title",onClick:()=>g(a.id),children:[a.tags.map(r=>e("div",{className:"description__title-tags",children:r},r)),a.title]}),e("div",{className:"description__tradeDescription",children:a.tradeDescription}),e("div",{className:"description__price",children:`\uFFE5${a.price}`}),s[c]?t("div",{className:"oprateNum",children:[e("img",{src:R,className:"subNum",onClick:()=>p(a,-a.price)}),e("span",{className:"goodsNum",children:s[c].num}),e("img",{src:G,className:"addNum",onClick:()=>p(a,a.price)})]}):e("div",{className:"description__button",onClick:()=>{p(a,a.price)},children:"\u52A0\u5165\u8D2D\u7269\u8F66"})]})]})},J=i=>({selectedGoods:i.main.selectedGoods,totalAccount:i.main.totalAccount,totalNum:i.main.totalNum}),$=i=>({setCartInfo(a){i(H(a))},setTotalAccount(a){i(V(a))},setTotalNum(a){i(j(a))},setAllSelected(a){i(X(a))}});var ee=E(J,$)(d.exports.memo(W));const ae=i=>{const{GoodsListData:a=[]}=i;return e("div",{className:"goodsList__container",children:a.map((o,s)=>e(ee,{good:o,i:s},s))})};var se="/assets/time.704ebdb8.png";const ie=w.div`
    height 15px;
    background-color #fdf2bf;
    font-size 10px;
    color #ff190c;
    font-weight 700;
    display inline;
    padding 0 2px;
    border-radius 5px;
    position absolute;
`,U=i=>{const{bottom:a,left:o,price:s}=i;return t(ie,{style:{bottom:`${a}px`,left:`${o}px`},children:["\uFFE5",s]})};const te=i=>{const{SnapUpGoodsData:a={}}=i,o=a.goods?a.goods:[];return t("div",{className:"snapUpGoods-container",children:[t("div",{className:"container__desc",children:[e("div",{className:"container__desc-title",children:a.title}),e("div",{className:"container__desc-time",children:a.time}),e("div",{className:"container__desc-icon",children:e("img",{src:se})})]}),e("div",{className:"container__goodsList",children:o.map(s=>t("div",{className:"container__goodsList-item",children:[e("img",{src:s.imgsrc}),e(U,{price:s.price,bottom:0,left:10})]},s.id))})]})};var oe="data:image/png;base64,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";const M=i=>{const{activity:a={}}=i,{goods:o=[]}=a;return t("div",{className:"activity__container",children:[t("div",{className:"activity__header",children:[a.title,t("div",{className:"icon-desc",children:[e("img",{src:oe}),e("div",{className:"desc",children:a.icon_desc})]})]}),e("div",{className:"activity__goods",children:o.map(s=>t("div",{className:"activity__goods__item",children:[e("img",{className:"item__img",src:s.imgsrc,alt:""}),e(U,{price:s.price,bottom:-8,left:15})]},s.id))})]})};const ce=i=>{const{SpecialGoodsData:a={}}=i;return t("div",{className:"SpecialGoods",children:[e(M,{activity:a.activity1}),e(M,{activity:a.activity2})]})};const re=i=>{const{menuBarData:a=[],menuBarFixed:o}=i,s=f(),l=n=>{s.push(`/home/classify/${n}`)};return e("div",{className:o?"menuBar menuBar-fixed":"menuBar",children:e("div",{children:e("div",{className:"menuBar__container",children:a.map(n=>t("div",{className:"menuBar__item",onClick:()=>l(n.type),children:[e("img",{src:n.picUrl}),e("div",{className:"menuBar__item__desc",children:n.title})]},n.type))})})})};const ne=i=>{const{mainData:a}=i,{menuBarData:o={list1:[],list2:[],list4:[]},specialGoodsData:s,SnapUpGoodsData:l,menuBar_TopData:n}=a;let[g,C]=d.exports.useState(1);const[m,u]=d.exports.useState([]),[N,c]=d.exports.useState(!1),[h,p]=d.exports.useState(!1),[B,r]=d.exports.useState(!1),{getMainDataDispatch:A}=i,x=f(),b=async()=>{await L(g).then(I=>{u([...m,...I.data.data.list])})},y=async()=>{N||await setTimeout(()=>{c(!0),C(++g)},1e3),c(!1)},P=()=>{};return d.exports.useEffect(()=>{a.length||A()},[]),d.exports.useEffect(()=>{b()},[g]),t("div",{className:"main",children:[e(O,{direction:"vertical",refresh:!1,pullUp:y,pullDown:P,onScroll:I=>{I.y<-30?p(!0):p(!1),I.y<-100?r(!0):r(!1),k()},children:t("div",{children:[e(S,{goToSearch:()=>x.push("/search"),navBarFixed:h}),e(z,{menuBarData:o}),t("div",{className:"main-padding",children:[e(te,{SnapUpGoodsData:l}),e(ce,{SpecialGoodsData:s}),e(ae,{GoodsListData:m})]})]})}),e("div",{style:h?{display:""}:{display:"none"},children:e(S,{goToSearch:()=>x.push("/search"),navBarFixed:h})}),e("div",{style:B?{display:""}:{display:"none"},children:e(re,{menuBarData:n,menuBarFixed:B})}),e(q,{})]})},le=i=>({mainData:i.main.maindata}),de=i=>({getMainDataDispatch(){i(_())}});var Be=E(le,de)(d.exports.memo(ne));export{Be as default};
