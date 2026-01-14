<script setup lang="ts">
import { useMarquee } from '@/composables/useMarquee'

const { items } = useMarquee()
</script>

<template>
  <section class="marquee">
    <div class="marquee__track">
      <span v-for="(item, index) in items" :key="index" class="marquee__item">
        {{ item }}
      </span>

      <!-- duplicate for seamless loop -->
      <span v-for="(item, index) in items" :key="`dup-${index}`" class="marquee__item">
        {{ item }}
      </span>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.marquee {
  position: relative;
  overflow: hidden;
  background-color: vars.$color-black;
  padding-block: vars.$space-md;
}

/* Scrolling track */
.marquee__track {
  display: flex;
  gap: vars.$space-lg;
  white-space: nowrap;
  animation: scroll 20s linear infinite;
}

/* Text items */
.marquee__item {
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: vars.$color-white;
}

/* Left & right fade shadows */
.marquee::before,
.marquee::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 72px;
  pointer-events: none;
  z-index: 2;
}

/* Left fade */
.marquee::before {
  left: 0;
  background: linear-gradient(to right, rgb(11, 11, 11, 0.9), rgba(11, 11, 11, 0));
}

/* Right fade */
.marquee::after {
  right: 0;
  background: linear-gradient(to left, rgba(11, 11, 11, 0.9), rgba(11, 11, 11, 0));
}

/* Animation */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
