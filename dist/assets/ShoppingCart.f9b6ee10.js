import{h as o,f as x,u as G,j as n,g as p}from"./vendor.7597709e.js";import{S as B,A as C,f as D,a as y,s as N,b as F,c as L}from"./add.118656f0.js";import{s as v,a as A,b,c as I,e as $,h as k}from"./index.bb5e5f0d.js";import{R as w}from"./RecommendList.81be2fa4.js";const E=t=>o("div",{className:"navBar__container",children:o("div",{className:"navBar__container-title",children:"\u8D2D\u7269\u8F66"})});var P="/assets/enpty_cart.1276a6bb.png",T="/assets/selected.c4341689.png";const j=t=>{let{goodData:e={},selectedGoods:s,totalNum:a,totalAccount:d}=t;const{setTotalNum:r,setTotalAccount:i,setSelectedGoods:g,setAllSelected:m}=t,h=G();let l=s.findIndex(u=>u.id==e.id);const c=(u,f)=>{S(),f>0?(s[l].num++,s[l].isSelected?(i(D(d,f)),r(a+1)):(s[l].isSelected=!0,i(d+f*s[l].num),r(a+s[l].num))):(--s[l].num,s[l].isSelected&&(i(y(d,-f)),r(a-1)),s[l].num==0&&s.splice(l,1)),g(s)},S=()=>{let u=!0;s.map(f=>{f.isSelected||(u=!1)}),m(!!u)},_=()=>{s[l].isSelected=!s[l].isSelected,s[l].isSelected?(a+=s[l].num,d+=s[l].num*s[l].price):(a-=s[l].num,d-=s[l].num*s[l].price),i(d),r(a),g(s),S()};return n("div",{className:"selectedGoodsItem",children:[o("div",{className:"selectedGoodsItem__selectButton",children:s[l].isSelected?o("div",{className:"isSelected",onClick:()=>_(),children:o("img",{src:T})}):o("div",{className:"isSelected",onClick:()=>_(),children:o("div",{className:"noSeleted"})})}),o("div",{className:"selectedGoodsItem__img",onClick:()=>h.push(`/detail/${e.id}`),children:o("img",{src:e.imgsrc})}),n("div",{className:"selectedGoodsItem__goodsInfo",children:[n("div",{className:"selectedGoodsItem__goodsInfo_title",onClick:()=>h.push(`/detail/${e.id}`),children:[e.tags.map(u=>o("div",{className:"tag",children:u},u)),e.title]}),o("div",{className:"selectedGoodsItem__goodsInfo_trade",children:e.tradeDescription}),n("div",{className:"selectedGoodsItem__goodsInfo_price",children:["\uFFE5",e.price]}),n("div",{className:"selectedGoodsItem__goodsInfo_buttom",children:[o("img",{src:B,className:"subButtom",onClick:()=>c(e,-e.price)}),o("div",{className:"goodsNum",children:e.num}),o("img",{src:C,className:"addButtom",onClick:()=>c(e,e.price)})]})]})]})},R=t=>({selectedGoods:t.main.selectedGoods,totalAccount:t.main.totalAccount,totalNum:t.main.totalNum,allSelected:t.main.allSelected}),z=t=>({setSelectedGoods(e){t(v(e))},setTotalAccount(e){t(A(e))},setTotalNum(e){t(b(e))},setAllSelected(e){t(I(e))}});var U=x(R,z)(j);const q=t=>{const{selectedGoodsData:e=[]}=t;return o("div",{className:"GoodsList__container",children:e.length?o("div",{className:"container-goodsList",children:e.map((s,a)=>o(U,{goodData:s},a))}):n("div",{className:"container-empty_cart",children:[o("img",{src:P,className:"empty_cart__icon"}),o("div",{className:"empty_cart__desc",children:"\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684\uFF0C\u5FEB\u53BB\u901B\u901B\u5427"}),o("div",{className:"empty_cart__button",onClick:()=>goToShopping(),children:"\u53BB\u901B\u901B"})]})})},H=t=>({selectedGoodsData:t.main.selectedGoods});var J=x(H,{})(p.exports.memo(q));const K=N.div`
    width: 100vw;
    height: 50px;
    position: fixed;
    bottom: 50px;
    background-color: #fff;
    display: flex;
    padding: 0 10px;
`,M=N.div`
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    .allSelected_FALSE {
        height: 22px;
        width: 22px;
        border-radius: 50%;
        border:2px solid #c9c9c9 ;
        display: inline-block;
        margin-right: 5px;
        box-sizing: border-box;
    }
    .desc {
        font-size: 12px;
    }
    img {
        width: 22px;
        height: 22px;
        margin-right: 5px;
    }
`,O=N.div`
    flex: 1;
    line-height: 50px;
    text-align: right;
    font-weight: 700;
    .totalNum {
        padding-right: 10px;
        color:#fd0020;
        font-size: 16px;
        
    }
`,Q=N.div`
    width: 120px;
    line-height: 36px;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    margin: 7px 0;
    border-radius: 30px;
    margin-right: 20px;
`,V=t=>{let{totalNum:e=0,totalAccount:s=0,selectedGoods:a,allSelected:d}=t;const{setSelectedGoods:r,setTotalAccount:i,setTotalNum:g,setAllSelected:m}=t,h=()=>{l(),a=a.map(c=>(d?c.isSelected&&(e-=c.num,s-=c.num*c.price):c.isSelected||(e+=c.num,s+=c.num*c.price),c.isSelected=!d,c)),m(!d),g(e),i(s),r(a)},l=()=>{let c=!0;a.map(S=>{S.isSelected||(c=!1)}),m(!!c)};return n(K,{children:[n(M,{children:[a.length==0?o("div",{className:"allSelected_FALSE"}):d?o("img",{src:T,className:"allSelected_TRUE",onClick:()=>h()}):o("div",{className:"allSelected_FALSE",onClick:()=>h()}),o("span",{className:"desc",children:"\u5168\u9009"})]}),n(O,{children:[o("span",{className:"title",children:"\u5408\u8BA1\uFF1A"}),n("span",{className:"totalNum",children:["\uFFE5",s?s.toFixed(2):0]})]}),n(Q,{style:e==0?{backgroundColor:"#faeb7d"}:{backgroundColor:"#ffd105"},children:["\u53BB\u652F\u4ED8",e!=0?`(${e})`:""]})]})},W=t=>({totalNum:t.main.totalNum,totalAccount:t.main.totalAccount,selectedGoods:t.main.selectedGoods,allSelected:t.main.allSelected}),X=t=>({setSelectedGoods(e){t(v(e))},setTotalAccount(e){t(A(e))},setTotalNum(e){t(b(e))},setAllSelected(e){t(I(e))}});var Y=x(W,X)(p.exports.memo(V));const Z=t=>{let[e,s]=p.exports.useState(1);const[a,d]=p.exports.useState([]),[r,i]=p.exports.useState(!1),{getIndexDispatch:g}=t,m=G(),h=async()=>{r||await setTimeout(()=>{i(!0),s(++e)},1e3),i(!1)},l=()=>{},c=async()=>{await k(e).then(S=>{d([...a,...S.data.data.list])})};return p.exports.useEffect(()=>{c()},[e]),p.exports.useEffect(()=>{g(2)},[]),n("div",{className:"cart__container",children:[o(E,{}),o(F,{direction:"vertical",refresh:!1,pullUp:h,pullDown:l,onScroll:()=>{L()},children:n("div",{children:[o(J,{goToShopping:()=>m.push("/home/main")}),o(w,{recommendList:a})]})}),o(Y,{})]})},ee=t=>({selectedGoods:t.main.selectedGoods}),te=t=>({getIndexDispatch(e){t($(e))},getSelectedGoodsDisPatch(e){t(v(e))}});var ae=x(ee,te)(p.exports.memo(Z));export{ae as default};
