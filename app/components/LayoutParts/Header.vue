<template>
  <header class="header">
    <div class="wrapper">
      <div class="wrap">
        <NuxtLink class="logo-wrap" :to="{ name: 'index' }">
          <img class="w-full" width="95" height="32" src="~/assets/images/logo.svg" alt="Логотип MAAR" />
        </NuxtLink>
        <BurgerMenuButton />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .header {
    padding: 12px 0;
    background: var(--color-base-01-75);
  }

  .logo-wrap {
    width: 95px;

    &:hover {
      opacity: 0.8;
    }
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 40px;
  }
</style>
