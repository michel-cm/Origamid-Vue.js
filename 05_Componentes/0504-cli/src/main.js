import Vue from "vue";
import App from "./App.vue";
import MainHeader from "./components/MainHeader.vue";

Vue.component("MainHeader", MainHeader);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
