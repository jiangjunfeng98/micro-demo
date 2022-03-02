# Micro App Demo

基于 qiankun、vue3、typescript、pinia 的微前端解决方案 Demo，包含 KeepAlive、element-plus 按需引用、TagBar（多个共存、同地址不同参共存、关闭、关闭其他、全部关闭） 等。

此为 [微前端落地的那些事](https://juejin.cn/post/7065559452908257311#heading-17) 的配套 demo，若对你有灵感，请为文章**点个赞**。

![micro-app](https://github.com/jiangjunfeng98/micro-demo/blob/main/imgs/2022-03-02%2010-25-20.gifcask.2022-03-02%2013_15_15-min.gif)

## 注意

该 demo 采用 Monorepo，实际项目为 Multirepo，转换后可能会出现 lint、test 异常，敬请谅解。

由于 qiankun 当前版本不支持 esm，main、base-core 基于 vite，子应用基于 Vue CLI 5（webpack5）。

此源码的 **LICENSE 为 LGPL**。

## 启动方式

用户名、密码随意

```shell
# 安装依赖
pnpm i

# 启动 mock
cd packages/fe-mock 
npm run mock

# 启动子应用 app-a
cd packages/app-a 
npm run dev

# 启动子应用 app-b
cd packages/app-b
npm run dev

# 启动主应用 main
cd packages/main 
npm run dev
```

## 功能说明
- base-core
  > 项目公共组件、方法库，需先 build ，再更新各项目对应的版本。一定要保证 dist 产物，否则依赖安装报错

- 子应用加载
  - 注册：[`/packages/main/src/micro/apps.ts`](./packages/main/src/micro/apps.ts) demo 中环境变量控制，可按照诉求调整为 api 获取
  - 加载：[`/packages/main/src/views/MicroApp.vue`](./packages/main/src/views/MicroApp.vue) 渲染容器
- Keep-Alive
  - 布局容器：[`packages/main/src/components/layout/Layout.vue`](./packages/main/src/components/layout/Layout.vue)
  - 渲染容器：[`/packages/main/src/views/MicroApp.vue`](./packages/main/src/views/MicroApp.vue) 加载逻辑
  - 子应用 App.vue：如 [`packages/app-a/src/App.vue`](./packages/app-a/src/App.vue)
- TagBar
  - 渲染、关闭等逻辑：[`packages/main/src/components/layout/tag-bar/`](./packages/main/src/components/layout/tag-bar)
