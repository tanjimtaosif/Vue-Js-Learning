<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
// const txt = ref('Welcome')
</script>

<template>
  <h1>{{ msg }}</h1>
  <!-- We can do one expression at a time -->
  <!--Use txt.toLocalUppercase to uppercase the txt -->
  <h1>{{ txt || 'Hi There!!!'}}</h1>
  <input v-model="msg" />
</template>
