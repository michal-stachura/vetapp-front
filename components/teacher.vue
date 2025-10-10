<script setup lang="ts">
defineProps<{
  spinningKids: string[]
}>()
</script>
<template>
  <div class="bg-blue-400 p-4 rounded">
    <h4 class="font-bold">Teacher Component</h4>
    <p>Spinning Kids:</p>
    <ul>
      <li v-for="(kid, idx) in spinningKids" :key="`${idx}-${kid}`">
        {{ kid }}
      </li>
    </ul>
  </div>
</template>
