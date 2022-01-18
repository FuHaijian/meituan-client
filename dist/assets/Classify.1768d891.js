import{h as t,j as r,g as l,f as I,u as w,o as G}from"./vendor.23ef3ccf.js";import{e as k,C as L,s as M,b as _,c as N,d as j,f as E,h as S}from"./index.114a8bc7.js";import{s as v}from"./styled-components.browser.esm.ec6bb831.js";import{S as B}from"./search.e6d63ef2.js";import{c as F,d as $,_ as z,l as q,S as U,A as H,f as O,u as X,a as Y,b as J}from"./add.67884297.js";import{S as K}from"./ShoppingCartComponent.215d8308.js";const Q=e=>({type:L,data:e}),R=()=>e=>{k().then(a=>{e(Q(a.data.data))}).catch(a=>{console.log(a)})},V=v.div`
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
    
`,W=e=>{const{gotoSearch:a}=e;return t(V,{children:r("div",{className:"container__search",onClick:()=>a(),children:[t("img",{src:B,alt:"",className:"search-icon"}),t("div",{className:"search-desc",children:"\u725B\u5976"})]})})},Z=v.div`
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
`,ee=e=>{const{menuData:a=[],changeType:f,type:p}=e,[i,d]=l.exports.useState(0),o=(c,n)=>{d(c),f(n)};return l.exports.useEffect(()=>{p&&d(p-1)}),t(Z,{children:a.map((c,n)=>t("div",{className:i==n?"activeItem menuItem":"menuItem",onClick:()=>o(n,c.type),children:c.title},n))})},se=v.div`
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
`,ae=e=>{const{miniMenuData:a=[],changeType:f}=e,[p,i]=l.exports.useState(0),d=(o,c)=>{f(c),i(o)};return t(se,{children:a.map((o,c)=>t("div",{className:p==c?"item activeItem":"item",onClick:()=>d(c,o.type),children:o.title},c))})};const te=e=>{let{page:a,GoodsListData:f=[],totalAccount:p,selectedGoods:i,totalNum:d,compressedData:o}=e;const{getMore:c,setTotalAccount:n,setTotalNum:m,setCartInfo:x,setCompressedData:g}=e,u=(s,h)=>{h>0?(o[s.id]=o[s.id]>0?o[s.id]+1:1,n(O(p,h)),m(d+1),i=X([s,...i])):(o[s.id]=o[s.id]>0?o[s.id]-1:1,o[s.id]==0&&(delete o[s.id],i=Y(s,i)),n(J(p,-h)),m(d-1)),g(o),x(i)};return t("div",{className:"goodsList",children:t(F,{direction:"vertical",refresh:!1,pullUp:()=>{c(++a)},pullDown:()=>{},onScroll:s=>{$()},children:t("div",{children:f.map((s,h)=>r("div",{className:"goodsItem",children:[t(z,{height:100,placeholder:t("img",{height:"100%",width:"100%",src:q}),children:t("img",{src:s.imgsrc,className:"goodsItem__pic"})}),r("div",{className:"goodsItem__desc",children:[r("div",{className:"goodsItem__desc-title",children:[s.tags.map(D=>t("span",{className:"tag",children:D},D)),s.title]}),r("div",{className:"goodsItem__desc-numOfPerson",children:["\u9644\u8FD1\u5DF2\u6709",s.numOfPersonPurchased,"\u4EBA\u4E0B\u5355"]}),r("div",{className:"goodsItem__desc-price",children:["\uFFE5",s.price]}),o[s.id]?r("div",{className:"selectedGoodsItem__goodsInfo_buttom",children:[t("img",{src:U,className:"subButtom",onClick:()=>u(s,-s.price)}),t("div",{className:"goodsNum",children:o[s.id]}),t("img",{src:H,className:"addButtom",onClick:()=>u(s,s.price)})]}):t("div",{className:"goodsItem__desc-buttom",onClick:()=>u(s,s.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"})]})]},h))})})})},oe=e=>({selectedGoods:e.main.selectedGoods,totalAccount:e.main.totalAccount,compressedData:e.main.compressedData,totalNum:e.main.totalNum}),ce=e=>({setCompressedData(a){e(M(a))},setCartInfo(a){e(_(a))},setTotalAccount(a){e(N(a))},setTotalNum(a){e(j(a))}});var ne=I(oe,ce)(te);const ie=e=>{const{classifyPageData:a,totalAccount:f,selectedGoods:p,tabberIndex:i}=e,{menuData:d,miniMenuData:o}=a,[c,n]=l.exports.useState([]);let[m,x]=l.exports.useState(1);const[g,u]=l.exports.useState(1),b=w();let{pathname:C}=G(),s=C.replace("/home/classify","")||void 0;const{getClassifyPageDataDispatch:h,getSelectedGoodsDataDispatch:D,getTotalAccountDispatch:de,getTabbarIndexDispatch:A}=e,P=async()=>{await S(m,g).then(y=>{n([...c,...y.data.data.list])})},T=async()=>{await S(m,g).then(y=>{n([...y.data.data.list])})};return l.exports.useEffect(()=>{A(1),a.length||h(),s&&(s=s.replace("/","")||void 0,u(s))},[]),l.exports.useEffect(()=>{P()},[m]),l.exports.useEffect(()=>{T()},[g]),r("div",{className:"classify__container",children:[t(W,{gotoSearch:()=>b.push("/search")}),r("div",{className:"container__goodsClassify",children:[t("div",{className:"container__goodsClassify-menu",children:t(ee,{menuData:d,changeType:u,type:g})}),r("div",{className:"container__goodsClassify-goods",children:[t(ae,{miniMenuData:o,changeType:u}),t(ne,{GoodsListData:c,getMore:x,page:m})]})]}),t(K,{})]})},re=e=>({classifyPageData:e.classify.classifyPageData,totalAccount:e.main.totalAccount,selectedGoods:e.main.selectedGoods,tabberIndex:e.main.index}),le=e=>({getClassifyPageDataDispatch(){e(R())},getSelectedGoodsDataDispatch(a){e(_(a))},getTotalAccountDispatch(a){e(N(a))},getTabbarIndexDispatch(a){e(E(a))}});var xe=I(re,le)(l.exports.memo(ie));export{xe as default};
