<script setup lang="ts">
import { showError } from 'nuxt/app'
import { ref } from 'vue';
import type { NuxtError } from 'nuxt/app'
import type { SusccessResponse } from '~/types';

const emit = defineEmits<{
  (event:'provider-selected', provider: string): void;
}>()
const selected = ref<string>('')
const providers = ['adp_run','bamboo_hr','bamboo_hr_api','gusto','humaans','insperity', 'justworks','namely','paychex_flex', 'paychex_flex_api','paycom','paycom_api','paylocity','paylocity_api','personio','quickbooks','rippling','sage_hr','sapling', 'sequoia_one','square_payroll', 'trinet','ulti_pro','wave','workday', 'zenefits','zenefits_api'];


async function onProviderChange(selection: string) {
  try {
    const  sandboxCreateResponse: SusccessResponse  = await $fetch(`/api/sandbox/create?provider_id=${selection}`);
      if (sandboxCreateResponse.success) {
        emit('provider-selected', selection);
      }
    } catch(error: unknown) {
      throw showError(error as NuxtError);
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