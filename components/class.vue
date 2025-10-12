<script setup lang="ts">
defineProps<{ className: string; spinningKids: string[] }>()
</script>

<template>
  <div>
    <h3>Class: {{ $props.className }}</h3>
    <teacher class="bg-green-400" :spinningKids="spinningKids" />
  </div>
</template>
