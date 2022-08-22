export const state = () => ({
    wrongAnswers: [],
})
  
export const getters = {
    score(state) {
        return state.wrongAnswers.length;
    }
}

export const mutations = {
    addWrongAnswer(state, item) {
        state.wrongAnswers.push(item);
    },
    clearResults(state) {
        state.wrongAnswers = [];
    }
}

export const actions = {

}