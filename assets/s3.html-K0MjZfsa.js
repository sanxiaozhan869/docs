import{_,a as h,b as g,c as b}from"./s3drive-7Cxk1Vxc.js";import{_ as v,r as n,o as m,c as k,b as s,e,a as o,w as t,f as c}from"./app-HaiU68V2.js";const A={},f=c('<h1 id="对象存储" tabindex="-1"><a class="header-anchor" href="#对象存储" aria-hidden="true">#</a> 对象存储</h1><p>此功能是将AList映射为S3协议，可以使用 <a href="#s3-%E5%AE%A2%E6%88%B7%E7%AB%AF%E6%8E%A8%E8%8D%90-%E5%A1%AB%E5%86%99%E7%A4%BA%E4%BE%8B">S3客户端</a> 使用和查看，就像AList可以映射为WebDav一样</p><ul><li>可以是整个AList（根目录），也可以是单独某个文件夹</li></ul><h2 id="_1-使用方式" tabindex="-1"><a class="header-anchor" href="#_1-使用方式" aria-hidden="true">#</a> <strong>1.使用方式</strong></h2>',4),w=s("code",null,"S3",-1),S=s("ul",null,[s("li",null,"如果你后续更新访问ID和秘钥，更新保存，再重启AList才可以生效")],-1),x=s("div",{style:{"text-align":"center"}},[s("p",null,[s("img",{src:_,alt:""})])],-1),L=s("code",null,"enable",-1),E=s("code",null,"true",-1),B=c(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>  <span class="token property">&quot;s3&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">5246</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ssl&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3 前两步操作完成后 启动AList，继续进入后台<code>S3</code>配置页面，选择自己想将某路径映射为对象存储存储桶</p>`,2),y=s("p",null,[e("左侧是对外显示的存储桶名字，右侧是AList已有的列表目录路径，如果想将整个根目录全部映射出去可以可以选择列表中的"),s("code",null,"root"),e("路径")],-1),D=c('<p><img src="'+h+'" alt=""></p><br><h2 id="_2-使用说明" tabindex="-1"><a class="header-anchor" href="#_2-使用说明" aria-hidden="true">#</a> <strong>2.使用说明</strong></h2><ol><li>将AList映射为S3服务后， <mark>所有下载链接均为本地代理进行中转</mark>，无论是否是302还是开启了代理URL链接下载</li><li>目前仅支持使用客户端 <code>获取列表</code>、<code>下载</code>、<code>上传</code>、<code>删除</code> 操作，其它操作暂未支持</li><li>目前仅支持使用<code>S3客户端</code>来进行操作，挂载到AList对象存储暂时无法使用</li></ol><h3 id="s3-客户端推荐-填写示例" tabindex="-1"><a class="header-anchor" href="#s3-客户端推荐-填写示例" aria-hidden="true">#</a> <strong>S3 客户端推荐/填写示例</strong></h3>',5),q={href:"https://s3browser.com/download.aspx",target:"_blank",rel:"noopener noreferrer"},V={class:"vp-card-container"},C=s("p",null,[s("img",{src:g,alt:""})],-1),I=s("p",null,[s("img",{src:b,alt:""})],-1),N=s("p",null,"目前就只知道这个S3客户端，如果您知道其他S3客户端，可以推荐一下然后添加。",-1);function j(z,O){const i=n("Badge"),d=n("RouterLink"),p=n("ExternalLinkIcon"),a=n("VPCard"),u=n("Tabs");return m(),k("div",null,[f,s("p",null,[e("1.1 如果是第一次使用，先打开AList后台生成一下 "),o(i,{text:"访问客户端ID",type:"info"}),e(" 和 "),o(i,{text:"访问秘钥",type:"info"}),e(" 保存，然后停止AList，打开配置文件启用"),w,e("服务")]),S,x,s("p",null,[e("1.2 打开 "),o(d,{to:"/zh/config/configuration.html#s3"},{default:t(()=>[e("配置文件")]),_:1}),e("，将"),L,e("字段改成"),E,e("启用S3服务")]),B,s("ul",null,[s("li",null,[y,s("ul",null,[s("li",null,[e("手动填写可能会出现错误，建议使用右侧 "),o(i,{text:"选择",type:"info"}),e(" 按钮进行选择")])])])]),D,s("p",null,[e("S3客户端 - S3 Browser："),s("a",q,[e("https://s3browser.com"),o(p)])]),s("div",V,[o(a,{title:"S3 Browser - 便携版",logo:"/img/advanced/s3/s3_logo/s3browser.png",desc:"",link:"https://s3browser.com/download/s3browser-11-6-7.zip",background:"rgba(94, 239, 227, 0.15)"}),o(a,{title:"S3 Browser - 安装版",logo:"/img/advanced/s3/s3_logo/s3browser.png",desc:"",link:"https://s3browser.com/download/s3browser-11-6-7.exe",background:"rgba(55, 124, 252, 0.15)"}),o(a,{title:"S3Drive",desc:"支持 Android、iOS、Linux、MacOS、Desktop",logo:"/img/advanced/s3/s3_logo/s3drive.png",link:"https://s3drive.app",background:"rgba(94, 239, 227, 0.15)"}),o(a,{title:"IOS S3Drive: Cloud storage",logo:"/img/advanced/s3/s3_logo/s3drive.png",desc:"不能在Google Play下载的用云盘下载,　　　　　　　　　　不会安装xapk版本的使用低版本apk",link:"https://www.alipan.com/s/iYzxiVnNjGw",background:"rgba(55, 124, 252, 0.15)"})]),o(u,{id:"83",data:[{id:"s3browser"},{id:"S3Drive"}],"tab-id":"s3"},{title0:t(({value:l,isActive:r})=>[e("s3browser")]),title1:t(({value:l,isActive:r})=>[e("S3Drive")]),tab0:t(({value:l,isActive:r})=>[C]),tab1:t(({value:l,isActive:r})=>[I]),_:1}),N])}const T=v(A,[["render",j],["__file","s3.html.vue"]]);export{T as default};