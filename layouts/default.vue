import { TopNav } from '~~/.nuxt/components';

<template>
  <main class="py-2 px-10 text-center flex flex-col min-h-full gap-1">
    <TopNav />
    <slot />
    <div flex-grow-1 />
    <Footer />
  </main>
</template>
