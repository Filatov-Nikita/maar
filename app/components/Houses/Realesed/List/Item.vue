<template>
  <NuxtLink class="item" :to="{ name: 'realesed-houses-slug', params: { slug: item.code } }">
    <div class="preview-wrap">
      <div class="badges">
        <div class="badge">{{ item.napravlenie }}</div>
        <div class="badge">{{ item.god }}</div>
      </div>
      <BaseImage class="preview" width="344" height="193" :src="item.img" />
    </div>
    <div class="body">
      <div class="name">{{ item.name }}</div>
      <div class="params">
        <span>{{ item.ploshad_doma }} м²</span>
        <span>·</span>
        <span>{{ item.ploshad_uch }} сот</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { HouseRealesedOne } from '@/repositories/houses';

  defineProps<{
    item: HouseRealesedOne,
  }>();
</script>

<style scoped lang="scss">
  .item {
    display: block;
  }

  .preview-wrap {
    position: relative;
  }

  .preview {
    border-radius: 16px;
    margin-bottom: 16px;
  }

  .badges {
    position: absolute;
    left: 16px;
    top: 16px;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .badge {
    border-radius: 8px;
    padding: 6px 12px;
    background: var(--color-white);
    color: var(--color-base-01);
    @include text-body-s-regular-03;
  }

  .name {
    margin-bottom: 8px;
    color: var(--color-white);
    @include text-body-l-regular-02;
  }

  .params {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    color: var(--color-secondary-04);
    @include text-body-s-regular-03;
  }
</style>
