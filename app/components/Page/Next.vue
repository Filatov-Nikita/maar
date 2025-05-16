<template>
  <NuxtLink class="next" :to="to">
    <div class="title">Cледующая страница</div>
    <div class="name">{{ name }}</div>
    <div class="text">
      <span>Перейти</span>
      <span class="icon-wrap">
        <BaseIcon name="arrow-up-right-regular" fit />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router';

  defineProps<{
    name: string,
    to: RouteLocationRaw,
  }>();
</script>

<style scoped lang="scss">
  .next {
    display: block;
    text-align: center;
    padding: 32px 24px;
    border-radius: 16px;
    background: var(--color-base-02);

    &:hover {
      background: var(--color-base-03);
    }
  }

  .icon-wrap {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .name {
    text-transform: uppercase;
    margin-bottom: 16px;
    @include text-body-xl-regular-01
  }

  .text {
    display: inline-flex;
    align-items: center;
    column-gap: 8px;
    @include text-body-m-regular-01;
  }

  .title {
    color: var(--color-secondary-04);
    text-transform: uppercase;
    margin-bottom: 16px;
    @include text-body-xs-regular-01;
  }
</style>
