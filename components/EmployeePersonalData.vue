<script setup lang="ts">
import type { Finch } from '@tryfinch/finch-api'
import type { NuxtError } from 'nuxt/app'
import { employeePersonalDataTest } from '~/utils/testdata';

const { employeeId } = defineProps<{ employeeId: string }>()
const employeePersonalData = ref<Finch.HRIS.Individual>();
onMounted(()=>{
  console.log('EmployerPersonalData component mounted');
  watchEffect(() => {
  if (employeeId) {
    console.log('EmployerPersonalData watcheffect triggered', employeeId); 
    loadEmployeeData(employeeId)
  }
  })
})

async function loadEmployeeData(employeeId: string) {
  try {
    const employeePersonalDataResponse: Finch.HRIS.IndividualResponse[] = await $fetch('/api/employer/individual', {
      method: 'POST',
      body: {
        requests: [
          {
          individual_id: employeeId
        }]
      }
    })
    console.log('employeePersonalDataResponse: ', employeePersonalDataResponse);
    // if (employeePersonalDataTest) {
      // employeePersonalData.value = employeePersonalDataTest.responses[0].body as Finch.HRIS.Individual
    // } else {
    employeePersonalData.value = employeePersonalDataResponse[0].body
    // }
    
  } catch(error) {
    throw showError(error as NuxtError);
  }
}
</script>
<template>
  <div class="mb-8 text-5xl" >
    <h1>Employee Personal Data</h1>
  </div>
  <UForm v-if="employeePersonalData" ref="form" :state="employeePersonalData" class="mb-16">
    <UFormGroup label="Id" name="id" class="mb-4">
      <UInput v-model="employeePersonalData.id"  readonly/>
    </UFormGroup>
    <UFormGroup label="First Name" name="first_name" class="mb-4">
      <UInput v-model="employeePersonalData.first_name as string" readonly />
    </UFormGroup>
    <UFormGroup label="Middle Name" name="middle_name" class="mb-4">
      <UInput v-model="employeePersonalData.middle_name as string" readonly/>
    </UFormGroup>
    <UFormGroup label="Prefered Name" name="preferred_name" class="mb-4">
      <UInput v-model="employeePersonalData.preferred_name as string" readonly/>
    </UFormGroup>
    <UFormGroup label="Dob" name="dob" class="mb-4">
      <UInput v-model="employeePersonalData.dob as string" readonly/>
    </UFormGroup>
    <UFormGroup v-for="email in employeePersonalData.emails" :key="email.data" label="Emails" name="emails" class="mb-4">
    <div v-if="email" class="ml-4">
      <UInput v-model="email.data as string" readonly/>
      <UInput v-model="email.type as string" readonly/>
    </div>
    </UFormGroup>
    <UFormGroup v-for="(phone_number, index) in employeePersonalData.phone_numbers" :key="index" label="Phone Numbers" name="phone_numbers" class="mb-4">
      <div v-if="phone_number" class="ml-4">
        <UInput v-model="phone_number.data  as string" readonly/>
        <UInput v-model="phone_number.type  as string" readonly/>
      </div>
  </UFormGroup>
    <UFormGroup label="Gender" name="gender" class="mb-4">
      <UInput v-model="employeePersonalData.gender as string" readonly/>
    </UFormGroup>
    <UFormGroup label="Ethnicity" name="ethnicity" class="mb-4">
      <UInput v-model="employeePersonalData.ethnicity as string" readonly/>
    </UFormGroup>
  </UForm>
</template>

<style scoped></style>
