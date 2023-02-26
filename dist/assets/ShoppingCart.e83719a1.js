import{f as o,g as f,u as N,j as n,h as p}from"./vendor.b5b01676.js";import{S as B,A as y,a as C,f as D}from"./add.f991108b.js";import{s as v,a as G,b,c as A,f as F,d as k,e as L,k as $}from"./index.bde435c7.js";import{R as w}from"./RecommendList.afbe9f13.js";import{s as x}from"./styled-components.browser.esm.e5d3f427.js";const E=t=>o("div",{className:"navBar__container",children:o("div",{className:"navBar__container-title",children:"\u8D2D\u7269\u8F66"})});var P="/assets/enpty_cart.1276a6bb.png",I="/assets/selected.c4341689.png";const j=t=>{let{goodData:e={},selectedGoods:s,totalNum:a,totalAccount:d}=t;const{setTotalNum:m,setTotalAccount:r,setSelectedGoods:g,setAllSelected:u}=t,h=N();let l=s.findIndex(i=>i.id==e.id);const c=i=>{i>0?(s[l].num++,s[l].isSelected?(r(F(d,i)),m(a+1)):(s[l].isSelected=!0,r(d+i*s[l].num),m(a+s[l].num))):(--s[l].num,s[l].isSelected&&(r(k(d,-i)),m(a-1)),s[l].num==0&&s.splice(l,1)),g(s),S()},S=()=>{let i=!0;s.map(T=>{T.isSelected||(i=!1)}),u(!!i)},_=()=>{s[l].isSelected=!s[l].isSelected,s[l].isSelected?(a+=s[l].num,d+=s[l].num*s[l].price):(a-=s[l].num,d-=s[l].num*s[l].price),r(d),m(a),g(s),S()};return n("div",{className:"selectedGoodsItem",children:[o("div",{className:"selectedGoodsItem__selectButton",children:s[l].isSelected?o("div",{className:"isSelected",onClick:()=>_(),children:o("img",{src:I})}):o("div",{className:"isSelected",onClick:()=>_(),children:o("div",{className:"noSeleted"})})}),o("div",{className:"selectedGoodsItem__img",onClick:()=>h.push(`/detail/${e.id}`),children:o("img",{src:e.imgsrc})}),n("div",{className:"selectedGoodsItem__goodsInfo",children:[n("div",{className:"selectedGoodsItem__goodsInfo_title",onClick:()=>h.push(`/detail/${e.id}`),children:[e.tags.map(i=>o("div",{className:"tag",children:i},i)),e.title]}),o("div",{className:"selectedGoodsItem__goodsInfo_trade",children:e.tradeDescription}),n("div",{className:"selectedGoodsItem__goodsInfo_price",children:["\uFFE5",e.price]}),n("div",{className:"selectedGoodsItem__goodsInfo_buttom",children:[o("img",{src:B,className:"subButtom",onClick:()=>c(-e.price)}),o("div",{className:"goodsNum",children:e.num}),o("img",{src:y,className:"addButtom",onClick:()=>c(e.price)})]})]})]})},R=t=>({selectedGoods:t.main.selectedGoods,totalAccount:t.main.totalAccount,totalNum:t.main.totalNum,allSelected:t.main.allSelected}),z=t=>({setSelectedGoods(e){t(v(e))},setTotalAccount(e){t(G(e))},setTotalNum(e){t(b(e))},setAllSelected(e){t(A(e))}});var U=f(R,z)(j);const q=t=>{const{selectedGoodsData:e=[]}=t,s=N();return o("div",{className:"GoodsList__container",children:e.length?o("div",{className:"container-goodsList",children:e.map((a,d)=>o(U,{goodData:a},d))}):n("div",{className:"container-empty_cart",children:[o("img",{src:P,className:"empty_cart__icon"}),o("div",{className:"empty_cart__desc",children:"\u60A8\u7684\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684\uFF0C\u5FEB\u53BB\u901B\u901B\u5427"}),o("div",{className:"empty_cart__button",onClick:()=>s.push("/home/main"),children:"\u53BB\u901B\u901B"})]})})},H=t=>({selectedGoodsData:t.main.selectedGoods});var J=f(H,{})(p.exports.memo(q));const K=x.div`
    width: 100vw;
    height: 50px;
    position: fixed;
    bottom: 50px;
    background-color: #fff;
    display: flex;
    padding: 0 10px;
`,M=x.div`
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
`,O=x.div`
    flex: 1;
    line-height: 50px;
    text-align: right;
    font-weight: 700;
    .totalNum {
        padding-right: 10px;
        color:#fd0020;
        font-size: 16px;
        
    }
`,Q=x.div`
    width: 120px;
    line-height: 36px;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
    margin: 7px 0;
    border-radius: 30px;
    margin-right: 20px;
`,V=t=>{let{totalNum:e=0,totalAccount:s=0,selectedGoods:a,allSelected:d}=t;const{setSelectedGoods:m,setTotalAccount:r,setTotalNum:g,setAllSelected:u}=t,h=()=>{l(),a=a.map(c=>(d?c.isSelected&&(e-=c.num,s-=c.num*c.price):c.isSelected||(e+=c.num,s+=c.num*c.price),c.isSelected=!d,c)),u(!d),g(e),r(s),m(a)},l=()=>{let c=!0;a.map(S=>{S.isSelected||(c=!1)}),u(!!c)};return n(K,{children:[n(M,{children:[a.length==0?o("div",{className:"allSelected_FALSE"}):d?o("img",{src:I,className:"allSelected_TRUE",onClick:()=>h()}):o("div",{className:"allSelected_FALSE",onClick:()=>h()}),o("span",{className:"desc",children:"\u5168\u9009"})]}),n(O,{children:[o("span",{className:"title",children:"\u5408\u8BA1\uFF1A"}),n("span",{className:"totalNum",children:["\uFFE5",s?s.toFixed(2):0]})]}),n(Q,{style:e==0?{backgroundColor:"#faeb7d"}:{backgroundColor:"#ffd105"},children:["\u53BB\u652F\u4ED8",e!=0?`(${e})`:""]})]})},W=t=>({totalNum:t.main.totalNum,totalAccount:t.main.totalAccount,selectedGoods:t.main.selectedGoods,allSelected:t.main.allSelected}),X=t=>({setSelectedGoods(e){t(v(e))},setTotalAccount(e){t(G(e))},setTotalNum(e){t(b(e))},setAllSelected(e){t(A(e))}});var Y=f(W,X)(p.exports.memo(V));const Z=t=>{let[e,s]=p.exports.useState(1);const[a,d]=p.exports.useState([]),[m,r]=p.exports.useState(!1),{getIndexDispatch:g}=t,u=N(),h=async()=>{m||await setTimeout(()=>{r(!0),s(++e)},1e3),r(!1)},l=()=>{},c=async()=>{await $(e).then(S=>{d([...a,...S.data.data.list])})};return p.exports.useEffect(()=>{c()},[e]),p.exports.useEffect(()=>{g(2)},[]),n("div",{className:"cart__container",children:[o(E,{}),o(C,{direction:"vertical",refresh:!1,pullUp:h,pullDown:l,onScroll:()=>{D()},children:n("div",{children:[o(J,{goToShopping:()=>u.push("/home/main")}),o(w,{recommendList:a})]})}),o(Y,{})]})},ee=t=>({selectedGoods:t.main.selectedGoods}),te=t=>({getIndexDispatch(e){t(L(e))},getSelectedGoodsDisPatch(e){t(v(e))}});var de=f(ee,te)(p.exports.memo(Z));export{de as default};
