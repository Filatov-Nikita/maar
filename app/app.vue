<template>
  <NuxtLoadingIndicator />
  <NuxtRouteAnnouncer />
  <ClientOnly>
    <Alerts />
    <FeedbackModal />
  </ClientOnly>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import 'animate.css';
</script>
