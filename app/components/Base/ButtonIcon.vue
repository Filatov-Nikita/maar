<template>
  <component class="btn-icon" :class="[ `btn-icon--${color}` ]" :is="tag">
    <BaseIcon fit :name="icon" />
  </component>
</template>

<script setup lang="ts">
  defineProps<{
    tag: string,
    icon: string,
    radius: string,
    padding: string,
    width: string,
    height: string,
    color: 'white' | 'dark-01' | 'outline' | 'dark-02' | 'primary' | 'secondary',
  }>();
</script>

<style scoped lang="scss">
  .btn-icon {
    padding: v-bind(padding);
    width: v-bind(width);
    height: v-bind(height);
    border-radius: v-bind(radius);

    &--white {
      background: var(--color-white);
      color: var(--color-base-02);

      &:hover {
        background: var(--color-secondary-03);
      }
    }

    &--dark-01 {
      background: var(--color-base-01);
      color: var(--color-white);
    }

    &--outline {
      border: 1px solid var(--color-base-03);
      color: var(--color-primary-01);
    }

    &--dark-02 {
      background: var(--color-base-02);
      color: var(--color-white);
    }

    &--primary {
      background: var(--color-primary-01);
      color: var(--color-white);
    }

    &--secondary {
      background: var(--color-secondary-01);
      color: var(--color-white);

      &:hover {
        background: var(--color-secondary-02);
      }
    }
  }
</style>
