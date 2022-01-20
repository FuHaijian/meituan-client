import{h as o,j as h,g as u,f as C,u as A,o as P}from"./vendor.7597709e.js";import{d as G,C as k,s as L,a as M,b as E,c as j,e as B,f as T}from"./index.bb5e5f0d.js";import{s as _,b as $,c as F,_ as z,l as q,S as H,A as O,f as D,a as U}from"./add.118656f0.js";import{S as X}from"./search.e6d63ef2.js";import{S as Y}from"./ShoppingCartComponent.e49edd45.js";const J=e=>({type:k,data:e}),K=()=>e=>{G().then(a=>{e(J(a.data.data))}).catch(a=>{console.log(a)})},Q=_.div`
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
    
`,R=e=>{const{gotoSearch:a}=e;return o(Q,{children:h("div",{className:"container__search",onClick:()=>a(),children:[o("img",{src:X,alt:"",className:"search-icon"}),o("div",{className:"search-desc",children:"\u725B\u5976"})]})})},V=_.div`
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
`,W=e=>{const{menuData:a=[],changeType:p,type:f}=e,[s,d]=u.exports.useState(0),l=(c,i)=>{d(c),p(i)};return u.exports.useEffect(()=>{f&&d(f-1)}),o(V,{children:a.map((c,i)=>o("div",{className:s==i?"activeItem menuItem":"menuItem",onClick:()=>l(i,c.type),children:c.title},i))})},Z=_.div`
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
`,ee=e=>{const{miniMenuData:a=[],changeType:p}=e,[f,s]=u.exports.useState(0),d=(l,c)=>{p(c),s(l)};return o(Z,{children:a.map((l,c)=>o("div",{className:f==c?"item activeItem":"item",onClick:()=>d(c,l.type),children:l.title},c))})};const se=e=>{let{page:a,GoodsListData:p=[],totalAccount:f,selectedGoods:s,totalNum:d}=e;const{getMore:l,setTotalAccount:c,setTotalNum:i,setSelectedGoods:g,setAllSelected:y}=e,[v,m]=u.exports.useState(!1),x=(t,r)=>{let n=s.findIndex(w=>w.id==t.id);r>0?n!=-1?(s[n].num++,s[n].isSelected?(c(D(f,r)),i(d+1)):(s[n].isSelected=!0,c(D(f,r*s[n].num)),i(d+s[n].num))):(t.num=1,t.isSelected=!0,s=[t,...s],c(D(f,r)),i(d+1)):(s[n].num--,s[n].isSelected&&(c(U(f,-r)),i(d-1)),s[n].num==0&&s.splice(n,1)),g(s),N()},N=()=>{let t=!0;s.map(r=>{r.isSelected||(t=!1)}),y(!!t)},b=async()=>{v||await setTimeout(()=>{m(!0),l(++a)},1e3),m(!1)},S=()=>{},I=A();return o("div",{className:"goodsList",children:o($,{direction:"vertical",refresh:!1,pullUp:b,pullDown:S,onScroll:t=>{F()},children:o("div",{children:p.map((t,r)=>h("div",{className:"goodsItem",children:[o(z,{height:100,placeholder:o("img",{height:"100%",width:"100%",src:q}),children:o("img",{src:t.imgsrc,className:"goodsItem__pic",onClick:()=>I.push(`/detail/${t.id}`)})}),h("div",{className:"goodsItem__desc",children:[h("div",{className:"goodsItem__desc-title",children:[t.tags.map(n=>o("span",{className:"tag",children:n},n)),t.title]}),h("div",{className:"goodsItem__desc-numOfPerson",children:["\u9644\u8FD1\u5DF2\u6709",t.numOfPersonPurchased,"\u4EBA\u4E0B\u5355"]}),h("div",{className:"goodsItem__desc-price",children:["\uFFE5",t.price]}),s[s.findIndex(n=>n.id==t.id)]?h("div",{className:"selectedGoodsItem__goodsInfo_buttom",children:[o("img",{src:H,className:"subButtom",onClick:()=>x(t,-t.price)}),o("div",{className:"goodsNum",children:s[s.findIndex(n=>n.id==t.id)].num}),o("img",{src:O,className:"addButtom",onClick:()=>x(t,t.price)})]}):o("div",{className:"goodsItem__desc-buttom",onClick:()=>x(t,t.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"})]})]},r))})})})},te=e=>({selectedGoods:e.main.selectedGoods,totalAccount:e.main.totalAccount,totalNum:e.main.totalNum}),ae=e=>({setSelectedGoods(a){e(L(a))},setTotalAccount(a){e(M(a))},setTotalNum(a){e(E(a))},setAllSelected(a){e(j(a))}});var oe=C(te,ae)(u.exports.memo(se));const ce=e=>{const{classifyPageData:a}=e,{menuData:p,miniMenuData:f}=a,[s,d]=u.exports.useState([]);let[l,c]=u.exports.useState(1);const[i,g]=u.exports.useState(1),y=A();let{pathname:v}=P(),m=v.replace("/home/classify","")||void 0;const{getClassifyPageDataDispatch:x,getSelectedGoodsDataDispatch:N,getTotalAccountDispatch:b,getTabbarIndexDispatch:S}=e,I=async()=>{await T(l,i).then(r=>{d([...s,...r.data.data.list])})},t=async()=>{await T(l,i).then(r=>{d([...r.data.data.list])})};return u.exports.useEffect(()=>{S(1),a.length||x(),m&&(m=m.replace("/","")||void 0,g(m))},[]),u.exports.useEffect(()=>{I()},[l]),u.exports.useEffect(()=>{t()},[i]),h("div",{className:"classify__container",children:[o(R,{gotoSearch:()=>y.push("/search")}),h("div",{className:"container__goodsClassify",children:[o("div",{className:"container__goodsClassify-menu",children:o(W,{menuData:p,changeType:g,type:i})}),h("div",{className:"container__goodsClassify-goods",children:[o(ee,{miniMenuData:f,changeType:g}),o(oe,{GoodsListData:s,getMore:c,page:l})]})]}),o(Y,{})]})},ne=e=>({classifyPageData:e.classify.classifyPageData}),ie=e=>({getClassifyPageDataDispatch(){e(K())},getTabbarIndexDispatch(a){e(B(a))}});var he=C(ne,ie)(u.exports.memo(ce));export{he as default};
