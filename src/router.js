import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/page/Home.vue'
import Center from './views/page/person-center/Center.vue'
import OnlineRetailers from './views/page/online-retailers/OnlineRetailers.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Center',
        component: Center
      },
      {
        path: '/Center',
        name: 'Center',
        component: Center
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

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     if (sessionStorage.userName) {
//       next()
//     } else {
//       next({ path: '/login' })
//     }
//   }
// })

export default router
