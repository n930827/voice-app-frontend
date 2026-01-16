<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Layout from "./layouts/Layout.vue";

const route = useRoute();

// 判斷目前的路由需不需要 Layout
// 預設 (Default) 是使用 MainLayout
// 如果路由 meta.layout === 'empty'，就回傳 'div' (不使用 layout)
const layout = computed(() => {
  return route.meta.layout === "empty" ? "div" : Layout;
});
</script>
