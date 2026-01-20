<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { Check } from 'lucide-vue-next'

interface PricingPlan {
  id: string
  name: string
  price: number
  billing: string
  description: string
  features: string[]
  popular: boolean
}

const plans = ref<PricingPlan[]>([])
const billingPeriod = ref<'monthly' | 'yearly'>('monthly')

onMounted(async () => {
  try {
    const res = await fetch('/data/pricing.json')
    plans.value = await res.json()
  } catch (error) {
    console.error('Failed to load pricing data:', error)
  }
})

const displayedPlans = computed(() => {
  return plans.value.map((plan) => {
    if (billingPeriod.value === 'yearly') {
      return {
        ...plan,
        price: Math.floor(plan.price * 10), // Example: 10 months price for 12 months
        billing: 'year',
      }
    }
    return plan
  })
})
</script>

<template>
  <section class="pricing">
    <BaseContainer>
      <!-- Header -->
      <div class="pricing__header">
        <span class="pricing__pill">Pricing</span>
        <h2 class="pricing__title">Simple, Transparent Pricing</h2>
        <p class="pricing__subtitle">Choose a plan that fits your restaurant’s needs.</p>

        <!-- Toggle (Text Based) -->
        <div class="pricing__toggle-wrapper">
          <button
            class="pricing__toggle-text"
            :class="{ active: billingPeriod === 'monthly' }"
            @click="billingPeriod = 'monthly'"
          >
            Monthly
          </button>

          <span class="pricing__toggle-divider">/</span>

          <button
            class="pricing__toggle-text"
            :class="{ active: billingPeriod === 'yearly' }"
            @click="billingPeriod = 'yearly'"
          >
            Yearly
            <span class="pricing__save-badge">Save 20%</span>
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div class="pricing__grid">
        <div
          v-for="plan in displayedPlans"
          :key="plan.id"
          class="pricing-card"
          :class="{ 'pricing-card--popular': plan.popular }"
        >
          <!-- Popular Badge -->
          <div v-if="plan.popular" class="pricing-card__badge-wrapper">
            <div class="pricing-card__badge">Most Popular</div>
          </div>

          <div class="pricing-card__content">
            <h3 class="pricing-card__title">{{ plan.name }}</h3>
            <p class="pricing-card__description">{{ plan.description }}</p>

            <div class="pricing-card__price">
              <span class="pricing-card__currency">$</span>
              <span class="pricing-card__amount">{{ plan.price }}</span>
              <span class="pricing-card__billing">/ {{ plan.billing }}</span>
            </div>

            <div class="pricing-card__divider"></div>

            <ul class="pricing-card__features">
              <li v-for="feature in plan.features" :key="feature">
                <div class="pricing-card__check-wrapper">
                  <Check :size="14" stroke-width="3" />
                </div>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <button class="btn" :class="plan.popular ? 'btn--primary' : 'btn--outline'">
              {{ plan.popular ? 'Get Started' : 'Start Free Trial' }}
            </button>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
