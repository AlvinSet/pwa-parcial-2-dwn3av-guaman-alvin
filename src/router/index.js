import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CartView from '../views/CartView.vue'
import { observeAuthState } from '@/firebase/auth.js';

Vue.use(VueRouter)

const routes = [
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true },
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
