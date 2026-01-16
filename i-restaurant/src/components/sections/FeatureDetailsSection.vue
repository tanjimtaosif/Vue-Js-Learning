<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
</script>

<template>
  <section class="feature-details">
    <BaseContainer>
      <!-- Row 1 -->
      <div class="feature-detail">
        <div class="feature-detail__content">
          <h3 class="feature-detail__title">Designed for Restaurant Growth</h3>
          <p class="feature-detail__text">
            Irestaurant focuses on conversion-first layouts that help restaurants increase
            reservations, orders, and customer engagement.
          </p>
        </div>

        <div class="feature-detail__media">
          <div class="feature-detail__mock">Feature Preview</div>
        </div>
      </div>

      <!-- Row 2 (reversed) -->
      <div class="feature-detail feature-detail--reverse">
        <div class="feature-detail__content">
          <h3 class="feature-detail__title">Built to Scale With You</h3>
          <p class="feature-detail__text">
            Export clean code, integrate third-party tools, and scale your website as your
            restaurant business grows.
          </p>
        </div>

        <div class="feature-detail__media">
          <div class="feature-detail__mock">Feature Preview</div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
