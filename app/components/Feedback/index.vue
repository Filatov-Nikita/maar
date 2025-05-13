<template>
  <div>
    <FeedbackForm :form="form" :loading="loading" @submit="send" />
  </div>
</template>

<script setup lang="ts">
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
      alerts.create({ type: 'success', title: 'Данные успешно отправлены!' });
    },
    'Не удалось отправить данные!',
  );
</script>
