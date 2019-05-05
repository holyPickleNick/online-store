import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import { setupMessages } from "./locale";
import { router } from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const i18n = setupMessages();

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
