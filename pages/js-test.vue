<template>
  <div>
    <div v-if="isLoading">Loading...</div>

    <div class="test-page page" v-else>
      <h2 class="test-page__title page__title mb-5">
        Тест на знание JavaScript
      </h2>

      <div class="test-page__content">
        <div class="test-page__count d-flex align-center mb-3">
          <h3 class="test-page__subtitle mr-3">Вопросы:</h3>
          <div class="test-page__num">
            <span>{{ index + 1 }}</span>
            <span>&frasl;</span>
            <span>{{ questions.length }}</span>
          </div>
        </div>
        <v-card class="quest pa-4" :key="currentQuest.id">
          <h3 class="quest__title mb-3">{{ currentQuest.question }}</h3>
          <highlightjs
            class="quest__code mb-3"
            v-if="currentQuest.code"
            language="javascript"
            :code="currentQuest.code"
          />
          <div class="quest__answers">
            <div
              class="quest__ans pa-3"
              v-for="(ans, ind) in shuffledAnswers"
              :key="ind"
              :class="{
                'is-picked': ansIndex === ind,
                'is-blocked': blockAnswers,
                'is-right': ind === rightAnswerIndex,
                'is-wrong': ind === wrongAnswerIndex,
              }"
            >
              <label :for="ans">{{ ans }}</label>
              <input
                type="radio"
                :id="ans"
                v-model="userAnswer"
                :value="ans"
                @change="onChooseAnswer(ind)"
                @focus="onFocusAnswer(ans, ind)"
              />
            </div>
            <v-btn
              fab
              color="#6200ea"
              x-large
              class="quest__exp-btn"
              :class="{ active: isWrong }"
              data-desc="Прочитай объяснение"
              v-if="isWrong"
              @click="openExplanation"
            >
              <v-icon> mdi-chat-alert-outline</v-icon>
            </v-btn>
          </div>
        </v-card>
        <button
          class="mt-5 pa-2 btn quest__btn quest__btn--answer"
          type="button"
          :disabled="disabled"
          :class="disabled ? 'disabled' : 'active'"
          @click.prevent="confirmAnswer(currentQuest.id)"
        >
          Ответить
        </button>
        <button
          class="mt-5 pa-2 btn quest__btn quest__btn--next"
          type="button"
          @click="nextQuestion"
          :disabled="disabledNext"
          :class="disabledNext ? 'disabled' : 'active'"
          @keyup.right="nextQuestion"
        >
          {{ isLastQuest ? "Посмотреть результаты" : "Следующий вопрос" }}
        </button>
      </div>
    </div>
    <Explanation
      :text="currentQuestExplanation"
      :topics="currentQuestTopics"
      @closeExplanation="closeExplanation"
      :class="{ 'explanation-is-visible': explanationIsVisible }"
    />

    <!-- <v-card class="quest pa-4" v-for="(q, i) in items" :key="i">
      <h3 class="quest__title mb-3">{{ q.question }}</h3>
      <highlightjs
        class="quest__code mb-3"
        v-if="q.code"
        language="javascript"
        :code="q.code"
      />
      <div v-html="q.explanation"></div>
      <span v-for="(t, i) in q.topics" :key="'t' + i"
        ><a :href="t.link" target="_blank">{{ t.name }}</a></span
      >
    </v-card> -->
  </div>
</template>

<script>
import SvgIcons from "~/components/Icons/SvgIcons";
import Icon from "~/components/Icons/Icon";
import TestResults from "~/components/js-test/TestResults.vue";
import Explanation from "~/components/js-test/Explanation.vue";
import { mapState } from "vuex";
import tests from "../tests.json";

