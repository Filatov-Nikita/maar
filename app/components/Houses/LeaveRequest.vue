<template>
  <div class="card">
    <p class="title" v-html="title"></p>
    <p class="text" v-html="text"></p>
    <BaseButton class="w-full" @click="onClick">Оставить заявку</BaseButton>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string,
    text: string,
    options?: Partial<FeedbackOptions>,
  }>();

  const feedback = useFeedbackStore();

  function onClick() {
    feedback.setValue(true, props.options);
  }
</script>

<style scoped lang="scss">
  .card {
    border-radius: 16px;
    padding: 16px;
    background: var(--color-base-02);
  }

  .title {
    margin-bottom: 8px;
    @include text-body-l-regular-01;
  }

  .text {
    margin-bottom: 16px;
    color: var(--color-base-04);
    @include text-body-s-regular-03;
  }
</style>
