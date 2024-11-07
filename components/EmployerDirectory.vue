<script setup lang="ts">
import type { Finch } from '@tryfinch/finch-api'
import type { NuxtError } from 'nuxt/app'
import { employeeDirectoryTest } from '@/utils/testdata'
const { provider } = defineProps<{
  provider: String
}>()

const testing = ref<boolean>(false)
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
    loadEmployerDirectory();
  }
  })
})
async function loadEmployerDirectory() {
  try {
    const employerDirectoryResponse: Finch.HRIS.Directory.IndividualInDirectory[] = await $fetch('/api/employer/directory')
    console.log('employerDirectoryResponse: ', employerDirectoryResponse);
    employerDirectory.value = employerDirectoryResponse
    // employerDirectory.value = employeeDirectoryTest.individuals as Finch.HRIS.Directory.IndividualInDirectory[]
  } catch(error) {
    throw showError(error as NuxtError);
  }
}

function select(row: any) {
  selected.value.length = 0;
  selected.value.push(row);
  console.log('selected: ', selected.value[0]);
  navigateToEmployee(row.id);
}

async function navigateToEmployee(employeeId: string) {

  await navigateTo({
      path: `/employee/${employeeId}`,
    })
}
</script>

<template>
  <h1 class="mb-8 text-3xl" v-if="testing">TEST DATA</h1>
  <UTable v-model="selected" :ui="tableUI" :rows="employerDirectory" @select="select" />
</template>
