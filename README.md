# 为B站直播间添加分区跳转按钮油猴脚本

## 项目介绍

这是一个油猴脚本项目，使用typeScript + vue2 + rollup打包

local_build.js为默认配置打包名，可自定义

## 安装依赖

在项目文件夹下，打开终端根据实际情况选择对应的包输入命令

```bash
npm install
```

```bash
yarn install
```

```bash
pnpm install
```

## 项目运行

根据实际情况选择对应的包命令运行

```bash
npm run dev
```

```bash
  yarn run dev
```

```bash
  pnpm run dev
```

## 项目打包

根据实际情况选择对应的包命令运行打包

```bash
  yarn run build
```

```bash
  npm run build
```

```bash
  pnpm run build
```

## 本地项目部署

- 假设已经按照了油猴插件
- 在插件拓展设置中勾选上`允许访问文件 URL`
- 插件中新建一个脚本，填写如下内容

```javascript
// ==UserScript==
// @name        为B站直播间添加分区跳转按钮
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description 在直播间播放器右上角补充当前直播的分区信息和跳转按钮
// @author      byhgz
// @icon        https://static.hdslb.com/images/favicon.ico
// @license     Apache-2.0
// @run-at      document-end
// @match       *://live.bilibili.com/*
// @exclude     https://live.bilibili.com/p*
// @grant       GM_registerMenuCommand
// @grant       GM_openInTab
// @require     file://E:\js\dist\local_build.js
// ==/UserScript==

/**
 * 上面中的引用地址，根据项目本地实际路径进行修改，这里仅供参考
 * file://E:\js\dist\local_build.js
 *
 */
```