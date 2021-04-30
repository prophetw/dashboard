import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/home', component: '@/pages/Home' },
    { path: '/demo', component: '@/pages/Demo' },
    { path: '/dd', component: '@/pages/Demo/pageFlip' },
    { path: '/history', component: '@/pages/History' },
    { path: '/career', component: '@/pages/Career' },
    { path: '/cn-cross', component: '@/pages/CNCross' },
    { path: '/first-aid', component: '@/pages/FirstAid' },
    { path: '/heart', component: '@/pages/Heart' },
  ],
  fastRefresh: {},
});
