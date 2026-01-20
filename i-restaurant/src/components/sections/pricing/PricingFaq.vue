<script setup lang="ts">
import { ref } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { Plus, Minus } from 'lucide-vue-next'

const faqs = [
  {
    question: 'What items are available for free?',
    answer:
      "Our Free plan includes access to basic component library, single project usage, and community support. It's perfect for prototyping and personal projects.",
  },
  {
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of the next billing cycle. Prorated refunds are standard for downgrades.',
  },
  {
    question: "How does the 'Unlimited' plan work?",
    answer:
      "The Unlimited plan gives you access to all current and future premium components, unlimited projects, and priority support. It's designed for agencies and high-volume developers.",
  },
  {
    question: 'Do you offer a refund policy?',
    answer:
      "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, simply contact support within 14 days for a full refund.",
  },
]

const openIndex = ref<number | null>(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="faq">
    <BaseContainer class="faq__container">
      <div class="faq__header">
        <span class="faq__pill">FAQ</span>
        <h2 class="faq__title">Common Questions</h2>
      </div>

      <div class="faq__grid">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-item"
          :class="{ 'faq-item--active': openIndex === index }"
        >
          <button
            class="faq-item__trigger"
            @click="toggleFaq(index)"
            :aria-expanded="openIndex === index"
          >
            <span class="faq-item__question">{{ faq.question }}</span>
            <span class="faq-item__icon">
              <Plus v-if="openIndex !== index" :size="20" />
              <Minus v-else :size="20" />
            </span>
          </button>

          <div
            class="faq-item__content-wrapper"
            :style="{ maxHeight: openIndex === index ? '200px' : '0' }"
          >
            <div class="faq-item__content">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
