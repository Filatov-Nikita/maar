<template>
  <button class="btn">
    <span>Меню</span>
    <span class="icon">
      <BaseIcon name="list-regular" fit />
    </span>
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px;
    border-radius: 8px;
    background: var(--color-white);
    color: var(--color-base-01);
    @include text-body-s-regular-01;

    &:hover {
      opacity: 0.8;
    }
  }

  .icon {
    width: 16px;
    height: 16px;
  }
</style>
