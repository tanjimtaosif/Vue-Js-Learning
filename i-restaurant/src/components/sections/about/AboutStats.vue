<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'

interface Stat {
  label: string
  value: number
  suffix: string
  current: Ref<number>
}

const stats: Stat[] = [
  { label: 'Restaurants', value: 500, suffix: '+', current: ref(0) },
  { label: 'Conversion Rate', value: 3, suffix: '×', current: ref(0) },
  { label: 'Support', value: 24, suffix: '/7', current: ref(0) },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat) => animateValue(stat))
          observer.disconnect()
        }
      })
    },
    { threshold: 0.5 },
  )

  const section = document.querySelector('.about-stats')
  if (section) observer.observe(section)
})

const animateValue = (stat: Stat) => {
  let startTimestamp: number | null = null
  const duration = 2000

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    stat.current.value = Math.floor(progress * stat.value)
    if (progress < 1) {
      window.requestAnimationFrame(step)
    } else {
      stat.current.value = stat.value
    }
  }
  window.requestAnimationFrame(step)
}
</script>

<template>
  <section class="about-stats">
    <BaseContainer>
      <div class="about-stats__grid">
        <div v-for="(stat, index) in stats" :key="index" class="stat">
          <strong>{{ stat.current }}{{ stat.suffix }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
