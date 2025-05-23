<template>
  <div class="params">
    <div class="scroll-x">
      <div class="filter-types">
        <BaseTab class="tab-btn" name="all" text="Все" :active="houseType === 'all'" @click="houseType = 'all'" />
        <BaseTab class="tab-btn" name="1" text="Готовые домовладения" icon="key-regular" :active="houseType === '1'" @click="houseType = '1'" />
        <BaseTab class="tab-btn" name="2" text="Строящиеся домовладения" icon="hammer-regular" :active="houseType === '2'" @click="houseType = '2'" />
      </div>
    </div>
    <div class="list-types">
      <BaseTab class="tab-btn list-types-btn" name="list" text="Списком" icon="grid-four-fill" :active="viewType === 'list'" @click="viewType = 'list'" />
      <BaseTab class="tab-btn list-types-btn" name="map" text="На карте" icon="map-trifold-regular" :active="viewType === 'map'" @click="viewType = 'map'" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const houseType = defineModel<'all' | '1' | '2'>('houseType', { default: 'all' });
  const viewType = defineModel<'map' | 'list'>('viewType', { default: 'list' });
</script>

<style scoped lang="scss">
  .params {
    position: relative;
  }

  .filter-types {
    display: flex;
    column-gap: 16px;
  }

  .tab-btn {
    white-space: nowrap;
  }

  .list-types {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    margin-top: 12px;
  }

  .list-types-btn {
    width: 165px;
    flex-grow: 1;
    justify-content: center;
  }
</style>
