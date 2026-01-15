<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
</script>

<template>
  <section class="hero">
    <div class="hero__stage">
      <BaseContainer>
        <div class="hero__content">
          <h1 class="hero__title">High-Converting Websites for Restaurants</h1>
          <p class="hero__subtitle">
            Irestaurant helps restaurants launch fast, beautiful, and conversion-focused websites
            without technical complexity.
          </p>
          <div class="hero__actions">
            <button class="btn btn--primary">Get Started</button>
            <button class="btn btn--ghost">View Demo</button>
          </div>
          
        </div> <div class="hero__preview">
          <div class="hero__media">
            <video
              class="hero__video"
              src="/videos/placeholder-video.mp4"
              autoplay loop muted playsinline
            ></video>
          </div>
        </div>
      </BaseContainer>
    </div>
  </section>
</template>
