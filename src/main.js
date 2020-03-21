import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import { List, Cell, Dialog } from "vant";

Vue.use(List);
Vue.use(Cell);
Vue.use(Dialog);
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
