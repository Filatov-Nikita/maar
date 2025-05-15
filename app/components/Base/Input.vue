<template>
  <div class="input" :class="{ 'input--error': error }">
    <div class="wrap">
      <label class="label">{{ label }}</label>
      <input class="native-input" :type="type" v-model="value" :placeholder="placeholder" />
    </div>
    <div class="error" v-if="error">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      label: string,
      placeholder: string,
      type?: 'text' | 'tel' | 'email' | 'number',
      error?: boolean,
      errorMessage?: string,
    }>(),
    {
      type: 'text',
    }
  )

  const value = defineModel<string>({ default: '' });
</script>

<style scoped lang="scss">
  .label {
    display: block;
    width: fit-content;
    color: var(--color-base-04);
    margin-bottom: 12px;
    @include text-body-s-regular-02;
  }

  .native-input {
    display: block;
    width: 100%;
    height: 56px;
    border-radius: 12px;
    background: var(--color-white);
    color: var(--color-secondary-04);
    padding: 16px;
    border: 1px solid var(--color-white);
    @include text-body-s-regular-02;

    &:focus {
      border-color: var(--color-primary-01);
    }
  }

  .input--error .native-input {
    border-color: var(--color-error) !important;
  }

  .error {
    margin-top: 4px;
    color: var(--color-error);
    @include text-body-xs-regular-01;
  }
</style>
