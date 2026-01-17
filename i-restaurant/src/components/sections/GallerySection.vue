<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const projects = [
  { id: 1, image: '/images/gallery/app-1.png' },
  { id: 2, image: '/images/gallery/app-2.png' },
  { id: 3, image: '/images/gallery/app-3.png' },
  { id: 4, image: '/images/gallery/app-4.png' },
  { id: 5, image: '/images/gallery/app-5.png' },
  { id: 6, image: '/images/gallery/app-6.png' },
]
</script>

<template>
  <section class="gallery">
    <BaseContainer>
      <!-- Header -->
      <div class="gallery__header reveal-on-scroll">
        <span class="gallery__pill">Gallery</span>
        <h2 class="gallery__title">Websites Built with Irestaurant</h2>
        <p class="gallery__subtitle">Explore real restaurant websites built using our platform.</p>
      </div>
    </BaseContainer>

    <!-- Infinite Carousel -->
    <div class="gallery__carousel reveal-on-scroll delay-200">
      <div class="gallery__track">
        <div
          v-for="(project, index) in [...projects, ...projects]"
          :key="index"
          class="gallery__item"
        >
          <img :src="project.image" alt="Project preview" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>
