<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import { Rocket, Users, Settings } from 'lucide-vue-next'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
</script>

<template>
  <section class="about-process">
    <BaseContainer>
      <h2 class="about-process__title reveal-on-scroll">Designed Around Real Restaurant Needs</h2>

      <div class="about-process__steps">
        <!-- Step 1 -->
        <div class="process-step reveal-on-scroll delay-100">
          <div class="process-step__icon">
            <Rocket :size="24" />
          </div>
          <div class="process-step__content">
            <span class="process-step__number">01</span>
            <span class="process-step__text">Launch Faster</span>
          </div>
        </div>

        <!-- Connector Line -->
        <div class="process-connector reveal-on-scroll delay-150"></div>

        <!-- Step 2 -->
        <div class="process-step reveal-on-scroll delay-200">
          <div class="process-step__icon">
            <Users :size="24" />
          </div>
          <div class="process-step__content">
            <span class="process-step__number">02</span>
            <span class="process-step__text">Convert More Customers</span>
          </div>
        </div>

        <!-- Connector Line -->
        <div class="process-connector reveal-on-scroll delay-250"></div>

        <!-- Step 3 -->
        <div class="process-step reveal-on-scroll delay-300">
          <div class="process-step__icon">
            <Settings :size="24" />
          </div>
          <div class="process-step__content">
            <span class="process-step__number">03</span>
            <span class="process-step__text">Manage Everything Easily</span>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
