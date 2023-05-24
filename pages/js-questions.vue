<template>
  <div class="page questions-page">
    <h2 class="page__title">Вопросы и ответы к собеседованию по JavaScript</h2>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in items" :key="i">
        <v-expansion-panel-header class="questions-page__quest-title pa-6">
          <div v-html="`${i + 1}. ${item.question}`"></div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-html="item.answer" class="questions-page__answer"></div>
          <highlightjs
            class="mb-3"
            v-if="item.code"
            language="javascript"
            :code="item.code"
          />
          <div v-if="item.images" class="questions-page__images">
            <div
              class="questions-page__img-wrapper"
              v-for="(img, i) in item.images"
              :key="'img' + i"
            >
              <img :src="img" alt="" @click="openLightbox(item.images, i)" />
              <Icon
                id="magnifier-icon"
                class="questions-page__img-zoom zoom-icon"
              />
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <Lightbox :class="{ 'lightbox-is-opened': lightboxIsOpened }" />
  </div>
</template>

<script>
// import questions from "../questions.json";
import Lightbox from "~/components/Lightbox";
import Icon from "~/components/Icons/Icon";
export default {
  name: "JsQuestions",
  components: { Lightbox, Icon },
  data() {
    return {
      items: questions,
    };
  },
  methods: {
    openLightbox(images, ind) {
      this.$store.commit("openLightbox", images);
      this.setCurrentImageIndex(ind);
    },
    setCurrentImageIndex(ind) {
      this.$store.commit("setCurrentImageIndex", ind);
    },
  },
  computed: {
    lightboxIsOpened() {
      return this.$store.state.lightboxIsOpened;
    },
  },
};
</script>

<style lang="scss">
.questions-page {
  &__quest-title.v-expansion-panel-header {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.6;
  }

  &__images {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
  }

  &__img-zoom {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4rem;
    height: 4rem;
    transform: translate(-50%, -50%);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    transition: opacity 0.2s;
  }

  &__img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3 - 2rem);
    margin: 1rem;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.6);
      opacity: 0;
      z-index: 1;
      pointer-events: none;
      transition: opacity 0.2s;
    }

    &:hover {
      &::before,
      .questions-page__img-zoom {
        opacity: 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__answer {
    p {
      margin: 1.5rem 0 !important;
    }

    span {
      font-weight: 700;
    }

    h3,
    li {
      margin-bottom: 2rem;
    }

    h4 {
      margin-bottom: 1rem;
    }

    h3 {
      margin-top: 2rem;
    }

    h3,
    h4,
    b {
      color: #cba67a;
    }

    // em {
    //   padding: 0 6px;
    // }

    div {
      border-radius: 0.5rem;
      border: 0.2rem solid #cba67a;
      padding: 2rem;
      background-color: #424242;
      font-weight: 400;
    }

    code {
      display: block;
      margin: 0.5rem 0;
    }
  }
}
</style>