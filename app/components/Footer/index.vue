<template>
  <footer class="footer">
    <div class="wrapper">
      <FooterNavMobile
        :houses="houses.data.value ?? []"
        :realeasedHouses="realesedHouses.data.value ?? []"
      />
      <div class="info">
        <div class="logo-row">
          <NuxtLink class="logo-wrap" :to="{ name: 'index' }">
            <img class="w-full" width="95" height="32" src="~/assets/images/logo.svg" alt="Логотип MAAR" />
          </NuxtLink>
          <div class="social">
            <BaseButtonIcon
              tag="a"
              width="32px"
              height="32px"
              padding="8px"
              radius="8px"
              color="white"
              icon="wa"
              :href="config.contacts.links.wa"
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
              :href="config.contacts.links.tg"
              target="_blank"
            />
          </div>
        </div>
        <div class="contacts-rows">
          <div>
            <div class="contacts-label">Связаться с нами</div>
            <div class="contacts-text">
              <a class="contacts-tel" :href="`tel:${config.contacts.phone}`">{{ config.contacts.phone }}</a>
            </div>
          </div>
          <div>
            <div class="contacts-label">Офис продаж</div>
            <div class="contacts-text">
              <div class="contacts-office">
                Московская обл., ГО&nbsp;Истра, д.&nbsp;Покровское, ул.&nbsp;Центральная 27/2, 2&nbsp;эт., офис&nbsp;10 (ТЦ&nbsp;«Покровский»)
              </div>
              <div class="contacts-time">
                Пн — Сб с 9:00 до 18:00<br>Вс — выходой
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-row">
          <div class="contacts-docs">
            <a target="_blank" :href="config.contacts.links.docs">Документация</a>
          </div>
          <div class="producer-text">©&nbsp;MAAR&nbsp;DEVELOPMENT&nbsp;{{ year }}</div>
          <div class="studio-text">Сделано в&nbsp;<span>Yes&nbsp;Idea</span></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig().public;

  const year = getCurrentYear();

  const api = useNuxtApp().$api;

  const [ houses, realesedHouses ] = await Promise.all([
    useAsyncData(() => api.houses.home()),
    useAsyncData(() => api.houses.allRealesed()),
  ]);
</script>

<style scoped lang="scss">
  .footer {
    padding: 80px 0 32px;
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

  .contacts-rows {
    margin-bottom: 32px;

    & > * + * {
      margin-top: 24px;
    }
  }

  .contacts-label {
    margin-bottom: 16px;
    color: var(--color-secondary-04);
    @include text-body-xs-regular-01;
  }

  .contacts-text {
    color: var(--white);
    @include text-body-m-regular-01;
  }

  .contacts-time {
    margin-top: 24px;
  }

  .bottom-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 24px;
    row-gap: 16px;
  }

  .contacts-docs {
    color: var(--color-white);
    width: 100%;
    @include text-body-s-regular-01;
  }

  .studio-text {
    color: var(--color-secondary-04);
    @include text-body-s-regular-01;

    span {
      color: var(--color-white);
    }
  }

  .producer-text {
    color: var(--color-secondary-04);
    @include text-body-xs-regular-01;
  }
</style>
