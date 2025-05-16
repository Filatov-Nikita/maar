<template>
  <div class="badge" :class="[`size-${size}`, `type-${type}-${color}`]">
    <span class="icon" v-if="icon">
      <BaseIcon :name="icon" fit />
    </span>
    <span>{{ text }}</span>
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      type?: 'primary' | 'outline',
      size?: '56' | '40',
      color?: 'white' | 'dark',
      icon?: string,
      text: string,
    }>(),
    {
      type: 'primary',
      size: '40',
      color: 'dark',
    }
  );
</script>

<style scoped lang="scss">
  .badge {
    display: inline-flex;
    align-items: center;
    border-radius: var(--radius);
    padding: var(--py) var(--px);
    border: 1px solid var(--border);
    color: var(--color);
    column-gap: var(--gap);
  }

  .icon {
    width: var(--icon-w);
    height: var(--icon-h);
    flex-shrink: 0;
  }

  .size-56 {
    --py: 12px;
    --px: 16px;
    --radius: 12px;
    --icon-w: 32px;
    --icon-h: 32px;
    --gap: 12px;
    @include text-body-m-regular-01;
  }

  .size-40 {
    --py: 8px;
    --px: 12px;
    --radius: 8px;
    --icon-w: 24px;
    --icon-h: 24px;
    --gap: 12px;
    @include text-body-s-regular-01;
  }

  .type-primary-dark {
    --border: var(--color-base-03);
    --color: var(--color-white);
    background: var(--color-base-03);
  }

  .type-primary-white {
    --border: var(--color-white);
    --color: var(--color-base-03);
    background: var(--color-white);
  }

  .type-outline-white {
    --border: var(--color-base-03);
    --color: var(--color-white);
  }

  .type-outline-dark {
    --border: var(--color-base-03);
    --color: var(--color-white);
  }
</style>
