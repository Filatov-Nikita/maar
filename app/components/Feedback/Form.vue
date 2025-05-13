<template>
  <VForm class="form" :validationSchema="schema" @submit="1">
    <div class="fields">
      <BaseVInput
        name="name"
        label="Ваше имя"
        placeholder="Иван"
      />
      <BaseVInput
        name="phone"
        label="Телефон"
        placeholder="+7 (999) 999-99-99"
      />
      <BaseVInput
        name="time"
        label="Удобное время для звонка"
        placeholder="14:00 - 16:00"
      />
    </div>
    <BaseButton class="w-full" type="submit">Отправить</BaseButton>
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

  const schema = object({
    name: string().required().label('Имя'),
    phone: string().required().test(isPhoneTest).label('Телефон'),
    time: string().required().label('Время'),
  });

  const config = useRuntimeConfig().public;
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
