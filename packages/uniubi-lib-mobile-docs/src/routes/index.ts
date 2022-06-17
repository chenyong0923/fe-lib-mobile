export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/index', exact: true, name: '快速使用' },
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
        path: '/image',
        component: '@/pages/components/image',
        name: 'Image 图片',
      },
      {
        path: '/loading',
        component: '@/pages/components/loading',
        name: 'Loading 加载',
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
    ],
  },
];
