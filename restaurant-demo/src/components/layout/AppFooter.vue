<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__inner container">
      <!-- Brand -->
      <div class="footer__brand">
        <h3>Veloria</h3>
        <p>Taste the tradition. Served fresh daily with elegance, warmth, and authentic flavors.</p>
      </div>

      <!-- Links -->
      <div class="footer__links">
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>

      <!-- Info -->
      <div class="footer__info">
        <h4>Customer Info</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Careers</li>
          <li>FAQs</li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer__contact">
        <h4>Contact</h4>
        <p>123 Gourmet Street, Dhaka</p>
        <p>+880 1234 56789</p>
        <p>info@veloria.com</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/variables' as vars;

.footer {
  background-color: vars.$color-black;
  padding-block: vars.$space-xl;
}

.footer__inner {
  display: grid;
  gap: vars.$space-xl;

  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footer h3,
.footer h4 {
  color: vars.$color-white;
  margin-bottom: vars.$space-sm;
}

.footer p,
.footer li {
  color: vars.$color-gray;
  font-size: 0.85rem;
  line-height: 1.6;
}

.footer ul {
  list-style: none;
  padding: 0;
}

.footer li {
  margin-bottom: vars.$space-xs;
  cursor: pointer;
}
</style>
