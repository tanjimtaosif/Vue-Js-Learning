<script setup>
import { ref } from 'vue';
import CoffePlans from './CoffePlans.vue';
const plans = ref (["The Hacker","The Single","The Curious","The Addict" ]);

const selectedCoffeePlan = ref()

function handleSelectedCoffeePlan(name){
  selectedCoffeePlan.value= name
}
</script>

<template>
  <div class="plans">
    {{ selectedCoffeePlan }}
    <CoffePlans 
    v-for =" plan in plans" 
    :key="plan" 
    :name="plan" 
    :selected="plan === selectedCoffeePlan"
    @click="$event => handleSelectedCoffeePlan(plan)"></CoffePlans>
  </div>
  
</template>