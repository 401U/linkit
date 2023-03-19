import { NuxtLink } from '~~/.nuxt/components';

<template>
  <div inline-flex py-5 p-10 text-2xl h-10 gap-3 w-full>
    <NuxtLink class="i-carbon-link text-#34d399" to="/" />
    <span>Linkit</span>
    <div flex-grow-1 />
    <DarkToggle />
    <NuxtLink i-carbon-user title="Login" to="/login" />
  </div>
</template>
