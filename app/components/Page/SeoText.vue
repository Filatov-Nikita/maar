<template>
  <section class="block">
    <h2 class="h2">{{ title }}</h2>
    <div class="body" v-if="text" v-html="text"></div>
    <div class="body" v-else>
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
  defineProps<{
    title: string,
    text?: string,
  }>();
</script>

<style scoped lang="scss">
  .block {
    border-radius: 24px;
    padding: 32px 16px;
    background: var(--color-base-02);
  }

  .body {
    margin-top: 16px;
    color: var(--color-secondary-04);
    @include text-body-s-regular-04;
  }
</style>
