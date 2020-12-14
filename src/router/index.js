import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
     component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta:{requiresAuth:true} // Este se agrega como parte de lo necesario para prevenir accesos directos a las rutas de sde la urle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



// A continuacion es toda la logica necesaria para evitar que se llegue directamente a una ruta desde la url
router.beforeEach((to, from, next)=>{
  if (to.matched.some(record => record.meta.requiresAuth)){
    if (localStorage.getItem('jwt')=== null){
      next({path: '/'})
    }else{
      next();
    }
  }else{
    next();
  }
})

export default router
