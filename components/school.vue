<script setup lang="ts">
defineProps<{ spinningKids: string[] }>()
defineEmits(['stopAllKids'])

const classes = ref(['Math', 'Science', 'History'])
</script>

<template>
  <div class="p-4 border bg-yellow-300 rounded mx-2">
    <h2>This is our school component</h2>
    <div class="flex gap-2">
      <div
        v-for="className in classes"
        :key="className"
        class="p-2 border bg-gray-300 rounded w-80"
      >
        <class
          :className="className"
          :spinningKids="$props.spinningKids"
          @stopAllKids="$emit('stopAllKids')"
        />
      </div>
    </div>
  </div>
</template>
