<template>
  <div>
    <FeedbackForm ref="formRef" :form="form" :loading="loading" @submit="send" />
  </div>
</template>

<script setup lang="ts">
  import type { FeedbackForm } from '#components';
  import type { FeedBackBody } from '@/repositories/feedback';

  const api = useNuxtApp().$api;

  const form: FeedBackBody = reactive({
    name: '',
    phone: '',
    time: '',
  });

  const alerts = useAlertsStore();

  const { send, loading } = usePostRequest(
    api.feedback.create,
    () => form,
    () => {
      reset();
      alerts.create({ type: 'success', title: 'Данные успешно отправлены!' });
    },
    'Не удалось отправить данные!',
  );

  const formRef = ref<InstanceType<typeof FeedbackForm> | null>(null);

  function reset() {
    form.name = '';
    form.phone = '';
    form.time = '';
    formRef.value?.reset();
  }
</script>
