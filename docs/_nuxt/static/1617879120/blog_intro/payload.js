__NUXT_JSONP__("blog_intro", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av){return {data:[{article:{slug:"blog_intro",description:"How to setup your blog project and configure it",category:"Tech",series:"Write a Blog",title:"The Prerequisites",artno:1,author:"Jude D'Mello",toc:[{id:Z,depth:O,text:_},{id:$,depth:O,text:aa},{id:ab,depth:O,text:ac}],body:{type:"root",children:[{type:b,tag:h,props:{},children:[{type:a,value:"This series documents my journey where I learn new frameworks and follow my passion for writing."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"For this blog, I will use frameworks and modules based on Vue. Why Vue? In traditional webpage building, HTML (Hyper-Text Markup Language) is used to scaffold the \"content\" while CSS (Cascading Style Sheets) is used to \"make it pretty\". Throw in a bit of Javascript to the mix and you end up with a webpage that looks great apart from performing well."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Vue is a progressive Javascript framework, which means you can use it to power a part of your webpage, or the whole page altogether. You can also create reusable components, which means that you can write the code for a \"component\" once, and use it as many times as required across various pages. That way, you don't have to pull your hair out while searching through an ocean of code to find the component\u002Fcode you need, either to alter or remove it. Sound interesting? Great!"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"PS: Nuxt.js and Vue are like Next.js and React. Learning one variant will make it easier to learn the other, if you so wish to."}]}]},{type:a,value:c},{type:b,tag:P,props:{id:Z},children:[{type:b,tag:j,props:{href:"#requirements",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:d,props:{className:[S,T]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fnodejs.org\u002Fen\u002F",rel:[l,m,n],target:o,title:"Download Node.js from here"},children:[{type:a,value:"Node.js"}]},{type:a,value:": We need something like "},{type:b,tag:i,props:{},children:[{type:a,value:"Node Package Manager"}]},{type:a,value:" (npm) to manage our dependencies."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:ad,rel:[l,m,n],target:o,title:"Read about Nuxt.js here"},children:[{type:a,value:ae}]},{type:a,value:": An open source web application framework based on Vue.js, Node.js, Webpack and Babel.js. Modular in architecture, it aims to make life simpler for Vue.js devs by providing various features which aim to lower development time among other things."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002F,",rel:[l,m,n],target:o,title:"Read about Nuxt Content here"},children:[{type:a,value:af}]},{type:a,value:":  @nuxt\u002Fcontent is one of the modules pluggable in Nuxt.js. It acts as a headless CMS to fetch your Markdown, JSON, YAML, XML and CSV files. I personally use Markdown to write my articles. Why? Because it makes writing articles a breeze when compared to writing long lines of HTML to achieve pretty much the same thing."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:ag,rel:[l,m,n],target:o,title:"Read about Tailwind CSS here"},children:[{type:a,value:"Tailwind CSS"}]},{type:a,value:": A \"better\" alternative to vanilla CSS. I'm a recent convert and hell yes I now believe! 😉 Completely optional though, and you can stick to vanilla CSS or ignore it altogether."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:P,props:{id:$},children:[{type:b,tag:j,props:{href:"#installation",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:d,props:{className:[S,T]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This installation procedure uses "},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:", so make sure you have Node.js installed (Link is given above). I'm also on Windows (hehe yes yes I know) and will be following the procedures for that OS. Only Node.js installation will differ from other OSes, otherwise it's pretty much the same. Make sure Node is on \"Path\" (The latest installers have it checked by default, leave it like so) so that you can access "},{type:b,tag:i,props:{},children:[{type:a,value:z}]},{type:a,value:" from anywhere on your system. I also use "},{type:b,tag:j,props:{href:"https:\u002F\u002Fcode.visualstudio.com\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"VSCode"}]},{type:a,value:", which incorporates a TON of resources to make life easy. And trust me when I say, it makes coding a "},{type:b,tag:h,props:{className:["inline-flex"],id:"breeze"},children:[{type:a,value:"breeze!"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Just hover over the bottom right of the codeblocks in case you want to copy the code."}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Create a folder to house all your projects"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"md projects "},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:ah}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,ai,aj]},children:[{type:a,value:ak}]},{type:a,value:" projects\n"}]}]}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Create a Nuxt app"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"npx create-nuxt-app blog "},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:ah}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,ai,aj]},children:[{type:a,value:ak}]},{type:a,value:" blog\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"You will now be asked a bunch of questions. Here are my choices."}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Project name: "},{type:b,tag:i,props:{},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Programming language: Javascript"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Package manager: Npm"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"UI framework: None"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Nuxt.js modules: "},{type:b,tag:i,props:{},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Linting tools: "},{type:b,tag:i,props:{},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Testing framework: "},{type:b,tag:i,props:{},children:[{type:a,value:H}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Rendering mode: Universal (SSR\u002FSSG) (because we are going to use Static Site Generation (SSG))"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Deployment target: Static (Static\u002FJAMStack hosting) (Free for personal use!!!)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Development tools: jsconfig.json (because I use VSCode)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Continuous integration: None (Not required so soon!)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Version control system: Git (I will show you how and why it is important later!)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"PS: If you're an experienced web-dev and want to explore options on your own, "},{type:b,tag:j,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fdocs\u002F2.x\u002Fget-started\u002Finstallation\u002F",rel:[l,m,n],target:o},children:[{type:a,value:al}]},{type:a,value:" is a link for your reference."}]}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Install Nuxt Content"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:d,props:{className:[e,B]},children:[{type:a,value:z}]},{type:a,value:" i @nuxt\u002Fcontent\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Now open your "},{type:b,tag:i,props:{},children:[{type:a,value:U}]},{type:a,value:" file located in the "},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:" folder and add "},{type:b,tag:i,props:{},children:[{type:a,value:am}]},{type:a,value:" to the "},{type:b,tag:i,props:{},children:[{type:a,value:an}]},{type:a,value:" key. If the "},{type:b,tag:i,props:{},children:[{type:a,value:an}]},{type:a,value:" key doesn't exist, add it as shown below."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:d,props:{className:[I]},children:[{type:a,value:U}]},{type:b,tag:r,props:{className:[s,J]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:d,props:{className:[e,K,y]},children:[{type:a,value:ao}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,K,y]},children:[{type:a,value:ap}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:C}]},{type:a,value:"\n    modules"},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:D}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:L}]},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:am}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Now create a "},{type:b,tag:i,props:{},children:[{type:a,value:"content"}]},{type:a,value:" folder at the root of your "},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:" folder"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"md content\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Ta da! We're almost done!"}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Install Tailwind CSS (Optional)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Install the compatibility versions of Tailwind and its dependencies."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:d,props:{className:[e,B]},children:[{type:a,value:z}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,B]},children:[{type:a,value:"install"}]},{type:a,value:" -D @nuxtjs\u002Ftailwindcss "},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:a,value:"\n                tailwindcss@npm:@tailwindcss\u002Fpostcss7-compat "},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:a,value:"\n                @tailwindcss\u002Fpostcss7-compat "},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:a,value:"\n                postcss@^7 "},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:N}]},{type:a,value:"\n                autoprefixer@^9\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Now add Tailwind to the "},{type:b,tag:i,props:{},children:[{type:a,value:"buildModules"}]},{type:a,value:" key of your Nuxt config file just like what we did with the content module"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:d,props:{className:[I]},children:[{type:a,value:U}]},{type:b,tag:r,props:{className:[s,J]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:d,props:{className:[e,K,y]},children:[{type:a,value:ao}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,K,y]},children:[{type:a,value:ap}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:C}]},{type:a,value:"\n    buildModules"},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:D}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:L}]},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'@nuxtjs\u002Ftailwindcss'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Now initialize Tailwind"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"npx tailwindcss init\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"This creates a basic "},{type:b,tag:i,props:{},children:[{type:a,value:W}]},{type:a,value:" file at the root of our "},{type:b,tag:i,props:{},children:[{type:a,value:V}]},{type:a,value:" folder and configures how Tailwind is used in the project."}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Now the important part: we configure "},{type:b,tag:j,props:{href:"https:\u002F\u002Fwebpack.js.org\u002Fguides\u002Ftree-shaking\u002F",rel:[l,m,n],target:o,title:"Click here to learn about tree-shaking"},children:[{type:a,value:"tree-shaking"}]},{type:a,value:" for Tailwind."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:d,props:{className:[I]},children:[{type:a,value:W}]},{type:b,tag:r,props:{className:[s,J]},children:[{type:b,tag:t,props:{},children:[{type:a,value:y},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:X}]},{type:b,tag:d,props:{className:[e,aq]},children:[{type:a,value:ar}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:as}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:C}]},{type:a,value:"\n  purge"},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:D}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:L}]},{type:a,value:F},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'.\u002Fcomponents\u002F**\u002F*.{vue,js}'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'.\u002Flayouts\u002F**\u002F*.vue'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'.\u002Fpages\u002F**\u002F*.vue'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'.\u002Fplugins\u002F**\u002F*.{js,ts}'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:F},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'.\u002Fnuxt.config.{js,ts}'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:"\n   "},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Tree-shaking ensures that unused styles will be removed for production builds (when we want to publish our site, we want to ensure that the \"build\" size of our project is as small as possible). If you want to read more about Tailwind and advanced configuration, please click "},{type:b,tag:j,props:{href:"https:\u002F\u002Ftailwindcss.com\u002Fdocs\u002Fguides\u002Fnuxtjs",rel:[l,m,n],target:o},children:[{type:a,value:al}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:A,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Install Tailwind\u002FTypography"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"If you are as lazy as me, you wouldn't want to spend time styling generated HTML and rather let a package do the rest. Enter Tailwind\u002FTypography, a nifty little package which does all that for you and more! In case you don't how a few elements are styled and\u002For want to change something, you can always do that later!"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,x]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:d,props:{className:[e,B]},children:[{type:a,value:z}]},{type:a,value:" i @tailwindcss\u002Ftypography\n"}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Add the dependency to the config file to make it work!"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:d,props:{className:[I]},children:[{type:a,value:W}]},{type:b,tag:r,props:{className:[s,J]},children:[{type:b,tag:t,props:{},children:[{type:a,value:y},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:X}]},{type:b,tag:d,props:{className:[e,aq]},children:[{type:a,value:ar}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:as}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:C}]},{type:a,value:"\n  theme"},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:D}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:C}]},{type:a,value:Y},{type:b,tag:d,props:{className:[e,at]},children:[{type:a,value:au}]},{type:a,value:av},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:E}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:"\n  plugins"},{type:b,tag:d,props:{className:[e,u]},children:[{type:a,value:D}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:L}]},{type:a,value:Y},{type:b,tag:d,props:{className:[e,B]},children:[{type:a,value:"require"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:"("}]},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'@tailwindcss\u002Ftypography'"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:")"}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:Y},{type:b,tag:d,props:{className:[e,at]},children:[{type:a,value:au}]},{type:a,value:av},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:M}]},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:E}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:"Phew! That's it! In the next article, we'll go about how to ACTUALLY start writing our blog, displaying it, configuring the nitty-gritties and all that good stuff. Please share your thoughts in the comments."}]},{type:a,value:c},{type:b,tag:P,props:{id:ab},children:[{type:b,tag:j,props:{href:"#credits-and-references",ariaHidden:Q,tabIndex:R},children:[{type:b,tag:d,props:{className:[S,T]},children:[]}]},{type:a,value:ac}]},{type:a,value:c},{type:b,tag:G,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:ad,rel:[l,m,n],target:o},children:[{type:a,value:ae}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fcontent.nuxtjs.org\u002F",rel:[l,m,n],target:o},children:[{type:a,value:af}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fnuxtjs.org\u002Fblog\u002Fcreating-blog-with-nuxt-content\u002F",rel:[l,m,n],target:o},children:[{type:a,value:"Create a Blog with Nuxt Content"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:ag,rel:[l,m,n],target:o},children:[{type:a,value:"Tailwind"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fgithub.com\u002Ftailwindlabs\u002Ftailwindcss-typography",rel:[l,m,n],target:o},children:[{type:a,value:"Tailwind\u002FTypography"}]}]},{type:a,value:c}]}]},dir:"\u002Farticles\u002Ftech\u002Fblog",path:"\u002Farticles\u002Ftech\u002Fblog\u002Fblog_intro",extension:".md",createdAt:"2021-04-08T09:44:50.856Z",updatedAt:"2021-04-07T15:02:45.655Z"}}],fetch:{},mutations:void 0}}("text","element","\n","span","token","punctuation","li","p","em","a"," ","nofollow","noopener","noreferrer","_blank","div","nuxt-content-highlight","pre","line-numbers","code","operator",",","string","language-bash","module","npm","ol","function","{",":","}","\n     ","ul","pressed Enter","filename","language-javascript","keyword","[","]","\\",3,"h3","true",-1,"icon","icon-link","nuxt.config.js","blog","tailwind.config.js",".","\n    ","requirements","Requirements","installation","Installation","credits-and-references","Credits and References","https:\u002F\u002Fnuxtjs.org\u002F","Nuxt.js","Nuxt Content","https:\u002F\u002Ftailwindcss.com\u002F","&&","builtin","class-name","cd","here","'@nuxt\u002Fcontent'","modules","export","default","property-access","exports","=","comment","\u002F\u002F ...","\n  ")));