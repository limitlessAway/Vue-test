import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        name: "Theme 1",
        children: [
          { id: 2, name: "Doc 1" },
          { id: 3, name: " Doc 2" },
          { id: 4, name: "Doc 3" }
        ],
        parent: "1"
      },
      {
        id: 5,
        name: "Theme 2",
        children: [
          {
            id: 6,
            name: "Doc 4 "
          },
          {
            id: 10,
            name: "Doc 5"
          }
        ]
      },
      {
        id: 15,
        name: "Theme 3",
        children: [
          { id: 16, name: "Doc 6" },
          { id: 17, name: "Doc 7" },
          { id: 18, name: "Doc 8" },
        ],
      },
    ]
  },
  mutations: {
    createTheme(state: any, theme: any) {
      state.items.unshift(theme);
    },
  },
  getters: {
    items(state: any) {
      return state.items;
    }
  },
});
