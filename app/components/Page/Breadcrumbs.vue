<template>
  <div class="items">
    <template v-for="(item, i) in items">
      <span v-if="!item.to">{{ item.name }}</span>
      <NuxtLink
        v-else
        :to="item.to"
      >
        {{ item.name }}
      </NuxtLink>
      <span v-if="i !== items.length - 1"> / </span>
    </template>
  </div>
</template>

<script setup lang="ts">
  const breadcrumbs = useBreadcrumbsStore();

  const items = computed(() => breadcrumbs.items);
</script>

<style scoped lang="scss">
  .items {
    & > *:last-child {
      opacity: 0.65;
    }
  }
</style>
