import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./style/reset.scss";
import "./style/app.scss";
import "./plugins/element.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
