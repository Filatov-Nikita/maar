<template>
  <footer class="footer">
    <div class="wrapper">
      <FooterNavMobile />
      <div class="info">
        <div class="logo-row">
          <div class="logo-wrap">
            <img class="w-full" width="95" height="32" src="~/assets/images/logo.svg" alt="Логотип MAAR" />
          </div>
          <div class="social">
            <BaseButtonIcon
              tag="a"
              width="32px"
              height="32px"
              padding="8px"
              radius="8px"
              color="white"
              icon="wa"
              href="#"
              target="_blank"
            />
            <BaseButtonIcon
              tag="a"
              width="32px"
              height="32px"
              padding="8px"
              radius="8px"
              color="white"
              icon="tg"
              href="#"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .footer {
    padding: 32px 0;
  }

  .info {
    margin-top: 40px;
    border-top: 1px solid var(--color-base-02);
    padding-top: 40px;
  }

  .logo-wrap {
    width: 95px;

    &:hover {
      opacity: 0.8;
    }
  }

  .logo-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 24px;
  }

  .social {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
  }
</style>
