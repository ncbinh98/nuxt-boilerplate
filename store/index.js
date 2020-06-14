import * as api from "../services/testAPI"

export const state = () => ({
  loading: false,
  error: null,
  locale: "en",
  listLocales: ["en", "vi"],
})

export const getters = {
  getLoading: (state) => state.loading,
  getError: (state) => state.error,
  getLocale: (state) => state.locale,
  getListLocales: (state) => state.listLocales,
}

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  setLocale(state, payload) {
    state.locale = payload
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, { app, req }) {
    console.log(app)
    console.log("oh?")
  },
  async changeLocale({ state, commit, dispatch }, payload) {
    //  Dosth here please
    commit("setLocale", payload)
  },

  async getTests({ state, commit }, payload) {
    console.log(await api.getTests(this))
  },
}
