<script setup lang="ts">
  import BaseContainer from '../base/BaseContainer.vue';

  const year = new Date().getFullYear()
</script>
<template>
  <footer class="app-footer">
    <BaseContainer>
       <div class="app-footer__content">
        <p class="app-footer__copy">
          © {{ year }} Irestaurant. All rights reserved.
        </p>
       </div>
    </BaseContainer>
  </footer>
</template>
