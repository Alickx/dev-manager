<template>
  <div class="flex flex-col gap-1">
    <div>
      <img :src="cover" width="100%" />
    </div>
    <span>{{ title }}</span>
    <p>{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cover: String,
  title: String,
  description: String,
});
</script>

<style scoped></style>
