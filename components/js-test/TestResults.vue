<template>
    <div class="test-results">
        <h2>Вы закончили тест!</h2>
        <p>Ваш результат: {{questionsCount - score}} / {{questionsCount}}</p>
        <button
          class="mt-5 pa-2 btn btn--primary"
          @click="startTest"
        >
           Пройти тест снова
        </button>
    </div>
</template>

<script>
    export default {
        name: 'test-results',
        props: ['score', 'questionsCount'], 
        methods: {
            startTest() {
                this.$store.commit('clearResults');
                this.$router.go('js-test');
            }
        }
    }
</script>