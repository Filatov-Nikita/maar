<template>
  <div class="wrapper">
    <NewsList v-if="data" :items="data" />
  </div>
</template>

<script setup lang="ts">
  const api = useNuxtApp().$api;

  const res = await useAsyncData(api.news.all);
  const data = useDataOrFail(res);
</script>
