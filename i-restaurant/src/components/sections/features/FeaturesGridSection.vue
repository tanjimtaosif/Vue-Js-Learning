<script setup lang="ts">
import BaseContainer from '@/components/base/BaseContainer.vue'
import {
  Smartphone,
  BarChart3,
  Search,
  ShoppingBag,
  CreditCard,
  Globe,
  Code2,
  Folder,
  FileJson,
  Sandwich,
  Layout,
  MousePointer,
  TrendingUp,
  MessageCircle,
  Monitor,
  Tablet,
  ToggleRight,
  Check,
  FileCode,
} from 'lucide-vue-next'
</script>

<template>
  <div class="features-page">
    <BaseContainer>
      <!-- Header -->
      <div class="features-page__header">
        <span class="features-page__pill">Features</span>
        <h1 class="features-page__title">
          A Complete App Builder with<br />All the Features You Need
        </h1>
        <p class="features-page__subtitle">
          Irestaurant combines everything you need to design, launch, and scale your restaurant's
          digital presence in one platform.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="features-page__grid">
        <!-- 1. Visual Design (Large: 2x2) -->
        <div class="bento-card bento-card--large">
          <div class="bento-card__content">
            <h3 class="bento-card__title">Visual Design</h3>
            <p class="bento-card__text">
              Craft stunning UIs with our intuitive Visual Design tools. No coding required.
            </p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-builder">
              <div class="visual-builder__header"></div>
              <div class="visual-builder__canvas">
                <div class="visual-builder__sidebar"></div>
                <div class="visual-builder__main">
                  <div class="visual-builder__floating-el" style="top: 20%; left: 30%">
                    Hero Section
                  </div>
                  <div class="visual-builder__floating-el" style="top: 50%; left: 50%">
                    Menu Grid
                  </div>
                  <div class="visual-builder__cursor">
                    <MousePointer :size="24" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Menu Management (Medium: 2x1) -->
        <div class="bento-card bento-card--medium">
          <div class="bento-card__content">
            <h3 class="bento-card__title">Menu Management</h3>
            <p class="bento-card__text">
              Collaborate with your team to update menus instantly across all devices.
            </p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-menu">
              <div class="visual-menu__item">
                <div class="visual-menu__img">
                  <Sandwich :size="24" class="text-primary" />
                </div>
                <div class="visual-menu__info">
                  <div class="visual-menu__row">
                    <span class="visual-menu__name">Sandwich</span>
                    <span class="visual-menu__price">$12</span>
                  </div>
                  <div class="visual-menu__row">
                    <span class="visual-menu__status">Available</span>
                    <ToggleRight :size="20" class="text-primary" />
                  </div>
                </div>
              </div>
              <div class="visual-menu__notify">
                <div class="visual-menu__avatar"></div>
                <span>Updated just now</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Live Preview (Large Light: 2x2) -->
        <div class="bento-card bento-card--large-light">
          <div class="bento-card__content">
            <h3 class="bento-card__title">Live Preview</h3>
            <p class="bento-card__text">Instantly see your app in action as you build.</p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-mobile">
              <div class="visual-mobile__screen">
                <div class="visual-mobile__header"></div>
                <div class="visual-mobile__grid">
                  <div class="visual-mobile__item"></div>
                  <div class="visual-mobile__item"></div>
                  <div class="visual-mobile__item"></div>
                  <div class="visual-mobile__item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Responsive (Small: 1x1) -->
        <div class="bento-card bento-card--small">
          <div class="bento-card__content">
            <div style="margin-bottom: 0.5rem; color: var(--color-primary)">
              <Smartphone :size="28" />
            </div>
            <h3 class="bento-card__title">Responsive</h3>
            <p class="bento-card__text">Perfect on every screen.</p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-responsive">
              <div class="visual-responsive__group">
                <Monitor :size="48" stroke-width="1" class="device-monitor" />
                <Tablet :size="32" stroke-width="1.5" class="device-tablet" />
                <Smartphone :size="20" stroke-width="2" class="device-phone" />
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Pre-built Sections (Small: 1x1) -->
        <div class="bento-card bento-card--small">
          <div class="bento-card__content">
            <div style="margin-bottom: 0.5rem; color: var(--color-primary)">
              <Layout :size="28" />
            </div>
            <h3 class="bento-card__title">Sections</h3>
            <p class="bento-card__text">Drag & drop ready components.</p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-sections">
              <div class="visual-sections__block">Header</div>
              <div class="visual-sections__block">Gallery</div>
              <div class="visual-sections__block">Footer</div>
            </div>
          </div>
        </div>

        <!-- 7. Easy Navigation (Medium) -->
        <div class="bento-card bento-card--medium">
          <div class="bento-card__content">
            <h3 class="bento-card__title">Easy Navigation</h3>
            <p class="bento-card__text">Smooth & intuitive app navigation for customers.</p>
          </div>
          <div
            class="bento-card__visual"
            style="display: flex; align-items: center; justify-content: center"
          >
            <div class="visual-nav">
              <div class="visual-nav__bar">
                <div class="visual-nav__dot active"></div>
                <div class="visual-nav__dot"></div>
                <div class="visual-nav__dot"></div>
              </div>
              <div class="visual-nav__cursor">
                <MousePointer :size="16" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>

        <!-- 8. Integrations (Medium) -->
        <div class="bento-card bento-card--medium">
          <div class="bento-card__content">
            <h3 class="bento-card__title">Integrations</h3>
            <p class="bento-card__text">Connect with your favorite tools easily.</p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-integrations">
              <div class="visual-integrations__icon"><CreditCard :size="20" /></div>
              <div class="visual-integrations__line"></div>
              <div class="visual-integrations__center"><Globe :size="28" /></div>
              <div class="visual-integrations__line"></div>
              <div class="visual-integrations__icon"><BarChart3 :size="20" /></div>
            </div>
          </div>
        </div>

        <!-- 9. Online Ordering (Medium) -->
        <div class="bento-card bento-card--medium">
          <div class="bento-card__content">
            <h3 class="bento-card__title">Online Ordering</h3>
            <p class="bento-card__text">Seamless checkout connections for dynamic apps.</p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-ordering">
              <div class="visual-ordering__cart">
                <ShoppingBag :size="24" />
                <div class="visual-ordering__badge">3</div>
              </div>
              <div class="visual-ordering__btn">Checkout</div>
            </div>
          </div>
        </div>

        <!-- 10. SEO (Small) -->
        <div class="bento-card bento-card--small">
          <div class="bento-card__content">
            <div style="margin-bottom: 1rem; color: var(--color-primary)">
              <Search :size="28" />
            </div>
            <h3 class="bento-card__title">SEO Ready</h3>
            <p class="bento-card__text">Rank higher on search engines.</p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-seo">
              <div class="visual-seo__card">
                <div class="visual-seo__header">
                  <span class="visual-seo__title">Best Burgers</span>
                  <span class="visual-seo__url">www.burger.com</span>
                </div>
                <div class="visual-seo__desc">The best burgers in town...</div>
              </div>
              <div class="visual-seo__badge">#1</div>
            </div>
          </div>
        </div>

        <!-- 11. Custom Code (Small) -->
        <div class="bento-card bento-card--small">
          <div class="bento-card__content">
            <div style="margin-bottom: 1rem; color: var(--color-primary)"><Code2 :size="28" /></div>
            <h3 class="bento-card__title">Custom Code</h3>
            <p class="bento-card__text">Extend beyond limits.</p>
          </div>
          <div class="bento-card__visual">
            <div class="visual-code">
              <span class="code-line">&lt;div&gt;</span>
              <span class="code-line indent">Hello</span>
              <span class="code-line">&lt;/div&gt;</span>
            </div>
          </div>
        </div>

        <!-- 12. Marketing Tools (Medium) -->
        <div class="bento-card bento-card--medium">
          <div class="bento-card__content">
            <h3 class="bento-card__title">Marketing Tools</h3>
            <p class="bento-card__text">Promote your app with confidence.</p>
          </div>
          <div
            class="bento-card__visual"
            style="display: flex; align-items: center; justify-content: center"
          >
            <div class="visual-marketing">
              <div class="visual-marketing__card">
                <div class="visual-marketing__header">
                  <span class="visual-marketing__stat">Growth</span>
                  <TrendingUp :size="16" class="text-primary" />
                </div>
                <div class="visual-marketing__bars">
                  <div class="visual-marketing__bar"></div>
                  <div class="visual-marketing__bar"></div>
                  <div class="visual-marketing__bar"></div>
                  <div class="visual-marketing__bar"></div>
                </div>
              </div>
              <div class="visual-marketing__bubble bubble-1">
                <MessageCircle :size="12" fill="currentColor" />
              </div>
              <!-- Use Star as a "Like" or "Favorite" representation if Heart isn't available, or just generic bubble -->
              <div class="visual-marketing__bubble bubble-2">
                <span style="font-size: 10px; font-weight: bold">+24%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 13. Source Code Export (Medium) -->
        <div class="bento-card bento-card--medium">
          <div class="bento-card__content">
            <h3 class="bento-card__title">Code Export</h3>
            <p class="bento-card__text">Full ownership. No lock-ins.</p>
          </div>
          <div
            class="bento-card__visual"
            style="display: flex; align-items: center; justify-content: center"
          >
            <div class="visual-export">
              <div class="visual-export__tree">
                <div class="visual-export__item">
                  <Folder :size="16" class="text-primary" /> <span>src</span>
                </div>
                <div class="visual-export__item indent">
                  <FileCode :size="14" /> <span>App.vue</span>
                </div>
                <div class="visual-export__item indent">
                  <FileJson :size="14" /> <span>package.json</span>
                </div>
              </div>
              <div class="visual-export__status"><Check :size="14" /> Exported</div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
