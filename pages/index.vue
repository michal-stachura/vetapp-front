<script setup lang="ts">
import type { Child } from '~/types/Child'

const p1_kids: Child[] = [
  {
    id: 'p1_kate',
    name: 'Kate',
    isSpinning: false,
    isHungry: false
  },
  {
    id: 'p1_bart',
    name: 'Bart',
    isSpinning: false,
    isHungry: false
  },
  {
    id: 'p1_john',
    name: 'John',
    isSpinning: false,
    isHungry: false
  }
]
const p2_kids: Child[] = [
  {
    id: 'p2_tom',
    name: 'Tom',
    isSpinning: false,
    isHungry: false,
    skinColor: 'bg-green-800'
  },
  {
    id: 'p2_chris',
    name: 'Chris',
    isSpinning: false,
    isHungry: false,
    skinColor: 'bg-green-800'
  }
]
</script>

<template>
  <div class="flex gap-2 p-2">
    <parent :kids="p1_kids" />
    <parent :kids="p2_kids" />
  </div>
</template>
