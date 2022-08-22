<template>
  <div class="d-flex align-center main-screen">
      <div class="main-screen__text">
        <h2 class="main-screen__title">Проверь свои знания по Javascript</h2>
        <p class="main-screen__desc mt-5">Пройдите тест на тему JavaScript и выявите пробелы в занниях. После окончания теста вы сможете просмотреть результаты, ознакомиться с верными и неверными ответами и узнать какие темы стоит подтянуть.</p>
        <nuxt-link to="/js-test" class="mt-5 btn btn--primary">Начать тест</nuxt-link>
      </div>
     <div class="main-screen__img">
       <img src="../static/home_page/full_illustr.png"/>
     </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>


<style lang="scss">
  .main-screen {
    height: 100%;
    &__title {
      font-size: 5rem;
      max-width: 65rem;
    }

    &__img {
      width: calc(40% - 5rem);
      margin-left: 5rem;
    }
    &__text {
      width: 60%;
    }
  }
</style>