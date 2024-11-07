<script setup lang="ts">
const employeeId = useRoute().params.id as string
console.log('employeeId: ', employeeId)
</script>
<template>
  <div>
    <EmployeePersonalData :employeeId="employeeId" />
    <EmployeeEmployment :employeeId="employeeId"/>
  </div>
</template>

<style scoped></style>
