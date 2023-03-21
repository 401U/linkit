<script setup lang="ts">
const link = ref('')

async function go() {
  const data = await $fetch('/api/links/new', {
    method: 'POST',
    body: {
      url: link.value,
    },
  })
}
</script>

<template>
  <div class="sm:mt-50 mt-20">
    <div text-5xl font-bold break-wordsn>
      Short Your Links
      With Ease
    </div>
    <div inline-flex my-15 justify-center>
      <input
        id="input"
        v-model="link"
        placeholder="Paste your link here"
        type="text" autocomplete="off"
        px-4 py-2 sm:w-450px w-full
        text-center bg-transparent
        border="~ rounded coolgray/50"
        outline-green
        @keydown.enter="go"
      >
    </div>
  </div>
</template>
