<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { Star } from 'lucide-vue-next'

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  rating: number
}

const testimonials = ref<Testimonial[]>([])

onMounted(async () => {
  try {
    const res = await fetch(`/data/testimonials.json?v=${Date.now()}`)
    if (res.ok) {
      testimonials.value = await res.json()
    } else {
      console.error('Failed to load testimonials')
    }
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section class="testimonials">
    <BaseContainer>
      <!-- Header -->
      <div class="testimonials__header">
        <span class="testimonials__pill">Testimonials</span>
        <h2 class="testimonials__title">Loved by Restaurant Owners</h2>
        <p class="testimonials__subtitle">Feedback from restaurants using Irestaurant worldwide.</p>
      </div>

      <!-- Marquee Slider -->
      <div class="testimonials__slider" v-if="testimonials.length">
        <div class="testimonials__track">
          <!-- First Set -->
          <div v-for="item in testimonials" :key="`first-${item.id}`" class="testimonial">
            <div class="testimonial__rating">
              <Star
                v-for="n in 5"
                :key="n"
                :size="16"
                :fill="n <= item.rating ? 'currentColor' : 'none'"
              />
            </div>

            <p class="testimonial__quote">“{{ item.quote }}”</p>

            <div class="testimonial__author">
              <div class="testimonial__avatar">
                {{ item.name.charAt(0) }}
              </div>
              <div>
                <div class="testimonial__name">{{ item.name }}</div>
                <div class="testimonial__role">{{ item.role }}</div>
              </div>
            </div>
          </div>

          <!-- Second Set (Duplicate for seamless loop) -->
          <div v-for="item in testimonials" :key="`second-${item.id}`" class="testimonial">
            <div class="testimonial__rating">
              <Star
                v-for="n in 5"
                :key="n"
                :size="16"
                :fill="n <= (item.rating || 5) ? 'currentColor' : 'none'"
              />
            </div>

            <p class="testimonial__quote">“{{ item.quote }}”</p>

            <div class="testimonial__author">
              <div class="testimonial__avatar">
                {{ item.name.charAt(0) }}
              </div>
              <div>
                <div class="testimonial__name">{{ item.name }}</div>
                <div class="testimonial__role">{{ item.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
