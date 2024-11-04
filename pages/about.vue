<script setup lang="ts">
useHead({
  title: 'Nuxt Finch Sandbox App | About',
  meta: [{ name: 'description', content: 'Learn how to use the Nuxt Finch Sandbox App' }],
})
</script>
<template>
  <div class="text-black card">
    <h1 class="text-2xl mb-1">About:</h1>
    <p class="mb-4">
      The Nuxt Finch Sandbox App 
    </p>
    <h2 class="text-2xl">How it works:</h2>
    <ol class="list-decimal list-inside mb-4">
      <li>Select a provider.  This will trigger a call to the API</li>
      <li>Select an Employee</li>
    </ol>
  </div>
</template>

<style scoped></style>
