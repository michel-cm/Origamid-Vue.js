import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "Lobo",
    aulasCompletas: 10,
  },
  mutations: {
    CHANGE_USER(state, payload) {
      state.user = payload;
    },
    COMPLETAR_AULA(state) {
      state.aulasCompletas++;
    },
  },
});
