<template>
  <BurgerMenuButton ref="btn" @click="showed = !showed" />
  <Transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
    <BurgerMenuNav ref="nav" v-show="showed" @close="showed = false" :style="floatingStyles" />
  </Transition>
</template>

<script setup lang="ts">
  import Nav from './Nav.vue';
  import Button from './Button.vue';
  import { autoUpdate, offset, shift, useFloating } from '@floating-ui/vue';

  const btn = ref<InstanceType<typeof Button> | null>(null);
  const nav = ref<InstanceType<typeof Nav> | null>(null);

  const reference = computed(() => btn.value?.$el);
  const tooltip = computed(() => nav.value?.$el);

  const showed = ref(false);

  const { floatingStyles } = useFloating(
    reference,
    tooltip,
    {
      placement: 'bottom-end',
      middleware: [shift(), offset(10)],
      whileElementsMounted: autoUpdate,
    }
  );
</script>
