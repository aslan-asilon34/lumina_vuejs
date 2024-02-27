// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/about',
    component: About,
    name: 'About',
  },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
