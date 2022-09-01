<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="#1e1e1e"
      style="max-height:100vh"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="deep-purple lighten-5"
        >
          <v-list-item-action>
            <Icon :id="item.id"
                  class="menu-icon"
                  width="30"
                  height="30"
             />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="menu-title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      flat
      color="#121212"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white"/>
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon color="white">mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <nuxt-link to="/" class="logo">
        <h1 class="logo__title">CrossFox</h1>
      </nuxt-link>

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
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <SvgIcons />
  </v-app>
</template>

<script>
import 'highlight.js/styles/rainbow.css'
import SvgIcons from '~/components/Icons/SvgIcons';
import Icon from '~/components/Icons/Icon';
export default {
  name: 'DefaultLayout',
  components: {
    SvgIcons,
    Icon
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          id: 'javascript-icon',
          title: 'JavaScript тест',
          to: '/js-test'
        },
        {
          id: 'javascript-icon',
          title: 'JavaScript вопросы',
          to: '/js-questions'
        },
        {
          id: 'book-icon',
          title: 'Книги',
          to: '/books'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'CrossFox'
    }
  }
}
</script>

<style lang="scss">
  html {
    font-size: 10px;
  }

  body {
    font-family: 'Montserrat', sans-serif;
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
      font-family: 'Montserrat', sans-serif;
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
    font-size: 2rem;
    font-weight: 400;
  }

  .container {
    padding: 0 30px;
    height: 100%;
    @media (min-width: 1904px) {
      max-width: 1400px;
    }
  }

  // .v-main {
  //    background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);
  // }

 .theme--dark.v-application code[class]{
   background-color: #000;
   color: #f8f8f8;
   padding: 2rem;
}

.page {
  padding: 5rem 0 10rem;

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

</style>