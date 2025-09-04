<script setup lang="ts">
import type { HungryKid, Child } from '~/types/Child'

const props = defineProps<{
  kids: Child[]
}>()

const kids = ref<Child[]>([...props.kids])
const hungryKids = ref<HungryKid[]>([])

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
  <div class="bg-blue-400 p-4 rounded">
    <h4 class="font-bold">Parent Component</h4>
    <button
      class="mr-2"
      v-for="kid in kids"
      :key="`button_${kid.id}`"
      @click="kid.isSpinning = !kid.isSpinning"
    >
      {{ kid.isSpinning ? 'Stop Spinning' : 'Spin' }} {{ kid.name }}
    </button>
    <div class="my-4" v-if="cookingFor">
      <h4>{{ cookingFor }}</h4>
    </div>
    <div class="flex gap-4 mt-24">
      <child
        v-for="kid in kids"
        :id="kid.id"
        :name="kid.name"
        :is-spinning="kid.isSpinning"
        :is-hungry="kid.isHungry"
        :skin-color="kid.skinColor || undefined"
      />
    </div>
  </div>
</template>
