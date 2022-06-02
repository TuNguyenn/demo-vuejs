import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product.list',
    component: () => import('../views/products/MyList.vue')
  },
  {
    path: '/product/create',
    name: 'product.create',
    component: () => import('../views/products/MyForm.vue')
  },
  {
    path: '/product/edit/:id',
    name: 'product.edit',
    component: () => import('../views/products/MyForm.vue')
  },
  {
    path: '/user',
    name: 'user.list',
    component: () => import('../views/users/MyList.vue')
  },
  {
    path: '/user/create',
    name: 'user.create',
    component: () => import('../views/users/MyForm.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
