<template>
  <div class="cover">
    <div class="wrapper body-wrap">
      <PageBreadcrumbs class="breadcrumbs" />
      <h1 class="h1" v-html="title"></h1>
    </div>
    <img class="photo" src="@/assets/images/main.jpeg" />
  </div>
</template>

<script setup lang="ts">
  import type { Item } from '@/stores/breadcrumbs';

  const props = defineProps<{
    title: string,
    breadcrumbs: Item[],
  }>();

  const h = ref('0px');

  onMounted(() => {
    executeWhenReady(() => {
      h.value = getElementHeight('.header') + 'px';
    });
  });

  const breadcrumbs = useBreadcrumbsStore();

  breadcrumbs.set(props.breadcrumbs);
</script>

<style scoped lang="scss">
  .cover {
    position: relative;
    min-height: 600px;
    padding: calc(v-bind(h) + 32px) 0 24px;
    display: flex;
    flex-direction: column;
  }

  .body-wrap {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .photo {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    object-fit: cover;
    z-index: -1;
  }

  .breadcrumbs {
    @include text-body-m-regular-01;
  }
</style>
