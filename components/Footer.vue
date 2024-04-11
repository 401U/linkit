<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <div
    text-sm
    op50
    m-5
    flex="~ col"
    justify-center
    gap-0
    text-center
  >
    <div>
      Powered by  <a :href="config.sourcecode"><i i-carbon-logo-github />Linkit</a>
    </div>
  </div>
</template>
