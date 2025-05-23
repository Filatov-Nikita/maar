<template>
  <div class="map-wrap">
    <yandex-map
        v-model="map"
        :settings="{
          location: {
            center,
            zoom: 10,
          },
        }"
        width="100%"
        height="580px"
    >
      <yandex-map-marker
        v-for="item in items"
        :key="item.id"
        :settings="{ coordinates: parseCoords(item.coordinates) }"
      >
        <NuxtLink :to="{ name: 'news' }" custom v-slot="{ href, navigate }">
          <BaseButtonIcon
            class="block"
            tag="a"
            color="dark-01"
            width="40px"
            height="40px"
            radius="12px"
            padding="8px"
            :icon="item.type === HouseStatus.Process ? 'hammer-fill' : 'key-fill'"
            :href="href"
            @click="navigate"
          />
        </NuxtLink>
      </yandex-map-marker>
      <yandex-map-default-scheme-layer :settings="{ customization }" />
      <yandex-map-default-features-layer/>
    </yandex-map>
  </div>
</template>

<script setup lang="ts">
  import type { HomeHouseOne } from '~/repositories/houses';
  import type { YMap, LngLat, VectorCustomization } from '@yandex/ymaps3-types';
  import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapMarker
  } from 'vue-yandex-maps';
  import { HouseStatus } from '@/consts/houses';

  const props = defineProps<{
    items: HomeHouseOne[],
  }>();

  const map = shallowRef<YMap | null>(null);

  const center = computed<LngLat>(() => {
    if(!props.items[0]) return [37.617644, 55.755819];
    return parseCoords(props.items[0].coordinates);
  });

  const customization = shallowRef<VectorCustomization>([
    {
      tags: {
        any: ['water'],
      },
      elements: 'geometry',
      stylers: [
        {
          color: '#CACCDE',
        },
      ],
    },
  {
    tags: {
      any: ['landscape', 'admin', 'land', 'transit'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#dddee8',
      },
    ],
  },
  {
    tags: {
      any: ['road'],
    },
    elements: 'geometry',
    stylers: [
      {
        color: '#FDFEFE',
      },
    ],
  },
]);
</script>

<style scoped lang="scss">
  .map-wrap {
    border-radius: 16px;
    overflow: hidden;
  }
</style>
