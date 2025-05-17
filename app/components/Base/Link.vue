<template>
  <component class="btn-link" :is="tag" >
    <span class="icon-left" v-if="iconLeft">
      <BaseIcon fit :name="iconLeft" />
    </span>
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      tag?: string,
      iconLeft?: string,
    }>(),
    {
      tag: 'a',
    }
  );
</script>


<style scoped lang="scss">
  .btn-link {
    display: inline-flex;
    align-items: center;
    column-gap: 8px;
    --color-active: var(--color-secondary-01);
    @include text-body-m-regular-01;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      color: var(--color-active);
    }
  }

  .icon-left {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
</style>
