<template>
  <section class="relative">
    <h2 class="h2 uppercase">
      <span class="text-primary-01">Готовые и строящиеся</span> домовладения
    </h2>

    <HousesPickerParams
      class="picker-params"
      v-model:houseType="houseType"
      v-model:viewType="viewType"
    />

    <Transition
      mode="out-in"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
    >
      <HousesPickerMap v-if="viewType === 'map'" :items="data" />
      <HousesPickerList v-else :items="data" />
    </Transition>

    <BaseInnerLoading :showed="res.status.value === 'pending'" />
  </section>
</template>

<script setup lang="ts">
  const api = useNuxtApp().$api;

  const viewType = ref<'map' | 'list'>('list');
  const houseType = ref<'all' | '1' | '2'>('all');

  const res = await useAsyncData(() => {
    return api.houses.home({
      type: houseType.value !== 'all' ? houseType.value : undefined,
    });
  }, { watch: [ houseType ] });
  const data = useDataOrFail(res);
</script>

<style scoped lang="scss">
  .picker-params {
    margin-top: 24px;
    margin-bottom: 32px;
  }
</style>
