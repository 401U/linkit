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
  <div mt-50>
    <div text-5xl font-bold break-words bg-red sm:bg-green>
      Short Your Links
      With Ease
    </div>
    <div inline-flex my-15 justify-center>
      <input
        id="input"
        v-model="link"
        placeholder="Paste your link here"
        type="text" autocomplete="off"
        px-4 py-2 w-450px
        text-center bg-transparent
        border="~ rounded coolgray/50"
        outline-green
        @keydown.enter="go"
      >
    </div>
  </div>
</template>
