import {createApp} from "vue";
import "material-design-icons/iconfont/material-icons.css";
import "./index.css";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .mount("#app");
