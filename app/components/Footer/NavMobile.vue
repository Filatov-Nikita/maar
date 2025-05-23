<template>
  <nav>
    <div class="row-primary">
      <FooterSlideItem label="Домовладения">
        <ul class="list">
          <li
            class="list-item"
            v-for="house in houses"
            :key="house.id"
          >
            <NuxtLink :to="{ name: 'houses-slug', params: { slug: house.code } }">
              {{ house.name }}
            </NuxtLink>
          </li>
        </ul>
      </FooterSlideItem>
      <FooterSlideItem label="Реализованные объекты">
        <ul class="list">
          <li
            class="list-item"
            v-for="house in realeasedHouses"
            :key="house.code"
          >
            <NuxtLink :to="{ name: 'realesed-houses-slug', params: { slug: house.code } }">
              {{ house.name }}
            </NuxtLink>
          </li>
        </ul>
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
      <NuxtLink class="link-primary" :to="{ name: 'news' }">
        Новости
      </NuxtLink>
      <NuxtLink class="link-primary" to="#">
        Контакты
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import type { HomeHouseOne, HouseRealesedOne } from '@/repositories/houses';

  defineProps<{
    houses: HomeHouseOne[],
    realeasedHouses: HouseRealesedOne[],
  }>();
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

  .list {
    & > * + * {
      margin-top: 16px;
    }
  }

  .list-item {
    color: var(--color-secondary-04);
    @include text-body-s-regular-01;
  }
</style>
