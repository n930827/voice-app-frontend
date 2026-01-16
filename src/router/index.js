import { createRouter, createWebHistory } from "vue-router";

// 引入你的頁面組件
// 請確保你已經在 src/views/ 底下建立了這些檔案
import Login from "../views/Login.vue";
import Register from "../views/Register.vue"; // 記得建立這個檔案
import Chart from "../views/Chart.vue";
import Upload from "../views/Upload.vue";
import AddTester from "../views/AddTester.vue";

const routes = [
  {
    path: "/",
    redirect: "/login", // 預設導向登入頁
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" }, // 💡 關鍵：告訴 App.vue 不要顯示側邊欄
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { layout: "empty" }, // 註冊頁也不需要側邊欄
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart,
    // 這裡沒寫 meta.layout，預設就會有側邊欄 (MainLayout)
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/add-tester",
    name: "AddTester",
    component: AddTester,
  },
  // 捕獲所有未定義路徑，導回首頁 (可選)
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  // 使用 HTML5 History 模式 (網址不會有 #)
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
