<template>
  <div>
    <PageCover
      title="Домовладения"
      :breadcrumbs="[
        { name: 'Главная', to: { name: 'index' } },
        { name: 'Домовладения' }
      ]"
    />
    <main class="page-py">
      <div class="wrapper">
        <HousesPicker />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>
