import{j as i,h as t}from"./vendor.0091d4a3.js";import{_ as m,l as _,f as u}from"./loading.2306138e.js";const h=c=>{const{selectedGoods:n=[],totalAccount:a}=c,{setCartInfo:o,setTotalAccount:d}=c,r=(s,l)=>{l>0&&(d(u(a,l)),o([s,...n]))},{goodData:e}=c;return i("div",{className:"listItem__container",children:[t("div",{className:"listItem__container__pic",children:t(m,{height:140,placeholder:t("img",{height:"100%",width:"100%",src:_}),children:t("img",{src:e.imgsrc,alt:""})})}),i("div",{className:"listItem__container__desc",children:[i("div",{className:"listItem__container__desc_title",children:[e.tags.map(s=>t("div",{className:"title-tags",children:s},s)),e.title]}),t("span",{className:"listItem__container__desc_tradeDescription",children:e.tradeDescription}),i("div",{className:"listItem__container__desc_numOfPerson",children:["\u9644\u8FD1",e.numOfPersonPurchased,"\u4EBA\u5DF2\u4E0B\u5355"]}),i("div",{className:"listItem__container__desc_price",children:["\uFFE5",e.price]}),t("div",{className:"listItem__container__desc_buttom",onClick:()=>r(e,e.price),children:"\u52A0\u5165\u8D2D\u7269\u8F66"})]})]})};const I=c=>{const{recommendList:n=[],selectedGoods:a,totalAccount:o}=c,{setCartInfo:d,setTotalAccount:r}=c;return i("div",{className:"recommend__container",children:[t("div",{className:"recommend__container_title",children:"--\u3000\u7206\u6B3E\u63A8\u8350\u3000--"}),n.map((e,s)=>t(h,{goodData:e,selectedGoods:a,totalAccount:o,setCartInfo:d,setTotalAccount:r},s))]})};export{I as R};
