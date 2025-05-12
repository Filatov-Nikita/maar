<template>
  <div class="menu" ref="menuRef">
    <div class="head">
      <span class="title">Меню</span>
      <button class="close-btn" @click="$emit('close')">
        <BaseIcon fit name="x-regular" />
      </button>
    </div>
    <nav class="nav">
      <div class="row-primary">
        <NuxtLink class="link-primary" to="#">
          Домовладения
        </NuxtLink>
        <NuxtLink class="link-primary" to="#">
          Строительство
        </NuxtLink>
        <NuxtLink class="link-primary" to="#">
          Дизайн интерьеров
        </NuxtLink>
      </div>
      <div class="row-secondary">
        <NuxtLink class="link-secondary" to="#">
          О компании
        </NuxtLink>
        <NuxtLink class="link-secondary" to="#">
          Реализованные объекты
        </NuxtLink>
        <NuxtLink class="link-secondary" to="#">
          Участки
        </NuxtLink>
        <NuxtLink class="link-secondary" to="#">
          Архитектурное бюро
        </NuxtLink>
        <NuxtLink class="link-secondary" to="#">
          Private management service
        </NuxtLink>
        <NuxtLink class="link-secondary" to="#">
          Новости
        </NuxtLink>
        <NuxtLink class="link-secondary" to="#">
          Контакты
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  defineEmits<{ (event: 'close'): void, }>();
</script>

<style scoped lang="scss">
  .menu {
    width: 100%;
    max-width: 200px;
    padding: 12px 16px;
    background: var(--color-white);
    border-radius: 8px;
    @include shadow-200;
  }

  .close-btn {
    width: 24px;
    height: 24px;
    padding: 4px;
    color: var(--color-base-02);

    &:hover {
      color: var(--color-primary-01);
    }
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-secondary-03);
    margin-bottom: 12px;
  }

  .title {
    color: var(--color-secondary-01);
    @include text-body-s-regular-01;
  }

  .row-primary {
    margin-bottom: 8px;
  }

  .link-primary {
    padding: 4px 0;
    display: block;
    color: var(--color-base-01);
    @include text-body-m-regular-02;

    &:hover {
      color: var(--color-primary-01);
    }
  }

  .link-secondary {
    padding: 4px 0;
    display: block;
    color: var(--color-base-04);
    @include text-body-s-regular-02;

    &:hover {
      color: var(--color-primary-01);
    }
  }
</style>
