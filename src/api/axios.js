import axios from "axios";

// 建立一個 axios 實體
const api = axios.create({
  // 設定後端基礎網址 (這樣以後換伺服器只要改這裡)
  baseURL: process.env.VUE_APP_API_BASE_URL || "http://localhost:8080/api",
  timeout: 10000, // 請求超過 10 秒算逾時
});

// (選用) 攔截器：可以在這裡統一處理錯誤，例如 401 未登入
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data.message);
      // 這裡可以寫：如果 401 就自動踢回登入頁
    }
    return Promise.reject(error);
  }
);

export default api;
