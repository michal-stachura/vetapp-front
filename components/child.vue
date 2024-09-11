<script setup lang="ts">
import type { Child, HungryKid } from '~/types/Child'

const props = withDefaults(defineProps<Child>(), {
  skinColor: 'bg-orange-800'
})

const emit = defineEmits(['hungry'])
const acceptedMeals = ['spinach', 'broccoli', 'tomato soup']

const computedClass = computed(() => {
  const animateSpin = props.isSpinning ? 'animate-spin' : ''

  return `rounded p-4 text-white text-center ${props.skinColor} ${animateSpin}`
})

const handleHungryClick = () => {
  const randomMeal =
    acceptedMeals[Math.floor(Math.random() * acceptedMeals.length)]

  const hungryKid: HungryKid = { name: props.name, meal: randomMeal }
  emit('hungry', hungryKid)
}
</script>

<template>
  <div :class="computedClass">
    <h5>{{ $props.name }}</h5>
    <button @click="handleHungryClick">I'm hungry</button>
  </div>
</template>
