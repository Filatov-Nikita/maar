<template>
  <BaseModal
    y-pos="bottom"
    x-pos="center"
    animation="slide-right"
    v-model="showed"
  >
    <div class="card">
      <div class="head">
        <p class="h2 uppercase grow">{{ activeOptions.title }}</p>
        <BaseButtonIcon
          tag="button"
          radius="12px"
          color="secondary"
          icon="x-regular"
          padding="16px"
          width="56px"
          height="56px"
          @click="showed = false"
        />
      </div>
      <p class="subtitle">Заполните форму обратной связи, и&nbsp;наш специалист свяжется с&nbsp;вами</p>
      <FeedbackForm />
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
  const { activeOptions, showed } = storeToRefs(useFeedbackStore());
</script>

<style scoped lang="scss">
  .card {
    border-radius: 16px;
    width: 100%;
    padding: 32px 16px;
    background: var(--color-base-02);
  }

  .subtitle {
    margin-bottom: 32px;
    @include text-body-s-regular-03;
  }

  .head {
    display: flex;
    align-items: center;
    column-gap: 16px;
    margin-bottom: 12px;
  }
</style>
