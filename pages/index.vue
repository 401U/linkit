<script setup lang="ts">
const link = ref('')

const router = useRouter()
const go = () => {
  if (link.value)
    router.push(`/api/links/${encodeURIComponent(link.value)}`)
}
</script>

<template>
  <div>
    <div text-5xl font-bold break-words>
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
      <button
        mx-3 text-sm btn
        :disabled="!link"
        @click="go"
      >
        GO
      </button>
    </div>
    <!-- <LinkInput /> -->
  </div>
</template>
