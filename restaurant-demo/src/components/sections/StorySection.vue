<script setup lang="ts">
import storyImage from '@/assets/images/story.jpg'

const Title = 'Tradition Served with Elegance'
const description =
  'At Veloria Dine, we believe dining is more than just a meal. Our chefs blend time-honored recipes with modern techniques, crafting dishes that honor tradition while embracing refinement.'
const ctaText = 'Explore More'
</script>

<template>
  <section class="story">
    <div class="story__grid">
      <!-- Images -->
      <div class="story__media">
        <img :src="storyImage" alt="Chef" />
      </div>

      <!-- Content -->
      <div class="story__content">
        <h2 class="story__title">
          {{ Title }}
        </h2>

        <p class="story__description">
          {{ description }}
        </p>

        <button class="story__cta">
          {{ ctaText }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;
.story {
  padding-block: vars.$space-md;
}

.story__grid {
  display: grid;
  gap: vars.$space-xl;
  align-items: center;

  /* Default: side by side */
  grid-template-columns: 1fr 1fr;

  /* Small mobile only */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.story__media img {
  width: 100%;
  border-radius: vars.$radius-md;
  object-fit: cover;
}

.story__content {
  max-width: 520px;
}

.story__title {
  font-size: clamp(2.2rem, 4vw, 2.75rem);
  margin-bottom: vars.$space-md;
  line-height: 1.2;
  position: relative;
}

.story__title::after {
  content: '';
  display: block;
  width: 40px;
  height: 2px;
  background-color: vars.$color-gold;
  margin-top: vars.$space-sm;
}
.story__description {
  font-size: 1rem;
  color: vars.$color-gray;
  margin-bottom: vars.$space-lg;
  line-height: 1.8;
  max-width: 55ch;
}

.story__cta {
  background: transparent;
  color: vars.$color-gold;
  border: 1px solid vars.$color-gold;
  padding: 0.75rem 2rem;
  border-radius: vars.$radius-md;
  font-weight: 500;
  cursor: pointer;
}
</style>
