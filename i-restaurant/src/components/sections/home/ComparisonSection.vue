<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import { Check, X } from 'lucide-vue-next'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="comparison">
    <BaseContainer>
      <!-- Header -->
      <div class="comparison__header reveal-on-scroll">
        <span class="comparison__pill">Comparison</span>

        <h2 class="comparison__title">
          Why Restaurants Choose Irestaurant<br />
          Over Other Options
        </h2>

        <p class="comparison__subtitle">
          See how Irestaurant compares with generic website builders and traditional custom
          development.
        </p>
      </div>

      <!-- Table Scroll Wrapper -->
      <div class="comparison__scroll-wrapper reveal-on-scroll delay-100">
        <div class="comparison__table">
          <!-- Feature names -->
          <div class="comparison__column comparison__column--labels">
            <div class="comparison__cell">Visual Builder</div>
            <div class="comparison__cell">Restaurant-Focused Layouts</div>
            <div class="comparison__cell">AI Assistance</div>
            <div class="comparison__cell">Clean Code Export</div>
            <div class="comparison__cell">Fast Launch</div>
          </div>

          <!-- Irestaurant -->
          <div class="comparison__column comparison__column--primary">
            <div class="comparison__head">Irestaurant</div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
          </div>

          <!-- Website Builders -->
          <div class="comparison__column">
            <div class="comparison__head">Website Builders</div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--cross">
              <X :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--cross">
              <X :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--cross">
              <X :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
          </div>

          <!-- Custom Dev -->
          <div class="comparison__column">
            <div class="comparison__head">Custom Developers</div>
            <div class="comparison__cell comparison__cell--cross">
              <X :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--cross">
              <X :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--check">
              <Check :size="18" />
            </div>
            <div class="comparison__cell comparison__cell--cross">
              <X :size="18" />
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
