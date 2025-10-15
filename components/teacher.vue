<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFamilyStore } from '~/store/useFamilyStore'

const { stopAllKids } = useFamilyStore()
const { spinningKids } = storeToRefs(useFamilyStore())
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
    <button class="mt-2 p-2 bg-red-500 text-white rounded" @click="stopAllKids">
      Stop All Kids
    </button>
  </div>
</template>
