/* eslint-disable no-new */
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  components: { App },
  store,
  template: "<App/>"
});
