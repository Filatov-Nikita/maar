<template>
  <section class="blog">
    <div class="head">
      <h2 class="h2 uppercase">Новости, инсайты и&nbsp;тренды</h2>
      <NuxtLink class="link-news" :to="{ name: 'news' }">Читать все ({{ count }})</NuxtLink>
    </div>
    <div class="items">
      <NewsListItem
        class="list-item"
        v-for="item in items"
        :key="item.code"
        :item="item"
      />
      <NewsBlogSubscribe class="blog-subs" />
    </div>
  </section>
</template>

<script setup lang="ts">
  const api = useNuxtApp().$api;
  const res = useAsyncData(api.news.mainList);
  const data = useDataOrFail(res);
  const count = computed(() => data.value[0].props[0].totalcount);
  const items = computed(() => data.value[0].data);
</script>


<style scoped lang="scss">
  .head {
    display: flex;
    align-items: flex-start;
    column-gap: 24px;
    padding-bottom: 24px;
  }

  .link-news {
    padding: 5px 0;
    white-space: nowrap;
    @include text-body-m-regular-01;

    &:hover {
      color: var(--color-primary-02);
    }
  }

  .items {
    margin: -16px;
  }

  .list-item {
    margin: 16px;
  }

  .blog-subs {
    margin: 16px;
    display: flex;
    flex-direction: column;
  }

  .blog-subs :deep(.subtitle) {
    flex-grow: 1;
  }
</style>
