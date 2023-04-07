<script setup lang="ts">
useHead({
  title: 'Link it!',
  link: [
    {
      rel: 'icon', type: 'image/svg', href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <main
    bg-white text-black
    dark="bg-#16161a text-white"
    min-h-screen transition-500
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
