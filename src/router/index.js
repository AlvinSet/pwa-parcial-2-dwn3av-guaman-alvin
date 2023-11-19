import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { observeAuthState } from '@/firebase/auth.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    meta: { requiresAuth: true },
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = new VueRouter({
  mode: 'history', // Esto quita el # de las URLs
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Verifica la autenticación antes de entrar a una ruta protegida
    observeAuthState((user) => {
      if (!user) {
        // Si no está autenticado, redirige a la página de login
        next({ name: 'login' });
      } else {
        // Si está autenticado, permite el acceso
        next();
      }
    });
  } else {
    // Si la ruta no requiere autenticación, permite el acceso
    next();
  }
});


export default router
