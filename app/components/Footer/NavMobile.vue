<template>
  <nav>
    <div class="row-primary">
      <FooterSlideItem label="Домовладения">
        <div>
          1
        </div>
      </FooterSlideItem>
      <FooterSlideItem label="Реализованные объекты">
        <div>
          1
        </div>
      </FooterSlideItem>
      <FooterSlideItem label="Архитектурное бюро">
        <div>
          1
        </div>
      </FooterSlideItem>
      <FooterSlideItem label="Участки">
        <div>
          1
        </div>
      </FooterSlideItem>
    </div>
    <div class="row-secondary">
      <NuxtLink class="link-primary" to="#">
        Строительство
      </NuxtLink>
      <NuxtLink class="link-primary" to="#">
        Дизайн интерьеров
      </NuxtLink>
      <NuxtLink class="link-primary" to="#">
        Клиентский сервис
      </NuxtLink>
      <NuxtLink class="link-primary" to="#">
        О компании
      </NuxtLink>
      <NuxtLink class="link-primary" to="#">
        Новости
      </NuxtLink>
      <NuxtLink class="link-primary" to="#">
        Контакты
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .link-primary {
    display: block;
    width: 100%;
    color: var(--color-white);
    @include text-body-m-regular-01;
  }

  .row-primary {
    margin-bottom: 24px;
  }

  .row-secondary, .row-primary {
    & > * + * {
      margin-top: 24px;
    }
  }
</style>
