<template>
  <div class="list">
    <HousesRealesedListItem
      class="list-item"
      v-for="item in items"
      :key="item.code"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import type { HouseRealesedOne } from '@/repositories/houses';

  defineProps<{
    items: HouseRealesedOne[],
  }>();
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: -32px;
  }

  .list-item {
    width: 100%;
    margin-top: 32px;
  }
</style>
