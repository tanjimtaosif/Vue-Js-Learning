<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import logo from '@/assets/images/logo.jpg'

const route = useRoute()
const isOpen = ref(false)

function isActive(path: string) {
  return route.path === path
}

function toggleMenu() {
  isOpen.value = !isOpen.value
}
// close menu when route changes
watch(
  () => route.path,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header class="navbar">
    <div class="navbar__inner container">
      <!-- Logo -->
      <div class="navbar__brand">
        <!-- Image logo (optional) -->
        <img :src="logo" alt="Veloria logo" class="navbar__logo" />

        <!-- Text logo -->
        <!-- <span class="navbar__name">Veloria</span> -->
      </div>

      <!-- Desktop Nav -->
      <nav class="navbar__nav desktop-only">
        <RouterLink to="/" class="navbar__link" :class="{ 'is-active': isActive('/') }">
          Home
        </RouterLink>
        <RouterLink to="/about" class="navbar__link" :class="{ 'is-active': isActive('/about') }">
          About
        </RouterLink>
        <RouterLink
          to="/contact"
          class="navbar__link"
          :class="{ 'is-active': isActive('/contact') }"
        >
          Contact
        </RouterLink>
      </nav>

      <!-- RIGHT: CTA + Mobile Toggle -->
      <div class="navbar__actions">
        <button class="navbar__cta desktop-only">Book a Table</button>
        <button class="navbar__toggle mobile-only" @click="toggleMenu">☰</button>
      </div>

      <!-- Mobile Toggle -->
      <button class="navbar__toggle mobile-only" @click="toggleMenu">☰</button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="navbar__mobile">
      <RouterLink to="/" class="navbar__mobile-link">Home</RouterLink>
      <RouterLink to="/about" class="navbar__mobile-link">About</RouterLink>
      <RouterLink to="/contact" class="navbar__mobile-link">Contact</RouterLink>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(6px);
}

.navbar__inner {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;

  max-width: vars.$container-max-width;
  margin-inline: auto;
  padding: 1rem vars.$container-padding;
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: vars.$space-sm;
}

.navbar__cta {
  padding: 0.75rem 2rem;
  background-color: vars.$color-gold;
  color: vars.$color-black;
  border: none;
  border-radius: vars.$radius-md;
  font-weight: 600;
  cursor: pointer;
}

.navbar__brand {
  font-size: 1.25rem;
  font-weight: 600;
  color: vars.$color-white;

  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar__logo {
  height: 60px;
  width: auto;
  border-radius: vars.$space-xs;
}
.navbar__nav {
  display: flex;
  justify-content: center;
  gap: vars.$space-lg;
}

.navbar__link {
  color: vars.$color-gray;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.navbar__link:hover {
  color: vars.$color-white;
}

.navbar__link.is-active {
  color: vars.$color-gold;
}

/* Toggle button */
.navbar__toggle {
  font-size: 1.5rem;
  background: none;
  border: none;
  color: vars.$color-white;
  cursor: pointer;
}

/* Mobile menu */
.navbar__mobile {
  background-color: vars.$color-black;
  display: flex;
  flex-direction: column;
  padding: vars.$space-md;
}

.navbar__mobile-link {
  padding: vars.$space-sm 0;
  color: vars.$color-white;
  text-decoration: none;
}

/* Responsive helpers */
.desktop-only {
  display: none;
}

.mobile-only {
  display: block;
}

@media (min-width: 768px) {
  .desktop-only {
    display: flex;
  }

  .mobile-only {
    display: none;
  }

  .navbar__mobile {
    display: none;
  }
}
</style>
