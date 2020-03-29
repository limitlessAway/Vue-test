import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    createTheme(state: any, theme: any) {
      state.items.unshift(theme);
    },
    addItems(state: any, items: any[]) {
      state.items = items;
    }
  },
  getters: {
    items(state: any) {
      return state.items;
    }
  },
});
