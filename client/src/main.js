import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const routes = [
  { path: '/login', component: Login, meta: { requiresAuth: false}},
  { path: '/', component: App, meta: { requiresAuth: true} }
]

const router = new VueRouter({
  routes
})

//force authentication for everything
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next('/login')
  else next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
