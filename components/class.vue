<script setup lang="ts">
defineProps<{ className: string }>()
</script>

<template>
  <div>
    <h3>Class: {{ $props.className }}</h3>
    <teacher class="bg-green-400" />
  </div>
</template>
