<script setup lang="ts">
import { familiesData } from '~/data/families'
import type { Family } from '~/types/Family'

const families = ref<Family[]>(familiesData)

// 1. Pass spinning kids names in family to teacher
const spinningKids = computed(() => {
  return families.value.flatMap(family =>
    family.children.filter(kid => kid.isSpinning).map(kid => kid.name)
  )
})

// 2. Teacher displays spinning kids names
// 3. Create button in teacher component to stop all kids from spinning
</script>

<template>
  <div class="flex gap-2 p-2">
    <family v-for="family in families" :family="family" />
    <teacher class="bg-green-400" :spinningKids="spinningKids" />
  </div>
</template>
