import{h as a,j as i,g as n,f as b,l as S}from"./vendor.0091d4a3.js";import{_ as y,l as F,f as G,s as R,S as O,a as T}from"./loading.2306138e.js";import{g as H,s as V,a as j,b as k,r as X}from"./index.09481aae.js";import{S as _,N as L}from"./news.2f87a230.js";import{S as Z,s as Y}from"./ShoppingCartComponent.84ab3292.js";const p=s=>{const{menuBarData:e=[]}=s,c=t=>{};return a("div",{className:"menu-item__box",children:e.map((t,o)=>i("div",{className:"item-box",onClick:()=>{c(`${t.type}`)},children:[a("img",{src:t.picUrl,alt:"",className:"item-box__img"}),a("div",{className:"item-box__text",children:t.type})]},o))})};const K=s=>{const{menuBarData:e={}}=s;return n.exports.useEffect(()=>{new _(".swiper",{direction:"horizontal",scrollbar:{el:".swiper-scrollbar"}})},[]),a("div",{className:"swiper-bg",children:a("div",{className:"swiper-region",children:i("div",{className:"swiper",children:[i("div",{className:"swiper-wrapper",children:[i("div",{className:"swiper-slide",children:[a(p,{menuBarData:e.list1}),a(p,{menuBarData:e.list2})]}),i("div",{className:"swiper-slide",children:[a(p,{menuBarData:e.list3}),a(p,{menuBarData:e.list4})]})]}),a("div",{className:"swiper-scrollbar"})]})})})};const D=s=>{const{goToSearch:e,navBarFixed:c}=s;return i("div",{className:c?"navBar navBar-fixed":"navBar",children:[a("div",{className:"navBar__proName",children:"\u7F8E\u56E2\u4F18\u9009"}),i("div",{className:"navBar__search",onClick:()=>e(),children:[a("img",{src:Z}),a("div",{className:"navBar__search-recommend",children:"\u738B\u8001\u5409"})]}),a("div",{className:"navBar__news",children:a("img",{src:L})})]})};const q=s=>{const{good:e={},index:c,selectedGoods:t,totalAccount:o}=s,{setCartInfo:d,setTotalAccount:A}=s,l=(r,g)=>{g>0&&(A(G(o,g)),d([r,...t]))};return i("div",{className:(c+1)%2==0?"right-card":"left-card",children:[a(y,{height:100,placeholder:a("img",{height:"100%",width:"100%",src:F}),children:a("img",{src:e.imgsrc})}),i("div",{className:"card__description",children:[i("div",{className:"description__title",children:[e.tags.map(r=>a("div",{className:"description__title-tags",children:r},c+Math.random()*1e3)),e.title]}),a("div",{className:"description__tradeDescription",children:e.tradeDescription}),a("div",{className:"description__price",children:`\uFFE5${e.price}`}),a("div",{className:"description__button",onClick:()=>l(e,e.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"})]})]})};const z=s=>{const{GoodsListData:e=[],selectedGoods:c,totalAccount:t}=s,{setTotalAccount:o,setCartInfo:d}=s;return a("div",{className:"goodsList__container",children:e.map((A,l)=>a(q,{good:A,index:l,selectedGoods:c,setCartInfo:d,totalAccount:t,setTotalAccount:o},l))})};var W="/assets/time.704ebdb8.png";const J=R.div`
    height 15px;
    background-color #fdf2bf;
    font-size 10px;
    color #ff190c;
    font-weight 700;
    display inline;
    padding 0 2px;
    border-radius 5px;
    position absolute;
`,x=s=>{const{bottom:e,left:c,price:t}=s;return i(J,{style:{bottom:`${e}px`,left:`${c}px`},children:["\uFFE5",t]})};const $=s=>{const{SnapUpGoodsData:e={}}=s,c=e.goods?e.goods:[];return i("div",{className:"snapUpGoods-container",children:[i("div",{className:"container__desc",children:[a("div",{className:"container__desc-title",children:e.title}),a("div",{className:"container__desc-time",children:e.time}),a("div",{className:"container__desc-icon",children:a("img",{src:W})})]}),a("div",{className:"container__goodsList",children:c.map(t=>i("div",{className:"container__goodsList-item",children:[a("img",{src:t.imgsrc}),a(x,{price:t.price,bottom:0,left:10})]},t.id))})]})};var aa="data:image/png;base64,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";const E=s=>{const{activity:e={}}=s,{goods:c=[]}=e;return i("div",{className:"activity__container",children:[i("div",{className:"activity__header",children:[e.title,i("div",{className:"icon-desc",children:[a("img",{src:aa}),a("div",{className:"desc",children:e.icon_desc})]})]}),a("div",{className:"activity__goods",children:c.map(t=>i("div",{className:"activity__goods__item",children:[a("img",{className:"item__img",src:t.imgsrc,alt:""}),a(x,{price:t.price,bottom:-8,left:15})]},t.id))})]})};const ea=s=>{const{SpecialGoodsData:e={}}=s;return i("div",{className:"SpecialGoods",children:[a(E,{activity:e.activity1}),a(E,{activity:e.activity2})]})};const sa=s=>{const{menuBarData:e=[],menuBarFixed:c}=s;return a("div",{className:c?"menuBar menuBar-fixed":"menuBar",children:a("div",{children:a("div",{className:"menuBar__container",children:e.map(t=>i("div",{className:"menuBar__item",children:[a("img",{src:t.picUrl}),a("div",{className:"menuBar__item__desc",children:t.type})]},t.id))})})})};const ta=s=>{const{mainData:e,selectedGoods:c,totalAccount:t}=s,{menuBarData:o={list1:[],list2:[],list4:[]},specialGoodsData:d,SnapUpGoodsData:A}=e,l=[...o.list1,...o.list4,...o.list2];let[r,g]=n.exports.useState(1);const[B,f]=n.exports.useState([]),[u,I]=n.exports.useState(!1),[N,v]=n.exports.useState(!1),{getMainDataDispatch:U,getSelectedGoodsDisPatch:w,getTotalAccountDispatch:C}=s,h=S(),M=()=>{X(r).then(m=>{f([...B,...m.data.data.list])})},P=()=>{g(++r)},Q=()=>{};return n.exports.useEffect(()=>{e.length||U()},[]),n.exports.useEffect(()=>{M()},[r]),i("div",{className:"main",children:[a(O,{direction:"vertical",refresh:!1,pullUp:P,pullDown:Q,onScroll:m=>{m.y<-30?I(!0):I(!1),m.y<-100?v(!0):v(!1),T()},children:i("div",{children:[a(D,{goToSearch:()=>h.push("/search"),navBarFixed:u}),a(K,{menuBarData:o}),i("div",{className:"main-padding",children:[a($,{SnapUpGoodsData:A}),a(ea,{SpecialGoodsData:d}),a(z,{GoodsListData:B,setCartInfo:w,selectedGoods:c,totalAccount:t,setTotalAccount:C})]})]})}),a("div",{style:u?{display:""}:{display:"none"},children:a(D,{goToSearch:()=>h.push("/search"),navBarFixed:u})}),a("div",{style:N?{display:""}:{display:"none"},children:a(sa,{menuBarData:l,menuBarFixed:N})}),a(Y,{totalAccount:t,selectedGoods:c,setTotalAccount:C,goToCart:()=>h.push("/home/shoppingcart")})]})},ia=s=>({mainData:s.main.maindata,selectedGoods:s.main.selectedGoods,totalAccount:s.main.totalAccount}),ca=s=>({getMainDataDispatch(){s(H())},getSelectedGoodsDisPatch(e){s(V(e))},getTotalAccountDispatch(e){s(j(e))},getTabbarIndexDispatch(e){s(k(e))}});var Aa=b(ia,ca)(ta);export{Aa as default};
