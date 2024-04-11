<template>
  <main class="py-2 px-10 flex flex-col min-h-screen gap-1">
    <TopNav />
    <slot />
    <div flex-grow-1 />
    <Footer />
  </main>
</template>
