<template>
  <NuxtLink class="item" to="/">
    <div class="photo-wrap">
      <BaseButtonIcon
        class="badge"
        tag="div"
        radius="12px"
        color="primary"
        icon="key-regular"
        padding="8px"
        width="32px"
        height="32px"
      />
      <BaseImage class="photo" width="343" height="193" :src="item.img" />
    </div>
    <div class="name">{{ item.name }}</div>
    <div class="params">
      <span>{{ item.area }} м²</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { HomeHouseOne } from '~/repositories/houses';

  defineProps<{
    item: HomeHouseOne,
  }>();
</script>


<style scoped lang="scss">
  .item {
    display: block;
  }

  .photo-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: 16px;
  }

  .photo {
    width: 100%;
  }

  .name {
    margin-bottom: 8px;
    @include text-body-l-regular-01;
  }

  .params {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    color: var(--color-secondary-04);
    @include text-body-s-regular-01;
  }

  .badge {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 10;
  }
</style>
