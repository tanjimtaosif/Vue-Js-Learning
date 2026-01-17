<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import {
  Layout,
  Bot,
  Rocket,
  Code2,
  Workflow,
  MousePointer,
  Zap,
  CheckCircle,
  Smartphone,
} from 'lucide-vue-next'

useScrollReveal()

const features = [
  {
    title: 'Visual Website Builder',
    text: 'Create and customize restaurant websites visually without dealing with complex technical setups.',
    class: 'feature--wide',
    visual: 'builder',
  },
  {
    title: 'AI-Powered Assistance',
    text: 'Get smart recommendations to improve layout, content, and conversion rates automatically.',
    class: 'feature--highlight',
    visual: 'ai',
  },
  {
    title: 'One-Click Publishing',
    text: 'Publish your website instantly with optimized hosting and performance settings.',
    class: 'feature--publish',
    visual: 'publish',
  },
  {
    title: 'Clean Code Export',
    text: 'Export production-ready code anytime for full ownership and future scalability.',
    visual: 'code',
  },
  {
    title: 'Integration Ready',
    text: 'Connect reservations, analytics, payments, and third-party tools with ease.',
    visual: 'integrations',
  },
]

// Animation Logic
const visibleIds = ref(new Set<number>())
const observer = ref<IntersectionObserver | null>(null)

onMounted(() => {
  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'))
          visibleIds.value.add(index)
          // Stop observing once visible to run animation only once
          observer.value?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.2, // Trigger when 20% visible
      rootMargin: '50px',
    },
  )

  // Observe all feature cards
  document.querySelectorAll('.feature').forEach((el) => {
    observer.value?.observe(el)
  })
})

onUnmounted(() => {
  observer.value?.disconnect()
})
</script>

<template>
  <section class="features-showcase">
    <BaseContainer>
      <!-- Section Header -->
      <div class="features-showcase__header reveal-on-scroll">
        <span class="features-showcase__pill"> What is Irestaurant? </span>

        <h2 class="features-showcase__title">
          Build Fast, Convert Better,<br />
          Manage Everything Easily
        </h2>

        <p class="features-showcase__subtitle">
          Irestaurant helps restaurants go live faster with conversion-focused websites, smart
          tools, and expert-ready foundations.
        </p>
      </div>

      <!-- Main Features Grid -->
      <div class="features-showcase__grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature"
          :class="[feature.class, { 'is-visible': visibleIds.has(index) }]"
          :data-index="index"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Content Block -->
          <div class="feature__content">
            <h3 class="feature__title">{{ feature.title }}</h3>
            <p class="feature__text">{{ feature.text }}</p>
          </div>

          <!-- Visual: Website Builder (Drag & Drop) -->
          <div class="feature__visual feature__visual--builder" v-if="feature.visual === 'builder'">
            <!-- More elements for a full "Builder" look -->
            <div class="visual-ui-sidebar"></div>
            <div class="visual-ui-header"></div>

            <div class="visual-block block-1"></div>
            <div class="visual-block block-2"></div>
            <div class="visual-block block-3">
              <Layout :size="24" />
            </div>

            <div class="visual-cursor">
              <MousePointer :size="24" fill="currentColor" />
            </div>
          </div>

          <div class="feature__visual feature__visual--ai" v-if="feature.visual === 'ai'">
            <div class="ai-chip">
              <Bot :size="48" />
            </div>
            <div class="ai-pulse"></div>
          </div>

          <div class="feature__visual feature__visual--publish" v-if="feature.visual === 'publish'">
            <div class="publish-ui">
              <div class="publish-bar">
                <div class="dot red"></div>
                <div class="dot yellow"></div>
                <div class="dot green"></div>
              </div>
              <div class="publish-content">
                <div class="publish-btn">
                  <span>Publish</span>
                  <Rocket :size="14" />
                </div>
                <!-- Success State -->
                <div class="publish-success">
                  <div class="success-icon">
                    <CheckCircle :size="16" />
                  </div>
                  <span>Site is Live!</span>
                </div>
              </div>
            </div>
            <div class="publish-cursor">
              <MousePointer :size="22" fill="currentColor" />
            </div>
          </div>

          <div class="feature__visual feature__visual--code" v-if="feature.visual === 'code'">
            <div class="code-window">
              <div class="code-line line-1"></div>
              <div class="code-line line-2"></div>
              <div class="code-line line-3"></div>
              <div class="code-icon">
                <Code2 :size="32" />
              </div>
            </div>
          </div>

          <div
            class="feature__visual feature__visual--integrations"
            v-if="feature.visual === 'integrations'"
          >
            <div class="orbit-center">
              <Workflow :size="32" />
            </div>
            <div class="orbit-ring">
              <div class="orbit-dot dot-1"><Zap :size="12" /></div>
              <div class="orbit-dot dot-2"><Smartphone :size="12" /></div>
              <div class="orbit-dot dot-3"><CheckCircle :size="12" /></div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
