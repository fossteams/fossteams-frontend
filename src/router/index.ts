import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Conversations from '@/views/Conversations.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/conversations/:conversationId',
    component: Conversations,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
