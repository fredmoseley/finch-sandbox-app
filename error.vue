<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
const onClearError= () => clearError({redirect:'/'});
</script>
<template>
  <div class="mt-7 mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold"> {{ error?.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7 text-3xl">{{ error?.statusMessage }}</p>
    <p class="mt-7 text-3xl">{{ error?.data }}</p>
    <UButton label="Go Home" class="my-7" @click="onClearError"/>
  </div>
</template>

<style scoped></style>
