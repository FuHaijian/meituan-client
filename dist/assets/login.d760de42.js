import{g as B,h as r,u as F,j as l,f as e}from"./vendor.b5b01676.js";import{s as a}from"./styled-components.browser.esm.e5d3f427.js";import{l as w}from"./actionCreators.87fc8412.js";import"./index.bde435c7.js";const y=a.div`
    height: 50px;
    width: 100vw;
    box-sizing: border-box;
    padding: 15px 15px;
    background-color: #fff;
    .return_icon {
        height: 10px;
        width: 10px;
        transform:rotate(-45deg);
        border-left: 2px solid #333;
        border-top: 2px solid #333;
    }
    .return_desc {

    }
`,k=a.div`
    background-color: #fff;
    position: relative;
    height: 150px;
    width: 100vw;
    .logo_img {
        height: 120px;
        width: 120px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
            height: 120px;
            width: 120px;
        }
    }
`,N=a.div`
    padding: 10px 30px;
    width: 100vw;
    box-sizing: border-box;
    background-color: #fff;
    .iform {
        display: flex;
        flex-direction: column;
        .password, 
        .userName,
        .captcha {
            border: none;
            outline: 0;
            height: 50px;
            margin-top: 20px;
            line-height: 40px;
            border-bottom: 2px solid #e5e5e5;
            font-size: 18px;
        }
        .captchaContent {
            position: relative;
        }
        .captcha {
            width: 60vw;
        }
        .captchaPic {
            width: 20vw;
            height: 40px;
            position: absolute;
            right: 0;
            top: 20px;
        }
        .submit {
            height: 40px;
            background-color: #fffce8;
            color: #dfc466;
            border: none;
            margin: 20px 0;
            border-radius: 20px;
            box-sizing: border-box;
            font-size: 18px;
        }
        .active {
            background-color: #f78e0a;
            color: #fff;
        }
    }
`,g=a.div`
    color: blue;
    font-size: 13px;
    margin-left: 30px;
`,E=n=>{const{loginUser:h,isLogin:m}=n,[i,f]=r.exports.useState(""),[s,x]=r.exports.useState(""),[c,b]=r.exports.useState(""),[C,v]=r.exports.useState(""),[o,u]=r.exports.useState("login");r.exports.useEffect(()=>{document.title=o=="login"?"\u767B\u5F55":"\u6CE8\u518C"},[o]),r.exports.useCallback(t=>{v(t)},[]);const p=async()=>{if(!i){alert("\u8BF7\u8F93\u5165\u8D26\u53F7");return}if(!s){alert("\u8BF7\u8F93\u5165\u5BC6\u7801");return}try{if(o=="login")await h(i,s),m?(alert("\u767B\u5F55\u6210\u529F"),setTimeout(()=>{d.push("/home/my")},1e3)):(alert("\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF"),alert("\u65E0\u9700\u6CE8\u518C, \u7528\u6237\u540D\u968F\u610F, \u521D\u59CB\u5BC6\u7801\u4E3A123456"));else{if(!c){alert("\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801");return}if(c!=C){alert("\u9A8C\u8BC1\u7801\u9519\u8BEF");return}const t=await post("/api/user/register",{username:i,password:s});alert(t.msg),alert("opopo"),u("login")}}catch(t){alert(t)}},d=F();return l("div",{className:"loginContainer",style:{minHeight:"100vh",width:"100vw",backgroundColor:"#fff"},children:[l(y,{children:[o=="login"?e("div",{className:"return_icon",onClick:()=>d.goBack()}):e("div",{className:"return_icon",onClick:()=>u("login")}),e("div",{className:"return_desc"})]}),e(k,{children:e("div",{className:"logo_img",children:e("img",{src:"http://127.0.0.1:9090/images/assets/logo.jpg"})})}),e(N,{children:l("form",{className:"iform",children:[e("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",className:"userName",onChange:t=>f(t.target.value)}),e("input",{type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",className:"password",onChange:t=>x(t.target.value)}),o=="register"?e("div",{className:"captchaContent",children:e("input",{type:"text",placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",className:"captcha",onChange:t=>b(t.target.value)})}):null,o=="login"?e("button",{className:s&&i?"active submit":"submit",onClick:()=>p(),children:"\u767B\u5F55"}):e("button",{className:c&&s&&i?"active submit":"submit",onClick:()=>p(),children:"\u6CE8\u518C"})]})}),o=="login"?e(g,{onClick:()=>u("register"),children:"\u6CA1\u6709\u8D26\u53F7\uFF1F\u53BB\u6CE8\u518C"}):e(g,{onClick:()=>u("login"),children:"\u53BB\u767B\u5F55"})]})},j=n=>({isLogin:n.my.isAuthenticated});var D=B(j,{loginUser:w})(E);export{D as default};
