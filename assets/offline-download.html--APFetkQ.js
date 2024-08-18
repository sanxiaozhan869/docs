import{_ as c}from"./offline-download-H9yzVjl-.js";import{_ as h,r as s,o as l,c as i,b as t,a as e,w as u,e as o,f as r}from"./app-HaiU68V2.js";const p={},f=r('<h1 id="offline-download" tabindex="-1"><a class="header-anchor" href="#offline-download" aria-hidden="true">#</a> Offline download</h1><div class="hint-container warning"><p class="hint-container-title">Please read the following tips carefully</p><p>There are two kinds of software with offline download function</p><p>The two usages are the same, and the software configuration is set in advance (see the following instructions for specific configuration),</p><p>Then go back to the front-end interface, <mark>find the folder you want to upload offline files to, and you can manually enter the folder</mark></p><p>Then find the offline download button in the lower right corner, and choose to use Aria2 download or qBittorrent download (&gt;v 3.11.0)</p><p>If you use <strong>docker</strong>, please map the following two default paths by yourself. (mapped to the same directory on the host machine)</p><ul><li><strong>/opt/alist/data/temp/aria2</strong></li><li><strong>/opt/alist/data/temp/qbittorrent</strong></li></ul></div><h2 id="_1-aria2" tabindex="-1"><a class="header-anchor" href="#_1-aria2" aria-hidden="true">#</a> <strong>1.Aria2</strong></h2>',3),g=t("strong",null,"Click to view instructions for use",-1),_=t("h2",{id:"_2-qbittorrent",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-qbittorrent","aria-hidden":"true"},"#"),o(),t("strong",null,"2.qBittorrent")],-1),m=t("p",null,"(Here we take the Windows side as an example, I don’t know if there is one on the Linux side)",-1),w=t("p",null,[o("First of all, we need to configure the default values on the client side of "),t("strong",null,[t("code",null,"qBittorrent")])],-1),b={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162",target:"_blank",rel:"noopener noreferrer"},k=t("ul",null,[t("li",null,[t("strong",null,"ip"),o(": localhost")]),t("li",null,[t("strong",null,"port"),o(": 8080")]),t("li",null,[t("strong",null,"user"),o(": admin")]),t("li",null,[t("strong",null,"password"),o(": adminadmin")])],-1),v=t("li",null,[t("p",null,[o("We fill in the above parameters into the "),t("strong",null,[t("code",null,"qBittorrent")]),o(" client, after configuration, we go to the Alist front end to download offline ("),t("strong",null,"method refer to the description at the beginning"),o(")")]),t("ul",null,[t("li",null,[o("If you are prompted after submitting the offline link: "),t("strong",null,"Qbittorrent not ready"),o(", try restarting both Alist and qBittorrent")])])],-1),y=t("p",null,"Default value configuration view address:",-1),L={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162",target:"_blank",rel:"noopener noreferrer"},B=t("li",null,[t("p",null,[t("code",null,'{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ')])],-1),M=t("li",null,[t("p",null,[o("Use "),t("strong",null,[t("code",null,"qBittorrent")]),o(" to offline "),t("code",null,".torrent"),o(" type files")])],-1),x=t("code",null,".torrent",-1),q={href:"https://github.com/alist-org/alist/issues/2459#issuecomment-1354870010",target:"_blank",rel:"noopener noreferrer"},P=r('<ol start="4"><li>You can configure it yourself not to delete after the download is complete, but to do seeding, the default is <code>0</code>, and it will be deleted immediately after uploading</li></ol><ul><li>Modification location: <strong>Alist background</strong> --&gt; <strong>Settings</strong> --&gt; <strong>Qbittorrent seedtime</strong> option, set the time you need to configure, the unit is <code>minute</code>, after the set seeding time is reached, it will automatically delete</li></ul><ol start="5"><li><mark>We can also customize, instead of using the default presets</mark></li></ol><ul><li>Modification location: <strong>Alist Manage</strong> --&gt; <strong>Settings</strong> --&gt; <strong>Qbittorrent url</strong> option, just follow the modification</li></ul><p><img src="'+c+'" alt="Offline download"></p><h3 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions" aria-hidden="true">#</a> <strong>Precautions</strong></h3><ol><li>Appeared in the background qBittorrent task: <strong><code>torrent parse timeout</code></strong>, parsing timed out</li><li>The torrent can be parsed, but <strong><code>The system cannot find the path specified.</code></strong> appears when uploading.</li></ol><p>The above two methods are most likely caused by the qBittorrent software itself, probably because of the green version and the modified version that have undergone some functional castration modifications. It is recommended to go to the official website to download and install it to restore it (the conclusion drawn by myself after stepping on the pit) )</p>',8),C=t("strong",null,"qBittorrent",-1),V={href:"https://www.qbittorrent.org/",target:"_blank",rel:"noopener noreferrer"},A=t("strong",null,"qBittorrent-Enhanced-Edition",-1),T={href:"https://github.com/c0re100/qBittorrent-Enhanced-Edition",target:"_blank",rel:"noopener noreferrer"},S=r('<ol start="3"><li>Because the <code>v2.8.3</code> API is used, the minimum version of qBittorrent should be <code>4.4.0beta2</code> or <code>4.3.8</code> official version</li><li>If <strong>qBittorrent</strong> sets the ip where alist is located to be exempt from authentication, you can directly omit the user name and password before <code>@</code> (configured on the <strong>qBittorrent</strong> client side) <ul><li>3 and 4 are not mentioned in the video.</li></ul></li></ol><p><strong>qBittorrent</strong> Video Tutorials</p>',2),z={href:"https://b23.tv/J34qDiG",target:"_blank",rel:"noopener noreferrer"},I=t("br",null,null,-1),E=t("h2",{id:"_3-simplehttp",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-simplehttp","aria-hidden":"true"},"#"),o(),t("strong",null,"3.SimpleHttp")],-1),J=t("p",null,"Subsequent supplement",-1),N=t("br",null,null,-1),G=t("h2",{id:"_4-pikpak",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_4-pikpak","aria-hidden":"true"},"#"),o(),t("strong",null,"4.PikPak")],-1),O=t("p",null,"v3.36.0 and above versions support calling Pikpak offline download function in AList",-1),H={style:{color:"rgb(24, 144, 255)"}},X={fill:"none","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css",height:"1em",width:"1em",style:{overflow:"visible"}},D=t("path",{fill:"currentColor",d:"M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"},null,-1),K=t("path",{fill:"currentColor","fill-rule":"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z","clip-rule":"evenodd"},null,-1),R=[D,K],Z={style:{color:"rgb(24, 144, 255)"}},j={fill:"currentColor","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css",tips:"offline_download",height:"1em",width:"1em",style:{overflow:"visible"}},Q=t("path",{fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32",d:"M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"},null,-1),W=t("path",{"stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"},null,-1),F=t("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"},null,-1),U=[Q,W,F],Y=t("code",null,"Pikpak",-1),$=r('<ul><li><p>Support: <code>magne</code>, <code>http</code>, <code>ed2k</code> links</p></li><li><p>Also supports: X, TikTok, Facebook, TG URL links</p></li></ul><p>Only Pikpak is supported for offline download. If it is not Pikpak, the following error message will be displayed:</p><ul><li>unsupported storage driver for offline download, only Pikpak is supported</li></ul><h2 id="_5-115-cloud" tabindex="-1"><a class="header-anchor" href="#_5-115-cloud" aria-hidden="true">#</a> <strong>5.115 Cloud</strong></h2><p>v3.36.0 above versions support calling 115 Cloud offline download function in AList</p>',5),tt={style:{color:"rgb(24, 144, 255)"}},ot={fill:"none","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"toolbar-toggle hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-ifkxHPo-css",height:"1em",width:"1em",style:{overflow:"visible"}},et=t("path",{fill:"currentColor",d:"M7 14a2 2 0 100-4 2 2 0 000 4zM14 12a2 2 0 11-4 0 2 2 0 014 0zM17 14a2 2 0 100-4 2 2 0 000 4z"},null,-1),nt=t("path",{fill:"currentColor","fill-rule":"evenodd",d:"M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z","clip-rule":"evenodd"},null,-1),lt=[et,nt],it={style:{color:"rgb(24, 144, 255)"}},rt={fill:"currentColor","stroke-width":"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"hope-icon hope-c-XNyZK hope-c-PJLV hope-c-PJLV-iipViGO-css",tips:"offline_download",height:"1em",width:"1em",style:{overflow:"visible"}},st=t("path",{fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32",d:"M421.83 293.82A144 144 0 00218.18 90.17M353.94 225.94a48 48 0 00-67.88-67.88"},null,-1),at=t("path",{"stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"},null,-1),dt=t("path",{fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32",d:"M286.06 158.06L172.92 271.19a32 32 0 01-45.25 0L105 248.57a32 32 0 010-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 01-45.26 0l-22.62-22.63a32 32 0 010-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88"},null,-1),ct=[st,at,dt],ht=t("code",null,"115 Cloud",-1),ut=t("ul",null,[t("li",null,[o("Support: "),t("code",null,"magne"),o(", "),t("code",null,"http"),o(", "),t("code",null,"ed2k"),o(" links")])],-1),pt=t("p",null,"Only 115 Cloud is supported for offline download. If it is not 115 Cloud, the following error message will be displayed:",-1),ft=t("ul",null,[t("li",null,"unsupported storage driver for offline download, only 115 Cloud is supported")],-1);function gt(_t,mt){const a=s("RouterLink"),n=s("ExternalLinkIcon"),d=s("BiliBili");return l(),i("div",null,[f,t("p",null,[e(a,{to:"/config/other.html"},{default:u(()=>[g]),_:1})]),_,m,w,t("p",null,[o("According to "),t("a",b,[o("source code"),e(n)]),o(", we know that the default values are admin:adminadmin@localhost:8080/")]),k,t("ol",null,[v,t("li",null,[y,t("ul",null,[t("li",null,[t("p",null,[t("strong",null,[t("a",L,[o("https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159-L162"),e(n)])])])]),B])]),M]),t("ul",null,[t("li",null,[o("Although you cannot directly add offline "),x,o(" type files, you can save the country with a curve Reference: "),t("a",q,[o("View method"),e(n)])])]),P,t("ul",null,[t("li",null,[C,o(" official website: "),t("strong",null,[t("a",V,[o("https://www.qbittorrent.org/"),e(n)])])]),t("li",null,[A,o(" GitHub: "),t("strong",null,[t("a",T,[o("https://github.com/c0re100/qBittorrent-Enhanced-Edition"),e(n)])])])]),S,e(d,{bvid:"BV1NT411q7EN"}),t("p",null,[t("strong",null,[o("If the video fails, you can watch it here: "),t("a",z,[o("https://b23.tv/J34qDiG"),e(n)])])]),I,E,J,N,G,O,t("p",null,[o("Select "),t("span",H,[(l(),i("svg",X,R))]),t("span",Z,[(l(),i("svg",j,U))]),o(" in the lower right corner and select "),Y,o(" for offline download options")]),$,t("p",null,[o("Select "),t("span",tt,[(l(),i("svg",ot,lt))]),t("span",it,[(l(),i("svg",rt,ct))]),o(" in the lower right corner and select "),ht,o(" for offline download options")]),ut,pt,ft])}const kt=h(p,[["render",gt],["__file","offline-download.html.vue"]]);export{kt as default};