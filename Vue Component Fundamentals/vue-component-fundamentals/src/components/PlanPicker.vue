<script setup>
import { ref } from 'vue';
// import CoffePlans from './CoffePlans.vue';
const plans = ref (["The Hacker","The Single","The Curious","The Addict" ]);
</script>

<template>

<div class="content">
  <h1 class="title">Coffee Plans</h1>

  <h2 class="subtitle">We travel the world to source the very best single origin coffee for you</h2>

  <div class="plans">
    <CoffePlans v-for =" plan in plans" :key="plan" :name="plan"></CoffePlans>

  </div>
  </div>
</template>