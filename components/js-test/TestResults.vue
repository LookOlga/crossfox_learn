<template>
    <div class="test-results">
        <h2>Вы закончили тест!</h2>
        <p class="mt-5 test-results__score">Ваш результат: <span class="ml-2">{{questionsCount - quantityOfWrong}} / {{questionsCount}}</span></p>
        <p class="mt-5 test-results__comment">{{resultComment}}</p>
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
        name: 'TestRsesults',
        props: ['quantityOfWrong', 'questionsCount'], 
        computed: {
            resultComment() {
                
                if(this.quantityOfWrong === 0) {
                    return 'Превосходный результат!';
                }
                if(this.quantityOfWrong <= 2) {
                    return 'Отлично, так держать! Еще немного и будет высокий результат.';
                }
                if(this.quantityOfWrong <= 4) {
                    return 'Хороший результат, но нужно немного подтянуть!';
                }
                if(this.quantityOfWrong <= 6) {
                    return 'Неплохой результат! Проведите работу над ошибками.';
                }
                if(this.quantityOfWrong <= 8) {
                    return 'Не все еще потеряно! Учите, учите и еще раз учите.';
                }
                if(this.quantityOfWrong <= this.questionsCount) {
                    return 'Вы где-то еще в начале пути изучения. Продолжайте свой путь не смторя ни на что!';
                }
                return ' ';
            }
        },
        methods: {
            startTest() {
                this.$store.commit('results/clearResults');
                this.$router.push('/js-test');
            }
        },
    }
</script>

<style lang="scss">
    .test-results {
        &__score {
            font-size: 2rem;
        }
    }
</style>