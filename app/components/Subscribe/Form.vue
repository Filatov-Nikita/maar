<template>
  <VForm ref="formRef" :validationSchema="schema" @submit="$emit('submit')">
    <BaseVInput
      class="email"
      name="email"
      label="E-mail"
      placeholder="ivanov@mail.com"
      v-model="form.email"
    />
    <BaseButton class="w-full" type="submit" :disabled="loading">
      Отправить
    </BaseButton>
    <FormTextPerc class="perc" />
  </VForm>
</template>

<script setup lang="ts">
  import { Form as VForm } from 'vee-validate';
  import { object, string } from 'yup';
  import type { SubscribeBody } from '~/repositories/subscribe';

  defineProps<{
    form: SubscribeBody,
    loading: boolean,
  }>();

  defineEmits<{
    (event: 'submit'): void,
  }>();

  defineExpose({
    reset: () => formRef.value?.resetForm(),
  });

  const formRef = ref<InstanceType<typeof VForm> | null>(null);

  const schema = object({
    email: string().email().required(),
  });
</script>

<style scoped lang="scss">
  .perc {
    margin-top: 12px;
    color: var(--color-secondary-04);
  }

  .email {
    margin-bottom: 24px;
  }
</style>
