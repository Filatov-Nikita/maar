import type { RouteLocationRaw } from 'vue-router';

interface Item {
  name: string,
  to?: RouteLocationRaw
}

export const useBreadcrumbsStore = defineStore('breadcrumbsStore', () => {
  const items = ref<Item[]>([]);

  function set(newItems: Item[]) {
    items.value = newItems;
  }

  function reset() {
    items.value = [];
  }

  return {
    items,
    set,
    reset,
  }
});
