<template>
  <div class="empty" v-if="items.length === 0">
    Еще нет ни одной новости
  </div>
  <div v-else class="items">
    <NewsListItem
      class="list-item"
      v-for="item in items"
      :key="item.code"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import type { NewsListItem } from '~/repositories/news';

  defineProps<{
    items: NewsListItem[],
  }>();
</script>

<style scoped lang="scss">
  .items {
    margin: -16px;
  }

  .list-item {
    margin: 16px;
  }
</style>
