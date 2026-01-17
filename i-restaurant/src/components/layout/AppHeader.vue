<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useUiStore } from '@/stores/ui.store'
import { useHeaderScroll } from '@/composables/useScroll'

const uiStore = useUiStore()
useHeaderScroll(80)
</script>

<template>
  <header class="app-header" :class="{ 'app-header--sticky': uiStore.isHeaderSticky }">
    <BaseContainer>
      <div class="app-header__content">
        <!-- Logo -->
        <div class="app-header__logo">Irestaurant</div>

        <!-- Navigation -->
        <nav class="app-header__nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/features">Features</RouterLink>
          <RouterLink to="/pricing">Pricing</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>

        <!-- Actions -->
        <div class="app-header__actions">
          <button class="btn btn--ghost">Sign in</button>
          <button class="btn btn--primary">Get Started</button>
        </div>
      </div>
    </BaseContainer>
  </header>
</template>
