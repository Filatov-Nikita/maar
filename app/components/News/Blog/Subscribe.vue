<template>
  <a class="block" :href="config.contacts.links.tg" target="_blank">
    <div class="title">
      <span class="text-accent">Подписывайтесь на наш</span> Telegram-канал
    </div>
    <div class="subtitle">и узнавайте новости первыми</div>
    <BaseButtonIcon
      tag="div"
      radius="16px"
      width="140px"
      height="140px"
      padding="54px"
      color="primary"
      icon="tg"
    />
  </a>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig().public;
</script>

<style scoped lang="scss">
  .block {
    padding: 24px;
    background: var(--color-base-02);
    border-radius: 16px;

    &:hover {
      background: var(--color-base-03);
    }
  }

  .title {
    text-transform: uppercase;
    margin-bottom: 8px;
    @include text-body-xl-regular-01;
  }

  .text-accent {
    color: var(--color-primary-01);
  }

  .subtitle {
    color: var(--color-secondary-04);
    margin-bottom: 24px;
    @include text-body-m-regular-03;
  }
</style>
