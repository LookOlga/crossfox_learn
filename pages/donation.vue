<template>
    <div class="donation-page page">
        <section>
            <div class="page__section-heading">
                <Icon id="donut-icon" width="40" height="40" class="page__heading-icon" />
                <h2 class="page__title text-h2 font-weight-bold">Поддержите наш проект!</h2>
            </div>
            <p class="donation-page__desc">
                Наша миссия нести пользу в этот мир и сообщество разработчиков, поэтому мы создали платформу, которая будет
                помогать новичкам во фронтенде.
            <p class="donation-page__desc">
                Будем рады вашей поддержке!
                Вы можете внести пожертвование одним из предложенных ниже способов.
            </p>
            <ul class="donation-page__links">
                <li class="donation-page__item">
                    <a href="https://yoomoney.ru/to/4100117344808631" target="_blank" class="donation-page__link">
                        <Icon id="yoomoney-icon" width="35" height="35" class="donation-page__item-icon" />
                        <span>Юmoney</span>
                    </a>
                </li>
                <li class="donation-page__item">
                  <a href="https://www.buymeacoffee.com/crossfox" target="_blank">
                    <img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174" class="donation-page__buy">
                  </a>

                    <!-- <a
                    class="buyButton"
                    target="_blank"
                    href="https://www.buymeacoffee.com/crossfox"
                    >
                    <img
                    class="coffeeImage"
                    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
                    alt="Buy me a coffee"
                    />
                    <span className="coffeeButtonText">Buy me a coffee</span>
                    </a> -->
                   
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
   
    mounted() {
    const buyMeACoffee = document.createElement("script");
    buyMeACoffee.setAttribute(
      "src",
      "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
    );
    buyMeACoffee.setAttribute(
      "type",
      "text/javascript"
    );
    buyMeACoffee.setAttribute(
      "data-name",
      "bmc-button"
    );
    buyMeACoffee.setAttribute(
      "data-slug",
      "crossfox"
    );
    buyMeACoffee.setAttribute(
      "data-color",
      "#FFDD00"
    );
    buyMeACoffee.setAttribute(
      "data-emoji",
      ""
    );
    buyMeACoffee.setAttribute(
      "data-font",
      "Cookie"
    );
    buyMeACoffee.setAttribute(
      "data-text",
      "Buy me a coffee"
    );
    buyMeACoffee.setAttribute(
      "data-outline-color",
      "#000000"
    );
    buyMeACoffee.setAttribute(
      "data-font-color",
      "#000000"
    );
    buyMeACoffee.setAttribute(
      "data-coffee-color",
      "#ffffff"
    );
    document.head.appendChild(buyMeACoffee);
  },
}
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

.buyButton {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  background-color: #6200ea;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.5rem;
  font-size: 1rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  font-family: cursive;
}
.buyButton:hover,
.buyButton:active,
.buyButton:focus {
  text-decoration: underline;
  box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
  opacity: 0.85;
  color: #ffffff;
}

.coffeeImage {
  width: 3.5rem;  
  height: 3.5rem;
  box-shadow: none;
  border: none;
  vertical-align: middle;
  margin-right: 1rem;
}

.coffeeButtonText {
  vertical-align: middle;
}
</style>
