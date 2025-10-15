import { defineStore } from 'pinia'
import { familiesData } from '~/data/families'
import type { Family } from '~/types/Family'

export const useFamilyStore = defineStore('family', () => {
  const families = ref<Family[]>(familiesData)

  const spinningKids = computed(() => {
    return families.value.flatMap(family =>
      family.children.filter(kid => kid.isSpinning).map(kid => kid.name)
    )
  })

  const stopAllKids = () => {
    families.value.forEach(family => {
      family.children.forEach(kid => {
        kid.isSpinning = false
      })
    })
  }

  return { families, spinningKids, stopAllKids }
})
