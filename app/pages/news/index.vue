<template>
  <div>
    <PageCover
      title="Новости"
      :breadcrumbs="[
        { name: 'Главная', to: { name: 'index' } },
        { name: 'Новости' }
      ]"
    />
    <main class="page-py">
      <div class="wrapper">
        <p class="h2 uppercase pb-24">Новости, инсайты и&nbsp;тренды</p>
        <NewsList v-if="data" :items="data" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  const api = useNuxtApp().$api;

  const res = await useAsyncData(api.news.all);
  const data = useDataOrFail(res);
</script>
