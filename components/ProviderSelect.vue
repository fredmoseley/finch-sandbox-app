<script setup lang="ts">
const providers: string[] = ['gusto', 'bamboohr', 'justworks','paychex_flex', 'workday']

const selected: Ref<string> = ref('');

watch(selected, async (newSelection: string): void => {
  //Call my endpoint to create the key
  //Trigger a call to load the Company data
  //Company directory
  //Note I do not want to create a new sandbox each ///time is their a heart beat
  //Or do I manually keep track
})
</script>

<template>
<div class="w-40">
  <USelect v-model="selected" :options="providers" 
  class="mb-8 mt-8" 
  placeholder="Select a Provider"
  />
</div>
</template>