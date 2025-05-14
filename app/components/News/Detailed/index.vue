<template>
  <div>
    <h1 class="title">{{ body.name }}</h1>
    <div class="date">{{ body.date }}</div>
    <div class="photo-wrap">
      <BaseImage class="w-full" width="472" height="265" :src="body.img" />
    </div>
    <div class="content" v-html="body.detail_text"></div>
  </div>
</template>

<script setup lang="ts">
  import type { NewsOne } from '@/repositories/news';

  defineProps<{
    body: NewsOne,
  }>();
</script>


<style scoped lang="scss">
  .title {
    margin-bottom: 16px;
  }

  .date {
    margin-bottom: 32px;
  }

  .photo-wrap {
    margin-bottom: 32px;
  }

  .content {
    @include text-body-m-regular-05;
  }
</style>
