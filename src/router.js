import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/Login.vue'
import Home from './views/page/Home.vue'
import IndexSystem from './views/page/index-map/Index-system.vue'
import OnlineRetailers from './views/page/online-retailers/OnlineRetailers.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'IndexSystem',
        component: IndexSystem
      },
      {
        path: '/IndexSystem',
        name: 'IndexSystem',
        component: IndexSystem
      },
      {
        path: '/OnlineRetailers',
        name: 'OnlineRetailers',
        component: OnlineRetailers
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    if (sessionStorage.userName) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

export default router
