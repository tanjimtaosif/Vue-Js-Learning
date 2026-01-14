<script setup lang="ts">
import experienceOne from '@/assets/images/experience-1.jpg'
import experienceTwo from '@/assets/images/experience-2.jpg'
import experienceThree from '@/assets/images/experience-3.jpg'

type Experience = {
  price: string
  title: string
  description: string
  image: string
}

const experiences: Experience[] = [
  {
    price: '$500',
    title: 'Fine Dining',
    description: 'Bottle of champagne, curated menu, dessert',
    image: experienceOne,
  },
  {
    price: '$1000',
    title: 'Gold Dining',
    description: 'Premium champagne, secret menu for two',
    image: experienceTwo,
  },
  {
    price: '$1500',
    title: 'Royalty Dining',
    description: 'Luxury experience, royal dessert, private table',
    image: experienceThree,
  },
]
</script>

<template>
  <section class="experience">
    <div class="experience__grid">
      <div v-for="(item, index) in experiences" :key="index" class="experience__card">
        <img :src="item.image" alt="images broken" />

        <div class="experience__overlay">
          <span class="experience__price">{{ item.price }}</span>
          <span class="experience__title">{{ item.title }}</span>
          <span class="experience__desc">{{ item.description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.experience {
  padding-block: vars.$space-md;
}

.experience__grid {
  display: grid;
  gap: vars.$space-lg;

  // Mobile-first
  grid-template-columns: 1fr;

  @media (min-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.experience__card {
  position: relative;
  overflow: hidden;
  border-radius: vars.$radius-md;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.experience__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
}

.experience__card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.experience__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: vars.$space-md;

  /* LEFT-SIDE SHADOW GRADIENT */
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.95) 05%,
    rgba(0, 0, 0, 0.85) 25%,
    rgba(0, 0, 0, 0.65) 35%,
    rgba(0, 0, 0, 0.1) 85%,
    rgba(0, 0, 0, 0) 100%
  );
}

.experience__price {
  color: vars.$color-gold;
  font-weight: 600;
  margin-bottom: vars.$space-xs;
}

.experience__title {
  font-size: 1.5rem;
  margin-bottom: vars.$space-xs;
}

.experience__desc {
  font-size: 0.9rem;
  color: vars.$color-gray;
  max-width: 90%;
}
</style>
