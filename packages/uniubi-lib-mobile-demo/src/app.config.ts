export default {
  pages: [
    'pages/index/index',
    // 基础组件
    'pages/components/base/action-sheet/index',
    'pages/components/base/button/index',
    'pages/components/base/empty/index',
    'pages/components/base/form/index',
    'pages/components/base/grid/index',
    'pages/components/base/image/index',
    'pages/components/base/input/index',
    'pages/components/base/loading/index',
    'pages/components/base/list/index',
    'pages/components/base/modal/index',
    'pages/components/base/nav-header/index',
    'pages/components/base/overlay/index',
    'pages/components/base/popup/index',
    'pages/components/base/radio/index',
    'pages/components/base/scroll-wrapper/index',
    'pages/components/base/tabs/index',
    'pages/components/base/toast/index',
    // 业务组件
    'pages/components/business/multiple-choice/index',
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
