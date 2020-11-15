export const UserModule = {
    namespaced: true,

    state: {
      user: null
    },

    // functions that affect the state
    mutations: {
      SET_USER(state, user) {
        state.user = user;
      }
    },

    // functions that call mutations from the code
    actions: {
      setUser({ commit }, user) {
        commit("SET_USER", user);
      }
    },
}