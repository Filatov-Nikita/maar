<template>
  <HomeSectionMain />
  <div class="wrapper section-mt">
    <HousesPicker />
    <NewsBlog class="section-mt" />
    <Feedback
      class="section-mt"
    />
    <PageNext class="section-mt" :to="{ name: 'news' }" name="Новости" />
    <PageSeoText class="section-mt" title="MAAR DEVELOPMENT">
      <p>
        Наша компания являемся ведущими экспертами в сфере недвижимости и предлагаем широкий спектр услуг, связанных с покупкой, продажей и арендой недвижимости. Независимо от того, ищете ли вы идеальный дом, коммерческое помещение или инвестиционную возможность, наша команда профессионалов готова помочь вам реализовать ваши цели.
      </p>
      <br>
      <p>test</p>
    </PageSeoText>
  </div>
</template>

<script setup lang="ts">

</script>
