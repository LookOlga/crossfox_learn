const state = () => ({
    wrongAnswers: [],
})
  
const getters = {
    quantityOfWrongAnswers(state) {
        return state.wrongAnswers.length;
    },
    wrongAnswers(state) {
        return state.wrongAnswers;
    }
}

const mutations = {
    addWrongAnswer(state, item) {
        state.wrongAnswers.push(item);
    },
    clearResults(state) {
        state.wrongAnswers = [];
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations
}