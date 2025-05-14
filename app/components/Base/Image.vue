<template>
  <img :width="width" :height="height" :src="url" />
</template>

<script setup lang="ts">
  const props = defineProps<{
    width: string,
    height: string,
    src: string,
  }>();

  const config = useRuntimeConfig().public;

  const url = computed(() => config.assetsBase + props.src);
</script>
