<script setup lang="ts">
type Testimonial = {
  name: string
  role: string
  comment: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia R.',
    role: 'Food Blogger',
    comment:
      'The Veloria Dine experience was exceptional. Every dish bursts with flavor and refinement.',
    rating: 5,
  },
  {
    name: 'Daniel K.',
    role: 'Restaurant Critic',
    comment:
      'An elegant balance of tradition and innovation. One of the finest dining experiences.',
    rating: 5,
  },
  {
    name: 'Emily W.',
    role: 'Guest',
    comment: 'From ambiance to taste, everything felt curated and memorable. Highly recommended.',
    rating: 4,
  },
]
</script>

<template>
  <section class="featured">
    <div class="featured__header">
      <h2 class="featured__title">Our Most Loved Experiences</h2>
      <p class="featured__subtitle">The dishes and moments that keep our guests coming back.</p>
    </div>

    <div class="featured__grid">
      <div v-for="(item, index) in testimonials" :key="index" class="featured__card">
        <div class="featured__rating">
          <span v-for="n in item.rating" :key="n">★</span>
        </div>

        <p class="featured__comment">“{{ item.comment }}”</p>

        <div class="featured__author">
          <strong>{{ item.name }}</strong>
          <span>{{ item.role }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.featured {
  padding-block: vars.$space-xl;
}

.featured__header {
  max-width: 600px;
  margin-bottom: vars.$space-xl;
}

.featured__title {
  font-size: 2.25rem;
  margin-bottom: vars.$space-sm;
}

.featured__subtitle {
  color: vars.$color-gray;
  line-height: 1.6;
}

.featured__grid {
  display: grid;
  gap: vars.$space-lg;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.featured__card {
  background-color: vars.$color-dark;
  padding: vars.$space-lg;
  border-radius: vars.$radius-md;
}

.featured__rating {
  color: vars.$color-gold;
  margin-bottom: vars.$space-sm;
}

.featured__comment {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: vars.$space-md;
}

.featured__author {
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  color: vars.$color-gray;
}
</style>
