<script setup lang="ts">
import type { Finch } from '@tryfinch/finch-api'
import type { NuxtError } from 'nuxt/app'
import { employerCompanyDataTest, badCompanyDataTest } from '~/utils/testdata'
import { getLocalStorage } from '~/utils/helper';

const testing = ref<boolean>(false)
const notImplemented = ref<boolean>(false)
const { provider } = defineProps<{ provider: string }>()
const employerCompany = ref<any>({})
onMounted(() => {
  testing.value = getLocalStorage('EmployerCompanyTesting') || getLocalStorage('FinchSandboxTestAll')
  console.log('EmployerCompany component mounted')
  if (testing.value) {
    const useBadData = getLocalStorage('FinchSandboxUseBadData')
    employerCompany.value = useBadData ? badCompanyDataTest : employerCompanyDataTest
  } else {
    watchEffect(() => {
      if (provider) {
        console.log('EmployerCompany watcheffect triggered', provider)
        loadEmployerCompany()
      }
    })
  }
})

async function loadEmployerCompany() {
  employerCompany.value = {}
  try {
    const employerCompanyResponse: any = await $fetch('/api/employer/company')
    console.log('employerCompanyResponse: ', employerCompanyResponse)
    notImplemented.value = false
    employerCompany.value = employerCompanyResponse
  } catch (error) {
    const nuxtError = error as NuxtError
    if (nuxtError.statusCode===501) {
      notImplemented.value = true
    } else {
      throw showError(error as NuxtError)
    }
  }
}
</script>
<template>
  <div class="mb-8 text-3xl">
    <h1>Employer Company</h1>
    <h1 v-if="testing">TEST DATA</h1>
    <h1 v-if="notImplemented">NOT IMPLEMENTED</h1>
  </div>

  <UForm
    v-if="employerCompany?.id"
    ref="form"
    :state="employerCompany"
    class="mb-16"
  >
    <UFormGroup
      label="Id"
      name="id"
      class="mb-4"
    >
      <UInput
        v-model="employerCompany.id"
        readonly
      />
    </UFormGroup>

    <UFormGroup
      label="Legal Name"
      name="legal_name"
      class="mb-4"
    >
      <UInput
        v-model="employerCompany.legal_name as string"
        readonly
      />
    </UFormGroup>

    <UFormGroup
      v-for="(value, key) in employerCompany.entity"
      :key="`entity-${key}`"
      label="Entity"
      name="entity"
      class="mb-4"
    >
    <div class="ml4">
      {{ key }}
      <UInput 
        class="ml-4"
        v-model="employerCompany.entity[key] as string"
        readonly
      />
    </div>
    </UFormGroup>

    <UFormGroup
      label="Ein"
      name="ein"
      class="mb-4"
    >
      <UInput
        v-model="employerCompany.ein as string"
        readonly
      />
    </UFormGroup>

    <UFormGroup
      label="Primary Email"
      name="primary_email"
      class="mb-4"
    >
      <UInput
        v-model="employerCompany.primary_email as string"
        readonly
      />
    </UFormGroup>

    <UFormGroup
      v-if="employerCompany.primary_phone_number"
      label="Primary Phone Number"
      name="primary_phone_number"
      class="mb-4"
    >
      <UInput
        v-model="employerCompany.primary_phone_number as string"
        readonly
      />
    </UFormGroup>

    <UFormGroup
      v-for="(department, index) in employerCompany.departments"
      :key="index"
      label="departments"
      name="departments"
      class="mb-4"
    >
      <div
        v-if="department"
        v-for="(value, name, index) in department"
        class="ml-4"
      >
        {{ name }}
        <UInput
          v-if="typeof value === 'string'"
          v-model="department[name] as string"
          readonly
        />
        <UInput
          v-else
          v-model="value.name as string"
          readonly
        />
      </div>
    </UFormGroup>

    <UFormGroup
      v-for="(location, outerIndex) in employerCompany.locations"
      :key="outerIndex"
      label="Locations"
      name="locations"
      class="mb-4"
    >
      <div
        v-if="location"
        v-for="(value, name, index) in location"
        :key="`${name}-${outerIndex}`"
        class="ml-4"
      >
        {{ name }}
        <UInput
          v-model="location[name] as string"
          readonly
        />
      </div>
    </UFormGroup>

    <UFormGroup
      v-for="(account, outerIndex) in employerCompany.accounts"
      :key="outerIndex"
      label="Accounts"
      name="custom_fields"
      class="mb-4"
    >
      <div
        v-if="account"
        v-for="(value, name, index) in account"
        :key="`${name}-${outerIndex}`"
        class="ml-4"
      >
        {{ name }}
        <UInput
          v-model="account[name] as string"
          readonly
        />
      </div>
    </UFormGroup>
  </UForm>
</template>

<style scoped></style>
