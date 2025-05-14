<template>
  <VForm ref="formRef" class="form" :validationSchema="schema" @submit="$emit('submit')">
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
    <div class="text">
      Нажимая кнопку, вы подтверждаете, что ознакомились с условиями обработки
      <a class="link-primary" :href="config.links.privicy" target="_blank">персональных данных</a>
      и соглашаетесь с их принятием
    </div>
  </VForm>
</template>

<script setup lang="ts">
  import { Form as VForm } from 'vee-validate';
  import { object, string } from 'yup';
  import { isPhoneTest } from '@/validation/rules';
  import type { FeedBackBody } from '@/repositories/feedback';

  defineProps<{
    form: FeedBackBody,
    loading: boolean,
  }>();

  defineEmits<{
    (event: 'submit'): void,
  }>();

  const schema = object({
    name: string().required().label('Имя'),
    phone: string().required().test(isPhoneTest).label('Телефон'),
    time: string().required().label('Время'),
  });

  const config = useRuntimeConfig().public;

  const formRef = ref<InstanceType<typeof VForm> | null>(null);

  defineExpose({
    reset: () => formRef.value?.resetForm(),
  });
</script>

<style scoped lang="scss">
  .form {
    padding: 16px;
  }

  .fields {
    margin-bottom: 24px;

    & > * + * {
      margin-top: 16px;
    }
  }

  .text {
    margin-top: 12px;
    color: var(--color-secondary-04);
    @include text-body-s-regular-02;
  }
</style>
