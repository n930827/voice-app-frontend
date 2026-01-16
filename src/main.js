import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/style.scss";

const app = createApp(App);

app.use(router); // 👈 2. 務必告訴 Vue 使用 router
app.mount("#app");
