import{h as a,j as i,g as n,f as w,l as A}from"./vendor.0091d4a3.js";import{c as P,C as T,s as G,a as k,b as M,d as v}from"./index.09481aae.js";import{s as x,S as L,a as E,_ as j,l as F,f as B}from"./loading.2306138e.js";import{S as z,s as U}from"./ShoppingCartComponent.84ab3292.js";const $=e=>({type:T,data:e}),q=()=>e=>{P().then(t=>{e($(t.data.data))}).catch(t=>{console.log(t)})},H=x.div`
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
    
`,O=()=>a(H,{children:i("div",{className:"container__search",children:[a("img",{src:z,alt:"",className:"search-icon"}),a("div",{className:"search-desc",children:"\u725B\u5976"})]})}),X=x.div`
    display: flex;
    flex-direction: column;
    background-color: #f4f7f7;
    color: #50545a;
    width: 100%;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    /* margin-bottom: 40px; */
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
`,Y=e=>{const{menuData:t=[],changeType:r}=e,[l,p]=n.exports.useState(0),d=(c,s)=>{p(c),r(s)};return a(X,{children:t.map((c,s)=>a("div",{className:l==s?"activeItem menuItem":"menuItem",onClick:()=>d(s,c.type),children:c.title},s))})},J=x.div`
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
`,K=e=>{const{miniMenuData:t=[],changeType:r}=e,[l,p]=n.exports.useState(0),d=(c,s)=>{r(s),p(c)};return a(J,{children:t.map((c,s)=>a("div",{className:l==s?"item activeItem":"item",onClick:()=>d(s,c.type),children:c.title},s))})};const Q=e=>{let{page:t,GoodsListData:r=[],totalAccount:l,selectedGoods:p}=e;const{setCartInfo:d,setTotalAccount:c,getMore:s}=e;n.exports.useState(1);const u=(o,h)=>{h>0&&(c(B(l,h)),d([o,...p]))};return a("div",{className:"goodsList",children:a(L,{direction:"vertical",refresh:!1,pullUp:()=>{s(++t)},pullDown:()=>{},onScroll:o=>{E()},children:a("div",{children:r.map((o,h)=>i("div",{className:"goodsItem",children:[a(j,{height:100,placeholder:a("img",{height:"100%",width:"100%",src:F}),children:a("img",{src:o.imgsrc,className:"goodsItem__pic"})}),i("div",{className:"goodsItem__desc",children:[i("div",{className:"goodsItem__desc-title",children:[o.tags.map(f=>a("span",{className:"tag",children:f},f)),o.title]}),i("div",{className:"goodsItem__desc-numOfPerson",children:["\u9644\u8FD1\u5DF2\u6709",o.numOfPersonPurchased,"\u4EBA\u4E0B\u5355"]}),i("div",{className:"goodsItem__desc-price",children:["\uFFE5",o.price]}),a("div",{className:"goodsItem__desc-buttom",onClick:()=>u(o,o.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"})]})]},h))})})})};const R=e=>{const{classifyPageData:t,totalAccount:r,selectedGoods:l,tabberIndex:p}=e,{menuData:d,miniMenuData:c}=t,[s,u]=n.exports.useState([]);let[g,y]=n.exports.useState(1);const[o,h]=n.exports.useState(1),f=A(),{getClassifyPageDataDispatch:D,getSelectedGoodsDataDispatch:b,getTotalAccountDispatch:_,getTabbarIndexDispatch:C}=e,I=async()=>{await v(g,o).then(m=>{u([...s,...m.data.data.list])})},S=async()=>{await v(g,o).then(m=>{u([...m.data.data.list])})},N=()=>{C(2),f.push("/home/shoppingcart")};return n.exports.useEffect(()=>{t.length||D()},[]),n.exports.useEffect(()=>{I()},[g]),n.exports.useEffect(()=>{S()},[o]),i("div",{className:"classify__container",children:[a(O,{}),i("div",{className:"container__goodsClassify",children:[a("div",{className:"container__goodsClassify-menu",children:a(Y,{menuData:d,changeType:h})}),i("div",{className:"container__goodsClassify-goods",children:[a(K,{miniMenuData:c,changeType:h}),a(Q,{GoodsListData:s,getMore:y,page:g,totalAccount:r,setCartInfo:b,setTotalAccount:_,selectedGoods:l})]})]}),a(U,{totalAccount:r,selectedGoods:l,goToCart:()=>N()})]})},V=e=>({classifyPageData:e.classify.classifyPageData,totalAccount:e.main.totalAccount,selectedGoods:e.main.selectedGoods,tabberIndex:e.main.index}),W=e=>({getClassifyPageDataDispatch(){e(q())},getSelectedGoodsDataDispatch(t){e(G(t))},getTotalAccountDispatch(t){e(k(t))},getTabbarIndexDispatch(t){e(M(t))}});var se=w(V,W)(n.exports.memo(R));export{se as default};
