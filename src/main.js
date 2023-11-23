
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registrado con éxito:", registration);
    })
    .catch((error) => {
      console.error("Error al registrar el Service Worker:", error);
    });
}

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/styles/styles.css";

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
