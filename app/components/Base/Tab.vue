<template>
  <button
    type="button"
    class="tab"
    :class="[
      type,
      active ? `${type}-active` : `${type}-default`,
      `size-${size}`,
      `${type}-${size}`
    ]"
  >
    <span class="icon" v-if="icon">
      <BaseIcon fit :name="icon" />
    </span>
    <span>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      name: string,
      text: string,
      active?: boolean,
      icon?: string,
      size?: '50' | '42' | '32',
      type?: 'primary' | 'secondary',
    }>(),
    {
      size: '42',
      type: 'primary',
      active: false,
    }
  );
</script>

<style scoped lang="scss">
  .tab {
    padding: var(--py) var(--px);
    color: var(--color);
    border-radius: var(--radius);
    display: inline-flex;
    align-items: center;
    column-gap: 12px;
  }

  .icon {
    width: var(--icon-w);
    height: var(--icon-h);
    flex-shrink: 0;
  }

  .primary {
    border-radius: var(--radius);
  }

  .primary-default {
    --color: var(--color-white);
    background: var(--color-base-02);

    &:hover {
      background: var(--color-base-03);
    }

    &:active {
      background: var(--color-base-01);
    }
  }

  .primary-active {
    --color: var(--color-white);
    background: var(--color-primary-01);

    &:hover {
      background: var(--color-primary-03);
    }

    &:active {
      background: var(--color-primary-02);
    }
  }

  .secondary {
    border-bottom: 1px solid var(--border);
  }

  .secondary-default {
    --color: var(--color-white);
    --border: var(--color-base-03);

    &:hover {
      --border: var(--color-base-02);
      background: var(--color-base-02);
    }

    &:active {
      --border: var(--color-base-01);
      background: none;
    }
  }

  .secondary-active {
    --color: var(--color-white);
    --border: var(--color-primary-01);

    &:hover {
      --border: var(--color-primary-03);
      background: var(--color-primary-03);
    }

    &:active {
      --border: var(--color-primary-02);
      background: none;
    }
  }

  .size-50 {
    --icon-w: 32px;
    --icon-h: 32px;
    @include text-body-m-regular-01;
  }

  .size-42 {
    --icon-w: 24px;
    --icon-h: 24px;
    @include text-body-m-regular-01;
  }

  .size-32 {
    --icon-w: 24px;
    --icon-h: 24px;
    @include text-body-s-regular-01;
  }

  .primary-50 {
    --py: 16px;
    --px: 16px;
    --radius: 12px;
  }

  .primary-42 {
    --py: 12px;
    --px: 16px;
    --radius: 12px;
  }

  .primary-32 {
    --py: 8px;
    --px: 12px;
    --radius: 8px;
  }

  .secondary-50 {
    --py: 16px;
    --px: 16px;
    --radius: 0px;
  }

  .secondary-42 {
    --py: 12px;
    --px: 16px;
    --radius: 0px;
  }

  .secondary-32 {
    --py: 8px;
    --px: 12px;
    --radius: 0px;
  }
</style>
