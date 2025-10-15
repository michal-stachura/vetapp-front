<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFamilyStore } from '~/store/useFamilyStore'

// Move this complex solution into Pinia storage!!!
const { families } = storeToRefs(useFamilyStore())
</script>

<template>
  <div class="flex gap-2 p-2">
    <family v-for="family in families" :family="family" />
  </div>
  <div>
    <school />
  </div>
</template>
