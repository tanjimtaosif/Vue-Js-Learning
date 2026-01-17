<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import { Target, Heart, Zap } from 'lucide-vue-next'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="about-mission">
    <BaseContainer>
      <div class="about-mission__grid reveal-on-scroll">
        <div class="mission-card">
          <div class="mission-card__icon">
            <Target :size="32" />
          </div>
          <h3 class="mission-card__title">Our Mission</h3>
          <p class="mission-card__text">
            Empower restaurants with beautiful, fast, and conversion-driven websites.
          </p>
        </div>

        <div class="mission-card reveal-on-scroll delay-100">
          <div class="mission-card__icon">
            <Heart :size="32" />
          </div>
          <h3 class="mission-card__title">Why We Exist</h3>
          <p class="mission-card__text">Generic builders don’t understand restaurants. We do.</p>
        </div>

        <div class="mission-card reveal-on-scroll delay-200">
          <div class="mission-card__icon">
            <Zap :size="32" />
          </div>
          <h3 class="mission-card__title">How We’re Different</h3>
          <p class="mission-card__text">Design, performance, and conversion—built in.</p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
