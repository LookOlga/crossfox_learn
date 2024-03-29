<template>
  <v-app :class="{ 'paddingLeft': isDesktop }">
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" fixed :hide-overlay="overlay" color="#000"
          style="min-height: 100vh" width="290">
          <v-list>
            <v-list-item class="d-flex justify-space-between align-center pl-2 pr-2">
              <v-list-item-action>
                <v-app-bar-nav-icon color="white" v-if="isDesktop" />
              </v-list-item-action>
              <v-list-item-content class="justify-end">
                <v-btn icon max-width="30" min-width="30" height="30" v-if="isDesktop">
                  <v-icon @click.stop="mini = !mini" size="30">mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn icon max-width="30" min-width="30" height="30" v-if="!isDesktop">
                  <v-icon @click.stop="drawer = false" size="30">mdi-chevron-left</v-icon>
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-for="(item, i) in items" :key="i" link :to="item.to" router exact color="deep-purple lighten-5"
              class="pl-2 pr-2" :class="{'soon': item.soon}">
              <v-list-item-action style="min-width: 36px" class="justify-center">
                <Icon :id="item.id" class="menu-icon" />
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" class="menu-title" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
    <v-app-bar :clipped-left="clipped" fixed flat color="#121212" :class="{ 'paddingLeft': isDesktop }">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" /> -->
      <v-app-bar-nav-icon color="white" v-if="!isDesktop" @click.stop="drawer = true" />
      <nuxt-link to="/" class="logo">
        <h1 class="logo__title">CrossFox</h1>
      </nuxt-link>
      <v-spacer />
      <a href="https://instagram.com/crossfox_learn" class="instagram-link">
        <Icon id="instagram-icon" class="instagram-icon icon" width="2" height="2" />
      </a>
    </v-app-bar>
    <v-main class="pt-5">
      <v-container>
        <Nuxt />
        <!-- <div class="donat isDesktop">
          <NuxtLink to="/donation" class="donat__link">
            <img src="../static/home_page/donat.jpg" alt="donat" class="donat__img" />
            <div class="donat__label">Поддержи проект!</div>
          </NuxtLink>
        </div> -->
      </v-container>
    </v-main>

    <v-footer class="d-flex justify-space-between" flat color="#121212" :clipped-left="clipped">
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <a href="https://www.freepik.com/free-vector/doughnut-planet-flat-cartoon-style_12312308.htm#query=donut&position=13&from_view=keyword"
        class="license-link isDesktop" target="_blank">Image by catalyststuff</a>
    </v-footer>
    <SvgIcons />
  </v-app>
</template>

<script>
import "highlight.js/styles/rainbow.css";
import SvgIcons from "~/components/Icons/SvgIcons";
import Icon from "~/components/Icons/Icon";
export default {
  name: "DefaultLayout",
  components: {
    SvgIcons,
    Icon,
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      overlay: true,
      isDesktop: true,
      items: [
        {
          id: "javascript-icon",
          title: "JavaScript тест",
          to: "/js-test",
        },
        {
          id: "javascript-icon",
          title: "JavaScript вопросы",
          to: "",
          soon: true
        },
        {
          id: "book-icon",
          title: "Книги",
          to: "/books",
        },
        {
          id: "donut-icon",
          title: "Поддержать проект",
          to: "/donation",
        },
      ],
      mini: true,
      right: true,
      rightDrawer: false,
      title: "CrossFox",
    };
  },
  computed: {
    temporary() {
      if (!this.isDesktop) this.drawer = false;
      return !this.isDesktop;
    }
  },
  watch: {
    isDesktop(val) {
      if (val) {
        console.log(val)
        this.mini = true;
        this.drawer = true;
      } else {
        this.mini = false;
        this.drawer = false;
      }
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
    })
  },
};
</script>

<style lang="scss">
html {
  font-size: 10px;
  -webkit-tap-highlight-color: transparent;
  
  @media (max-width: 768px) {
      font-size: 1.3vw;
    }

  @media (max-width: 480px) {
    font-size: 2.5vw;
  }

  @media (min-width: 1921px) {
    font-size: 0.42vw;
  }
}

