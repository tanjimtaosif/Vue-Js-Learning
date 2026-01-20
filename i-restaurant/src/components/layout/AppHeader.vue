<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useUiStore } from '@/stores/ui.store'
import { useHeaderScroll } from '@/composables/useScroll'
import { Menu, X } from 'lucide-vue-next'

import logo from '@/assets/images/logo/logo-i-restaurant.png'

const uiStore = useUiStore()
const isMenuOpen = ref(false)
useHeaderScroll(80)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}
</script>

<template>
  <header class="app-header" :class="{ 'app-header--sticky': uiStore.isHeaderSticky }">
    <BaseContainer>
      <div class="app-header__content">
        <!-- Logo -->
        <div class="app-header__logo">
          <img :src="logo" alt="Logo" />
        </div>

        <!-- Desktop Navigation -->
        <nav class="app-header__nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/features">Features</RouterLink>
          <RouterLink to="/pricing">Pricing</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>

        <!-- Desktop Actions -->
        <div class="app-header__actions">
          <button class="btn btn--ghost">Sign in</button>
          <button class="btn btn--primary">Get Started</button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="app-header__toggle" @click="toggleMenu" aria-label="Toggle Menu">
          <Menu v-if="!isMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>

        <!-- Mobile Menu Overlay -->
        <div class="app-header__mobile-menu" :class="{ 'is-open': isMenuOpen }">
          <nav class="mobile-nav">
            <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
            <RouterLink to="/features" @click="toggleMenu">Features</RouterLink>
            <RouterLink to="/pricing" @click="toggleMenu">Pricing</RouterLink>
            <RouterLink to="/about" @click="toggleMenu">About</RouterLink>
            <RouterLink to="/contact" @click="toggleMenu">Contact</RouterLink>
          </nav>
          <div class="mobile-actions">
            <button class="btn btn--ghost w-full">Sign in</button>
            <button class="btn btn--primary w-full">Get Started</button>
          </div>
        </div>
      </div>
    </BaseContainer>
  </header>
</template>
