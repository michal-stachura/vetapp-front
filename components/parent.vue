<script setup lang="ts">
import type { HungryKid } from '~/types/Child'

const childOneSpin = ref(false)
const childTwoSpin = ref(false)
const hungryKids = ref<HungryKid[]>([])

const childOneButtonText = computed(() => {
  return childOneSpin.value ? 'Stop Spinning Child One' : 'Spin Child One'
})
const childTwoButtonText = computed(() => {
  return childTwoSpin.value ? 'Stop Spinning Child Two' : 'Spin Child Two'
})

const cookingFor = computed(() => {
  switch (hungryKids.value.length) {
    case 0:
      return false
    case 1:
      return `Cooking ${hungryKids.value[0].meal} for ${hungryKids.value[0].name}`
    default:
      const meals = hungryKids.value.map((kid, index) => {
        if (index === hungryKids.value.length - 1) {
          return ` and ${kid.meal} for ${kid.name}`
        } else {
          return `${kid.meal} for ${kid.name}`
        }
      })
      return `Cooking ${meals.join(' ')}`
  }
})

const toggleCooking = (hungryKid: HungryKid) => {
  const index = hungryKids.value.map(item => item.name).indexOf(hungryKid.name)
  if (index === -1) {
    hungryKids.value.push(hungryKid)
  }
  setTimeout(() => {
    const index = hungryKids.value
      .map(item => item.name)
      .indexOf(hungryKid.name)
    hungryKids.value.splice(index, 1)
  }, 4000)
}
</script>

<template>
  <div class="bg-blue-400 m-8 p-4 rounded">
    <h4 class="font-bold">Parent Component</h4>
    <button class="mr-2" @click="childOneSpin = !childOneSpin">
      {{ childOneButtonText }}
    </button>
    <button @click="childTwoSpin = !childTwoSpin">
      {{ childTwoButtonText }}
    </button>
    <div class="my-4" v-if="cookingFor">
      <h4>{{ cookingFor }}</h4>
    </div>
    <div class="flex gap-4 mt-24">
      <child name="Kate" :is-spinning="childOneSpin" @hungry="toggleCooking" />
      <child name="Bart" @hungry="toggleCooking" />
      <child
        name="John"
        skin-color="bg-blue-800"
        :is-spinning="childTwoSpin"
        @hungry="toggleCooking"
      />
    </div>
  </div>
</template>
