<template>
  <div
    class="min-h-screen flex items-center justify-center bg-paper py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-10 bg-paper">
      <div class="text-center">
        <h2 class="text-3xl font-light text-ink-900 tracking-widest">註冊</h2>
        <p class="mt-4 text-xs text-ink-300 tracking-wider uppercase">
          Create Your Account
        </p>
      </div>

      <form class="mt-12 space-y-8" @submit.prevent="handleRegister">
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
              placeholder="設定您的帳號"
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
              placeholder="設定您的密碼"
            />
          </div>
        </div>

        <div class="pt-6">
          <button type="submit" class="w-full btn-primary">建立帳號</button>
        </div>
      </form>

      <div class="text-center mt-6">
        <p class="text-xs text-ink-300">
          已有帳號？
          <router-link
            to="/login"
            class="ml-1 text-ink-500 hover:text-earth-900 transition-colors border-b border-transparent hover:border-earth-900 pb-0.5"
          >
            直接登入
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const form = reactive({
  username: "",
  password: "",
});

const handleRegister = () => {
  console.log("Register:", form);
  router.push("/login");
};
</script>
