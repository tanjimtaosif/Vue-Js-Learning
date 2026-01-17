import { onMounted, onUnmounted } from 'vue'

/**
 * Composable to handle scroll reveal animations using IntersectionObserver.
 * Adds a '.reveal' class to elements when they enter the viewport.
 *
 * Usage in component:
 * setup() { useScrollReveal() }
 * <div class="reveal-on-scroll">Content</div>
 */
export function useScrollReveal(threshold = 0.15) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer?.unobserve(entry.target) // Trigger once
          }
        })
      },
      {
        threshold,
        rootMargin: '50px',
      },
    )

    const elements = document.querySelectorAll('.reveal-on-scroll')
    elements.forEach((el) => observer?.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
