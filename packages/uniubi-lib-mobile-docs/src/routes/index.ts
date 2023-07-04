export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/index', exact: true, name: '项目介绍' },
      {
        path: 'base',
        component: '@/layouts/BlankLayout',
        name: '基础组件',
        routes: [
          {
            path: 'action-sheet',
            component: '@/pages/components/base/action-sheet',
            name: 'ActionSheet 动作面板',
          },
          {
            path: 'button',
            component: '@/pages/components/base/button',
            name: 'Button 按钮',
          },
          {
            path: 'calendar',
            component: '@/pages/components/base/calendar',
            name: 'Calendar 日历',
          },
          {
            path: 'checkbox',
            component: '@/pages/components/base/checkbox',
            name: 'Checkbox 多选',
          },
          {
            path: 'descriptions',
            component: '@/pages/components/base/descriptions',
            name: 'Descriptions 描述列表',
          },
          {
            path: 'empty',
            component: '@/pages/components/base/empty',
            name: 'Empty 空状态',
          },
          {
            path: 'form',
            component: '@/pages/components/base/form',
            name: 'Form 表单',
          },
          {
            path: 'grid',
            component: '@/pages/components/base/grid',
            name: 'Grid 栅格',
          },
          {
            path: 'image',
            component: '@/pages/components/base/image',
            name: 'Image 图片',
          },
          {
            path: 'input',
            component: '@/pages/components/base/input',
            name: 'Input 输入框',
          },
          {
            path: 'loading',
            component: '@/pages/components/base/loading',
            name: 'Loading 加载',
          },
          {
            path: 'list',
            component: '@/pages/components/base/list',
            name: 'List 列表组件',
          },
          {
            path: 'modal',
            component: '@/pages/components/base/modal',
            name: 'Modal 弹框',
          },
          {
            path: 'nav-header',
            component: '@/pages/components/base/nav-header',
            name: 'NavHeader 头部导航',
          },
          {
            path: 'overlay',
            component: '@/pages/components/base/overlay',
            name: 'Overlay 遮照',
          },
          {
            path: 'popup',
            component: '@/pages/components/base/popup',
            name: 'Popup 弹出层',
          },
          {
            path: 'radio',
            component: '@/pages/components/base/radio',
            name: 'Radio 单选',
          },
          {
            path: 'scroll-wrapper',
            component: '@/pages/components/base/scroll-wrapper',
            name: 'ScrollWrapper 滚动视图',
          },
          {
            path: 'space',
            component: '@/pages/components/base/space',
            name: 'Space 间距',
          },
          {
            path: 'steps',
            component: '@/pages/components/base/steps',
            name: 'Steps 步骤条',
          },
          {
            path: 'switch',
            component: '@/pages/components/base/switch',
            name: 'Switch 开关',
          },
          {
            path: 'tabs',
            component: '@/pages/components/base/tabs',
            name: 'Tabs 选项卡',
          },
          {
            path: 'tag',
            component: '@/pages/components/base/tag',
            name: 'Tag 标签',
          },
          {
            path: 'toast',
            component: '@/pages/components/base/toast',
            name: 'Toast 轻提示',
          },
        ],
      },
      {
        path: 'business',
        component: '@/layouts/BlankLayout',
        name: '业务组件',
        routes: [
          {
            path: 'multiple-choice',
            component: '@/pages/components/business/multiple-choice',
            name: 'MultipleChoice 选择题',
          },
        ],
      },
    ],
  },
];
