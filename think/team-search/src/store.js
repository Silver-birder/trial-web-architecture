import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const state = {
    keyword: '',
    hitItems: []
};
const actions = {
    setKeyword(context, payload) {
        context.commit('setKeyword', payload.keyword);
    },
    searchKeyword(context) {
        context.commit('searchKeyword');
    },
};

const getters = {};

const mutations = {
    searchKeyword(state) {
        const mockData = [{id: 1, name: 'apple'}, {id: 2, name: 'banana'}, {id: 3, name: 'orange'}];
        state.hitItems = mockData.filter((data) => {
            return data.name.match(new RegExp(state.keyword)) !== null;
        });
        if (process.browser) {
            window.channel.search.publish({
                topic: "search.word",
                data: {
                    items: state.hitItems
                }
            });
        }
    },
    setKeyword(state, keyword) {
        state.keyword = keyword;
    }
};

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})