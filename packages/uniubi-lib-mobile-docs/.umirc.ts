import { defineConfig } from 'umi';
import routes from './src/routes'

export default defineConfig({
  favicon: 'https://fe-cloud.uni-ubi.com/other/1622427550983-favicon.ico',
  hash: true,
  webpack5: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  theme: {},
  routes,
  locale: {},
  ignoreMomentLocale: true,
  targets: {
    ie: 10,
  },
  chainWebpack(memo) {
    memo.module.rule('mjs-rule').test(/.m?js/).resolve.set('fullySpecified', false);
  }
});
