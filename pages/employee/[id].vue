<script setup lang="ts">
const employeeId = useRoute().params.id as string
definePageMeta({
    layout: 'employee',
});
console.log('employeeId: ', employeeId)
</script>
<template>
  <div>
    <EmployeePersonalData :employeeId="employeeId" />
    <EmployeeEmployment :employeeId="employeeId"/>
  </div>
</template>

<style scoped></style>
