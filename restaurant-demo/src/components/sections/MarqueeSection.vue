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
  overflow: hidden;
  background-color: vars.$color-white;
  padding-block: vars.$space-sm;
}

.marquee__track {
  display: flex;
  gap: vars.$space-lg;
  white-space: nowrap;
  animation: scroll 20s linear infinite;
}

.marquee__item {
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: vars.$color-black;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
