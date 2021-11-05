# uniubi-lib-mobile 开发指南

## 项目介绍

项目分为三个包：

- uniubi-lib-mobile: 组件核心库，组件开发使用
- uniubi-lib-mobile-demo: 使用 `taro` 脚手架搭建的站点，用于组件 demo 展示，开发时可当作 h5 来使用
- uniubi-lib-mobile-docs: 组件库 API 文档，通过 `markdown-it` 对 md 文件进行解析，用于组件 API 文档内容展示

## 开发流程

### 安装依赖

1. 从 gitlab 仓库拉取代码后，在根目录执行 `yarn bootstrap` 安装相关依赖

### 组件开发

1. 进入 `packages/uniubi-lib-mobile` 目录，在 `src/components` 目录下进行组件开发
2. 将所有组件样式置于 `src/style/components` 下
3. 如有公共方法，可置于 `src/utils` 目录下
4. 组件开发完成后在根目录 `index.ts` 文件中进行导出，如：`export { default as UButton } from './components/button';`
5. 开发完成后执行 `yarn build` 命令进行构建

### demo 编写

1. 进入 `packages/uniubi-lib-mobile-demo` 目录，在 `src` 目录下进行开发，文件夹名称小写，多个单词之间使用 `-` 连接
2. 开发方式同 h5，pages 中每一个页面作为相应组件的 demo 页
3. 开发完成后通过 `yarn build:h5` 命令进行构建

### API 文档编写

1. 进入 `packages/uniubi-lib-mobile-docs` 目录
2. 在 `markdown` 目录下编写组件 API 文档，md 格式，文件名小写，多个单词之间使用 `-` 连接
3. 在 `view` 目录下引入组件文档，文件夹名称大些，大驼峰形式
4. 如开发完成后需要发版，在 `view/ChangeLog/index` 文件中记录更新内容
5. 开发完成后通过 `yarn build:h5` 命令进行构建

### 发包

1. 进入 `packages/uniubi-lib-mobile-docs` 目录，执行 `yarn build`，使用 `npm version` 相关命令进行版本号更新，执行 `npm publish` 进行发布

### 文档发布

1. 提交代码至 gitlab 仓库 master 分支，使用 jenkins 自动发布（脚本暂未编写，不影响组件开发...）
