<template>
  <div>
    <div class="head" @click="showed = !showed">
      <span class="label">{{ label }}</span>
      <span class="icon-wrap" :class="{ 'icon-wrap--active': showed }">
        <BaseIcon name="caret-down-regular" fit />
      </span>
    </div>
    <SlideUpDown :active="showed" :duration="300">
      <slot></slot>
    </SlideUpDown>
  </div>
</template>

<script setup lang="ts">
  //@ts-ignore
  import SlideUpDown from 'vue-slide-up-down';

  defineProps<{
    label: string,
  }>();

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .head {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 12px;
  }

  .label {
    flex-grow: 1;
    color: var(--color-white);
    @include text-body-m-regular-01;
  }

  .icon-wrap {
    width: 20px;
    height: 20px;
    transition: transform 100ms;

    &--active {
      transform: rotate(180deg);
    }
  }
</style>
