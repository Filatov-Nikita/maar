<template>
  <div class="alert" :class="[ `color-${item.type}` ]">
    <div v-if="item.icon" class="icon-wrap">
      <BaseIcon :name="item.icon" fit />
    </div>
    <div class="body">
      <p class="title" v-if="item.title">{{ item.title }}</p>
      <p class="text" v-if="item.text">{{ item.text }}</p>
    </div>
    <button class="close-btn" @click="$emit('close', item.key)">
      <BaseIcon name="x-regular" fit />
    </button>
  </div>
</template>

<script setup lang="ts">
  import type { Item } from  '@/stores/alerts';

  defineProps<{
    item: Item,
  }>();

  defineEmits<{
    (event: 'close', key: number): void,
  }>();
</script>

<style scoped lang="scss">
  .alert {
    pointer-events: all;
    width: 100%;
    max-width: 400px;
    padding: 12px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.08), -2px 9px 10px 0 rgba(0, 0, 0, 0.07), -4px 21px 13px 0 rgba(0, 0, 0, 0.03), -7px 37px 15px 0 rgba(0, 0, 0, 0.01), -12px 58px 17px 0 rgba(0, 0, 0, 0);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
  }

  .color-success {
    background: var(--color-success);
    color: var(--color-white);
  }

  .color-error {
    background: var(--color-error);
    color: var(--color-white);
  }

  .icon-wrap {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 50%;
  }

  .body {
    padding-top: 3px;
    flex-grow: 1;
  }

  .title {
    @include text-body-m-regular-01;
  }

  .text {
    margin-top: 12px;
    @include text-body-s-regular-01;
  }

  .close-btn {
    width: 24px;
    height: 24px;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
