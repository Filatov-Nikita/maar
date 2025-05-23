<template>
  <div class="list">
    <HousesPickerListItem
      class="list-item"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import type { HomeHouseOne } from '~/repositories/houses';

  defineProps<{
    items: HomeHouseOne[],
  }>();
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: -24px;
  }

  .list-item {
    width: 100%;
    margin-top: 24px;
  }
</style>
