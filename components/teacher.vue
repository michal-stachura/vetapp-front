<script setup lang="ts">
defineProps<{
  spinningKids: string[]
}>()
defineEmits(['stopAllKids'])
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
    <button
      class="mt-2 p-2 bg-red-500 text-white rounded"
      @click="$emit('stopAllKids')"
    >
      Stop All Kids
    </button>
  </div>
</template>
