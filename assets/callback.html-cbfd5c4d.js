import{c as T,r as A,u as e,M as o,N as r,O as c,$ as n,Q as p,P as l,ak as d,a5 as v,S as D,U,_ as B,X as $,G as E}from"./framework-1f2fdbd0.js";import{N as h}from"./Alert-e76ef4e3.js";import{Q as G,N as P}from"./app-3de1c7e7.js";import{N as L}from"./Input-6637cf53.js";import{N as O}from"./Button-85f46d19.js";import"./resolve-slot-c3add38f.js";import"./browser-6e6f2a67.js";import"./Scrollbar-6da66aaa.js";import"./use-merged-state-2bbf59b1.js";import"./color-to-class-b0332f36.js";const m=s=>(D("data-v-c2a026bc"),s=s(),U(),s),Q=m(()=>l("b",null,"client_id: ",-1)),R=m(()=>l("b",null,"client_secret: ",-1)),j=m(()=>l("b",null,"redirect_uri: ",-1)),M=m(()=>l("b",null,"refresh_token:",-1)),W=T({__name:"Callback",setup(s){const i=new URL(window.location.href),u=i.searchParams.get("code"),f=i.searchParams.get("state"),k=i.searchParams.get("error"),V=i.searchParams.get("error_description"),[b,y,g]=atob(f).split("::"),t=A();u&&!k&&(async()=>{const a=new URLSearchParams;a.append("client_id",b),a.append("client_secret",y),a.append("code",u),a.append("grant_type","authorization_code"),a.append("redirect_uri",g),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:a}).then(_=>_.json()).then(_=>{console.log(_),t.value=_})})();function z(){var a;window.open(`/tool/google/album?access_token=${(a=t.value)==null?void 0:a.access_token}`,"_blank")}return(a,_)=>!e(u)||e(k)?(o(),r(e(h),{key:0,title:e(k)||"Error",type:"error"},{default:c(()=>[n(p(e(V)),1)]),_:1},8,["title"])):(o(),r(e(P),{key:1,vertical:"",size:"large"},{default:c(()=>{var w,N,C;return[l("p",null,[Q,n(p(e(b)),1)]),l("p",null,[R,n(p(e(y)),1)]),l("p",null,[j,n(p(e(g)),1)]),(w=t.value)!=null&&w.error||(N=t.value)!=null&&N.error_description?(o(),r(e(h),{key:0,title:(C=t.value)==null?void 0:C.error,type:"error"},{default:c(()=>[n(p(t.value.error_description),1)]),_:1},8,["title"])):d("v-if",!0),v(e(P),{vertical:""},{default:c(()=>{var x,S,I;return[M,t.value?d("v-if",!0):(o(),r(e(G),{key:0})),(x=t.value)!=null&&x.refresh_token?(o(),r(e(L),{key:1,type:"textarea",autosize:"",readonly:"",value:t.value.refresh_token},null,8,["value"])):(S=t.value)!=null&&S.access_token?(o(),r(e(h),{key:2,title:"Web client",type:"warning"},{default:c(()=>[n(" The refresh_token is only returned once if you use a web client. ")]),_:1})):d("v-if",!0),(I=t.value)!=null&&I.access_token?(o(),r(e(O),{key:3,onClick:z,block:"",type:"primary"},{default:c(()=>[n("Get Album ID")]),_:1})):d("v-if",!0)]}),_:1})]}),_:1}))}});const X=B(W,[["__scopeId","data-v-c2a026bc"],["__file","Callback.vue"]]),q=T({__name:"callback.html",setup(s){return(i,u)=>{const f=E("NaiveClient");return o(),$("div",null,[v(f,null,{default:c(()=>[v(e(X))]),_:1})])}}}),ne=B(q,[["__file","callback.html.vue"]]);export{ne as default};