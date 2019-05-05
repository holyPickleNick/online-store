import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";
import { setupMessages } from "./locale";
import { router } from "./router";

Vue.use(VueI18n);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const i18n = setupMessages();

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
