import { createRouter, createWebHistory } from 'vue-router';
import root from './root';

//导入生成的路由数据
const router = createRouter({
  history: createWebHistory(),
  routes: root,
});

export default router;
