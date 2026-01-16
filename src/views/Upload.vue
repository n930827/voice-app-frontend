<template>
  <div class="space-y-12">
    <div class="flex justify-between items-end border-b border-earth-200 pb-6">
      <h2 class="text-2xl font-light text-ink-900">檔案中心</h2>
      <span class="text-xs text-ink-300 font-mono">FILE REPOSITORY</span>
    </div>

    <div class="py-8">
      <form class="space-y-8 max-w-2xl mx-auto">
        <div>
          <label class="block text-xs text-ink-300 uppercase mb-2"
            >Assign to Subject</label
          >
          <select class="input-field cursor-pointer">
            <option>-- Select Subject --</option>
            <option>Tester A</option>
          </select>
        </div>

        <div
          class="border border-dashed border-earth-300 p-12 text-center hover:bg-earth-50/30 transition duration-500 ease-out"
        >
          <div class="flex flex-col items-center justify-center space-y-4">
            <svg
              class="w-8 h-8 text-earth-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <label class="cursor-pointer">
              <span
                class="text-sm text-ink-500 hover:text-earth-900 border-b border-ink-300 pb-0.5 transition-colors"
                >Select a file</span
              >
              <input type="file" class="sr-only" />
            </label>
            <p class="text-[10px] text-ink-300 uppercase tracking-widest">
              WAV up to 10MB
            </p>
          </div>
        </div>

        <div class="text-center">
          <button class="btn-primary w-full md:w-auto md:px-12">UPLOAD</button>
        </div>
      </form>
    </div>

    <div class="pt-8">
      <h3
        class="text-sm font-normal text-ink-500 mb-6 uppercase tracking-widest"
      >
        Recent Uploads
      </h3>

      <div class="border-t border-earth-100">
        <ul class="divide-y divide-earth-100">
          <li
            v-for="i in 3"
            :key="i"
            class="py-6 flex items-center justify-between group hover:bg-white/50 transition-colors"
          >
            <div class="flex items-start space-x-6">
              <span class="text-xs text-earth-400 mt-1 font-mono"
                >0{{ i }}</span
              >
              <div>
                <p class="text-sm font-medium text-ink-900 font-mono">
                  2023_10_0{{ i }}_Dataset
                </p>
                <p class="text-xs text-ink-300 mt-1 font-light">
                  audio_sample_{{ i }}.wav
                </p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-[10px] text-ink-300 uppercase hidden sm:block"
                >Just now</span
              >
              <button
                class="text-earth-400 hover:text-earth-900 transition-colors"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
