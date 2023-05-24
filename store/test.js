const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'access-control-expose-Headers': '*',
    'Access-Control-Allow-Origin': '*',
}

const state = () => ({
    isLoading: false,
    questions: [],
    rightAnswer: null,
    error: null
})

const getters = {
    quantityOfQuestions(state) {
        return state.questions.length;
    }
}

const mutationTypes = {
    startNewTestStart: 'test/startNewTestStart',
    startNewTestSuccess: 'test/startNewTestSuccess',
    startNewTestFailure: 'test/startNewTestFailure',

    sendAnswerStart: 'test/sendAnswerStart',
    sendAnswerSuccess: 'test/sendAnswerSuccess',
    sendAnswerFailure: 'test/sendAnswerFailure'
}
const mutations = {
    [mutationTypes.startNewTestStart](state) {
        state.isLoading = true;
        state.rightAnswer = null;
    },
    [mutationTypes.startNewTestSuccess](state, payload) {
        state.isLoading = false;
        state.questions = payload;
    },
    [mutationTypes.startNewTestFailure](state) {
        state.isLoading = false;
    },
    [mutationTypes.sendAnswerStart](state) {

    },
    [mutationTypes.sendAnswerSuccess](state, answer) {
      
        state.rightAnswer = answer;
    },
    [mutationTypes.sendAnswerFailure](state) {
      
    }
}

const actions = {
    startNewTest({commit}) {
        return new Promise(resolve => {
            commit(mutationTypes.startNewTestStart);
            this.$axios.$get('/test/new')
            .then((data) => {
                commit(mutationTypes.startNewTestSuccess, data);
                resolve();
            })
            .catch(() => {
               commit(mutationTypes.startNewTestFailure);
            })
        })
    },
    sendAnswer({commit}, id) {
        return new Promise(resolve => {
            commit(mutationTypes.sendAnswerStart);
            this.$axios.$get(`/test/answer/${id}`)
            .then((data) => {
                commit(mutationTypes.sendAnswerSuccess, data.answer);
                resolve();
            })
            .catch((e) => {
               commit(mutationTypes.sendAnswerFailure);
            })
        })
    }
}

export default {
    state,
    getters,
    mutations,
    mutationTypes,
    actions
}