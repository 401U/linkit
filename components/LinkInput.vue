<script setup lang="ts">
const link = ref('')

const router = useRouter()
const go = () => {
  if (link.value)
    router.push(`/${encodeURIComponent(link.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="link"
      placeholder="Paste your url here"
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <div>
      <button
        m-3 text-sm btn
        :disabled="!link"
        @click="go"
      >
        GO
      </button>
    </div>
  </div>
</template>
