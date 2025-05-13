<template>
  <teleport to="body">
    <div class="alerts">
      <transition-group
        leave-active-class="animate__animated animate__fadeOutDown animate__faster"
        enter-active-class="animate__animated animate__fadeInUp animate__faster"
      >
        <AlertsItem
          v-for="item in items"
          :key="item.key"
          :item="item"
          @close="alertsStore.remove"
        />
      </transition-group>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  const alertsStore = useAlertsStore();
  const { items } = storeToRefs(alertsStore);
</script>

<style scoped lang="scss">
  .alerts {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    padding: 16px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    pointer-events: none;
  }
</style>
