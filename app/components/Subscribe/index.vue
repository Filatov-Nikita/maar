<template>
  <section class="subscribe">
    <div class="cover">
      <h2 class="h2">Подпишитесь<br />на&nbsp;рассылку</h2>
      <p class="text">Получайте эксклюзивные предложения и узнавайте новости раньше других</p>
    </div>
    <SubscribeForm ref="formRef" :form="form" :loading="loading" @submit="send" />
  </section>
</template>

<script setup lang="ts">
  import type { SubscribeForm } from '#components';
  import type { SubscribeBody } from '~/repositories/subscribe';

  const form: SubscribeBody = reactive({
    email: '',
  });

  const alerts = useAlertsStore();

  const api = useNuxtApp().$api;

  const { send, loading } = usePostRequest(
    api.subscribe.create,
    () => form,
    () => {
      form.email = '';
      formRef.value?.reset();
      alerts.create({
        type: 'success',
        title: 'Вы успешно подписались!',
      });
    },
    'Не удалось подписаться',
  );

  const formRef = ref<InstanceType<typeof SubscribeForm> | null>(null)
</script>

<style scoped lang="scss">
  .subscribe {
    border-radius: 16px;
    padding: 16px;
    background: var(--color-base-02);
  }

  .cover {
    border-radius: 16px;
    padding: 20px;
    background: var(--color-base-01);
    margin-bottom: 24px;
  }

  .text {
    margin-top: 12px;
    color: var(--color-secondary-04);
    @include text-body-m-regular-03;
  }
</style>
