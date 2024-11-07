<script setup lang="ts">
const currentProvider = ref<string>('');
const onProviderSelected = (provider: string) => {
    currentProvider.value = provider;
}

</script>

<template>
    <ProviderSelect @provider-selected="onProviderSelected"/>
    <EmployerCompany :provider="currentProvider" />
    <EmployerDirectory :provider="currentProvider"  />
</template>