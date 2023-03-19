import { TopNav } from '~~/.nuxt/components';

<template>
  <TopNav />
  <main class="py-20 px-10 text-center">
    <slot />
    <Footer />
    <div class="mt-5 mx-auto text-center text-sm">
      [Default Layout]
    </div>
  </main>
</template>
