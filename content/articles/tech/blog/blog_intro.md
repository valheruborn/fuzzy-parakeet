---
category: Tech
series: Write a Blog
title: The Prerequisites
description: How to setup your blog project and configure it
artno: 1
author: Jude D'Mello
---

This series documents my journey where I learn new frameworks and follow my passion for writing.  

For this blog, I will use frameworks and modules based on Vue. Why Vue? In traditional webpage building, HTML (Hyper-Text Markup Language) is used to scaffold the "content" while CSS (Cascading Style Sheets) is used to "make it pretty". Throw in a bit of Javascript to the mix and you end up with a webpage that looks great apart from performing well.  

Vue is a progressive Javascript framework, which means you can use it to power a part of your webpage, or the whole page altogether. You can also create reusable components, which means that you can write the code for a "component" once, and use it as many times as required across various pages. That way, you don't have to pull your hair out while searching through an ocean of code to find the component/code you need, either to alter or remove it. Sound interesting? Great!  

*PS: Nuxt.js and Vue are like Next.js and React. Learning one variant will make it easier to learn the other, if you so wish to.*

### Requirements
- [Node.js](https://nodejs.org/en/ "Download Node.js from here"): We need something like *Node Package Manager* (npm) to manage our dependencies.
- [Nuxt.js](https://nuxtjs.org/ "Read about Nuxt.js here"): An open source web application framework based on Vue.js, Node.js, Webpack and Babel.js. Modular in architecture, it aims to make life simpler for Vue.js devs by providing various features which aim to lower development time among other things.
- [Nuxt Content](https://content.nuxtjs.org/, "Read about Nuxt Content here"):  @nuxt/content is one of the modules pluggable in Nuxt.js. It acts as a headless CMS to fetch your Markdown, JSON, YAML, XML and CSV files. I personally use Markdown to write my articles. Why? Because it makes writing articles a breeze when compared to writing long lines of HTML to achieve pretty much the same thing.
- [Tailwind CSS](https://tailwindcss.com/ "Read about Tailwind CSS here"): A "better" alternative to vanilla CSS. I'm a recent convert and hell yes I now believe! :wink: Completely optional though, and you can stick to vanilla CSS or ignore it altogether.  

### Installation

- This installation procedure uses *npm*, so make sure you have Node.js installed (Link is given above). I'm also on Windows (hehe yes yes I know) and will be following the procedures for that OS. Only Node.js installation will differ from other OSes, otherwise it's pretty much the same. Make sure Node is on "Path" (The latest installers have it checked by default, leave it like so) so that you can access *npm* from anywhere on your system. I also use [VSCode](https://code.visualstudio.com/), which incorporates a TON of resources to make life easy. And trust me when I say, it makes coding a <p class="inline-flex" id="breeze">breeze!</p>

Just hover over the bottom right of the codeblocks in case you want to copy the code.

1. Create a folder to house all your projects
```bash
md projects && cd projects
```

1. Create a Nuxt app

```bash
npx create-nuxt-app blog && cd blog
```

You will now be asked a bunch of questions. Here are my choices. 

- Project name: *pressed Enter*
- Programming language: Javascript
- Package manager: Npm
- UI framework: None
- Nuxt.js modules: *pressed Enter*
- Linting tools: *pressed Enter*
- Testing framework: *pressed Enter*
- Rendering mode: Universal (SSR/SSG) (because we are going to use Static Site Generation (SSG))
- Deployment target: Static (Static/JAMStack hosting) (Free for personal use!!!)
- Development tools: jsconfig.json (because I use VSCode)
- Continuous integration: None (Not required so soon!)
- Version control system: Git (I will show you how and why it is important later!)


*PS: If you're an experienced web-dev and want to explore options on your own, [here](https://nuxtjs.org/docs/2.x/get-started/installation/) is a link for your reference.*  

1. Install Nuxt Content

```bash
npm i @nuxt/content
```
Now open your *nuxt.config.js* file located in the *blog* folder and add *'@nuxt/content'* to the *modules* key. If the *modules* key doesn't exist, add it as shown below.

```javascript[nuxt.config.js]
export default {
    modules: ['@nuxt/content']
}
```
Now create a *content* folder at the root of your *blog* folder

```bash
md content
```
Ta da! We're almost done!

1. Install Tailwind CSS (Optional)

Install the compatibility versions of Tailwind and its dependencies.

```bash
npm install -D @nuxtjs/tailwindcss \
                tailwindcss@npm:@tailwindcss/postcss7-compat \
                @tailwindcss/postcss7-compat \
                postcss@^7 \
                autoprefixer@^9
```

Now add Tailwind to the *buildModules* key of your Nuxt config file just like what we did with the content module

```javascript[nuxt.config.js]
export default {
    buildModules: ['@nuxtjs/tailwindcss']
}
```

Now initialize Tailwind

```bash
npx tailwindcss init
```

This creates a basic *tailwind.config.js* file at the root of our *blog* folder and configures how Tailwind is used in the project.  

Now the important part: we configure [tree-shaking](https://webpack.js.org/guides/tree-shaking/ "Click here to learn about tree-shaking") for Tailwind.

```javascript[tailwind.config.js]
module.exports = {
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
}
```
Tree-shaking ensures that unused styles will be removed for production builds (when we want to publish our site, we want to ensure that the "build" size of our project is as small as possible). If you want to read more about Tailwind and advanced configuration, please click [here](https://tailwindcss.com/docs/guides/nuxtjs).

1. Install Tailwind/Typography

If you are as lazy as me, you wouldn't want to spend time styling generated HTML and rather let a package do the rest. Enter Tailwind/Typography, a nifty little package which does all that for you and more! In case you don't how a few elements are styled and/or want to change something, you can always do that later!

```bash
npm i @tailwindcss/typography
```

Add the dependency to the config file to make it work!

```javascript[tailwind.config.js]
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

Phew! That's it! In the next article, we'll go about how to ACTUALLY start writing our blog, displaying it, configuring the nitty-gritties and all that good stuff. Please share your thoughts in the comments.

### Credits and References
- [Nuxt.js](https://nuxtjs.org/)
- [Nuxt Content](https://content.nuxtjs.org/)
- [Create a Blog with Nuxt Content](https://nuxtjs.org/blog/creating-blog-with-nuxt-content/)
- [Tailwind](https://tailwindcss.com/)
- [Tailwind/Typography](https://github.com/tailwindlabs/tailwindcss-typography)