export default {
  name: "JsTest",
  components: {
    SvgIcons,
    Icon,
    TestResults,
    Explanation,
  },
  data() {
    return {
      index: 0,
      ansIndex: null,
      rightAnswerIndex: null,
      wrongAnswerIndex: null,
      disabled: true,
      disabledNext: true,
      userAnswer: "",
      blockAnswers: false,
      isWrong: false,
      explanationIsVisible: false,
      items: tests,
    };
  },
  computed: {
    ...mapState("test", {
      questions: (state) => state.questions,
      isLoading: (state) => state.isLoading,
      rightAnswer: (state) => state.rightAnswer,
    }),
    currentQuest() {
      return this.questions[this.index];
    },
    currentQuestExplanation() {
      if (this.currentQuest && this.currentQuest.explanation) {
        return this.currentQuest.explanation;
      }
    },
    currentQuestTopics() {
      if (this.currentQuest && this.currentQuest.topics) {
        return this.currentQuest.topics;
      }
    },
    shuffledAnswers() {
      const answers = [...this.currentQuest.answersList];
      return answers.sort(() => Math.random() - 0.5);
    },
    // rightAnswer() {
    //   return this.questions[this.index].rightAnswer;
    // },
    isLastQuest() {
      return this.index === this.questions.length - 1;
    },
  },
  created() {
    this.$store.dispatch("test/startNewTest");
  },
  mounted() {
    window.addEventListener("keydown", (e) => {
      const keyName = e.key;
      console.log(keyName);
      this.onHandleKeyboard(keyName);
    });
  },
  // destroyed() {
  //   window.removeEventListener('keydown', this.onHandleKeyboard);
  // },
  methods: {
    onHandleKeyboard(key) {
      if (!this.disabled) {
        if (key === "Enter") {
          this.confirmAnswer(this.currentQuest.id);
        }
      }

      if(!this.disabledNext && key === "ArrowRight") {
          this.nextQuestion();
      } 
    
      // if (key === "Tab") {
      //   let index = 0;
      //   this.onChooseAnswer(index);
      // }
    },
    onFocusAnswer(answer, index) {
      this.userAnswer = answer;
      this.onChooseAnswer(index);
      console.log(this.userAnswer);
    },
    onChooseAnswer(ind) {
        this.ansIndex = ind;

        if (this.userAnswer) {
          this.disabled = false;
        }
    },
    nextQuestion() {
      if (this.isLastQuest) {
        this.$router.push("/results");
      }
      this.index++;
      this.disabled = true;
      this.disabledNext = true;
      this.userAnswer = "";
      this.ansIndex = null;
      this.rightAnswerIndex = null;
      this.wrongAnswerIndex = null;
      this.isWrong = false;
      setTimeout(() => {
        this.blockAnswers = false;
      }, 100);
    },
    confirmAnswer(id) {
      this.$store.dispatch("test/sendAnswer", id);
      this.disabled = true;
      this.checkAnswer();
    },
    checkAnswer() {
      this.blockAnswers = true;
      setTimeout(() => {
        if (this.userAnswer === this.rightAnswer) {
          this.rightAnswerIndex = this.shuffledAnswers.indexOf(this.userAnswer);
          this.disabledNext = false;
        } else {
          this.wrongAnswerIndex = this.shuffledAnswers.indexOf(this.userAnswer);
          this.ansIndex = null;
          setTimeout(() => {
            this.rightAnswerIndex = this.shuffledAnswers.indexOf(
              this.rightAnswer
            );
            this.isWrong = true;
            this.$store.commit("results/addWrongAnswer", this.currentQuest);
            setTimeout(() => {
              this.disabledNext = false;
            }, 1000);
          }, 1300);
        }
      }, 800);
    },
    openExplanation() {
      this.explanationIsVisible = true;
    },
    closeExplanation() {
      this.explanationIsVisible = false;
    },
    // async getQuestions() {
    //  try {
    //   this.isLoading = true;
    //   const data = await this.$axios.$get('/test/new');

    //   this.questions = data;

    //   console.log(this.questions)
    //   this.isLoading = false;
    //  } catch (error) {
    //    console.log(error)
    //  }
    // }
  },
};
</script>

<style lang="scss">
.test-page {
  max-width: 800px;
  margin: 0 auto;
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__subtitle {
    font-size: 2.4rem;
    font-weight: 500;
  }

  &__num {
    display: flex;
    span {
      font-size: 2rem;
      margin: 1rem;
    }
  }
}

.quest {
  &__title {
    font-size: 1.8rem;
    font-weight: 500;
  }

  &__code {
    position: relative;
  }

  &__exp-btn {
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.33s ease-in-out;
    // @media (max-width: 769px) {
    //   right: -30px;
    // }
    @media (min-width: 1024px) {
      &::after {
        content: attr(data-desc);
        position: absolute;
        top: 0;
        right: -100%;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 110px;
        background-color: #fafafa;
        color: #333;
        text-transform: lowercase;
        font-size: 12px;
        padding: 5px;
        border-radius: 10px;
        white-space: break-spaces;
        letter-spacing: 1px;
        transform: translate(25%, -25%);
      }
    }
  }

  &__exp-btn.active {
    animation: scale 1s alternate;
  }

  &__ans {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #333;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 12px;
    cursor: pointer;
    input {
      opacity: 0;
    }
    label {
      width: 100%;
      cursor: pointer;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__btn--answer.active,
  &__btn--next.active {
    position: relative;
    background-color: #6200ea;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      height: 100%;
      background-color: rgba(#8c9eff, 0.3);
      transform: translate(-50%, -50%);
      animation: spread 0.5s;
    }
  }
  &__btn.disabled {
    background: rgba(#fff, 0.3);
    color: #ccc;
    &:hover {
      animation: shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      perspective: 1000px;
    }
  }
}

.quest__ans.is-picked {
  background-color: #ff8f00;
}

.quest__ans.is-right {
  background-color: #4caf50;
}

.quest__ans.is-wrong {
  background-color: #f44336;
  animation: blinkRed 0.4s;
}

.quest__ans.is-blocked {
  pointer-events: none;
}

@keyframes spread {
  from {
    width: 0;
    border-radius: 50%;
  }
  to {
    width: 100%;
    border-radius: 5px;
  }
}

@keyframes blinkRed {
  0% {
    background-color: #f44336;
  }
  25% {
    background-color: #333;
  }
  50% {
    background-color: #f44336;
  }
  75% {
    background-color: #333;
  }
  100% {
    background-color: #f44336;
  }
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(1px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(2px, 0, 0);
  }
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(1);
  }
}
</style>
