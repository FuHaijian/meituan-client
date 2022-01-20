import{h as e,j as a,g as o,F as l,o as L,u as j}from"./vendor.7597709e.js";import{s as n,b as D,c as E}from"./add.118656f0.js";import{h as T,k as C}from"./index.bb5e5f0d.js";import{S as u}from"./search.e6d63ef2.js";import{R as F}from"./RecommendList.81be2fa4.js";import{S as R}from"./swiper.min.43eced01.js";const G=n.div`
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
`,P=n.div`
    position: fixed;
    top: 0;
    height: 50px;
    width: 100vw;
    z-index: 999;
`,$=r=>{const{goBack:s,goToSearch:t,navBarStyle:i}=r;return e(P,{style:i?{backgroundColor:"#fff"}:{},children:a(G,{children:[e("div",{className:"goBackButtom",onClick:()=>s(),children:e("div",{className:"goBackIcon"})}),a("div",{className:"searchInput",style:i?{visibility:"visible"}:{visibility:"hidden"},onClick:()=>t(),children:[e("img",{className:"searchIcon",src:u,alt:""}),e("div",{className:"recommend",children:"\u725B\u5976"})]}),e("div",{style:i?{visibility:"hidden",width:0}:{visibility:"visible"},className:"searchButtom",onClick:()=>t(),children:e("img",{src:u,className:"searchIcon"})})]})})};const z=n.div`
    width: 100vw;
    height: 100vw;
    overflow: hidden;
`,q=r=>{const{ImgListData:s=[]}=r;return o.exports.useEffect(()=>{new R(".swiper",{autoplay:5e3,loop:!0})},[]),e(z,{children:s.length?e("div",{className:"swiper",style:{height:"100vw"},children:a("div",{className:"swiper-wrapper",style:{padding:"0px"},children:[e("div",{className:"swiper-slide",children:e("img",{style:{height:"100vw",width:"100vw"},src:s[0].imgsrc})}),e("div",{className:"swiper-slide",children:e("img",{style:{height:"100vw",width:"100vw"},src:s[1].imgsrc})}),e("div",{className:"swiper-slide",children:e("img",{style:{height:"100vw",width:"100vw"},src:s[2].imgsrc})})]})}):e(l,{})})};const U=r=>{const{goodsData:s={}}=r;return e(l,{children:s?a("div",{className:"goods__container",children:[e("div",{className:"goods__container-price",children:a("div",{className:"goods__container-price_item",children:["\uFFE5",s.price]})}),a("div",{className:"goods__container-desc",children:[a("div",{className:"goods__container-desc_title",children:[s.tags?s.tags.map((t,i)=>e("span",{className:"tag",children:t},i)):"",s.title]}),e("div",{className:"goods__container-desc_declarations",children:s.declarations?s.declarations.map((t,i)=>a("div",{className:"declarationItem",children:[t.title?e("div",{className:"declarationItem-title",children:t.title}):"",e("div",{className:"declarationItem-info",children:t.info})]},i)):""})]})]}):e(l,{})})};const H=r=>{let[s,t]=o.exports.useState(1);const[i,x]=o.exports.useState([]),[m,w]=o.exports.useState(1),[h,y]=o.exports.useState({}),{imgList:N}=h,{pathname:p}=L();let c=p.replace("/detail","")||void 0;const[b,g]=o.exports.useState(!1),[I,v]=o.exports.useState(!1),f=j(),B=async()=>{I||await setTimeout(()=>{v(!0),t(++s)},1e3),v(!1)},S=()=>{},_=async()=>{await T(s).then(d=>{x([...i,...d.data.data.list])})},k=async()=>{await C(m).then(d=>{y(d.data.data)})};return o.exports.useEffect(()=>{c&&(c=c.replace("/","")||void 0,w(c)),_()},[s,p]),o.exports.useEffect(()=>{k()},[m]),a("div",{className:"detail__container",children:[e($,{navBarStyle:b,goBack:()=>f.goBack(),goToSearch:()=>f.push("/search")}),c?e(D,{direction:"vertical",refresh:!1,pullUp:B,pullDown:S,onScroll:d=>{d.y<-30?g(!0):g(!1),E()},children:a("div",{children:[e(q,{ImgListData:N}),e(U,{goodsData:h}),e("img",{className:"detailImg",src:"http://1.117.162.125:9090/images/detail/detail1.jpg"}),e("img",{className:"promiseImg",src:"http://1.117.162.125:9090/images/detail/detail2.jpg"}),e(F,{recommendList:i})]})}):e("div",{style:{fontWeight:700,marginLeft:"35%",fontSize:"20px"},children:"\u9875\u9762\u9519\u8BEF\u4E86..."})]})};var Q=o.exports.memo(H);export{Q as default};
