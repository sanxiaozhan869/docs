import{_ as l,a as d,b as c}from"./bd_share_test-ae4567cb.js";import{_ as u,r as s,o as h,c as p,b as t,e,a as n,w as g,f as o}from"./app-82af6f7e.js";const _={},m=o('<h1 id="百度网盘分享链接" tabindex="-1"><a class="header-anchor" href="#百度网盘分享链接" aria-hidden="true">#</a> 百度网盘分享链接</h1><p>挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> <strong>配置</strong></h2><p>百度网盘分享链接：surl，百度网盘分享密码：pwd</p><ol><li><p>浏览目录需设置<strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>，下载还需设置BDUSS。</p></li><li><p><strong>百度网盘分享链接</strong>即为分享地址<code>pan.baidu.com/s/</code>后<code>?</code>前部分，<strong>百度网盘分享密码</strong>填4位提取码，无提取码留空。</p></li><li><p><strong>百度网盘分享链接</strong>和<strong>百度网盘分享密码</strong>可以随意账号填写，但是 <strong><code>BDUSS</code></strong> 参数的账号 必须使用 <mark><strong>百度超级SVIP会员</strong></mark> 才可以</p></li></ol><p><img src="'+l+'" alt=""></p><p>BDUSS由cookie中提取</p>',7),b={href:"http://pandownload.net/faq/cookie.html",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"BDUSS=",-1),f=t("li",null,[t("p",null,[e("方法2"),t("sup",null,"荐"),e("：")]),t("ul",null,[t("li",null,[t("img",{src:d,alt:"1",style:{zoom:"30%"}})])])],-1),x=o('<h2 id="根文件夹路径" tabindex="-1"><a class="header-anchor" href="#根文件夹路径" aria-hidden="true">#</a> <strong>根文件夹路径</strong></h2><p>要挂载的根文件夹，默认为<code>/</code></p><p>如果要写文件夹內其他的 请看下方的例子</p><p><img src="'+c+'" alt=""></p><h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> <strong>QA</strong></h2><table><thead><tr><th style="text-align:center;">出错配置</th><th style="text-align:left;">典型报错</th><th style="text-align:left;">修复说明</th></tr></thead><tbody><tr><td style="text-align:center;">surl</td><td style="text-align:left;"><code>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td><td style="text-align:left;">分享链接可能失效, 检查链接状态</td></tr><tr><td style="text-align:center;">pwd</td><td style="text-align:left;"><code>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td><td style="text-align:left;">分享密码错误</td></tr><tr><td style="text-align:center;">BDUSS</td><td style="text-align:left;"><code>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td><td style="text-align:left;">BDUSS无效</td></tr><tr><td style="text-align:center;">UA</td><td style="text-align:left;"><code>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td><td style="text-align:left;">user-agent违反百度限制, 访问端需设置非浏览器UA(如netdisk)或开启Web代理</td></tr><tr><td style="text-align:center;">下载</td><td style="text-align:left;">Failed init storage: 200 OK; {&quot;errno&quot;:-130,&quot;</td><td style="text-align:left;">此链接分享内容可能因为涉及侵权、色情、低俗等信息，无法访问！</td></tr></tbody></table><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> <strong>开发</strong></h2>',7),k={href:"https://github.com/yuantuo666/baiduwp-php",target:"_blank",rel:"noopener noreferrer"},y=t("p",null,"当前仅移植目录浏览和普通下载功能，欢迎继续开发。",-1),v=t("p",null,"因缺失官方文档，不排除存在一些兼容问题，可至github反馈，建议提供复现链接以供调试。",-1),B=t("p",null,"不能突破速度限制，请合理使用。",-1),U=t("p",null,":::",-1),A=t("h2",{id:"刷新令牌",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#刷新令牌","aria-hidden":"true"},"#"),e(),t("strong",null,"刷新令牌")],-1),S={href:"https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://alist.nn.ci/tool/baidu/callback&scope=basic,netdisk&qrcode=1",target:"_blank",rel:"noopener noreferrer"},D=o(`<h2 id="根文件夹路径-1" tabindex="-1"><a class="header-anchor" href="#根文件夹路径-1" aria-hidden="true">#</a> <strong>根文件夹路径</strong></h2><p>要挂载的根文件夹，默认为<code>/</code>，与本地存储相同。</p><h2 id="download-api" tabindex="-1"><a class="header-anchor" href="#download-api" aria-hidden="true">#</a> <strong>Download API</strong></h2><ul><li>official: 官方接口，很稳定，但是文件比较大，需要修改UA，速度慢 (SVIP速度快)</li><li>crack: 非官方接口，现在也需要修改UA且部分文件可能不限速，但是会不稳定（不保证100%可用性）需要使用大于<code>3.19.0</code>的版本 <ul><li><mark>需要将UA改成<code>netdisk</code></mark>，修改方法参考下方<a href="#%E6%B7%BB%E5%8A%A0-user-agent-%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B">添加-user-agent-使用示例</a></li><li>或者开启Web代理（需要大宽带才能带的动）</li><li>仅限于播放/下载 <strong><code>视频(只测试了mp4格式其他格式未测试)</code></strong>，其他类型文件的会出现下方提示</li><li>如果出现下面的提示请勿担心，这不是错误不是Bug，这只是限制，请勿填写<code>issue</code>上报.</li></ul></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	error_code<span class="token operator">:</span> <span class="token number">31119</span><span class="token punctuation">,</span>
	error_msg<span class="token operator">:</span> <span class="token string">&quot;hit black userlist , hit illeage dlna&quot;</span><span class="token punctuation">,</span>
	request_id<span class="token operator">:</span> <span class="token number">541111111111111140</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加-user-agent-使用示例" tabindex="-1"><a class="header-anchor" href="#添加-user-agent-使用示例" aria-hidden="true">#</a> <strong>添加 &quot;User-Agent&quot; 使用示例</strong></h2>`,6),K={class:"hint-container danger"},C=o('<p class="hint-container-title">如果你不会设置 &quot;User-Agent&quot; 请看这里</p><p><mark>以下方法仅限于有百度超级会员用户使用</mark></p><p><mark>再次提示 以下方法仅限于有百度超级会员用户使用</mark></p><p>有会员改完 <strong><code>&quot;User-Agent&quot;</code></strong> 才会有用（选择官方和302）</p><p>如果不改 <strong><code>&quot;User-Agent&quot;</code></strong>，可以开启 <mark>Web代理</mark>，缺点是需要你搭建Alist的机器中转，也就是说你需要大宽带帮你中转</p>',5),V=t("h3",{id:"默认使用的下载方式",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),e(),t("strong",null,"默认使用的下载方式")],-1);function w(E,N){const a=s("ExternalLinkIcon"),r=s("Mermaid"),i=s("Tabs");return h(),p("div",null,[m,t("ul",null,[t("li",null,[t("p",null,[e("方法1："),t("a",b,[e("参考教程"),n(a)]),e("(本项目中无需前缀"),q,e(")。")])]),f]),x,t("p",null,[e("接口来自"),t("a",k,[e("github.com/yuantuo666/baiduwp-php"),n(a)]),e("项目，非官方api。")]),y,v,B,U,A,t("p",null,[t("a",S,[e("点击这里"),n(a)]),e(" 来获取刷新令牌。")]),D,t("div",K,[C,n(i,{id:"224",data:[{title:"网页插件"}],"tab-id":"ua"},{tab0:g(({title:T,value:F,isActive:I})=>[V,n(r,{id:"mermaid-230",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCoqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9ZuBNWelmZuam4KN8HY2BjVBJOCCoi20qT0osSCDIXMlFRDhWiFWLBooiGYSs1LgXKjjQ2MYq2srIrzc1OTcxKLi22BoAbi2ZpEo2igb591bH+xbt/TJe0QI8CqXFLTFOBaYC6zNIMoMIx+NmfNszm7nuxe/HxCW6yuHlDvy4ZOPV07rAYmGUZDVIYG+RBUnJyTmZwNCkwlPT39lKLMstSiYv3k/Nzc/Dy9jJLcHOXy1KSUxDLd52unPZ+6VAlJTxIZepKJ1gMAZ1jb4A=="})]),_:1})])])}const j=u(_,[["render",w],["__file","baidu_share.html.vue"]]);export{j as default};