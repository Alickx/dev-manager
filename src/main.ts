import { createApp } from "vue";
import App from "./App.vue";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
import "uno.css";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
