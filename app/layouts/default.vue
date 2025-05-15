<template>
  <div>
    <Header class="l-header" />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'MAAR DEVELOPMENT',
  });
</script>

<style scoped lang="scss">
  .l-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5000;
  }
</style>
