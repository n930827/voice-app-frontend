<template>
  <div class="max-w-3xl mx-auto space-y-16">
    <div class="text-center pb-8">
      <h2 class="text-2xl font-light text-ink-900 tracking-widest">
        受試者管理
      </h2>
      <span
        class="block mt-2 text-[10px] text-ink-300 tracking-[0.2em] uppercase"
        >Tester Management</span
      >
    </div>

    <div class="grid grid-cols-1 gap-16">
      <section class="relative">
        <span
          class="absolute -left-12 top-0 text-4xl text-earth-100 font-serif hidden md:block"
          >01</span
        >

        <h3
          class="text-lg font-normal text-ink-900 mb-8 flex items-center tracking-wide"
        >
          <span class="w-8 h-px bg-earth-300 mr-4"></span>
          基本資料登錄
        </h3>

        <form
          @submit.prevent
          class="grid grid-cols-1 md:grid-cols-2 gap-8 pl-0 md:pl-12"
        >
          <div>
            <label
              class="block text-xs text-ink-300 uppercase tracking-wider mb-2"
              >Name</label
            >
            <input type="text" class="input-field" placeholder="輸入姓名" />
          </div>
          <div>
            <label
              class="block text-xs text-ink-300 uppercase tracking-wider mb-2"
              >Age</label
            >
            <input
              type="number"
              min="0"
              class="input-field"
              placeholder="輸入年齡"
            />
          </div>
          <div class="md:col-span-2 pt-4 flex justify-end">
            <button class="btn-primary px-10">新增資料</button>
          </div>
        </form>
      </section>

      <div class="border-t border-earth-100 w-full"></div>

      <section class="relative">
        <span
          class="absolute -left-12 top-0 text-4xl text-earth-100 font-serif hidden md:block"
          >02</span
        >

        <h3
          class="text-lg font-normal text-ink-900 mb-8 flex items-center tracking-wide"
        >
          <span class="w-8 h-px bg-earth-300 mr-4"></span>
          聲紋模型建立
        </h3>

        <form @submit.prevent class="space-y-8 pl-0 md:pl-12">
          <div>
            <label
              class="block text-xs text-ink-300 uppercase tracking-wider mb-2"
              >Subject ID</label
            >
            <input
              type="text"
              class="input-field"
              placeholder="輸入對應的受試者 ID"
            />
          </div>

          <div>
            <label
              class="block text-xs text-ink-300 uppercase tracking-wider mb-4"
              >Voice Sample (WAV)</label
            >
            <div class="w-full">
              <label
                class="flex flex-col items-center justify-center w-full h-40 border border-dashed border-earth-300 rounded-sm cursor-pointer hover:border-earth-500 hover:bg-earth-50/30 transition-all duration-500"
              >
                <div
                  class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                  <p class="mb-2 text-sm text-ink-500 tracking-widest">
                    點擊或拖曳檔案
                  </p>
                  <p class="text-[10px] text-ink-300 uppercase">
                    WAV format only
                  </p>
                </div>
                <input type="file" class="hidden" accept=".wav" />
              </label>
            </div>
          </div>

          <div class="pt-4 flex justify-end">
            <button
              class="btn-secondary text-ink-500 border-earth-200 hover:text-earth-900 hover:border-earth-900"
            >
              開始分析與建立
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>
