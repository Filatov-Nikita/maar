<template>
  <div>
    <PageCover
      title="Реализованные объекты "
      :breadcrumbs="[
        { name: 'Главная', to: { name: 'index' } },
        { name: 'Реализованные объекты ' }
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
  const res = await useAsyncData(api.houses.allRealesed);
  const data = useDataOrFail(res);
</script>
