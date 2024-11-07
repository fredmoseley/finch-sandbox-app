<script setup lang="ts">
import type { Finch } from '@tryfinch/finch-api'
 import type { NuxtError } from 'nuxt/app'
 import { employerCompanyDataTest } from '~/utils/testdata'

const testing = ref<boolean>(true)
const { provider } = defineProps<{ provider: string }>()
const employerCompany = ref<any>({});
onMounted(()=>{
  console.log('EmployerCompany component mounted');
  watchEffect(() => {
  if (provider || testing.value) {
    console.log('EmployerCompany watcheffect triggered', provider);
    loadEmployerCompany();
  }
  })
})

async function loadEmployerCompany() {
    try {
        // const employerCompanyResponse: any = await $fetch('/api/employer/company')
        // console.log('employerComanyResponse: ', employerComanyResponse);
        // if (employerCompanyResponse) {
        //     employerCompany.value
        // } else {
            employerCompany.value = employerCompanyDataTest
            testing.value
             console.log('employerCompanyXXXX: ', employerCompany.value.id);
        // }
    } catch(error) {
        throw showError(error as NuxtError);
    }
}
</script>
<template>
    <div class="mb-8 text-3xl">
      <h1>Employer Company</h1>
      <h1 v-if="testing">TEST DATA</h1>
    </div>
  
    <UForm v-if="employerCompany?.id" ref="form" :state="employerCompany" class="mb-16">
      <UFormGroup label="Id" name="id" class="mb-4">
        <UInput v-model="employerCompany.id"  readonly/>
      </UFormGroup>
  
      <UFormGroup label="Legal Name" name="legal_name" class="mb-4">
        <UInput v-model="employerCompany.legal_name as string" readonly />
      </UFormGroup>
  
      <UFormGroup v-for="(value, key) in employerCompany.entity" :key="`entity-${key}`" label="Entity" name="entity" class="mb-4">
          {{ key }}
          <UInput v-model="employerCompany.entity[key]  as string" readonly/>
        </UFormGroup>
    
      <UFormGroup label="Ein" name="ein" class="mb-4">
        <UInput v-model="employerCompany.ein as string" readonly/>
      </UFormGroup>
  
      <UFormGroup label="Primary Email" name="primary_email" class="mb-4">
        <UInput v-model="employerCompany.primary_email as string" readonly/>
      </UFormGroup>
  
      <UFormGroup v-if="employerCompany.primary_phone_number" label="Primary Phone Number" name="primary_phone_number" class="mb-4">
        <UInput v-model="employerCompany.primary_phone_number as string" readonly/>
      </UFormGroup>
  
      <UFormGroup v-for="(department, index) in employerCompany.departments" :key="index" label="departments" name="departments" class="mb-4">
      <div v-if="department" v-for="(value, name ,index) in department" class="ml-4">
        {{ name }}
        <UInput v-if="typeof value === 'string'" v-model="department[name]  as string" readonly/>
          <UInput v-else v-model="value.name  as string" readonly/>
        </div>
    </UFormGroup>

    <UFormGroup v-for="(location, outerIndex) in employerCompany.locations" :key="outerIndex" label="Locations" name="locations" class="mb-4">
    <div v-if="location" v-for="(value, name ,index) in location" :key= "`${name}-${outerIndex}`" class="ml-4">
         {{ name }}
        <UInput v-model="location[name]  as string" readonly/>
      </div>
    </UFormGroup>
    
    <UFormGroup v-for="(account, outerIndex) in employerCompany.accounts" :key="outerIndex" label="Accounts" name="custom_fields" class="mb-4">
      <div v-if="account" v-for="(value, name ,index) in account" :key="`${name}-${outerIndex}`" class="ml-4">
          {{ name }}
          <UInput v-model="account[name]  as string" readonly/>
        </div>
    </UFormGroup>
    </UForm>
      
      </template>

<style scoped></style>
