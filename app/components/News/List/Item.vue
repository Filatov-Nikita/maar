<template>
  <NuxtLink class="item" :to="{ name: 'news-slug', params: { slug: item.code } }">
    <BaseImage class="photo" width="300" height="300" :src="item.img" loading="lazy" />
    <div class="body">
      <div class="name">{{ item.name }}</div>
      <div class="date">{{ item.date }}</div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { NewsListItem } from '@/repositories/news';

  defineProps<{
    item: NewsListItem,
  }>();
</script>

<style scoped lang="scss">
  .item {
    display: block;
    position: relative;
    border-radius: 16px;
    overflow: hidden;

    &:hover {
      .photo {
        transform: scale(1.05);
      }

      .name {
        opacity: 0.8;
      }
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 10;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), rgba(207, 155, 131, 0.1);
    }
  }

  .photo {
    transition: transform 200ms;
    width: 100%;
  }

  .body {
    padding: 24px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 15;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .name {
    margin-bottom: 16px;
    @include text-body-l-regular-02;
  }

  .date {
    color: var(--color-white-65);
    @include text-body-s-regular-02;
  }
</style>
