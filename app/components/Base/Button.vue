<template>
  <component
    class="button"
    :class="[ `color-${color}`, `size-${size}` ]"
    :is="tag"
    :type="isBtn ? type : undefined"
    :disabled="isBtn ? disabled : undefined"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      tag?: string,
      size?: '56' | '42' | '36',
      color?: 'primary' | 'secondary',
      type?: 'button' | 'submit',
      disabled?: boolean,
    }>(),
    {
      tag: 'button',
      size: '56',
      color: 'primary',
      type: 'button',
      disabled: false,
    },
  );

  const isBtn = computed(() => props.tag === 'button');
</script>

<style scoped lang="scss">
  .button {
    padding: var(--py) var(--px);
    background: var(--bg-color);
    color: var(--text-color);
    border-radius: var(--radius);

    &:disabled {
      --bg-color: var(--color-base-02) !important;
      --text-color: var(--color-secondary-01) !important;
    }
  }

  .color-primary {
    --bg-color: var(--color-primary-01);
    --text-color: var(--color-white);

    &:hover {
      --bg-color: var(--color-primary-03);
    }

    &:active {
      --bg-color: var(--color-primary-02);
    }
  }

  .color-secondary {
    --bg-color: var(--color-secondary-01);
    --text-color: var(--color-white);

    &:hover {
      --bg-color: var(--color-secondary-02);
    }

    &:active {
      --bg-color: var(--color-secondary-04);
    }
  }

  .size-56 {
    --py: 20px;
    --px: 24px;
    --radius: 12px;
    @include text-body-m-regular-01;
  }

  .size-42 {
    --py: 12px;
    --px: 16px;
    --radius: 12px;
    @include text-body-m-regular-01;
  }

  .size-36 {
    --py: 10px;
    --px: 12px;
    --radius: 8px;
    @include text-body-s-regular-01;
  }
</style>
