<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { Palette, Code, Server, Heart, Layout, Workflow } from 'lucide-vue-next'

useScrollReveal()

const tags = [
  { text: 'Designs & UI', icon: Palette, style: { top: '15%', left: '8%' } },
  { text: 'Custom Code', icon: Code, style: { top: '10%', right: '10%' } },
  { text: 'Backend', icon: Server, style: { top: '45%', left: '4%' } },
  { text: 'Handpicked', icon: Heart, style: { bottom: '18%', left: '8%' } },
  { text: 'Builders', icon: Layout, style: { top: '55%', right: '4%' } },
  { text: 'Integrations', icon: Workflow, style: { bottom: '15%', right: '10%' } },
]
</script>

<template>
  <section class="cta">
    <!-- Floating Background Tags -->
    <div class="cta__tags">
      <div v-for="(tag, i) in tags" :key="i" class="cta__tag revealed" :style="tag.style">
        <component :is="tag.icon" :size="18" />
        <span>{{ tag.text }}</span>
      </div>
    </div>

    <BaseContainer>
      <div class="cta__box reveal-on-scroll">
        <h2 class="cta__title">Ready to Build a Better Restaurant Website?</h2>

        <p class="cta__text delay-100">
          Launch faster, convert more customers, and manage everything without technical complexity.
        </p>

        <div class="cta__actions delay-200">
          <button class="btn btn--primary">Get Started</button>
          <button class="btn btn--ghost">View Demo</button>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
