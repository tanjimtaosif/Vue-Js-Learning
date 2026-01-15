<script setup lang="ts">
import BaseContainer from '../base/BaseContainer.vue'
</script>

<template>
  <header class="app-header">
    <BaseContainer>
      <div class="app-header__content">
        <!-- Logo -->
        <div class="app-header__logo">
          Irestaurant
        </div>

        <!-- Navigation -->
        <nav class="app-header__nav">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
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