body {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 300;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding-left: 0 !important;
}

.isDesktop {
  display: block;
}

.isMobile {
  display: none;
}

@media (max-width: 1024px) {
  .isDesktop {
    display: none;
  }

  .isMobile {
    display: block;
  }
}

.logo {
  &__title {
    font-family: "Montserrat", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
  }
}

.menu-icon {
  width: 2.4rem;
  height: 2.4rem;
}

.v-list-item__title.menu-title {
  font-size: 1.5rem;
  font-weight: 400;
}

.container {
  padding: 0 2rem !important;
  max-width: 120rem !important;

  @media (min-width: 1904px) {
    max-width: 130rem;
  }
}

// .v-main {
//    background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
// }

.theme--dark.v-application code[class] {
  background-color: #000;
  color: #f8f8f8;
  padding: 2rem;
}

.page {
  padding: 8rem 0 5rem;

  &__title {
    font-size: 3rem;
  }

  &__block {
    margin-bottom: 7rem;
  }

  &__block-title {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }

  &__section-heading {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
  }

  &__heading-icon {
    margin-right: 2rem;
  }

  &__item {
    margin-bottom: 2rem;
  }

  &__item-link {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2;
    color: #fff !important;
    padding-bottom: 0.5rem;
    border-bottom: 0.1rem dashed #fff;
  }

  @media (min-width: 1921px) {
    padding: 5rem 0;
  }
}

.donat {
  width: 10rem;
  height: 10rem;

  @media (min-width: 1024px) {
    position: fixed;
    right: 0;
    bottom: 10rem;
    z-index: 10;

    &__link {
      display: block;

      &:hover {
        .donat__img {
          box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
            rgba(240, 46, 170, 0.3) -10px 10px,
            rgba(240, 46, 170, 0.2) -15px 15px,
            rgba(240, 46, 170, 0.1) -20px 20px,
            rgba(240, 46, 170, 0.05) -25px 25px;
        }
      }
    }
  }

  &__img {
    border-radius: 0.5rem;
    transition: box-shadow 0.2s;
  }

  &__label {
    font-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
  }
}

.license-link {
  font-size: 0.8rem;
  color: #fff !important;
}

.paddingLeft {
  padding-left: 5.6rem;
}

.soon {
  .v-list-item__content {
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: -5px;
    width: 6.5rem;
    height: 3rem;
    background: url('../static/icons/soon_ru.svg') center center/contain no-repeat;
    transform: translateY(-50%);
    z-index: 5;
  }
 }
}

.v-application {
    font-family: $body-font-family, sans-serif !important;
    line-height: 1.6;
    .text-h2, .text-h3, .text-h4, .text-h5, .text-h6 { 
        font-family: $body-font-family, sans-serif !important;
     }
  }


/* buttons ===== START ===== */


.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 20rem;
    padding: 1.2rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
   
}

.btn--primary {
    background-color: #6200ea;
    color: #fff !important;
}

.btn--disabled {
    background: rgba(#fff, 0.3);
    color: #ccc;
}

.lightbox-is-opened {
    opacity: 1;
    transform: scale(1);
    border-bottom-left-radius: 0;
    pointer-events: auto;
}

.arrow-left, .arrow-right {
    svg {
        width: 3rem;
        height: 4.5rem;
        color: #fff;
    }
}

.btn-close {
    svg {
        width: 2.4rem;
        height: 2.4rem;
        color: #fff;
    }
}

.btn-test {
  @media(max-width: 480px) {
    height: 4.5rem;
  }
}
/* buttons ===== END ===== */


.zoom-icon {
    width: 4rem;
    height: 4rem;
}

.instagram-icon, .zoom-icon {
    color: #fff;
}

.icon {
    @media(any-hover: hover) {
        &:hover {
            color: #6200ea;
        }
    }
}

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
}
</style>