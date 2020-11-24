import { defineConfig } from 'umi';

export default defineConfig({
  hash:true,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index' },
    { path: '/other', component: '@/pages/other/index' },
  ],
  //路由动态加载
  dynamicImport:{},
  dva:{
    //启动dva热更新
    hmr:true,
    //启动immer模式,dva-immer
    immer:true
  },
  antd:{},
});
