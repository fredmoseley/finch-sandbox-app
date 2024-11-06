<script setup lang="ts">
import { showError } from 'nuxt/app'
import { ref } from 'vue';

interface ApiResnsponse {
  success: boolean
}
const emit = defineEmits<{
  (event:'provider-selected', provider: string): void;
}>()
const selected = ref<string>('')
const providers = ['gusto', 'bamboohr', 'justworks','paychex_flex', 'workday']


async function onProviderChange(selection: string) {
  try {
  const  response: ApiResnsponse  = await $fetch(`/api/sandbox/create?provider_id=${selection}`);
    if (response.success) {
      emit('provider-selected', selection);
    }
  } catch(error) {
    throw showError(error);
  }
}
</script>

<template>
<div class="w-40">
  <USelect v-model="selected" :options="providers" 
  class="mb-8 mt-8" 
  placeholder="Select a Provider"
  @change="onProviderChange"
  />
</div>
</template>