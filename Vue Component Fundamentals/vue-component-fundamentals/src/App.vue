<script setup>
import CoffePlans from './components/CoffePlans.vue';
// import CounterButton from './components/CounterButton.vue';
import { ref } from 'vue';
const plans = ref (["The Hacker","The Single","The Curious","The Addict" ]);
</script>

<template>
  <!-- <CounterButton /> -->
  

  <div class="content">
  <h1 class="title">Coffee Plans</h1>

  <h2 class="subtitle">We travel the world to source the very best single origin coffee for you</h2>

  <div class="plans">
    <CoffePlans v-for =" plan in plans" :key="plan" :name="plan"></CoffePlans>

  </div>
</div>
</template>

<style scoped>

</style>
