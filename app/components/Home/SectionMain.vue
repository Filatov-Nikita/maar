<template>
  <div class="main">
    <div class="wrap">
      <div class="body">
        <div class="wrapper">
          <h1 class="h1">MAAR DEVELOPMENT</h1>
          <p class="text">Строительство элитных резиденций<br/>в лучших локациях Москвы и Московской области</p>
        </div>
      </div>
      <picture class="poster">
        <source media="(min-width: 720px)" width="2500" height="1406" srcset="~/assets/images/main.jpeg">
        <img src="~/assets/images/main-sm.jpeg" width="1200" height="2249" alt="" />
      </picture>
      <div class="overlay"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .main {
    position: relative;

    &::after {
      content: "";
      display: block;
      padding-top: 178.2%;

      @include md {
        padding-top: 57.1%;
      }
    }
  }

  .wrap {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
  }

  .poster {
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -2;
    }
  }

  .h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: var(--l-spacing-base);
  }

  .text {
    margin-top: 8px;
    line-height: 1.3;
    letter-spacing: var(--l-spacing-base);
  }

  .overlay {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 45.88%, rgba(0, 0, 0, 0.52) 100%);
  }

  .body {
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 24px;
  }
</style>
