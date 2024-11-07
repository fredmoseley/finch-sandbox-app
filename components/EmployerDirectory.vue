<script setup lang="ts">
import type { Finch } from '@tryfinch/finch-api'
import type { NuxtError } from 'nuxt/app'

const { provider } = defineProps<{
  provider: String
}>()

const selected = ref<number[]>([]);
const employerDirectory = ref<Finch.HRIS.Directory.IndividualInDirectory[]>([]);
// hide the checkbox column
const tableUI = {
  checkbox: { padding: 'hidden' }
}

onMounted(()=>{
  console.log('EmployerDirectory component mounted');
  watchEffect(() => {
  if (provider) {
    console.log('EmployerDirectory watcheffect triggered', provider);
    loadData();
  }
  })
})
async function loadData() {
  try {
    const employerDirectoryResponse: Finch.HRIS.Directory.IndividualInDirectory[] = await $fetch('api/employer/directory')
    console.log('employerDirectoryResponse: ', employerDirectoryResponse);
    employerDirectory.value = employerDirectoryResponse
    
  } catch(error) {
    throw showError(error as NuxtError);
  }
}

function select(row: number) {
  selected.value.length = 0;
  selected.value.push(row);
  console.log('selected: ', selected.value);
  // this should trigger a route change to employee details page
  //normally this would be employee/id
}


</script>

<template>
  <UTable v-model="selected" :ui="tableUI" :rows="employerDirectory" @select="select" />
</template>
