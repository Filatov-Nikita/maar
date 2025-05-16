<template>
  <VForm ref="formRef" class="form" :validationSchema="schema" @submit="send">
    <div class="fields">
      <BaseVInput
        name="name"
        label="Ваше имя"
        placeholder="Иван"
        v-model="form.name"
      />
      <BaseVInput
        name="phone"
        label="Телефон"
        placeholder="+7 (999) 999-99-99"
        v-model="form.phone"
      />
      <BaseVInput
        name="time"
        label="Удобное время для звонка"
        placeholder="14:00 - 16:00"
        v-model="form.time"
      />
    </div>
    <BaseButton class="w-full" type="submit" :disabled="loading">
      Отправить
    </BaseButton>
    <FormTextPerc class="perc" />
  </VForm>
</template>

<script setup lang="ts">
  import { Form as VForm } from 'vee-validate';
  import { object, string } from 'yup';
  import { isPhoneTest } from '@/validation/rules';
  import type { FeedBackBody } from '@/repositories/feedback';

  const schema = object({
    name: string().required().label('Имя'),
    phone: string().required().test(isPhoneTest).label('Телефон'),
    time: string().required().label('Время'),
  });

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

  const formRef = ref<InstanceType<typeof VForm> | null>(null);

  function reset() {
    form.name = '';
    form.phone = '';
    form.time = '';
    formRef.value?.resetForm();
  }
</script>

<style scoped lang="scss">
  .fields {
    margin-bottom: 24px;

    & > * + * {
      margin-top: 16px;
    }
  }

  .perc {
    margin-top: 12px;
    color: var(--color-secondary-04);
  }
</style>
