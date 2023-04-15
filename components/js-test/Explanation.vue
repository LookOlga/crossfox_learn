<template>
    <div class="explanation" @click.self="closeExplanation">
        <div class="explanation__dialog">
            <button class="explanation__close" @click="closeExplanation">
                <v-icon size="26">mdi-window-close</v-icon>
            </button>
            <div class="explanation__text explanation-text" v-html="text"></div>
            <div class="explanation__info" v-if="topics">
                <h3 class="explanation__subtitle">Полезные ссылки</h3>
                <ul>
                    <li v-for="(topic, i) in topics" :key="'topic' + i">
                        <a :href="topic.link" class="explanation__link" target="_blank">{{ topic.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['text', 'topics'],
        methods: {
            closeExplanation() {
                this.$emit('closeExplanation');
            }
        }
    }
</script>

<style lang="scss">
    .explanation {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(#000, 0.7);
        opacity: 0;
        transform: scale(0);
        transform-origin: top right;
        border-bottom-left-radius: 200%;
        pointer-events: none;
        transition: all 0.5s ease-in-out;
        &__dialog {
            position: relative;
            background-color: #222;
            max-width: 50rem;
            width: 100%;
            min-height: 40rem;
            border-radius: 5px;
            border-left: 5px solid #8b42ef;
            padding: 3rem;
        }

        &__text {
            margin-top: 5rem;
            p span {
                font-family: 'Roboto Mono' monospace;
                font-weight: 500;
                color: #a76cfa;
                margin: 0 3px;
            }
        }

        &__close {
            position: absolute;
            top: 2rem;
            right: 3rem;
        }

        &__info {
            margin-top: 3rem;
        }

        &__subtitle {
            margin-bottom: 1rem;
        }

        &__link {
            color: #fff !important;
            text-decoration: underline;
            transition: color 0.2s;
        }
    }

    .explanation-text {
            margin-top: 5rem;
            p span {
                font-family: 'Roboto Mono' monospace;
                font-weight: 500;
                color: #a76cfa;
                margin: 0 3px;
            }
        }

    .explanation-is-visible {
        opacity: 1;
        transform: scale(1);
        border-bottom-left-radius: 0;
        pointer-events: auto;
    }

</style>

