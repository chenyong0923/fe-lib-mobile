export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/index', exact: true, name: '快速使用' },
      {
        path: '/button',
        component: '@/pages/components/button',
        name: 'Button 按钮',
      },
    ],
  },
];
