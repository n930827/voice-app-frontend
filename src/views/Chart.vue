<template>
  <div class="space-y-12">
    <div class="flex justify-between items-end border-b border-earth-200 pb-6">
      <h2 class="text-2xl font-light text-ink-900">數據分析</h2>
      <span class="text-xs text-ink-300 font-mono">DATA VISUALIZATION</span>
    </div>

    <div class="py-4">
      <form class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
        <div>
          <label class="block text-xs text-ink-300 uppercase mb-2"
            >Subject</label
          >
          <select class="input-field cursor-pointer">
            <option>-- Select --</option>
            <option>Tester A</option>
          </select>
        </div>

        <div>
          <label class="block text-xs text-ink-300 uppercase mb-2"
            >Start Time</label
          >
          <select class="input-field cursor-pointer">
            <option>2023-10-01 10:00</option>
          </select>
        </div>

        <div class="md:col-span-1 flex justify-start md:justify-end">
          <button class="btn-secondary px-10">Draw</button>
        </div>
      </form>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8">
      <div
        v-for="(value, key) in stats"
        :key="key"
        class="text-center md:text-left"
      >
        <p class="text-[10px] text-ink-300 uppercase tracking-widest mb-2">
          {{ key }}
        </p>
        <p class="text-3xl font-light text-earth-900 font-mono">{{ value }}</p>
      </div>
    </div>

    <div
      class="w-full h-[500px] border border-earth-100 bg-surface flex items-center justify-center relative"
    >
      <div
        class="absolute top-0 left-0 w-2 h-2 border-t border-l border-earth-300"
      ></div>
      <div
        class="absolute top-0 right-0 w-2 h-2 border-t border-r border-earth-300"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-earth-300"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-earth-300"
      ></div>

      <p class="text-ink-300 font-light tracking-widest text-sm">CHART AREA</p>
    </div>
  </div>
</template>
