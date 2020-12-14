import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vue from "vue";

/* eslint-disable no-new */
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");


  