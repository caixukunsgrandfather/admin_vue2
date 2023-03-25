import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// const Login = () => import('@/views/login/index');
// const layout = () => import('@/layout/index');

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import("@/layout/index"),
    redirect: '/dashbord',
    children: [
      {
        path: '/dashbord',
        component: () => import('@/views/dashbord/index')
      }
    ]
  },
  {
    path: '/project',
    component: () => import('@/layout/index'),
    redirect: '/project/abc',
    children: [
      {
        path: 'abc',
        component: () => import('@/views/project/index')

      }
    ]
  },
  {
    path: '/profile',
    component: () => import('@/layout/index'),
    children: [
      {
        path: '',
        component: () => import('@/views/profile/index')
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
