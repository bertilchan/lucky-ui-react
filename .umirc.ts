import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Lucky UI',
  favicon: 'https://cdn.chenzibo.cn/luckyui/logo.png',
  logo: 'https://cdn.chenzibo.cn/luckyui/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  theme: {
    '@c-primary': '#4569d4',
  },
  sass: {
    implementation: require('node-sass'),
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      {
        title: 'Components',
        path: '/en-US/components',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/bertilchan/lucky-ui-react',
      },
    ],
    'zh-CN': [
      {
        title: '组件',
        path: '/components',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/bertilchan/lucky-ui-react',
      },
    ],
  },
  menus: {
    '/components': [
      {
        title: '指南',
        path: '/components',
      },
      {
        title: '基础组件',
        children: ['components/button', 'components/icon'],
      },
      {
        title: '导航',
        children: ['components/menu'],
      },
      {
        title: '表单组件',
        children: [
          'components/auto-complete',
          'components/input',
          'components/select',
          'components/upload',
        ],
      },
      {
        title: '数据展示',
        children: ['components/progress', 'components/tabs', 'components/card'],
      },
      {
        title: '反馈组件',
        children: ['components/alert', 'components/message'],
      },
    ],
    '/en-US/components': [
      {
        title: 'Introduction',
        path: '/components',
      },
      {
        title: 'Basis',
        children: ['components/button', 'components/icon'],
      },
      {
        title: 'Navigation',
        children: ['components/menu'],
      },
      {
        title: 'Data Entry',
        children: [
          'components/auto-complete',
          'components/input',
          'components/select',
          'components/upload',
        ],
      },
      {
        title: 'Data Display',
        children: ['components/progress', 'components/tabs', 'components/card'],
      },
      {
        title: 'Feedback',
        children: ['components/alert', 'components/message'],
      },
    ],
  },
});
