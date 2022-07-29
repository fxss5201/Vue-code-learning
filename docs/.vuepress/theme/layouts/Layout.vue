<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

const isDarkMode = ref(false)
let observer
onMounted(() => {
  const html = document.querySelector("html")
  isDarkMode.value = html.classList.contains("dark")
  // watch theme change
  observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains("dark")
  })
  observer.observe(html, {
    attributeFilter: ["class"],
    attributes: true,
  })
})
onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <CommentService :darkmode="isDarkMode" />
    </template>
  </ParentLayout>
</template>