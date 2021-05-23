import Vue from "vue";
import App from "./App.vue";
import cell from "./components/cell";
import board from "./components/board";

Vue.component("cell", cell);
Vue.component("board", board);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
