import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Login = () => import('@/views/login/index');
const layout = () => import('@/layout/index');

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: layout,
    redirect: '/dashbord',
    children: [
      {
        path: 'dashbord',
        component: () => import('@/views/dashbord/index')
      }
    ]
  },
  {
    path: '/project',
    component: () => import('@/views/index'),
    redirect: '/project/abc',
    children: [
      {
        path: 'abc',
        component: () => import('@/views/project/index')

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
