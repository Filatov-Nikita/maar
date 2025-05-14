<template>
  <BaseInput
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :error="!!errorMessage"
    :errorMessage="errorMessage"
    v-model="value"
  />
</template>

<script setup lang="ts">
  import { useField, type RuleExpression } from 'vee-validate';

  const props = defineProps<{
    label: string,
    placeholder: string,
    type?: 'text' | 'tel' | 'email' | 'number',
    name: string,
    rules?: RuleExpression<string>,
    modelValue: string,
  }>();

  defineEmits<{
    (event: 'update:modelValue', value: string): void,
  }>();

  const { value, errorMessage } = useField(props.name, props.rules, {
    syncVModel: true,
    validateOnValueUpdate: true,
  });
</script>
