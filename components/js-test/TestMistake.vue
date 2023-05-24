<template>
  <div class="test-mistake mt-5 mb-5">
    <v-card class="quest pa-4">
      <h3 class="quest__title mb-3">{{ question.question }}</h3>
      <highlightjs
        class="quest__code mb-3"
        v-if="question.code"
        language="javascript"
        :code="question.code"
      />
      <p class="mt-5 explanation-text" v-html="question.explanation"></p>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TestMistake",
  props: ["question"],
};
</script>
