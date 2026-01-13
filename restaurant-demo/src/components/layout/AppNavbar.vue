<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <header class="navbar">
    <div class="navbar__inner container">
      <!-- Brand -->
      <div class="navbar__brand">Veloria</div>

      <!-- Navigation -->
      <nav class="navbar__nav">
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: vars.$space-sm;
}

.navbar__brand {
  font-size: 1.25rem;
  font-weight: 600;
  color: vars.$color-white;
}

.navbar__nav {
  display: flex;
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
</style>
