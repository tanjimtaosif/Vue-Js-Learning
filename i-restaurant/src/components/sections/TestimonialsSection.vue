<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { ChevronLeft, ChevronRight, Star } from 'lucide-vue-next'

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  rating: number
}

const testimonials = ref<Testimonial[]>([])
const currentPage = ref(0)
const itemsPerPage = 3

const totalPages = computed(() => Math.ceil(testimonials.value.length / itemsPerPage))

const visibleTestimonials = computed(() => {
  const start = currentPage.value * itemsPerPage
  return testimonials.value.slice(start, start + itemsPerPage)
})

function nextPage() {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

onMounted(async () => {
  try {
    const res = await fetch('/data/testimonials.json')
    testimonials.value = await res.json()
  } catch (err) {
    console.error('Failed to load testimonials', err)
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

      <!-- Slider -->
      <div class="testimonials__slider">
        <button class="testimonials__nav" :disabled="currentPage === 0" @click="prevPage">
          <ChevronLeft :size="20" />
        </button>

        <div class="testimonials__track">
          <div v-for="item in visibleTestimonials" :key="item.id" class="testimonial">
            <div class="testimonial__rating">
              <Star v-for="n in item.rating" :key="n" :size="16" fill="currentColor" />
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

        <button
          class="testimonials__nav"
          :disabled="currentPage === totalPages - 1"
          @click="nextPage"
        >
          <ChevronRight :size="20" />
        </button>
      </div>
    </BaseContainer>
  </section>
</template>
