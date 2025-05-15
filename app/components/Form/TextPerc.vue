<template>
  <div class="text">
    Нажимая кнопку, вы&nbsp;подтверждаете, что&nbsp;ознакомились с&nbsp;условиями обработки
    <a class="link-primary" :href="config.links.privicy" target="_blank">персональных данных</a>
    и&nbsp;соглашаетесь с&nbsp;их&nbsp;принятием
  </div>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig().public;
</script>

<style scoped lang="scss">
  .text {
    @include text-body-s-regular-02;
  }
</style>
