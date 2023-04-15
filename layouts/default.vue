<template>
  <v-app :class="{'paddingLeft': isDesktop}">
    <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant.sync="mini"
          fixed
          :temporary="temporary"
          :hide-overlay="overlay"
          color="#000"
          style="min-height: 100vh"
        >
          <v-list>
            <v-list-item
              class="d-flex justify-space-between align-center pl-2 pr-2"
            >
              <v-list-item-action >
                <v-app-bar-nav-icon color="white"  v-if="isDesktop"/>
              </v-list-item-action>
              <v-list-item-content class="justify-end">
                <v-btn icon max-width="30" min-width="30" height="30" v-if="isDesktop">
                  <v-icon @click.stop="mini = !mini" size="30"
                    >mdi-chevron-left</v-icon
                  >
                </v-btn>
                <v-btn icon max-width="30" min-width="30" height="30" v-if="!isDesktop">
                  <v-icon @click.stop="drawer = false" size="30"
                    >mdi-chevron-left</v-icon
                  >
                </v-btn>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              link
              :to="item.to"
              router
              exact
              color="deep-purple lighten-5"
              class="pl-2 pr-2"
            >
              <v-list-item-action
                style="min-width: 36px"
                class="justify-center"
              >
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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      flat
      color="#121212"
      :class="{'paddingLeft': isDesktop}"
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white" /> -->
      <v-app-bar-nav-icon color="white" v-if="!isDesktop" @click.stop="drawer = true"/>
      <!-- <v-btn
        icon
        @click.stop="rail = !rail"
      >
        <v-icon color="white">mdi-{{ `chevron-${rail ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <nuxt-link to="/" class="logo">
        <h1 class="logo__title">CrossFox</h1>
      </nuxt-link>
      <v-spacer />
      <a href="https://instagram.com/crossfox_learn" class="instagram-link">
        <Icon
          id="instagram-icon"
          class="instagram-icon icon"
          width="20"
          height="20"
        />
      </a>
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
        <div class="donat">
          <a
            href="https://yoomoney.ru/to/4100117344808631"
            class="donat__link"
            target="_blank"
          >
            <img
              src="../static/home_page/donat.jpg"
              alt="donat"
              class="donat__img"
            />
            <div class="donat__label">Поддержи проект!</div>
          </a>
        </div>
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-footer
      class="d-flex justify-space-between"
      flat
      color="#121212"
      :clipped-left="clipped"
    >
      <div>
        <span>&copy; {{ new Date().getFullYear() }}</span>
        <a
          href="https://www.freepik.com/free-vector/doughnut-planet-flat-cartoon-style_12312308.htm#query=donut&position=13&from_view=keyword"
          class="license-link"
          target="_blank"
          >Image by catalyststuff</a
        >
      </div>
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
          to: "/js-questions",
        },
        {
          id: "book-icon",
          title: "Книги",
          to: "/books",
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
      if(!this.isDesktop) this.drawer = false;
      return !this.isDesktop;
    }
  },
  watch: {
   isDesktop(val) {
      console.log(val)
      if(val) {
        this.mini = true;
      } else {
        this.mini = false;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if( window.innerWidth > 600) {
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
  @media (max-width: 768px) {
    font-size: 1vw;
  }
  @media (max-width: 480px) {
    font-size: 2vw;
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
  width: 24px;
  height: 24px;
}

.v-list-item__title.menu-title {
  font-size: 1.5rem;
  font-weight: 400;
}

// .container {
//   padding: 0 30px;
//   height: 100%;
//   @media (min-width: 1904px) {
//     max-width: 1400px;
//   }
// }

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
    padding-bottom: 5px;
    border-bottom: 1px dashed #fff;
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
    border-radius: 5px;
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
  font-size: 10px;
  color: #fff !important;
}

.paddingLeft {
  padding-left: 56px;
}
</style>