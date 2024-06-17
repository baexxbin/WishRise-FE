// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../components/MainHome.vue';
import BoardList from '../components/board/BoardList.vue';
import CreateBucket from '../components/board/CreateBucket.vue';


const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: MainHome
  },
  {
    path: '/BoardList',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/CreateBucket',
    name: 'CreateBucket',
    component: CreateBucket
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
