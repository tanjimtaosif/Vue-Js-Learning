<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import { Twitter, Instagram, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer">
    <BaseContainer>
      <div class="footer__grid">
        <!-- Brand -->
        <div class="footer__brand">
          <div class="footer__logo">Irestaurant</div>
          <p class="footer__description">
            High-converting websites built specifically for restaurants. Launch faster, convert
            better, and scale with confidence.
          </p>

          <div class="footer__socials">
            <a href="#" aria-label="Twitter">
              <Twitter :size="18" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram :size="18" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin :size="18" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer__links">
          <div class="footer__column">
            <h4 class="footer__title">Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Demo</a></li>
            </ul>
          </div>

          <div class="footer__column">
            <h4 class="footer__title">Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div class="footer__column">
            <h4 class="footer__title">Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer__bottom">
        <span>© 2026 Irestaurant. All rights reserved.</span>
      </div>
    </BaseContainer>
  </footer>
</template>
