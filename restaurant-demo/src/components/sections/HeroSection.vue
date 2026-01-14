<script setup lang="ts">
import BaseButton from '../ui/BaseButton.vue'
// import heroImage from '@/assets/images/hero.jpg'

const title = 'From Farm to Fork'
const subtitle =
  'Every dish begins with carefully sourced ingredients, crafted with elegance and care.'
const ctaText = 'Order Now'
</script>

<template>
  <section class="hero">
    <div class="hero__overlay">
      <div class="hero__content">
        <h1 class="hero__title">{{ title }}</h1>
        <p class="hero__subtitle">{{ subtitle }}</p>

        <BaseButton :label="ctaText" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.hero {
  min-height: 45vh;
  background-image: url('@/assets/images/hero.jpg');
  background-size: cover;
  background-position: center;

  margin-top: vars.$space-md;
  margin-bottom: vars.$space-md;

  border-radius: vars.$radius-md;
  overflow: hidden;

  box-shadow: inset 0 -120px 120px -60px rgba(0, 0, 0, 0.9);
}


.hero__overlay {
  min-height: inherit;
  display: flex;
  align-items: center;

  /* Stronger shadow behind text (left → right) */
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 10%,
    rgba(0, 0, 0, 0.75) 35%,
    rgba(0, 0, 0, 0.45) 55%,
    rgba(0, 0, 0, 0.2) 60%,
    rgba(0, 0, 0, 0) 75%
  );
}

.hero__content {
  max-width: 520px;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  margin-left: vars.$space-md;
}

.hero__title {
  font-size: clamp(2.6rem, 6vw, 3.5rem);
  margin-bottom: vars.$space-md;
  line-height: 1.1;
}

.hero__subtitle {
  font-size: 1.125rem;
  color: vars.$color-gray;
  margin-bottom: vars.$space-lg;
  max-width: 50ch;
}

@media (max-width: 640px) {
  .hero {
    min-height: 75vh;
  }

  .hero__overlay {
    align-items: flex-start;
    padding-top: vars.$space-xl;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.55) 40%,
      rgba(0, 0, 0, 0) 80%
    );
  }
}
</style>
