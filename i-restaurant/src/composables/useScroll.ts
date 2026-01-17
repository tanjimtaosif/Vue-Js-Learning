import { onMounted, onUnmounted } from 'vue'
import { useUiStore } from '@/stores/ui.store'

/**
 * @param threshold - Scroll position (in pixels) to trigger sticky state. Default: 80
 */
export function useHeaderScroll(threshold = 80) {
  const uiStore = useUiStore()

  const onScroll = () => {
    uiStore.setHeaderSticky(window.scrollY > threshold)
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })
}
