<template>
  <div>
    <pre>{{ items }}</pre>
  </div>
</template>

<script setup lang="ts">
  import type { HomeHouseOne } from '~/repositories/houses';

  defineProps<{
    items: HomeHouseOne[],
  }>();
</script>
