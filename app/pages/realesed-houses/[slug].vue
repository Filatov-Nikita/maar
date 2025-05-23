<template>
  <div>
    <PageCover
      :title="house.name"
      :breadcrumbs="[
        { name: 'Главная', to: { name: 'index' } },
        { name: 'Реализованные объекты', to: { name: 'realesed-houses' } },
        { name: house.name },
      ]"
    />
    <main class="page-py">
      <div class="wrapper">
        <pre>{{ data }}</pre>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  const api = useNuxtApp().$api;

  const route = useRoute();

  const res = await useAsyncData(() => api.houses.showRealesed(route.params.slug as string));
  const data = useDataOrFail(res);

  const house = computed(() => data.value[0]);

  useSeoMeta({
    title: house.value.seo_title,
    description: house.value.seo_descr,
    keywords: house.value.seo_keywords,
  });
</script>
