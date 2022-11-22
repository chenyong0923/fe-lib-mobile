export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/index', exact: true, name: '项目介绍' },
      {
        path: '/action-sheet',
        component: '@/pages/components/action-sheet',
        name: 'ActionSheet 动作面板',
      },
      {
        path: '/button',
        component: '@/pages/components/button',
        name: 'Button 按钮',
      },
      {
        path: '/empty',
        component: '@/pages/components/empty',
        name: 'Empty 空状态',
      },
      {
        path: '/form',
        component: '@/pages/components/form',
        name: 'Form 表单',
      },
      {
        path: '/grid',
        component: '@/pages/components/grid',
        name: 'Grid 栅格',
      },
      {
        path: '/image',
        component: '@/pages/components/image',
        name: 'Image 图片',
      },
      {
        path: '/input',
        component: '@/pages/components/input',
        name: 'Input 输入框',
      },
      {
        path: '/loading',
        component: '@/pages/components/loading',
        name: 'Loading 加载',
      },
      {
        path: '/list',
        component: '@/pages/components/list',
        name: 'List 列表组件',
      },
      {
        path: '/modal',
        component: '@/pages/components/modal',
        name: 'Modal 弹框',
      },
      {
        path: '/nav-header',
        component: '@/pages/components/nav-header',
        name: 'NavHeader 头部导航',
      },
      {
        path: '/overlay',
        component: '@/pages/components/overlay',
        name: 'Overlay 遮照',
      },
      {
        path: '/popup',
        component: '@/pages/components/popup',
        name: 'Popup 弹出层',
      },
      {
        path: '/radio',
        component: '@/pages/components/radio',
        name: 'Radio 单选',
      },
      {
        path: '/scroll-wrapper',
        component: '@/pages/components/scroll-wrapper',
        name: 'ScrollWrapper 滚动视图',
      },
      {
        path: '/tabs',
        component: '@/pages/components/tabs',
        name: 'Tabs 选项卡',
      },
      {
        path: '/toast',
        component: '@/pages/components/toast',
        name: 'Toast 轻提示',
      },
    ],
  },
];
