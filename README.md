# uniubi-lib-mobile

## 项目介绍

- uniubi-lib-mobile: 组件库
- uniubi-lib-mobile-demo: 组件库 demo 项目，使用 taro 搭建，用于组件 demo 展示
- uniubi-lib-mobile-docs: 组件库文档项目，使用 umi 搭建

## 开发流程

### 分支管理

开发成员开发时从 `dev` 分支拉取组件分支，如：`feature/button`，每个组件独立分支管理，开发完成后通过 merge request 向 `dev` 分支进行合并，并 @虚宿 进行 Code Review

### 安装依赖

项目通过 `lerna` 进行管理，在项目根目录执行 `yarn bootstrap` 为所有包安装依赖

### 项目启动

1. 进入 packages/uniubi-lib-mobile 目录执行 `yarn link`，为项目创建引用软链接
2. 在 packages/uniubi-lib-mobile 目录执行 `yarn dev`，启动组件库项目
3. 进入 packages/uniubi-lib-mobile-demo 目录执行 `yarn link uniubi-lib-mobile`，链接组件库
4. 在 packages/uniubi-lib-mobile-demo 目录执行 `yarn dev:h5` 可在浏览器端查看组件 demo，执行 `yarn dev:weapp` 可在微信小程序端查看组件 demo
5. 进入 packages/uniubi-lib-mobile-docs 目录执行 `yarn start` 启动组件文档项目
6. 启动完成后修改各项目代码即可热更新预览

## 项目发布

1. 进入项目根目录，执行 `lerna build` 进行打包
2. 执行 `lerna publish`，根据修改情况确定版本号，版本号需严格遵循 [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/) 语义化版本规范
