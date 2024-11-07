<script lang="ts"  setup>
import type { NuxtError } from 'nuxt/app'
try{    
const data: any = await $fetch('/api/employer/payment')
} catch (error) {
    console.log('Payment error:', error)
    throw showError(error as NuxtError);
}
</script>   


<template>
    <div>
        <h1 class="text7xl">Payment</h1>
    </div>
</template>