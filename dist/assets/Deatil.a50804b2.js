import{h as e,j as i,g as c,F as g,f as L,o as T,u as G}from"./vendor.23ef3ccf.js";import{b as A,c as C,i as P,l as E}from"./index.114a8bc7.js";import{c as F,d as R}from"./add.67884297.js";import{s as u}from"./styled-components.browser.esm.ec6bb831.js";import{S as f}from"./search.e6d63ef2.js";import{R as z}from"./RecommendList.e2c52d43.js";import{S as U}from"./swiper.min.9cab8f8d.js";var $="/assets/detail2.755cfa82.jpg",q="/assets/detail1.abca677c.jpg";const H=u.div`
    height: 50px;
    padding: 10px;
    display: flex;
    box-sizing: border-box;
    .searchButtom, .goBackButtom {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background-color: #e4e4e1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .goBackButtom {
        margin-left: 10px;
        .goBackIcon {
            width: 10px;
            height: 10px;
            transform: rotate(45deg);
            margin-left: 3px;
            border-bottom: 3px solid #1d1d1e;
            border-left: 3px solid #1d1d1e;
        }    
    }
    .searchInput {
        /* transition: width ease 1s; */
        flex: 1;
        margin: 0 10px;
        background-color:#e1e1e1;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: left;
        display: flex;
        .searchIcon {
            margin-left: 10px;
            width: 15px;
            height: 15px;
        }
        .recommend {
            margin-left: 10px;
            color:#9d9e9b;
        }
    }
    .searchButtom {
        margin-right: 10px;
        .searchIcon {
            width: 15px;
            height: 15px;
        }
    }
`,W=u.div`
    position: fixed;
    top: 0;
    height: 50px;
    width: 100vw;
    z-index: 999;
`,J=a=>{const{goBack:t,goToSearch:s,navBarStyle:o}=a;return e(W,{style:o?{backgroundColor:"#fff"}:{},children:i(H,{children:[e("div",{className:"goBackButtom",onClick:()=>t(),children:e("div",{className:"goBackIcon"})}),i("div",{className:"searchInput",style:o?{visibility:"visible"}:{visibility:"hidden"},onClick:()=>s(),children:[e("img",{className:"searchIcon",src:f,alt:""}),e("div",{className:"recommend",children:"\u725B\u5976"})]}),e("div",{style:o?{visibility:"hidden",width:0}:{visibility:"visible"},className:"searchButtom",onClick:()=>s(),children:e("img",{src:f,className:"searchIcon"})})]})})};const K=a=>{const{ImgListData:t=[]}=a;return c.exports.useEffect(()=>{new U(".swiper-container",{loop:!0,autoplay:{delay:1e3},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}})},[]),e("div",{className:"rotation-box",children:i("div",{className:"swiper-container",children:[e("div",{className:"swiper-wrapper",children:t.map((s,o)=>e("div",{className:"swiper-slide",children:e("a",{href:s.linkUrl,children:e("img",{src:s.imgsrc,className:"rotationChart-img"})})},o))}),e("div",{className:"swiper-pagination"})]})})};const M=a=>{const{goodsData:t={}}=a;return e(g,{children:t?i("div",{className:"goods__container",children:[e("div",{className:"goods__container-price",children:i("div",{className:"goods__container-price_item",children:["\uFFE5",t.price]})}),i("div",{className:"goods__container-desc",children:[i("div",{className:"goods__container-desc_title",children:[t.tags?t.tags.map((s,o)=>e("span",{className:"tag",children:s},o)):"",t.title]}),e("div",{className:"goods__container-desc_declarations",children:t.declarations?t.declarations.map((s,o)=>i("div",{className:"declarationItem",children:[s.title?e("div",{className:"declarationItem-title",children:s.title}):"",e("div",{className:"declarationItem-info",children:s.info})]},o)):""})]})]}):e(g,{})})};const O=a=>{const{totalAccount:t,selectedGoods:s}=a;let[o,v]=c.exports.useState(1);const[l,x]=c.exports.useState([]),[d,N]=c.exports.useState(1),[m,b]=c.exports.useState({}),{imgList:y}=m;let{pathname:I}=T(),r=I.replace("/detail","")||void 0;const[w,p]=c.exports.useState(!1),{getSelectedGoodsDispatch:S,getTotalAccountDispatch:B}=a,h=G(),D=()=>{v(++o)},k=()=>{},_=async()=>{await P(o).then(n=>{x([...l,...n.data.data.list])})},j=async()=>{await E(d).then(n=>{b(n.data.data)})};return c.exports.useEffect(()=>{r&&(r=r.replace("/","")||void 0,N(r)),_()},[o]),c.exports.useEffect(()=>{j()},[d]),i("div",{className:"detail__container",children:[e(J,{navBarStyle:w,goBack:()=>h.goBack(),goToSearch:()=>h.push("/search")}),r?e(F,{direction:"vertical",refresh:!1,pullUp:D,pullDown:k,onScroll:n=>{n.y<-30?p(!0):p(!1),R()},children:i("div",{children:[e(K,{ImgListData:y}),e(M,{goodsData:m}),e("img",{className:"detailImg",src:q}),e("img",{className:"promiseImg",src:$}),e(z,{recommendList:l,selectedGoods:s,totalAccount:t,setCartInfo:S,setTotalAccount:B})]})}):e("div",{style:{fontWeight:700,marginLeft:"35%",fontSize:"20px"},children:"\u9875\u9762\u9519\u8BEF\u4E86..."})]})},Q=a=>({totalAccount:a.main.totalAccount,selectedGoods:a.main.selectedGoods}),V=a=>({getSelectedGoodsDispatch(t){a(A(t))},getTotalAccountDispatch(t){a(C(t))}});var oe=L(Q,V)(c.exports.memo(O));export{oe as default};
