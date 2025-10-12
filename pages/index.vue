<script setup lang="ts">
import { familiesData } from '~/data/families'
import type { Family } from '~/types/Family'

const families = ref<Family[]>(familiesData)

// 1. Pass spinning kids names in family to teacher - done
// 2. Teacher displays spinning kids names - done
// 3. Create button in teacher component to stop all kids from spinning

const spinningKids = computed(() => {
  return families.value.flatMap(family =>
    family.children.filter(kid => kid.isSpinning).map(kid => kid.name)
  )
})
</script>

<template>
  <div class="flex gap-2 p-2">
    <family v-for="family in families" :family="family" />
  </div>
  <div>
    <school :spinningKids="spinningKids" />
  </div>
</template>
