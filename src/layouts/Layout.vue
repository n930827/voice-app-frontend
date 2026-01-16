<template>
  <div class="min-h-screen flex flex-col md:flex-row bg-paper">
    <aside
      class="w-full md:w-72 md:min-h-screen md:fixed z-20 border-r border-earth-100/50 bg-paper/80 backdrop-blur-sm"
    >
      <div class="p-10 flex items-center justify-between md:block">
        <h1 class="text-xl font-light text-ink-900 tracking-[0.2em] uppercase">
          Voice<span class="font-bold">App</span>
        </h1>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden text-ink-500 focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <nav
        :class="{ hidden: !isMenuOpen, block: isMenuOpen }"
        class="md:block px-8 pb-8 md:pb-0 space-y-6 mt-4"
      >
        <router-link to="/chart" class="nav-item" active-class="active">
          <span class="text-xs mr-3 opacity-50">01</span> 圖表分析
        </router-link>

        <router-link to="/upload" class="nav-item" active-class="active">
          <span class="text-xs mr-3 opacity-50">02</span> 檔案上傳
        </router-link>

        <router-link to="/add-tester" class="nav-item" active-class="active">
          <span class="text-xs mr-3 opacity-50">03</span> 受試者管理
        </router-link>

        <div class="pt-12 mt-12 border-t border-earth-200 w-12">
          <div class="text-xs text-ink-300 mb-4 tracking-wider">User123</div>
          <router-link
            to="/login"
            class="text-sm text-ink-500 hover:text-earth-900 transition-colors"
          >
            登出
          </router-link>
        </div>
      </nav>
    </aside>

    <main
      class="flex-1 md:ml-72 p-8 md:p-16 lg:p-24 transition-all duration-500"
    >
      <div class="max-w-4xl mx-auto fade-in">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
/* 選單項目樣式：極簡文字，沒有背景色塊 */
.nav-item {
  @apply flex items-center text-sm font-medium text-ink-300 transition-all duration-500 hover:text-ink-900 hover:pl-2;

  &.active {
    @apply text-ink-900;
    /* 選中時，左邊加一個極小的點，而非整塊變色 */
    position: relative;
    &::before {
      content: "";
      @apply absolute -left-4 w-1 h-1 bg-ink-900 rounded-full;
    }
  }
}

/* 簡單的淡入動畫 */
.fade-in {
  animation: fadeIn 0.8s ease-out forwards;
  opacity: 0;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
