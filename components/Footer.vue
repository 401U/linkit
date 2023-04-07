<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <div
    text="sm gray4"
    m-5
    flex="~ col"
    justify-center
    gap-0
  >
    <div>
      Powered by <a :href="config.sourcecode">Linkit</a>
    </div>
  </div>
</template>
