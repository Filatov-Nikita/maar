<template>
  <button class="btn">
    Меню
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .btn {
    padding: 12px;
    border-radius: 8px;
    background: var(--color-white);
    color: var(--color-base-01);
    @include text-body-s-regular-01;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
