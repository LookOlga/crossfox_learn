<template>
  <div class="donation-page page">
    <section>
      <div class="page__section-heading">
        <Icon id="donut-icon" width="5" height="5" class="page__heading-icon" />
        <h2 class="page__title text-h2 font-weight-bold">
          Поддержите наш проект!
        </h2>
      </div>
      <p class="donation-page__desc">
        Наша миссия нести пользу в этот мир и сообщество разработчиков, поэтому
        мы создали платформу, которая будет помогать новичкам во фронтенде.
      </p>
      <p class="donation-page__desc">
        Будем рады вашей поддержке! Вы можете внести пожертвование одним из
        предложенных ниже способов.
      </p>
      <ul class="donation-page__links">
        <li class="donation-page__item">
          <a
            href="https://yoomoney.ru/to/4100117344808631"
            target="_blank"
            class="donation-page__link"
          >
            <Icon
              id="yoomoney-icon"
              width="5"
              height="5"
              class="donation-page__item-icon"
            />
            <span>Юmoney</span>
          </a>
        </li>
        <li class="donation-page__item">
          <a href="https://www.buymeacoffee.com/crossfox" target="_blank">
            <img
              src="https://cdn.buymeacoffee.com/buttons/default-yellow.png"
              alt="Buy Me A Coffee"
              height="40"
              width="174"
              class="donation-page__buy"
            />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.donation-page {
  &__desc {
    margin: 3rem 0;
  }

  &__item {
    margin-top: 3rem;
  }

  &__buy {
    width: 17.4rem;
    height: 4rem;
    border-radius: 0.5rem;
  }

  &__link {
    display: flex;
    align-items: center;

    span {
      color: #fff;
    }
  }

  &__item-icon {
    margin-right: 1rem;
  }
}
</style>
