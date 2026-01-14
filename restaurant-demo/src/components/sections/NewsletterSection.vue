<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

function handleSubmit() {
  if (email.value) return
  submitted.value = true
}
</script>
<template>
  <section class="newsletter">
    <div class="newsletter__box">
      <h2 class="newsletter__title">Subcribe & Follow Our Newsletter</h2>
      Get updates on new menus, special events, and exclusive dining experiences.
      <p class="newsletter__subtitle"></p>
      <form class="newsletter__form" @submit.prevent="handleSubmit">
        <input type="email" v-model="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
      <p v-if="submitted" class="newsletter__success">Thank you for subscribing!</p>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.newsletter {
  padding-block: clamp(3rem, 8vw, 6rem);
  display: flex;
  justify-content: center;
}

.newsletter__box {
  background: linear-gradient(135deg, vars.$color-gold, #9f8d69);

  /* Wider visual presence */
  max-width: 960px;
  width: 100%;

  padding: clamp(2rem, 5vw, 4rem);
  border-radius: vars.$radius-md;
  text-align: center;

  /* Subtle depth */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
}

.newsletter__title {
  color: vars.$color-black;
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  margin-bottom: vars.$space-sm;
}

.newsletter__subtitle {
  color: rgba(0, 0, 0, 0.75);
  max-width: 50ch;
  margin-inline: auto;
  margin-bottom: vars.$space-lg;
}

.newsletter__form {
  display: flex;
  gap: vars.$space-sm;
  justify-content: center;
  flex-wrap: wrap;
}

.newsletter__form input {
  padding: 0.85rem 1rem;
  border-radius: vars.$radius-sm;
  border: none;
  min-width: 280px;
  flex: 1;
  max-width: 360px;
}

.newsletter__form button {
  padding: 0.85rem 1.75rem;
  background-color: vars.$color-black;
  color: vars.$color-white;
  border: none;
  border-radius: vars.$radius-sm;
  cursor: pointer;
}

.newsletter__success {
  margin-top: vars.$space-md;
  color: vars.$color-black;
  font-weight: 500;
}
</style>
