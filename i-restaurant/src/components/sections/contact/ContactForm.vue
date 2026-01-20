<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
</script>

<template>
  <section class="contact">
    <BaseContainer>
      <div class="contact__grid">
        <!-- Form -->
        <form class="contact-form">
          <h2 class="contact-form__title">Send us a message</h2>

          <div class="contact-form__field">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div class="contact-form__field">
            <label>Email</label>
            <input type="email" placeholder="you@restaurant.com" />
          </div>

          <div class="contact-form__field">
            <label>Message</label>
            <textarea placeholder="Tell us about your restaurant…"></textarea>
          </div>

          <button class="btn btn--primary">Send Message</button>
        </form>

        <!-- Info -->
        <div class="contact-info">
          <h3 class="contact-info__title">Contact Information</h3>

          <p class="contact-info__text">Our team usually responds within 24 hours.</p>

          <ul class="contact-info__list">
            <li>Email: support@irestaurant.app</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Hours: Mon–Fri, 9am–6pm</li>
          </ul>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
