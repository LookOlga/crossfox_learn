<template>
  <div>
    <div class="test-page page">
      <h2 class="test-page__title page__title text-h2 font-weight-bold mb-8">
        Тест на знание JavaScript
      </h2>
      <div class="test-page__content" v-if="!showResults">
        <div class="test-page__count d-flex align-center mb-8">
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
              ><v-icon> mdi-chat-alert-outline</v-icon>
            </v-btn>
          </div>
        </v-card>
        <button
          class="mt-5 pa-2 btn quest__btn quest__btn--answer"
          :disabled="disabled"
          :class="disabled ? 'disabled' : 'active'"
          @click="checkAnswer"
        >
          Ответить
        </button>
        <button
          class="mt-5 pa-2 btn quest__btn quest__btn--next"
          @click="nextQuestion"
          :disabled="disabledNext"
          :class="disabledNext ? 'disabled' : 'active'"
        >
          {{ isLastQuest ? "Закончить тест" : "Следующий вопрос" }}
        </button>
      </div>
      <TestResults
        v-if="showResults"
        :score="score"
        :questionsCount="questions.length"
      />
    </div>
    <Explanation
      :text="currentQuestExplanation"
      :topics="currentQuestTopics"
      @closeExplanation="closeExplanation"
      :class="{ 'explanation-is-visible': explanationIsVisible }"
    />

    <!-- <v-card class="quest pa-4" v-for="(q, i) in questions" :key="i">
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
import testQuestions from "../testQuestions.json";
import TestResults from "~/components/js-test/testResults.vue";
import Explanation from "~/components/js-test/Explanation.vue";
export default {
  name: "DefaultLayout",
  components: {
    SvgIcons,
    Icon,
    TestResults,
    Explanation,
  },
  data() {
    return {
      questions: testQuestions.items,
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
      showResults: false,
    };
  },
  methods: {
    onChooseAnswer(ind) {
      this.ansIndex = ind;

      if (this.userAnswer) {
        this.disabled = false;
      }
    },
    nextQuestion() {
      if (!this.isLastQuest) {
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
      } else {
        this.showResults = true;
      }
    },
    checkAnswer() {
      this.blockAnswers = true;
      setTimeout(() => {
        if (this.userAnswer === this.rightAnswer) {
          this.rightAnswerIndex = this.currentQuest.answersList.indexOf(
            this.userAnswer
          );
          this.disabledNext = false;
        } else {
          this.wrongAnswerIndex = this.currentQuest.answersList.indexOf(
            this.userAnswer
          );
          this.ansIndex = null;
          setTimeout(() => {
            this.rightAnswerIndex = this.currentQuest.answersList.indexOf(
              this.rightAnswer
            );
            this.isWrong = true;
            this.$store.commit("addWrongAnswer", {
              topic: this.currentQuest.topic,
              links: this.currentQuest.links,
            });
            setTimeout(() => {
              this.disabledNext = false;
            }, 900);
          }, 1100);
        }
      }, 500);
    },
    openExplanation() {
      this.explanationIsVisible = true;
    },
    closeExplanation() {
      this.explanationIsVisible = false;
    },
  },
  computed: {
    currentQuest() {
      return this.questions[this.index];
    },
    currentQuestExplanation() {
      if (!this.isLast) {
        return this.currentQuest.explanation;
      }
    },
    currentQuestTopics() {
      return this.currentQuest.topics;
    },
    shuffledAnswers() {
      return this.currentQuest.answersList.sort(() => Math.random() - 0.5);
    },
    rightAnswer() {
      return this.questions[this.index].rightAnswer;
    },
    isLastQuest() {
      return this.index === this.questions.length - 1;
    },
    score() {
      return this.$store.getters.score;
    },
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

  &__answers {
    position: relative;
  }

  &__exp-btn {
    position: absolute;
    top: -75px;
    right: 0;
    transition: all 0.33s ease-in-out;
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

.explanation-is-visible {
  opacity: 1;
  transform: scale(1);
  border-bottom-left-radius: 0;
  pointer-events: auto;
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
