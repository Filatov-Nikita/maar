import { onUnmounted, watch, type Ref } from 'vue';

export default function(value: Ref<boolean>, disabled?: Ref<boolean>) {
  if(import.meta.client) {
    toggle();
  }

  watch(value, () => {
    toggle();
  });

  onUnmounted(() => {
    document.body.classList.remove('overflow-hidden');
  });

  function toggle() {
    if(disabled && disabled.value) return;

    if(value.value) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
