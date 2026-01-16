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

      <form class="mt-12 space-y-8" @submit.prevent="handleLogin">
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
          <button type="submit" class="w-full btn-primary">進入系統</button>
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

const router = useRouter();
// const errorMsg = ref("");

// 定義表單資料
const form = ref({
  username: "",
  password: "",
});

// 👇 這就是你缺少的函式
const handleLogin = () => {
  console.log("Login attempt:", form.value);

  // TODO: 這裡之後要寫 fetch() 去呼叫你的 Python 後端
  // if (success) { ... }

  // 目前先模擬登入成功，直接跳轉到圖表頁
  router.push("/chart");
};
</script>
