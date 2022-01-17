import{h as s,j as l,g as c,f as P,u as T,o as G}from"./vendor.23ef3ccf.js";import{c as k,C as L,s as M,a as j,d as E,e as D}from"./index.1e6027d5.js";import{s as y}from"./styled-components.browser.esm.ec6bb831.js";import{S as F}from"./search.e6d63ef2.js";import{S as B,a as z,_ as U,l as $,f as q}from"./loading.e8037d2e.js";import{s as H}from"./ShoppingCartComponent.e095619c.js";const O=e=>({type:L,data:e}),X=()=>e=>{k().then(t=>{e(O(t.data.data))}).catch(t=>{console.log(t)})},Y=y.div`
    height: 30px;
    padding: 10px 30px;
    background-color: #fff;
    .container__search {
        width: 100%;
        height: 30px;
        border-radius: 20px;
        border: 2px solid #e4d055;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        .search-icon {
            width: 13px;
            height: 13px;
            display: inline;
            margin: 0 10px;
        }
        .search-desc {
            font-size: 13px;
            color: #909090;
        }
    }
    
`,J=()=>s(Y,{children:l("div",{className:"container__search",children:[s("img",{src:F,alt:"",className:"search-icon"}),s("div",{className:"search-desc",children:"\u725B\u5976"})]})}),K=y.div`
    display: flex;
    flex-direction: column;
    background-color: #f4f7f7;
    color: #50545a;
    width: 100%;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    font-size: 13px;
    .menuItem {
        height: 50px;
        width: 100%;
        text-align: center;
        line-height: 50px;
    }
    .activeItem {
        color: #141918;
        background-color: #fff;
        border-radius: 5px;
        font-weight: 700;
    }
`,Q=e=>{const{menuData:t=[],changeType:d,type:r}=e,[g,p]=c.exports.useState(0),n=(a,i)=>{p(a),d(i)};return c.exports.useEffect(()=>{r&&p(r-1)}),s(K,{children:t.map((a,i)=>s("div",{className:g==i?"activeItem menuItem":"menuItem",onClick:()=>n(i,a.type),children:a.title},i))})},R=y.div`
    height: 30px;
    width: 240px;
    background-color: #fff;
    overflow-x: scroll;
    white-space: nowrap;
    flex-wrap: nowrap;
    display: flex;
    align-items: center; 
    .item {
        background-color: #f4f7f7;
        margin: 0 5px;
        padding: 0 5px;
        border-radius: 10px;
        box-sizing: border-box;
        flex-shrink: 0;
    }
    .activeItem {
        background-color: #ffffd6;
        border: 2px solid #f3f37c;
    }
`,V=e=>{const{miniMenuData:t=[],changeType:d}=e,[r,g]=c.exports.useState(0),p=(n,a)=>{d(a),g(n)};return s(R,{children:t.map((n,a)=>s("div",{className:r==a?"item activeItem":"item",onClick:()=>p(a,n.type),children:n.title},a))})};const W=e=>{let{page:t,GoodsListData:d=[],totalAccount:r,selectedGoods:g}=e;const{setCartInfo:p,setTotalAccount:n,getMore:a}=e;c.exports.useState(1);const i=(o,h)=>{h>0&&(n(q(r,h)),p([o,...g]))};return s("div",{className:"goodsList",children:s(B,{direction:"vertical",refresh:!1,pullUp:()=>{a(++t)},pullDown:()=>{},onScroll:o=>{z()},children:s("div",{children:d.map((o,h)=>l("div",{className:"goodsItem",children:[s(U,{height:100,placeholder:s("img",{height:"100%",width:"100%",src:$}),children:s("img",{src:o.imgsrc,className:"goodsItem__pic"})}),l("div",{className:"goodsItem__desc",children:[l("div",{className:"goodsItem__desc-title",children:[o.tags.map(u=>s("span",{className:"tag",children:u},u)),o.title]}),l("div",{className:"goodsItem__desc-numOfPerson",children:["\u9644\u8FD1\u5DF2\u6709",o.numOfPersonPurchased,"\u4EBA\u4E0B\u5355"]}),l("div",{className:"goodsItem__desc-price",children:["\uFFE5",o.price]}),s("div",{className:"goodsItem__desc-buttom",onClick:()=>i(o,o.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"})]})]},h))})})})};const Z=e=>{const{classifyPageData:t,totalAccount:d,selectedGoods:r,tabberIndex:g}=e,{menuData:p,miniMenuData:n}=t,[a,i]=c.exports.useState([]);let[f,v]=c.exports.useState(1);const[o,h]=c.exports.useState(1),u=T();let{pathname:b}=G(),m=b.replace("/home/classify","")||void 0;const{getClassifyPageDataDispatch:_,getSelectedGoodsDataDispatch:C,getTotalAccountDispatch:I,getTabbarIndexDispatch:S}=e,w=async()=>{await D(f,o).then(x=>{i([...a,...x.data.data.list])})},N=async()=>{await D(f,o).then(x=>{i([...x.data.data.list])})},A=()=>{u.push("/home/shoppingcart")};return c.exports.useEffect(()=>{S(1),t.length||_(),m&&(m=m.replace("/","")||void 0,h(m))},[]),c.exports.useEffect(()=>{w()},[f]),c.exports.useEffect(()=>{N()},[o]),l("div",{className:"classify__container",children:[s(J,{}),l("div",{className:"container__goodsClassify",children:[s("div",{className:"container__goodsClassify-menu",children:s(Q,{menuData:p,changeType:h,type:o})}),l("div",{className:"container__goodsClassify-goods",children:[s(V,{miniMenuData:n,changeType:h}),s(W,{GoodsListData:a,getMore:v,page:f,totalAccount:d,setCartInfo:C,setTotalAccount:I,selectedGoods:r})]})]}),s(H,{totalAccount:d,selectedGoods:r,goToCart:()=>A()})]})},ee=e=>({classifyPageData:e.classify.classifyPageData,totalAccount:e.main.totalAccount,selectedGoods:e.main.selectedGoods,tabberIndex:e.main.index}),se=e=>({getClassifyPageDataDispatch(){e(X())},getSelectedGoodsDataDispatch(t){e(M(t))},getTotalAccountDispatch(t){e(j(t))},getTabbarIndexDispatch(t){e(E(t))}});var re=P(ee,se)(c.exports.memo(Z));export{re as default};
