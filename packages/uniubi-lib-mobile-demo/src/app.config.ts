export default {
  pages: [
    'pages/index/index',
    'pages/components/action-sheet/index',
    'pages/components/button/index',
    'pages/components/empty/index',
    'pages/components/form/index',
    'pages/components/grid/index',
    'pages/components/image/index',
    'pages/components/loading/index',
    'pages/components/list/index',
    'pages/components/modal/index',
    'pages/components/nav-header/index',
    'pages/components/overlay/index',
    'pages/components/popup/index',
    'pages/components/toast/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    // navigationStyle: 'custom', // 需要自定义头部时开启，可用 layouts/BasicLayout 自定义头部
  },
  lazyCodeLoading: 'requiredComponents',
};
