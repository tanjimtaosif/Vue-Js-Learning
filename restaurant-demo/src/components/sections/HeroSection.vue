<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'
import heroImage from '@/assets/images/hero.jpg'
const title = 'From Farm to Fork'
const subtitle =
  'Every dish begins with carefully sourced ingredients, crafted with elegance and care.'
const ctaText = 'Order Now'
</script>

<template>
  <section class="hero">
    <div class="hero__grid">
      <!-- LEFT: Text -->
      <div class="hero__content">
        <h1 class="hero__title">{{ title }}</h1>
        <p class="hero__subtitle">{{ subtitle }}</p>

        <BaseButton :label="ctaText" />
      </div>

      <!-- RIGHT: Image -->
      <div class="hero__media">
        <img :src="heroImage" alt="Hero image" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.hero {
  padding-block: vars.$space-xs;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: vars.$space-lg;
  min-height: 80vh;
}

.hero__content {
  max-width: 520px;
}

.hero__title {
  font-size: 3rem;
  margin-bottom: vars.$space-md;
}

.hero__subtitle {
  font-size: 1.125rem;
  color: vars.$color-gray;
  margin-bottom: vars.$space-lg;
}

.hero__media img {
  width: 100%;
  border-radius: vars.$radius-md;
}
</style>
