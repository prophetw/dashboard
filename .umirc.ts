import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/demo', component: '@/pages/Demo' },
    { path: '/history', component: '@/pages/History' },
    { path: '/career', component: '@/pages/Career' },
    { path: '/cn-cross', component: '@/pages/CNCross' },
    { path: '/first-aid', component: '@/pages/FirstAid' },
  ],
  fastRefresh: {},
});
