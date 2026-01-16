<template>
  <div
    class="min-h-screen flex items-center justify-center bg-paper py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-10 bg-paper">
      <div class="text-center">
        <h2 class="text-3xl font-light text-ink-900 tracking-widest">登入</h2>
        <p class="mt-4 text-xs text-ink-300 tracking-wider uppercase">
          Welcome Back to VoiceApp
        </p>
      </div>

      <div
        v-if="errorMsg"
        class="bg-red-50 border border-red-200 text-red-600 text-xs px-4 py-3 rounded text-center tracking-wide"
      >
        {{ errorMsg }}
      </div>

      <form class="mt-8 space-y-8" @submit.prevent="handleLogin">
        <div class="-space-y-px">
          <div class="mb-6">
            <label
              for="username"
              class="block text-xs font-medium text-ink-300 uppercase tracking-wider mb-2"
              >Username</label
            >
            <input
              id="username"
              v-model="form.username"
              type="text"
              required
              class="input-field"
              placeholder="請輸入帳號"
            />
          </div>
          <div>
            <label
              for="password"
              class="block text-xs font-medium text-ink-300 uppercase tracking-wider mb-2"
              >Password</label
            >
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="input-field"
              placeholder="請輸入密碼"
            />
          </div>
        </div>

        <div class="pt-6">
          <button
            type="submit"
            :disabled="loading"
            class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? "登入中..." : "進入系統" }}
          </button>
        </div>
      </form>

      <div class="text-center mt-6">
        <router-link
          to="/register"
          class="text-xs text-ink-300 hover:text-earth-900 transition-colors border-b border-transparent hover:border-earth-900 pb-1"
        >
          註冊新帳號
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// 👇 1. 引入我們剛寫好的 API 模組
import { login } from "@/api/login/login";

const router = useRouter();

// 👇 2. 設定 UI 狀態
const errorMsg = ref("");
const loading = ref(false); // 控制按鈕是否鎖住

// 定義表單資料
const form = ref({
  username: "",
  password: "",
});

const handleLogin = async () => {
  // 重置狀態
  errorMsg.value = "";
  loading.value = true;

  try {
    // 👇 3. 呼叫後端 API
    const res = await login(form.value);

    console.log("登入成功:", res.data);

    // 將使用者資訊存入 localStorage (或是之後用 Pinia 管理)
    localStorage.setItem("user", res.data.user);

    // 👇 4. 登入成功跳轉
    // 如果你要去圖表頁改 '/chart'，如果要先選受試者則去 '/testers'
    router.push("/chart");
  } catch (err) {
    // 👇 5. 錯誤處理
    console.error(err);
    // 抓取後端回傳的 message，如果沒有就顯示預設文字
    errorMsg.value =
      err.response?.data?.message || "登入失敗，請檢查帳號密碼或伺服器連線";
  } finally {
    // 無論成功失敗，都解除 Loading 鎖定
    loading.value = false;
  }
};
</script>
