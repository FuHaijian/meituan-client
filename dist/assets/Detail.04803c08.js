import{f as e,j as o,h as n,F as f,g as j,u as I,q as C}from"./vendor.b5b01676.js";import{a as A,f as L}from"./add.f991108b.js";import{H as G,s as P,b as E,a as F,c as z,f as N,k as R,o as $}from"./index.bde435c7.js";import{s as v}from"./styled-components.browser.esm.e5d3f427.js";import{S as _,s as q}from"./shoppingCart.eb6d415c.js";import{R as H}from"./RecommendList.afbe9f13.js";import{S as O}from"./swiper.min.43eced01.js";const U=v.div`
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
`,W=v.div`
    position: fixed;
    top: 0;
    height: 50px;
    width: 100vw;
    z-index: 999;
`,J=i=>{const{goBack:t,goToSearch:a,navBarStyle:s}=i;return e(W,{style:s?{backgroundColor:"#fff"}:{},children:o(U,{children:[e("div",{className:"goBackButtom",onClick:()=>t(),children:e("div",{className:"goBackIcon"})}),o("div",{className:"searchInput",style:s?{visibility:"visible"}:{visibility:"hidden"},onClick:()=>a(),children:[e("img",{className:"searchIcon",src:_,alt:""}),e("div",{className:"recommend",children:"\u725B\u5976"})]}),e("div",{style:s?{visibility:"hidden",width:0}:{visibility:"visible"},className:"searchButtom",onClick:()=>a(),children:e("img",{src:_,className:"searchIcon"})})]})})},K=v.div`
    width: 100vw;
    height: 100vw;
    overflow: hidden;
`,M=i=>{const{ImgListData:t=[]}=i;return n.exports.useEffect(()=>{new O(".swiper",{autoplay:5e3,loop:!0})},[]),e(K,{children:t.length?e("div",{className:"swiper",style:{height:"100vw"},children:o("div",{className:"swiper-wrapper",style:{padding:"0px"},children:[e("div",{className:"swiper-slide",children:e("img",{style:{height:"100vw",width:"100vw"},src:t[0].imgsrc})}),e("div",{className:"swiper-slide",children:e("img",{style:{height:"100vw",width:"100vw"},src:t[1].imgsrc})}),e("div",{className:"swiper-slide",children:e("img",{style:{height:"100vw",width:"100vw"},src:t[2].imgsrc})})]})}):e(f,{})})};const Q=i=>{const{goodsData:t={}}=i;return e(f,{children:t?o("div",{className:"goods__container",children:[e("div",{className:"goods__container-price",children:o("div",{className:"goods__container-price_item",children:["\uFFE5",t.price]})}),o("div",{className:"goods__container-desc",children:[o("div",{className:"goods__container-desc_title",children:[t.tags?t.tags.map((a,s)=>e("span",{className:"tag",children:a},s)):"",t.title]}),e("div",{className:"goods__container-desc_declarations",children:t.declarations?t.declarations.map((a,s)=>o("div",{className:"declarationItem",children:[a.title?e("div",{className:"declarationItem-title",children:a.title}):"",e("div",{className:"declarationItem-info",children:a.info})]},s)):""})]})]}):e(f,{})})},V=v.div`
    height: 50px;
    width: 100vw;
    position: fixed;
    background-color: #fff;
    bottom: 0;
    left: 0;
    z-index: 999;
    .tabbar__container {
        display: flex;
        align-items: center;
        justify-content: center;
        .icon {
            width: 80px;
            height: 25px;
            display: flex;
            position: relative;
            img {
                margin-left: 10px;
                width: 25px;
                height: 25px;
            }
            .goodsNum {
                position: absolute;
                top: -8px;
                right: 3px;
                background-color: #f5252e;
                width: 18px;
                height: 18px;
                color: #fff;
                font-weight: 700;
                border-radius: 50%;
                line-height: 18px;
                text-align: center;
            }
        }
        .buttom {
            margin:5px 10px;
            height: 40px;
            flex: 1;
            display: flex;
            border-radius: 20px;
            overflow: hidden;
            .opration {
                flex: 1;
                height: 40px;
                font-size: 14px;
                font-weight: 700;
                line-height: 40px;
                text-align: center;
            }
            .entershopping {
                background-color: #fdd200;
            }
            .gotoPay {
                background-color: #fd5f10;
                color: #fff;
            }
        }
    }
`,X=i=>{let{goodsData:t,totalNum:a,selectedGoods:s,totalAccount:h}=i;const g=I(),{setSelectedGoods:b,setTotalNum:d,setTotalAccount:p,setAllSelected:x}=i;let l=s.findIndex(c=>c.id==t.id);const m=(c,r)=>{r>0?l!=-1?(s[l].num++,s[l].isSelected?(p(N(h,r)),d(a+1)):(s[l].isSelected=!0,p(N(h,r*s[l].num)),d(a+s[l].num))):(c.num=1,c.isSelected=!0,s=[c,...s],p(N(h,r)),d(a+1)):(s[l].num--,s[l].isSelected&&(p(floatSub(h,-r)),d(a-1)),s[l].num==0&&s.splice(l,1)),b(s),w()},w=()=>{let c=!0;s.map(r=>{r.isSelected||(c=!1)}),x(!!c)};return e(V,{children:o("div",{className:"tabbar__container",children:[o("div",{className:"icon",children:[e("img",{src:G,alt:"",onClick:()=>g.push("/home/main")}),e("img",{src:q,alt:"",onClick:()=>g.push("/home/shoppingCart")}),a?e("div",{className:"goodsNum",children:a}):e(f,{})]}),o("div",{className:"buttom",children:[e("div",{className:"opration entershopping",onClick:()=>m(t,t.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"}),e("div",{className:"opration gotoPay",children:"\u7ACB\u5373\u8D2D\u4E70"})]})]})})},Y=i=>({totalNum:i.main.totalNum,selectedGoods:i.main.selectedGoods,totalAccount:i.main.totalAccount}),Z=i=>({setSelectedGoods(t){i(P(t))},setTotalNum(t){i(E(t))},setTotalAccount(t){i(F(t))},setAllSelected(t){i(z(t))}});var ee=j(Y,Z)(X);const te=i=>{let[t,a]=n.exports.useState(1);const[s,h]=n.exports.useState([]),[g,b]=n.exports.useState(1),[d,p]=n.exports.useState({}),{imgList:x}=d,{pathname:l}=C();let m=l.replace("/detail","")||void 0;const[w,c]=n.exports.useState(!1),[r,y]=n.exports.useState(!1),S=I(),k=async()=>{r||await setTimeout(()=>{y(!0),a(++t)},1e3),y(!1)},B=()=>{},D=async()=>{await R(t).then(u=>{h([...s,...u.data.data.list])})},T=async()=>{await $(g).then(u=>{p(u.data.data)})};return n.exports.useEffect(()=>{m&&(m=m.replace("/","")||void 0,b(m)),D()},[t,l]),n.exports.useEffect(()=>{T()},[g]),o("div",{className:"detail__container",children:[e(J,{navBarStyle:w,goBack:()=>S.goBack(),goToSearch:()=>S.push("/search")}),m?o(f,{children:[e(A,{direction:"vertical",refresh:!1,pullUp:k,pullDown:B,onScroll:u=>{u.y<-30?c(!0):c(!1),L()},children:o("div",{children:[e(M,{ImgListData:x}),e(Q,{goodsData:d}),e("img",{className:"detailImg",src:"http://101.43.77.31:9090/images/detail/detail1.jpg"}),e("img",{className:"promiseImg",src:"http://101.43.77.31:9090/images/detail/detail2.jpg"}),e(H,{recommendList:s})]})}),e(ee,{goodsData:d})]}):e("div",{style:{fontWeight:700,marginLeft:"35%",fontSize:"20px"},children:"\u9875\u9762\u9519\u8BEF\u4E86..."})]})};var re=n.exports.memo(te);export{re as default};
