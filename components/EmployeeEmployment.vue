<script setup lang="ts">
 import type { Finch } from '@tryfinch/finch-api'
 import type { NuxtError } from 'nuxt/app'
 import { employeeEmploymentDataTest } from '~/utils/testdata'  

 const testing = ref<boolean>(false)
 const { employeeId } = defineProps<{ employeeId: string }>()
 const employeeEmploymentData = ref<any>({});

 onMounted(()=>{
  console.log('EmployerEmploymentData component mounted');
  watchEffect(() => {
  if (employeeId) {
    console.log('EmployerEmploymentData watcheffect triggered', employeeId); 
    loadEmploymentData(employeeId)
  }
  })
})

async function loadEmploymentData(employeeId: string) {
  employeeEmploymentData.value = {}
  try {
    const employeeEmploymentDataResponse: Finch.HRIS.IndividualResponse[] = await $fetch('/api/employer/employment', {
      method: 'POST',
      body: {
        requests: [
          {
          individual_id: employeeId
        }]
      }
    })
    console.log('employeeEmploymentDataResponse: ', employeeEmploymentDataResponse);
   
    if (employeeEmploymentDataResponse[0].code === 200) {
      employeeEmploymentData.value = employeeEmploymentDataResponse[0].body || {}
    } else {
      employeeEmploymentData.value = employeeEmploymentDataTest.responses[0].body
      testing.value= true
    }
  } catch(error) {
    throw showError(error as NuxtError);
  }
}
</script>
<template>
  <div class="mb-8 text-3xl">
    <h1>Employee Employment</h1>
    <h1 v-if="testing">TEST DATA</h1>
  </div>

  <UForm v-if="employeeEmploymentData?.id" ref="form" :state="employeeEmploymentData" class="mb-16">
    <UFormGroup label="Id" name="id" class="mb-4">
      <UInput v-model="employeeEmploymentData.id"  />
    </UFormGroup>

    <UFormGroup label="First Name" name="first_name" class="mb-4">
      <UInput v-model="employeeEmploymentData.first_name as string"  />
    </UFormGroup>

    <UFormGroup label="Middle Name" name="middle_name" class="mb-4">
      <UInput v-model="employeeEmploymentData.middle_name as string" />
    </UFormGroup>

    <UFormGroup label="Last Name" name="last_name" class="mb-4">
      <UInput v-model="employeeEmploymentData.last_name as string" />
    </UFormGroup>

    <UFormGroup v-if="employeeEmploymentData.title" label="Title" name="title" class="mb-4">
      <UInput v-model="employeeEmploymentData.title as string" />
    </UFormGroup>

    <UFormGroup v-if="employeeEmploymentData.manager" label="Manager Id" name="manager_id" class="mb-4">
      <UInput v-model="employeeEmploymentData.manager.id" />
    </UFormGroup>

    <UFormGroup v-for="(employmentValue, employmentKey, employmentIndex) in employeeEmploymentData.employment" :key="employmentIndex" :label="`Employment - ${employmentKey}`" name="employmentKey" class="mb-4">
      <UInput v-model="employeeEmploymentData.employment[employmentKey] as string" />
    </UFormGroup>

    <UFormGroup label="Department" name="department" class="mb-4">
      <UInput v-model="employeeEmploymentData.department.name as string" />
    </UFormGroup>
    
    <UFormGroup label="Start Date" name="start_date" class="mb-4">
      <UInput v-model="employeeEmploymentData.start_date as string" />
    </UFormGroup>

    <UFormGroup label="End Date" name="end_date" class="mb-4">
      <UInput v-model="employeeEmploymentData.end_date as string" />
    </UFormGroup>

      <UCheckbox v-model="employeeEmploymentData.is_active" name="is_active" label='Is Active?' />

    <UFormGroup label="Class Code" name="class_code" class="mb-4">
      <UInput v-model="employeeEmploymentData.class_code as string" />
    </UFormGroup>

    <UFormGroup v-for="(locationValue, locationKey, locationIndex) in employeeEmploymentData.location" :key="locationIndex" :label="`Location - ${locationKey}`" name="locationKey" class="mb-4">
      <UInput v-model="employeeEmploymentData.location[locationKey] as string" />
    </UFormGroup>

    <UFormGroup v-for="(incomeValue, incomeKey, incomeIndex) in employeeEmploymentData.income" :key="incomeIndex" :label="`Income - ${incomeKey}`" name="incomeKey" class="mb-4">
      <UInput v-model="employeeEmploymentData.income[incomeKey] as string" />
    </UFormGroup>

  <UFormGroup v-for="(income_history, index) in employeeEmploymentData.income_history" :key="index" label="Income History" name="income_history" class="mb-4">
    <div v-if="income_history" v-for="(value, name ,index) in income_history" class="ml-4">
        {{ name }}
        <UInput v-model="income_history[name]  as string" />
      </div>
  </UFormGroup>

  <UFormGroup v-for="(custom_field, index) in employeeEmploymentData.custom_fields" :key="index" label="Custom Fields" name="custom_fields" class="mb-4">
    <div v-if="custom_field" v-for="(value, name ,index) in custom_field" class="ml-4">
        {{ name }}
        <UInput v-model="custom_field[name]  as string" />
      </div>
  </UFormGroup>
  </UForm>
    
    </template>
    
    <style scoped></style>
    