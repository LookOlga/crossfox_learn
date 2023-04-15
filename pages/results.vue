<template>
    <div class="page">
        <TestResults
        :quantityOfWrong="quantityOfWrongAnswers"
        :questionsCount="10"
        />
        <div v-if="wrongAnswers.length">
            <h3 class="mt-10">Вопросы, в которых вы допустили ошибки:</h3>
            <TestMistake v-for="question in wrongAnswers" :key="question.id" :question="question"/>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import TestResults from "~/components/js-test/TestResults.vue";
import TestMistake from "~/components/js-test/TestMistake.vue";

export default {
    name: "Results",
    components: {TestResults, TestMistake},
    computed: {
        ...mapGetters("results", [
            'quantityOfWrongAnswers',
            'wrongAnswers'
        ]),
        ...mapGetters("test", {
            total: 'quantityOfQuestions',
        })
    }
}
</script>