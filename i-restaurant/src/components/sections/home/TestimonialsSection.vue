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

async function fetchTestimonials() {
  try {
    const res = await fetch('/data/testimonials.json')
    if (res.ok) {
      testimonials.value = await res.json()
    }
  } catch (error) {
    console.error('Failed to load testimonials:', error)
  }
}

onMounted(fetchTestimonials)
</script>

<template>
  <section class="testimonials">
    <BaseContainer>
      <!-- Section Header -->
      <div class="testimonials__header">
        <span class="testimonials__pill">Testimonials</span>
        <h2 class="testimonials__title">Loved by Restaurant Owners</h2>
        <p class="testimonials__subtitle">Feedback from restaurants using Irestaurant worldwide.</p>
      </div>

      <!-- Infinite Marquee Slider -->
      <div v-if="testimonials.length" class="testimonials__slider">
        <div class="testimonials__track">
          <!-- Render testimonials twice for seamless infinite scroll -->
          <template v-for="(item, index) in [...testimonials, ...testimonials]" :key="index">
            <article class="testimonial">
              <div class="testimonial__rating">
                <Star
                  v-for="star in 5"
                  :key="star"
                  :size="16"
                  :fill="star <= item.rating ? 'currentColor' : 'none'"
                />
              </div>
              <p class="testimonial__quote">"{{ item.quote }}"</p>
              <div class="testimonial__author">
                <div class="testimonial__avatar">{{ item.name.charAt(0) }}</div>
                <div>
                  <div class="testimonial__name">{{ item.name }}</div>
                  <div class="testimonial__role">{{ item.role }}</div>
                </div>
              </div>
            </article>
          </template>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
