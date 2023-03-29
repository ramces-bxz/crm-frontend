import { createApp } from "vue";
import router from "./router.js";
import "./style.css";
import App from "./App.vue";
import BaseButton from "./components/ui/BaseButton.vue";
const app = createApp(App);
app.component("base-button", BaseButton);
app.use(router);
app.mount("#app");
