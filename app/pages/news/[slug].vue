<template>
  <div class="wrapper" v-if="data">
    <NewsDetailed class="news-data" :body="body" />
    <NewsOffers :items="data[0].add_news" />
    <Feedback />
  </div>
</template>

<script setup lang="ts">
  const slug = useRoute().params.slug as string;
  const api = useNuxtApp().$api;
  const res = await useAsyncData(() => api.news.show(slug));
  const data = useDataOrFail(res);

  const body = computed(() => data.value[0].data[0]);

  useSeoMeta({
    title: body.value.seo_title,
    description: body.value.seo_descr,
    keywords: body.value.seo_keywords,
  });
</script>

<style scoped lang="scss">
  .news-data {
    margin-bottom: 80px;
  }
</style>
