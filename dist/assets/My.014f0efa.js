import{j as s,h as e,g,f as C,u as Q,F as x}from"./vendor.dd7849eb.js";import{i as D,j as S,H as N,s as b,b as R,a as G,c as k,d as y,h as M}from"./index.27a7931f.js";import{s as m,f as w,b as P,c as K}from"./add.c996f561.js";import{R as V}from"./RecommendList.ef5d7491.js";import{N as Y}from"./news.ddd16e4e.js";import{S as v}from"./swiper.min.43eced01.js";import{s as H}from"./shoppingCart.775c226b.js";const U=t=>({type:S,data:t}),J=()=>t=>{D().then(i=>{t(U(i.data.data))}).catch(i=>{console.log("\u51FA\u9519\u4E86")})};var z="/assets/defaultUserImg.e2905e9a.png";const T=m.div`
    display: flex;
    width: 100vw;
    height: 80px;
    align-items: center;
    justify-content: center;
    .userImg {
        width: 40px;
        height: 40px;
        margin: 0 20px;
        border: 2px solid #fff;
        border-radius: 50%;
        img {
            width: 40px;
            height: 40px;
        }       
    }
    .userName {
        flex: 1;
        font-size: 15px;
        font-weight: 700;
    }
    .news {
        height: 30px;
        width: 30px;
        margin: 0 20px;
        img {
            height: 30px;
            width: 30px;
        }
    } 

`,F=()=>s(T,{children:[e("div",{className:"userImg",children:e("img",{src:z})}),e("div",{className:"userName",children:"R517tehdehj2uh"}),e("div",{className:"news",children:e("img",{src:Y})})]}),q=m.div`
    display: flex;
    height: 30px;
    .userBenefits__card, .userBenefits__cash {
        line-height: 30px;
        text-align: center;
        font-size: 13px;
        flex: 1;
        font-weight: 700;
    }
    .cardsNum, .cashAmount{
        font-size: 23px;
    }
    .userBenefits__card {
        border-right: 1px solid #d3d7db;
    }
`,L=t=>s(q,{children:[s("div",{className:"userBenefits__card",children:[e("span",{className:"cardsNum",children:0}),"\u5F20\u4F18\u60E0\u5361"]}),s("div",{className:"userBenefits__cash",children:[e("span",{className:"cashAmount",children:0}),"\u5143\u73B0\u91D1\u7EA2\u5305"]})]});var j="data:image/png;base64,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",Z="/assets/pickUp.8ab0fef9.png",O="/assets/evaluation.dcf41585.png",W="/assets/afterSale.59ad8552.png",X="data:image/png;base64,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";const _=m.div`
    height: 60px;
    background-color: #fff;
    display: flex;
    margin-top: 20px;
    border-radius: 10px;
`,$=m.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .middleBox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
            width: 20px;
            height: 20px;
        }
        .desc {
            font-size: 13px;
        }
    }
    
`,ee=t=>{const{ButtomData:i=[]}=t;let A={WillPayIcon:j,PickUpIcon:Z,EvaluationIcon:O,AfterSaleIcon:W,AllOrdersIcon:X};return e(_,{children:i?i.map(a=>e($,{children:s("div",{className:"middleBox",children:[e("img",{src:A[a.icon],className:"icon"}),e("div",{className:"desc",children:a.title})]})},a.id)):e("div",{})})};const B=t=>{const{menuBarData:i=[]}=t,A=a=>{};return e("div",{className:"menu-item__box",children:i.map((a,o)=>s("div",{className:"item-box",onClick:()=>{A(`${a.type}`)},children:[e("img",{src:a.picUrl,alt:"",className:"item-box__img"}),e("div",{className:"item-box__text",children:a.type})]},o))})};const te=t=>{const{menuBarData:i={}}=t;return g.exports.useEffect(()=>{new v(".swiper",{direction:"horizontal",scrollbar:{el:".swiper-scrollbar"}})},[]),e("div",{className:"swiper-bg-my",children:e("div",{className:"swiper-region-my",children:s("div",{className:"swiper",children:[s("div",{className:"swiper-wrapper",children:[s("div",{className:"swiper-slide",children:[e(B,{menuBarData:i.list1}),e(B,{menuBarData:i.list2})]}),s("div",{className:"swiper-slide",children:[e(B,{menuBarData:i.list3}),e(B,{menuBarData:i.list4})]})]}),e("div",{className:"swiper-scrollbar"})]})})})},ie=m.div`
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
`,ae=t=>{let{goodsData:i,totalNum:A,selectedGoods:a,totalAccount:o}=t;const I=Q(),{setSelectedGoods:p,setTotalNum:l,setTotalAccount:d,setAllSelected:E}=t;let n=a.findIndex(r=>r.id==i.id);const h=(r,c)=>{c>0?n!=-1?(a[n].num++,a[n].isSelected?(d(w(o,c)),l(A+1)):(a[n].isSelected=!0,d(w(o,c*a[n].num)),l(A+a[n].num))):(r.num=1,r.isSelected=!0,a=[r,...a],d(w(o,c)),l(A+1)):(a[n].num--,a[n].isSelected&&(d(floatSub(o,-c)),l(A-1)),a[n].num==0&&a.splice(n,1)),p(a),u()},u=()=>{let r=!0;a.map(c=>{c.isSelected||(r=!1)}),E(!!r)};return e(ie,{children:s("div",{className:"tabbar__container",children:[s("div",{className:"icon",children:[e("img",{src:N,alt:"",onClick:()=>I.push("/home/main")}),e("img",{src:H,alt:"",onClick:()=>I.push("/home/shoppingCart")}),A?e("div",{className:"goodsNum",children:A}):e(x,{})]}),s("div",{className:"buttom",children:[e("div",{className:"opration entershopping",onClick:()=>h(i,i.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"}),e("div",{className:"opration gotoPay",children:"\u7ACB\u5373\u8D2D\u4E70"})]})]})})},se=t=>({totalNum:t.main.totalNum,selectedGoods:t.main.selectedGoods,totalAccount:t.main.totalAccount}),Ae=t=>({setSelectedGoods(i){t(b(i))},setTotalNum(i){t(R(i))},setTotalAccount(i){t(G(i))},setAllSelected(i){t(k(i))}});C(se,Ae)(ae);const ne=t=>{const{myPageData:i}=t,{menuBarData:A,OrdersOprationButtomData:a}=i;let[o,I]=g.exports.useState(1);const[p,l]=g.exports.useState([]),[d,E]=g.exports.useState(!1),{getMyPageDataDispatch:n,getTabbarIndexDiapatch:h}=t,u=async()=>{d||await setTimeout(()=>{E(!0),I(++o)},1e3),E(!1)},r=()=>{},c=async()=>{await M(o).then(f=>{l([...p,...f.data.data.list])})};return g.exports.useEffect(()=>{h(3),i.length||n()},[]),g.exports.useEffect(()=>{c()},[o]),e("div",{className:"my__container",children:e(P,{direction:"vertical",refresh:!1,pullUp:u,pullDown:r,onScroll:()=>{K()},children:s("div",{children:[e(F,{}),e(L,{}),s("div",{className:"padding",children:[e(ee,{ButtomData:a}),e(te,{menuBarData:A})]}),e(V,{recommendList:p})]})})})},oe=t=>({myPageData:t.my.myPageData}),re=t=>({getMyPageDataDispatch(){t(J())},getTabbarIndexDiapatch(i){t(y(i))}});var pe=C(oe,re)(g.exports.memo(ne));export{pe as default};
