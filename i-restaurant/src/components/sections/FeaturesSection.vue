<script setup lang="ts">
import BaseContainer from '../base/BaseContainer.vue'
</script>
<template>
  <section class="features-showcase">
    <BaseContainer>
      <!-- Header -->
      <div class="features-showcase__header">
        <span class="features-showcase__pill"> What is Irestaurant? </span>

        <h2 class="features-showcase__title">
          Build Fast, Convert Better,<br />
          Manage Everything Easily
        </h2>

        <p class="features-showcase__subtitle">
          Irestaurant helps restaurants go live faster with conversion-focused websites, smart
          tools, and expert-ready foundations.
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="features-showcase__grid">
        <!-- Large Left Card -->
        <div class="feature feature--wide">
          <h3 class="feature__title">Visual Website Builder</h3>
          <p class="feature__text">
            Create and customize restaurant websites visually without dealing with complex technical
            setups.
          </p>
        </div>

        <!-- Highlight Card -->
        <div class="feature feature--highlight">
          <h3 class="feature__title">AI-Powered Assistance</h3>
          <p class="feature__text">
            Get smart recommendations to improve layout, content, and conversion rates
            automatically.
          </p>
        </div>

        <!-- Bottom Cards -->
        <div class="feature">
          <h3 class="feature__title">One-Click Publishing</h3>
          <p class="feature__text">
            Publish your website instantly with optimized hosting and performance settings.
          </p>
        </div>

        <div class="feature">
          <h3 class="feature__title">Clean Code Export</h3>
          <p class="feature__text">
            Export production-ready code anytime for full ownership and future scalability.
          </p>
        </div>

        <div class="feature">
          <h3 class="feature__title">Integration Ready</h3>
          <p class="feature__text">
            Connect reservations, analytics, payments, and third-party tools with ease.
          </p>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
