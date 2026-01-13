<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
<template>
  <button class="base-button">
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.base-button {
  padding: 0.75rem 2rem;
  background-color: vars.$color-gold;
  color: vars.$color-black;
  border: none;
  border-radius: vars.$radius-md;
  font-weight: 600;
  cursor: pointer;
}
</style>
