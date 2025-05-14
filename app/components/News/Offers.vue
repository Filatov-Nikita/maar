<template>
  <section>
    <h2 class="title">Другие новости</h2>
    <div class="items">
      <NewsListItem
        class="list-item"
        v-for="item in items"
        :key="item.code"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { NewsListItem } from '~/repositories/news';

  defineProps<{
    items: NewsListItem[],
  }>();
</script>

<style scoped lang="scss">
  .title {
    margin-bottom: 32px;
  }

  .items {
    margin: -16px;
  }

  .list-item {
    margin: 16px;
  }
</style>
