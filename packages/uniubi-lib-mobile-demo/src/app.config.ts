export default {
  pages: [
    'pages/index/index',
    'pages/components/action-sheet/index',
    'pages/components/button/index',
    'pages/components/loading/index',
    'pages/components/overlay/index',
    'pages/components/popup/index',
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
