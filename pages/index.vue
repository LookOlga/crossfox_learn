<template>
  <div class="main-screen">
      <div class="main-screen__text">
        <h2 class="main-screen__title">Проверь свои знания по Javascript</h2>
        <p class="main-screen__desc mt-5">Пройдите тест на тему JavaScript и выявите пробелы в знаниях.<br>После прохождения теста вы сможете просмотреть результаты, ознакомиться с верными и неверными ответами и узнать какие темы стоит подтянуть.</p>
        <nuxt-link to="/js-test" class="mt-5 main-screen__btn btn btn--primary">Начать тест</nuxt-link>
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
  html {
    font-size: 10px;
  }

  .main-screen {
    display: flex;
    align-items: center;
    @media(min-width: 992px) {
      height: 100%;
    }
    @media (max-width: 992px) {
      flex-direction: column-reverse;
      padding: 2rem 0 6rem;
    }

    &__title {
      font-size: 4.4rem;
      max-width: 55rem;
      line-height: 1.2;
    }

    &__btn {
      @media(max-width: 768px) {
        width: 100%;
      }
    }

    &__img {
      @media(min-width: 992px) {
        width: calc(45% - 5rem);
        margin-left: 5rem;
      }

      @media(max-width: 991px) {
        max-width: 60rem;
      }
    }
    &__text {
      @media(min-width: 992px) {
        width: 55%;
      }
    }
  }
</style>