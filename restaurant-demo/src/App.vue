<script setup lang="ts">
import AppNavbar from '@/components/layout/AppNavbar.vue'
import BaseContainer from './components/ui/BaseContainer.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <AppNavbar />

  <BaseContainer>
    <router-view />
  </BaseContainer>
  <AppFooter />
</template>
<style scoped></style>
