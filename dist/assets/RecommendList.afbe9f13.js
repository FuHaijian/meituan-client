import{g as S,h as g,u as A,j as n,f as l}from"./vendor.b5b01676.js";import{_ as v,l as I,S as b,A as D}from"./add.f991108b.js";import{s as T,a as x,b as j,c as C,f as _,d as G}from"./index.bde435c7.js";const L=s=>{let{goodData:e={},selectedGoods:t,totalAccount:o,totalNum:d}=s;const{setSelectedGoods:f,setTotalAccount:m,setTotalNum:r,setAllSelected:h}=s,N=A();let c=t.findIndex(a=>a.id==e.id);const u=(a,i)=>{i>0?c!=-1?(t[c].num++,t[c].isSelected?(m(_(o,i)),r(d+1)):(t[c].isSelected=!0,m(_(o,i*t[c].num)),r(d+t[c].num))):(a.num=1,a.isSelected=!0,t=[a,...t],m(_(o,i)),r(d+1)):(t[c].isSelected&&(m(G(o,-i)),r(d-1)),t[c].num--,t[c].num==0&&t.splice(c,1)),f(t),p()},p=()=>{let a=!0;t.map(i=>{i.isSelected||(a=!1)}),h(!!a)};return n("div",{className:"listItem__container",children:[l("div",{className:"listItem__container__pic",children:l(v,{height:140,placeholder:l("img",{height:"100%",width:"100%",src:I}),children:l("img",{src:e.imgsrc,onClick:()=>N.push(`/detail/${e.id}`)})})}),n("div",{className:"listItem__container__desc",children:[n("div",{className:"listItem__container__desc_title",onClick:()=>N.push(`/detail/${e.id}`),children:[e.tags.map(a=>l("div",{className:"title-tags",children:a},a)),e.title]}),l("span",{className:"listItem__container__desc_tradeDescription",children:e.tradeDescription}),n("div",{className:"listItem__container__desc_numOfPerson",children:["\u9644\u8FD1",e.numOfPersonPurchased,"\u4EBA\u5DF2\u4E0B\u5355"]}),n("div",{className:"listItem__container__desc_price",children:["\uFFE5",e.price]}),t[c]?n("div",{className:"recommend__oprateNum",children:[l("img",{src:b,className:"recommend__subNum",onClick:()=>u(e,-e.price)}),l("span",{className:"recommend__goodsNum",children:t[c].num}),l("img",{src:D,className:"recommend__addNum",onClick:()=>u(e,e.price)})]}):l("div",{className:"listItem__container__desc_buttom",onClick:()=>u(e,e.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"})]})]})},k=s=>({selectedGoods:s.main.selectedGoods,totalAccount:s.main.totalAccount,totalNum:s.main.totalNum,allSelected:s.main.allSelected}),F=s=>({setSelectedGoods(e){s(T(e))},setTotalAccount(e){s(x(e))},setTotalNum(e){s(j(e))},setAllSelected(e){s(C(e))}});var P=S(k,F)(g.exports.memo(L));const B=s=>{const{recommendList:e=[]}=s;return n("div",{className:"recommend__container",children:[l("div",{className:"recommend__container_title",children:"--\u3000\u7206\u6B3E\u63A8\u8350\u3000--"}),e.length?e.map((t,o)=>l(P,{goodData:t},o)):""]})};export{B as R};
